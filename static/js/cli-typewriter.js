/**
 * CliTypewriter - ASCII Art Typing Animation (3-Canvas Flex Layout)
 *
 * Displays figlet-rendered ASCII art with a typing/deleting animation.
 * Uses three separate canvases in an inline-flex row:
 *
 *   [prefixCanvas (dynamic width)] [cursorCanvas (fixed, blinks)] [suffixCanvas (fixed)]
 *
 * The suffix ("Sucks") and cursor NEVER move. Only the prefix canvas
 * resizes as text is typed/deleted.
 *
 * Mint palette: #00d2ff -> #3a7bd5
 *
 * @license MIT
 */

class CliTypewriter {
  /**
   * @param {string|HTMLElement} element - CSS selector or DOM element
   * @param {Object} options
   * @param {Object} options.artData - Pre-rendered figlet art from art.json
   * @param {string[]} options.words - Prefix words to cycle through
   * @param {string} options.suffix - Suffix text
   * @param {number} options.typeSpeed - ms per character typed (default: 100)
   * @param {number} options.deleteSpeed - ms per character deleted (default: 60)
   * @param {number} options.pauseBeforeDelete - ms pause with full word (default: 2000)
   * @param {number} options.pauseAfterType - ms pause after typing new word (default: 1500)
   * @param {string} options.gradientStart - Gradient start color (default: "#00d2ff")
   * @param {string} options.gradientEnd - Gradient end color (default: "#3a7bd5")
   * @param {number|string} [options.fontSize] - CSS font-size (default: null = 16px)
   * @param {number|string} [options.lineHeight] - Line height factor (default: "1.15")
   * @param {boolean} options.startOnLoad - Auto-start on viewport entry (default: true)
   * @param {boolean} options.infinite - Loop forever (default: true)
   * @param {number} options.cursorBlinkSpeed - Cursor blink cycle ms (default: 530)
   * @param {boolean} options.center - Center-align the typewriter (default: false)
   * @param {boolean} options.fadeIn - Fade in on start (default: false)
   * @param {number} options.fadeInDuration - Fade in ms (default: 600)
   */
  constructor(element, options = {}) {
    this.container =
      typeof element === "string"
        ? document.querySelector(element)
        : element;

    if (!this.container) {
      console.error(`CliTypewriter: Element "${element}" not found.`);
      return;
    }

    if (!options.artData) {
      console.error("CliTypewriter: artData is required.");
      return;
    }

    const defaults = {
      words: [],
      suffix: "Sucks",
      typeSpeed: 100,
      deleteSpeed: 60,
      pauseBeforeDelete: 2000,
      pauseAfterType: 1500,
      gradientStart: "#00d2ff",
      gradientEnd: "#3a7bd5",
      fontSize: null,
      lineHeight: "1.15",
      startOnLoad: true,
      infinite: true,
      cursorBlinkSpeed: 530,
      center: false,
      fadeIn: false,
      fadeInDuration: 600,
    };

    this.config = { ...defaults, ...options };
    this.art = options.artData;
    this.currentIndex = 0;
    this.isRunning = false;
    this.animationTimeout = null;
    this.hasStarted = false;
    this._currentPrefixLines = null;
    this._dpr = window.devicePixelRatio || 1;

    // Validate art data and filter words
    this._validate();

    this._build();
    this._measureFont();
    this._initSuffixCanvas();
    this._initCursorCanvas();
    this._updatePrefixCanvas(null);

    // Initial render for the first word so it displays immediately
    if (this.config.words.length > 0) {
       this._currentPrefixLines = this.art.prefixArts[this.config.words[0]];
       this._renderFrame(this._currentPrefixLines);
    }

    if (this.config.startOnLoad) {
      this._setupIntersectionObserver();
    }
    
    this._setupResizeObserver();
  }

  // ──────────────────────────────────────────────
  // Validation
  // ──────────────────────────────────────────────

  /**
   * Check if a word has ALL partial art entries needed for typing animation.
   * e.g. "Tech" needs "T", "Te", "Tec", "Tech" all present in artData.prefixArts.
   */
  _hasWordArt(word) {
    if (!word || word.length === 0) return false;
    const arts = this.art.prefixArts;
    if (!arts) return false;
    for (let i = 1; i <= word.length; i++) {
      const partial = word.substring(0, i);
      if (!arts[partial]) return false;
    }
    return true;
  }

  /**
   * Validate art data integrity, filter the words list, and validate initialWord.
   * Logs clear warnings for any problems so the user knows exactly what's wrong.
   */
  _validate() {
    const arts = this.art.prefixArts;

    // Check basic art data structure
    if (!arts || typeof arts !== "object") {
      console.error("CliTypewriter: artData.prefixArts is missing or invalid.");
      this.config.words = [];
      return;
    }

    // Filter words to only those with complete art data
    const validWords = [];
    const skippedWords = [];
    for (const word of this.config.words) {
      if (this._hasWordArt(word)) {
        validWords.push(word);
      } else {
        skippedWords.push(word);
        // Log which partials are missing for debugging
        const missing = [];
        for (let i = 1; i <= word.length; i++) {
          if (!arts[word.substring(0, i)]) {
            missing.push('"' + word.substring(0, i) + '"');
          }
        }
        console.warn(
          'CliTypewriter: Skipping word "' + word + '" — missing art data for: ' +
          missing.join(", ") + ". Regenerate art.json with this word included."
        );
      }
    }

    if (skippedWords.length > 0) {
      console.warn(
        "CliTypewriter: " + skippedWords.length + " word(s) skipped. " +
        "Run: cd scripts && node generate-art.js  (after adding words to data/words.json)"
      );
    }

    if (validWords.length === 0) {
      console.error(
        "CliTypewriter: No valid words found! All words are missing art data. " +
        "Check that art.json matches words.json."
      );
    }

    this.config.words = validWords;

  }

  // ──────────────────────────────────────────────
  // DOM Setup
  // ──────────────────────────────────────────────

  _build() {
    this.container.innerHTML = "";
    this.container.style.position = "relative";
    this.container.style.lineHeight = "0";
    this.container.style.overflow = "hidden";

    if (this.config.center) {
      this.container.style.display = "flex";
      this.container.style.justifyContent = "center";
    } else {
      this.container.style.display = "block";
    }

    // Inner wrapper that gets transform-scaled to fit the container width
    this._scaleWrapper = document.createElement("div");
    this._scaleWrapper.style.cssText =
      "display:inline-flex;align-items:flex-start;transform-origin:left top;";
    if (this.config.center) {
      this._scaleWrapper.style.transformOrigin = "center top";
    }

    this.prefixCanvas = document.createElement("canvas");
    this.prefixCanvas.className = "cli-typewriter-prefix";
    this._scaleWrapper.appendChild(this.prefixCanvas);

    this.cursorCanvas = document.createElement("canvas");
    this.cursorCanvas.className = "cli-typewriter-cursor";
    this._scaleWrapper.appendChild(this.cursorCanvas);

    this.suffixCanvas = document.createElement("canvas");
    this.suffixCanvas.className = "cli-typewriter-suffix";
    this._scaleWrapper.appendChild(this.suffixCanvas);

    this.container.appendChild(this._scaleWrapper);

    // Hidden <pre> for screen reader accessibility
    this.preEl = document.createElement("pre");
    this.preEl.setAttribute("role", "text");
    this.preEl.setAttribute("aria-live", "polite");
    this.preEl.style.cssText =
      "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:pre;margin:0;padding:0;border:0;";
    this.container.appendChild(this.preEl);

    this._injectStyles();
  }

  _injectStyles() {
    const id = "cli-typewriter-keyframes";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes cli-typewriter-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      .cli-typewriter-cursor {
        animation: cli-typewriter-blink 530ms ease-in-out infinite;
      }
      .cli-typewriter-cursor.cli-typewriter-no-blink {
        animation: none !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
  }

  // ──────────────────────────────────────────────
  // Font & Canvas Measurement
  // ──────────────────────────────────────────────

  _parseFontSize(size) {
    if (typeof size === "number") return size;
    if (!size) return 16;
    const s = String(size).trim();
    if (s.endsWith("rem")) {
      const root =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return parseFloat(s) * root;
    }
    if (s.endsWith("em")) {
      const root =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return parseFloat(s) * root;
    }
    if (s.endsWith("px")) return parseFloat(s);
    return parseFloat(s) || 16;
  }

  _measureFont() {
    // Read the actual computed font-size of the container rather than parsing options
    const computedStr = getComputedStyle(this.container).fontSize;
    const fontSize = parseFloat(computedStr) || 16;
    const family =
      "'Fira Code','Cascadia Code','JetBrains Mono','SF Mono','Consolas','Liberation Mono',monospace";
    this._fontStr = `bold ${fontSize}px ${family}`;
    this._fontSize = fontSize;

    const lhFactor = parseFloat(this.config.lineHeight || "1.15");
    this._lineHeightPx = fontSize * lhFactor;
    this._canvasHeight = Math.ceil(this.art.fontHeight * this._lineHeightPx);

    const tc = document.createElement("canvas");
    const tx = tc.getContext("2d");
    tx.font = this._fontStr;
    this._charWidth = tx.measureText("\u2588").width || fontSize * 0.6;

    this.container.style.gap = Math.ceil(this._charWidth) + "px";
    if (this._scaleWrapper) {
      this._scaleWrapper.style.gap = Math.ceil(this._charWidth) + "px";
    }
    this.cursorCanvas.style.animationDuration =
      this.config.cursorBlinkSpeed + "ms";
  }

  _sizeCanvas(canvas, logicalWidth) {
    const w = Math.max(Math.ceil(logicalWidth), 1);
    const h = this._canvasHeight;
    canvas.width = Math.ceil(w * this._dpr);
    canvas.height = Math.ceil(h * this._dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    const ctx = canvas.getContext("2d");
    ctx.setTransform(this._dpr, 0, 0, this._dpr, 0, 0);
    ctx.font = this._fontStr;
    ctx.textBaseline = "top";
    return ctx;
  }

  _createGradient(ctx, width) {
    const g = ctx.createLinearGradient(0, 0, width, 0);
    g.addColorStop(0, this.config.gradientStart);
    g.addColorStop(1, this.config.gradientEnd);
    return g;
  }

  // ──────────────────────────────────────────────
  // Canvas Initialization
  // ──────────────────────────────────────────────

  _initSuffixCanvas() {
    const a = this.art;
    let maxLen = 0;
    for (let i = 0; i < a.suffixLines.length; i++) {
      if (a.suffixLines[i].length > maxLen) maxLen = a.suffixLines[i].length;
    }
    const w = maxLen * this._charWidth;
    const ctx = this._sizeCanvas(this.suffixCanvas, w);
    ctx.fillStyle = this._createGradient(ctx, w);
    for (let i = 0; i < a.suffixLines.length; i++) {
      ctx.fillText(a.suffixLines[i], 0, i * this._lineHeightPx);
    }
  }

  _initCursorCanvas() {
    const a = this.art;
    const w = this._charWidth;
    const ctx = this._sizeCanvas(this.cursorCanvas, w);
    ctx.fillStyle = this._createGradient(ctx, w);
    for (let i = 0; i < a.fontHeight; i++) {
      ctx.fillText(a.cursorLines[i] || "\u2588", 0, i * this._lineHeightPx);
    }
  }

  // ──────────────────────────────────────────────
  // Frame Rendering
  // ──────────────────────────────────────────────

  _updatePrefixCanvas(prefixLines) {
    let maxLen = 0;
    if (prefixLines) {
      for (let i = 0; i < prefixLines.length; i++) {
        if (prefixLines[i].length > maxLen) maxLen = prefixLines[i].length;
      }
    }

    const w = maxLen * this._charWidth;
    const ctx = this._sizeCanvas(this.prefixCanvas, w);

    if (prefixLines && maxLen > 0) {
      ctx.fillStyle = this._createGradient(ctx, w);
      for (let i = 0; i < prefixLines.length; i++) {
        ctx.fillText(prefixLines[i], 0, i * this._lineHeightPx);
      }
    }
  }

  _renderFrame(prefixLines) {
    this._updatePrefixCanvas(prefixLines);

    const a = this.art;
    const lines = [];
    for (let i = 0; i < a.fontHeight; i++) {
      let line = "";
      if (prefixLines && prefixLines[i]) line += prefixLines[i];
      line += " " + (a.cursorLines[i] || "\u2588");
      line += " " + (a.suffixLines[i] || "");
      lines.push(line);
    }
    this.preEl.textContent = lines.join("\n");
    this._applyScaling();
  }

  /**
   * Scale the inner wrapper to fit the container width using CSS transform.
   * Shrinks proportionally on small viewports instead of overflowing or clipping.
   */
  _applyScaling() {
    if (!this._scaleWrapper) return;

    const containerWidth = this.container.clientWidth;
    const contentWidth = this._scaleWrapper.scrollWidth;
    const contentHeight = this._scaleWrapper.scrollHeight;

    // Always lock height to the full unscaled content height so nothing
    // below the logo shifts during typing / deleting animations.
    this.container.style.height = contentHeight + "px";

    if (contentWidth > containerWidth && containerWidth > 0) {
      const scale = containerWidth / contentWidth;
      this._scaleWrapper.style.transform = "scale(" + scale + ")";
    } else {
      this._scaleWrapper.style.transform = "none";
    }
  }

  // ──────────────────────────────────────────────
  // Cursor Blink
  // ──────────────────────────────────────────────

  _startCursorBlink() {
    this.cursorCanvas.classList.remove("cli-typewriter-no-blink");
  }

  _stopCursorBlink() {
    this.cursorCanvas.classList.add("cli-typewriter-no-blink");
  }

  // ──────────────────────────────────────────────
  // Observer
  // ──────────────────────────────────────────────

  _setupIntersectionObserver() {
    if (!("IntersectionObserver" in window)) {
      this.start();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasStarted) {
            this.start();
            observer.unobserve(this.container);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(this.container);
  }

  _setupResizeObserver() {
    if (!("ResizeObserver" in window)) return;
    this._resizeObserver = new ResizeObserver(() => {
      // Re-measure font from CSS (e.g. vw changes) and re-render current frame
      this._measureFont();
      this._initSuffixCanvas();
      this._initCursorCanvas();
      this._renderFrame(this._currentPrefixLines);
    });
    this._resizeObserver.observe(this.container);
  }

  // ──────────────────────────────────────────────
  // Utilities
  // ──────────────────────────────────────────────

  _sleep(ms) {
    return new Promise((resolve) => {
      this.animationTimeout = setTimeout(resolve, ms);
    });
  }

  // ──────────────────────────────────────────────
  // Animation
  // ──────────────────────────────────────────────

  async _typeWord(word) {
    const a = this.art;
    this._stopCursorBlink();

    for (let i = 1; i <= word.length; i++) {
      const partial = word.substring(0, i);
      const prefixLines = a.prefixArts[partial];
      if (prefixLines) {
        this._currentPrefixLines = prefixLines;
        this._renderFrame(prefixLines);
      }
      await this._sleep(this.config.typeSpeed);
    }
  }

  async _deleteWord(word) {
    const a = this.art;

    for (let i = word.length - 1; i >= 0; i--) {
      const partial = word.substring(0, i);
      const prefixLines = partial.length > 0 ? a.prefixArts[partial] : null;
      this._currentPrefixLines = prefixLines;
      this._renderFrame(prefixLines);
      await this._sleep(this.config.deleteSpeed);
    }

    this._currentPrefixLines = null;
    this._renderFrame(null);
  }

  // ──────────────────────────────────────────────
  // Main Loop
  // ──────────────────────────────────────────────

  async _run() {
    const words = this.config.words;

    // Safety: if no valid words after filtering, do nothing
    if (words.length === 0) {
      console.error("CliTypewriter: No valid words to cycle. Animation aborted.");
      return;
    }

    // ── Normal cycling loop ──
    const maxCycles = this.config.infinite ? Infinity : words.length;
    let cycles = 0;
    let isFirstWord = true;

    while (cycles < maxCycles) {
      const nextWord = words[this.currentIndex];

      // Skip words that somehow lost art data (defensive)
      if (!this._hasWordArt(nextWord)) {
        console.warn('CliTypewriter: Skipping "' + nextWord + '" (no art data)');
        this.currentIndex = (this.currentIndex + 1) % words.length;
        if (!this.config.infinite) cycles++;
        continue;
      }

      if (!isFirstWord) {
        if (nextWord.length > 0) {
          await this._sleep(300);
        }
        await this._typeWord(nextWord);
      } else {
        // Skip typing the first word completely; render it instantly and pause.
        const a = this.art;
        const prefixLines = a.prefixArts[nextWord];
        this._currentPrefixLines = prefixLines;
        this._renderFrame(prefixLines);
        isFirstWord = false;
      }

      this._startCursorBlink();
      await this._sleep(this.config.pauseBeforeDelete);
      this._stopCursorBlink();
      await this._deleteWord(nextWord);

      this.currentIndex = (this.currentIndex + 1) % words.length;
      if (!this.config.infinite) cycles++;
    }
  }

  // ──────────────────────────────────────────────
  // Public API
  // ──────────────────────────────────────────────

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.hasStarted = true;

    if (this.config.fadeIn) {
      this.container.style.opacity = "0";
      this.container.style.transition = `opacity ${this.config.fadeInDuration}ms ease-in`;
      void this.container.offsetHeight;
      this.container.style.opacity = "1";
    }

    await this._run();
  }

  stop() {
    this.isRunning = false;
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
    }
  }

  restart() {
    this.stop();
    this.currentIndex = 0;
    this._currentPrefixLines = null;
    this._renderFrame(null);
    this.start();
  }

  setWords(newWords) {
    if (!Array.isArray(newWords) || newWords.length === 0) {
      console.error("CliTypewriter: setWords requires a non-empty array.");
      return;
    }
    this.config.words = newWords;
    this._validate();
    this.restart();
  }

  setGradient(startColor, endColor) {
    this.config.gradientStart = startColor;
    this.config.gradientEnd = endColor;
    this._initSuffixCanvas();
    this._initCursorCanvas();
    this._renderFrame(this._currentPrefixLines);
  }

  setFontSize(size) {
    this.config.fontSize = size;
    this._measureFont();
    this._initSuffixCanvas();
    this._initCursorCanvas();
    this._renderFrame(this._currentPrefixLines);
  }

  destroy() {
    this.stop();
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
    }
    this.container.innerHTML = "";
    this.container.removeAttribute("style");
  }
}

// Exports
if (typeof module !== "undefined" && module.exports) {
  module.exports = CliTypewriter;
} else if (typeof define === "function" && define.amd) {
  define([], () => CliTypewriter);
} else {
  window.CliTypewriter = CliTypewriter;
}
