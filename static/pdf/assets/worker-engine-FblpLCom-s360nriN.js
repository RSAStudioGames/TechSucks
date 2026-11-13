import{n as e,t}from"./browser-BISJ9naB-DZwu9tLA-BTRkUxqC.js";import{J as n,bt as r,o as i,u as a}from"./embedpdf-BU1QkaWR-BNSSX_1Z.js";var o=`RemoteExecutor`,s=`Worker`,c=class e{constructor(t,c){this.worker=t,this.pendingRequests=new Map,this.requestCounter=0,this.handleMessage=e=>{let t=e.data;if(t.type===`ready`)return this.logger.debug(o,s,`Worker is ready`),void this.readyTask.resolve(!0);let r=this.pendingRequests.get(t.id);if(r)switch(t.type){case`result`:this.logger.debug(o,s,`Received result for ${t.id}`),r.resolve(t.data),this.pendingRequests.delete(t.id);break;case`error`:this.logger.debug(o,s,`Received error for ${t.id}:`,t.error),t.error?r.fail(t.error):r.reject({code:n.Unknown,message:`Unknown error`}),this.pendingRequests.delete(t.id);break;case`progress`:this.logger.debug(o,s,`Received progress for ${t.id}`),r.progress(t.progress)}else this.logger.warn(o,s,`Received response for unknown request: ${t.id}`)},this.logger=c.logger??new r,this.worker.addEventListener(`message`,this.handleMessage),this.readyTask=new i,this.pendingRequests.set(e.READY_TASK_ID,this.readyTask),this.worker.postMessage({id:e.READY_TASK_ID,type:`wasmInit`,wasmUrl:c.wasmUrl,logger:c.logger?a(c.logger):void 0,fontFallback:c.fontFallback}),this.logger.debug(o,s,`RemoteExecutor created`)}generateId(){return`req-${Date.now()}-${this.requestCounter++}`}send(e,t){let r=this.generateId(),a=new i,c={id:r,type:`execute`,method:e,args:t};return this.readyTask.wait(()=>{this.pendingRequests.set(r,a),this.logger.debug(o,s,`Sending ${e} request:`,r),this.worker.postMessage(c)},t=>{this.logger.error(o,s,`Worker init failed, rejecting ${e}:`,t),a.reject({code:n.Initialization,message:`Worker initialization failed`})}),a}destroy(){this.worker.removeEventListener(`message`,this.handleMessage),this.pendingRequests.forEach((t,n)=>{n!==e.READY_TASK_ID&&(t.abort(`Worker destroyed`),this.logger.debug(o,s,`Aborted pending request: ${n}`))}),this.pendingRequests.clear(),this.worker.terminate(),this.logger.debug(o,s,`RemoteExecutor destroyed`)}openDocumentBuffer(e,t){return this.send(`openDocumentBuffer`,[e,t])}getMetadata(e){return this.send(`getMetadata`,[e])}getPageLabels(e){return this.send(`getPageLabels`,[e])}setMetadata(e,t){return this.send(`setMetadata`,[e,t])}getDocPermissions(e){return this.send(`getDocPermissions`,[e])}getDocUserPermissions(e){return this.send(`getDocUserPermissions`,[e])}getSignatures(e){return this.send(`getSignatures`,[e])}getBookmarks(e){return this.send(`getBookmarks`,[e])}setBookmarks(e,t){return this.send(`setBookmarks`,[e,t])}deleteBookmarks(e){return this.send(`deleteBookmarks`,[e])}renderPageRaw(e,t,n){return this.send(`renderPageRaw`,[e,t,n])}renderPageRect(e,t,n,r){return this.send(`renderPageRect`,[e,t,n,r])}renderThumbnailRaw(e,t,n){return this.send(`renderThumbnailRaw`,[e,t,n])}renderPageAnnotationRaw(e,t,n,r){return this.send(`renderPageAnnotationRaw`,[e,t,n,r])}renderPageAnnotationsRaw(e,t,n){return this.send(`renderPageAnnotationsRaw`,[e,t,n])}getPageAnnotationsRaw(e,t){return this.send(`getPageAnnotationsRaw`,[e,t])}getPageAnnotations(e,t){return this.send(`getPageAnnotations`,[e,t])}createPageAnnotation(e,t,n,r){return this.send(`createPageAnnotation`,[e,t,n,r])}updatePageAnnotation(e,t,n,r){return this.send(`updatePageAnnotation`,[e,t,n,r])}removePageAnnotation(e,t,n){return this.send(`removePageAnnotation`,[e,t,n])}getPageTextRects(e,t){return this.send(`getPageTextRects`,[e,t])}searchInPage(e,t,n,r){return this.send(`searchInPage`,[e,t,n,r])}getAnnotationsBatch(e,t){return this.send(`getAnnotationsBatch`,[e,t])}searchBatch(e,t,n,r){return this.send(`searchBatch`,[e,t,n,r])}getAttachments(e){return this.send(`getAttachments`,[e])}addAttachment(e,t){return this.send(`addAttachment`,[e,t])}removeAttachment(e,t){return this.send(`removeAttachment`,[e,t])}readAttachmentContent(e,t){return this.send(`readAttachmentContent`,[e,t])}setFormFieldValue(e,t,n,r){return this.send(`setFormFieldValue`,[e,t,n,r])}flattenPage(e,t,n){return this.send(`flattenPage`,[e,t,n])}extractPages(e,t){return this.send(`extractPages`,[e,t])}extractText(e,t){return this.send(`extractText`,[e,t])}redactTextInRects(e,t,n,r){return this.send(`redactTextInRects`,[e,t,n,r])}applyRedaction(e,t,n){return this.send(`applyRedaction`,[e,t,n])}applyAllRedactions(e,t){return this.send(`applyAllRedactions`,[e,t])}flattenAnnotation(e,t,n){return this.send(`flattenAnnotation`,[e,t,n])}getTextSlices(e,t){return this.send(`getTextSlices`,[e,t])}getPageGlyphs(e,t){return this.send(`getPageGlyphs`,[e,t])}getPageGeometry(e,t){return this.send(`getPageGeometry`,[e,t])}getPageTextRuns(e,t){return this.send(`getPageTextRuns`,[e,t])}merge(e){return this.send(`merge`,[e])}mergePages(e){return this.send(`mergePages`,[e])}preparePrintDocument(e,t){return this.send(`preparePrintDocument`,[e,t])}saveAsCopy(e){return this.send(`saveAsCopy`,[e])}closeDocument(e){return this.send(`closeDocument`,[e])}closeAllDocuments(){return this.send(`closeAllDocuments`,[])}setDocumentEncryption(e,t,n,r){return this.send(`setDocumentEncryption`,[e,t,n,r])}removeEncryption(e){return this.send(`removeEncryption`,[e])}unlockOwnerPermissions(e,t){return this.send(`unlockOwnerPermissions`,[e,t])}isEncrypted(e){return this.send(`isEncrypted`,[e])}isOwnerUnlocked(e){return this.send(`isOwnerUnlocked`,[e])}getPathSegments(e,t,n,r){return this.send(`getPathSegments`,[e,t,n,r])}getScaleAreas(e){return this.send(`getScaleAreas`,[e])}setScaleArea(e,t,n,r,i,a){return this.send(`setScaleArea`,[e,t,n,r,i,a])}removeScaleArea(e,t,n){return this.send(`removeScaleArea`,[e,t,n])}moveScaleArea(e,t,n,r){return this.send(`moveScaleArea`,[e,t,n,r])}copyScaleArea(e,t,n,r){return this.send(`copyScaleArea`,[e,t,n,r])}getScaleAreasSyntax(e,t){return this.send(`getScaleAreasSyntax`,[e,t])}setScaleAreasSyntax(e,t,n){return this.send(`setScaleAreasSyntax`,[e,t,n])}mutatePages(e,t){return this.send(`mutatePages`,[e,t])}getPageLabelRules(e){return this.send(`getPageLabelRules`,[e])}setPageLabelRules(e,t){return this.send(`setPageLabelRules`,[e,t])}};c.READY_TASK_ID=`0`;var l=c,u=`ImageEncoderPool`,d=`Encoder`,f=class{constructor(e=2,t,n){this.poolSize=e,this.workerUrl=t,this.workers=[],this.pendingTasks=new Map,this.nextWorkerId=0,this.requestCounter=0,this.logger=n??new r,this.initialize()}initialize(){this.logger.debug(u,d,`Creating worker pool with ${this.poolSize} workers`);for(let e=0;e<this.poolSize;e++)try{let t=new Worker(this.workerUrl,{type:`module`});t.onmessage=this.handleWorkerMessage.bind(this),t.onerror=this.handleWorkerError.bind(this),this.workers.push(t),this.logger.debug(u,d,`Worker ${e} created successfully`)}catch(t){this.logger.error(u,d,`Failed to create worker ${e}:`,t)}}handleWorkerMessage(e){let t=e.data,n=this.pendingTasks.get(t.id);if(n){if(this.pendingTasks.delete(t.id),t.type===`result`)n.resolve(t.data);else{let e=t.data;n.reject(Error(e.message))}}else this.logger.warn(u,d,`Received response for unknown task: ${t.id}`)}handleWorkerError(e){this.logger.error(u,d,`Worker error:`,e.message)}getNextWorker(){if(this.workers.length===0)return null;let e=this.workers[this.nextWorkerId];return this.nextWorkerId=(this.nextWorkerId+1)%this.workers.length,e}encode(e,t=`image/webp`,n){return new Promise((r,i)=>{let a=this.getNextWorker();if(!a)return void i(Error(`No workers available in the pool`));let o=`encode-${Date.now()}-${this.requestCounter++}`;this.pendingTasks.set(o,{resolve:r,reject:i});let s={id:o,type:`encode`,data:{imageData:{data:e.data,width:e.width,height:e.height},imageType:t,quality:n}};this.logger.debug(u,d,`Sending encoding request ${o} (${e.width}x${e.height})`),a.postMessage(s,[e.data.buffer])})}destroy(){this.logger.debug(u,d,`Destroying worker pool`),this.pendingTasks.forEach((e,t)=>{e.reject(Error(`Worker pool destroyed`)),this.logger.debug(u,d,`Rejected pending task: ${t}`)}),this.pendingTasks.clear(),this.workers.forEach((e,t)=>{e.terminate(),this.logger.debug(u,d,`Worker ${t} terminated`)}),this.workers=[]}get activeWorkers(){return this.workers.length}get pendingTasksCount(){return this.pendingTasks.size}};function p(n,r){let{logger:i,encoderPoolSize:a,fontFallback:o}=r instanceof Object&&`debug`in r?{logger:r}:r||{},s=new l(new Worker(URL.createObjectURL(new Blob([`var Rotation = /* @__PURE__ */ ((Rotation2) => {
  Rotation2[Rotation2["Degree0"] = 0] = "Degree0";
  Rotation2[Rotation2["Degree90"] = 1] = "Degree90";
  Rotation2[Rotation2["Degree180"] = 2] = "Degree180";
  Rotation2[Rotation2["Degree270"] = 3] = "Degree270";
  return Rotation2;
})(Rotation || {});
function toIntPos(p) {
  return { x: Math.floor(p.x), y: Math.floor(p.y) };
}
function toIntSize(s) {
  return { width: Math.ceil(s.width), height: Math.ceil(s.height) };
}
function toIntRect(r) {
  return {
    origin: toIntPos(r.origin),
    size: toIntSize(r.size)
  };
}
function swap(size) {
  const { width, height } = size;
  return {
    width: height,
    height: width
  };
}
function quadToRect(q) {
  const xs = [q.p1.x, q.p2.x, q.p3.x, q.p4.x];
  const ys = [q.p1.y, q.p2.y, q.p3.y, q.p4.y];
  return {
    origin: { x: Math.min(...xs), y: Math.min(...ys) },
    size: {
      width: Math.max(...xs) - Math.min(...xs),
      height: Math.max(...ys) - Math.min(...ys)
    }
  };
}
function rectToQuad(r) {
  return {
    p1: { x: r.origin.x, y: r.origin.y },
    p2: { x: r.origin.x + r.size.width, y: r.origin.y },
    p3: { x: r.origin.x + r.size.width, y: r.origin.y + r.size.height },
    p4: { x: r.origin.x, y: r.origin.y + r.size.height }
  };
}
function rotateRect(containerSize, rect, rotation) {
  let x = rect.origin.x;
  let y = rect.origin.y;
  let size = rect.size;
  switch (rotation) {
    case 0:
      break;
    case 1:
      x = containerSize.height - rect.origin.y - rect.size.height;
      y = rect.origin.x;
      size = swap(rect.size);
      break;
    case 2:
      x = containerSize.width - rect.origin.x - rect.size.width;
      y = containerSize.height - rect.origin.y - rect.size.height;
      break;
    case 3:
      x = rect.origin.y;
      y = containerSize.width - rect.origin.x - rect.size.width;
      size = swap(rect.size);
      break;
  }
  return {
    origin: {
      x,
      y
    },
    size: {
      width: size.width,
      height: size.height
    }
  };
}
function scaleRect(rect, scaleFactor) {
  return {
    origin: {
      x: rect.origin.x * scaleFactor,
      y: rect.origin.y * scaleFactor
    },
    size: {
      width: rect.size.width * scaleFactor,
      height: rect.size.height * scaleFactor
    }
  };
}
function transformRect(containerSize, rect, rotation, scaleFactor) {
  return scaleRect(rotateRect(containerSize, rect, rotation), scaleFactor);
}
function buildUserToDeviceMatrix(rect, rotation, outW, outH) {
  const L = rect.origin.x;
  const B = rect.origin.y;
  const W = rect.size.width;
  const H = rect.size.height;
  const sx0 = outW / W;
  const sy0 = outH / H;
  const sx90 = outW / H;
  const sy90 = outH / W;
  switch (rotation) {
    case 0:
      return { a: sx0, b: 0, c: 0, d: sy0, e: -sx0 * L, f: -sy0 * B };
    case 3:
      return { a: 0, b: -sy90, c: sx90, d: 0, e: -sx90 * B, f: sy90 * (L + W) };
    case 2:
      return { a: -sx0, b: 0, c: 0, d: -sy0, e: sx0 * (L + W), f: sy0 * (B + H) };
    case 1:
      return { a: 0, b: sy90, c: -sx90, d: 0, e: sx90 * (B + H), f: -sy90 * L };
  }
}
class NoopLogger {
  /** {@inheritDoc Logger.isEnabled} */
  isEnabled() {
    return false;
  }
  /** {@inheritDoc Logger.debug} */
  debug() {
  }
  /** {@inheritDoc Logger.info} */
  info() {
  }
  /** {@inheritDoc Logger.warn} */
  warn() {
  }
  /** {@inheritDoc Logger.error} */
  error() {
  }
  /** {@inheritDoc Logger.perf} */
  perf() {
  }
}
class ConsoleLogger {
  /** {@inheritDoc Logger.isEnabled} */
  isEnabled() {
    return true;
  }
  /** {@inheritDoc Logger.debug} */
  debug(source, category, ...args) {
    console.debug(\`\${source}.\${category}\`, ...args);
  }
  /** {@inheritDoc Logger.info} */
  info(source, category, ...args) {
    console.info(\`\${source}.\${category}\`, ...args);
  }
  /** {@inheritDoc Logger.warn} */
  warn(source, category, ...args) {
    console.warn(\`\${source}.\${category}\`, ...args);
  }
  /** {@inheritDoc Logger.error} */
  error(source, category, ...args) {
    console.error(\`\${source}.\${category}\`, ...args);
  }
  /** {@inheritDoc Logger.perf} */
  perf(source, category, event, phase, ...args) {
    console.info(\`\${source}.\${category}.\${event}.\${phase}\`, ...args);
  }
}
class LevelLogger {
  /**
   * create new LevelLogger
   * @param logger - the original logger
   * @param level - log level that used for filtering, all logs lower than this level will be filtered out
   */
  constructor(logger, level) {
    this.logger = logger;
    this.level = level;
  }
  /** {@inheritDoc Logger.isEnabled} */
  isEnabled(level) {
    const levelMap = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
      /* Error */
    };
    return this.level <= levelMap[level];
  }
  /** {@inheritDoc Logger.debug} */
  debug(source, category, ...args) {
    if (this.level <= 0) {
      this.logger.debug(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.info} */
  info(source, category, ...args) {
    if (this.level <= 1) {
      this.logger.info(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.warn} */
  warn(source, category, ...args) {
    if (this.level <= 2) {
      this.logger.warn(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.error} */
  error(source, category, ...args) {
    if (this.level <= 3) {
      this.logger.error(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.perf} */
  perf(source, category, event, phase, ...args) {
    this.logger.perf(source, category, event, phase, ...args);
  }
}
class PerfLogger {
  /**
   * create new PerfLogger
   */
  constructor() {
    this.marks = /* @__PURE__ */ new Map();
  }
  /** {@inheritDoc Logger.isEnabled} */
  isEnabled() {
    return false;
  }
  /** {@inheritDoc Logger.debug} */
  debug(source, category, ...args) {
  }
  /** {@inheritDoc Logger.info} */
  info(source, category, ...args) {
  }
  /** {@inheritDoc Logger.warn} */
  warn(source, category, ...args) {
  }
  /** {@inheritDoc Logger.error} */
  error(source, category, ...args) {
  }
  /** {@inheritDoc Logger.perf} */
  perf(source, category, event, phase, identifier, ...args) {
    const markName = \`\${source}.\${category}.\${event}.\${phase}.\${identifier}\`;
    switch (phase) {
      case "Begin":
        globalThis.performance.mark(markName, { detail: args });
        this.marks.set(\`\${source}.\${category}.\${event}.\${identifier}\`, Date.now());
        break;
      case "End":
        globalThis.performance.mark(markName, { detail: args });
        const measureName = \`\${source}.\${category}.\${event}.Measure.\${identifier}\`;
        const beginMark = \`\${source}.\${category}.\${event}.Begin.\${identifier}\`;
        globalThis.performance.measure(measureName, beginMark, markName);
        const startTime = this.marks.get(\`\${source}.\${category}.\${event}.\${identifier}\`);
        if (startTime) {
          const duration = Date.now() - startTime;
          console.info(\`⏱️ \${source}.\${category}.\${event}.\${identifier}: \${duration}ms\`);
          this.marks.delete(\`\${source}.\${category}.\${event}.\${identifier}\`);
        }
        break;
    }
  }
}
class AllLogger {
  /**
   * create new PerfLogger
   */
  constructor(loggers) {
    this.loggers = loggers;
  }
  /** {@inheritDoc Logger.isEnabled} */
  isEnabled(level) {
    return this.loggers.some((logger) => logger.isEnabled(level));
  }
  /** {@inheritDoc Logger.debug} */
  debug(source, category, ...args) {
    for (const logger of this.loggers) {
      logger.debug(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.info} */
  info(source, category, ...args) {
    for (const logger of this.loggers) {
      logger.info(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.warn} */
  warn(source, category, ...args) {
    for (const logger of this.loggers) {
      logger.warn(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.error} */
  error(source, category, ...args) {
    for (const logger of this.loggers) {
      logger.error(source, category, ...args);
    }
  }
  /** {@inheritDoc Logger.perf} */
  perf(source, category, event, phase, ...args) {
    for (const logger of this.loggers) {
      logger.perf(source, category, event, phase, ...args);
    }
  }
}
class TaskAbortedError extends Error {
  constructor(reason) {
    super(\`Task aborted: \${JSON.stringify(reason)}\`);
    this.name = "TaskAbortedError";
    this.reason = reason;
  }
}
class TaskRejectedError extends Error {
  constructor(reason) {
    super(\`Task rejected: \${JSON.stringify(reason)}\`);
    this.name = "TaskRejectedError";
    this.reason = reason;
  }
}
class Task {
  constructor() {
    this.state = {
      stage: 0
      /* Pending */
    };
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    this._promise = null;
    this.progressCbs = [];
  }
  /**
   * Convert task to promise
   * @returns promise that will be resolved when task is settled
   */
  toPromise() {
    if (!this._promise) {
      this._promise = new Promise((resolve, reject) => {
        this.wait(
          (result) => resolve(result),
          (error) => {
            if (error.type === "abort") {
              reject(new TaskAbortedError(error.reason));
            } else {
              reject(new TaskRejectedError(error.reason));
            }
          }
        );
      });
    }
    return this._promise;
  }
  /**
   * wait for task to be settled
   * @param resolvedCallback - callback for resolved value
   * @param rejectedCallback - callback for rejected value
   */
  wait(resolvedCallback, rejectedCallback) {
    switch (this.state.stage) {
      case 0:
        this.resolvedCallbacks.push(resolvedCallback);
        this.rejectedCallbacks.push(rejectedCallback);
        break;
      case 1:
        resolvedCallback(this.state.result);
        break;
      case 2:
        rejectedCallback({
          type: "reject",
          reason: this.state.reason
        });
        break;
      case 3:
        rejectedCallback({
          type: "abort",
          reason: this.state.reason
        });
        break;
    }
  }
  /**
   * resolve task with specific result
   * @param result - result value
   */
  resolve(result) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 1,
        result
      };
      for (const resolvedCallback of this.resolvedCallbacks) {
        try {
          resolvedCallback(result);
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
  /**
   * reject task with specific reason
   * @param reason - abort reason
   *
   */
  reject(reason) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 2,
        reason
      };
      for (const rejectedCallback of this.rejectedCallbacks) {
        try {
          rejectedCallback({
            type: "reject",
            reason
          });
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
  /**
   * abort task with specific reason
   * @param reason - abort reason
   */
  abort(reason) {
    if (this.state.stage === 0) {
      this.state = {
        stage: 3,
        reason
      };
      for (const rejectedCallback of this.rejectedCallbacks) {
        try {
          rejectedCallback({
            type: "abort",
            reason
          });
        } catch (e) {
        }
      }
      this.resolvedCallbacks = [];
      this.rejectedCallbacks = [];
    }
  }
  /**
   * fail task with a TaskError from another task
   * This is a convenience method for error propagation between tasks
   * @param error - TaskError from another task
   */
  fail(error) {
    if (error.type === "abort") {
      this.abort(error.reason);
    } else {
      this.reject(error.reason);
    }
  }
  /**
   * add a progress callback
   * @param cb - progress callback
   */
  onProgress(cb) {
    this.progressCbs.push(cb);
  }
  /**
   * call progress callback
   * @param p - progress value
   */
  progress(p) {
    for (const cb of this.progressCbs) cb(p);
  }
  /**
   * Static method to wait for all tasks to resolve
   * Returns a new task that resolves with an array of all results
   * Rejects immediately if any task fails
   *
   * @param tasks - array of tasks to wait for
   * @returns new task that resolves when all input tasks resolve
   * @public
   */
  static all(tasks) {
    const combinedTask = new Task();
    if (tasks.length === 0) {
      combinedTask.resolve([]);
      return combinedTask;
    }
    const results = new Array(tasks.length);
    let resolvedCount = 0;
    let isSettled = false;
    tasks.forEach((task, index) => {
      task.wait(
        (result) => {
          if (isSettled) return;
          results[index] = result;
          resolvedCount++;
          if (resolvedCount === tasks.length) {
            isSettled = true;
            combinedTask.resolve(results);
          }
        },
        (error) => {
          if (isSettled) return;
          isSettled = true;
          if (error.type === "abort") {
            combinedTask.abort(error.reason);
          } else {
            combinedTask.reject(error.reason);
          }
        }
      );
    });
    return combinedTask;
  }
  /**
   * Static method to wait for all tasks to settle (resolve, reject, or abort)
   * Always resolves with an array of settlement results
   *
   * @param tasks - array of tasks to wait for
   * @returns new task that resolves when all input tasks settle
   * @public
   */
  static allSettled(tasks) {
    const combinedTask = new Task();
    if (tasks.length === 0) {
      combinedTask.resolve([]);
      return combinedTask;
    }
    const results = new Array(tasks.length);
    let settledCount = 0;
    tasks.forEach((task, index) => {
      task.wait(
        (result) => {
          results[index] = { status: "resolved", value: result };
          settledCount++;
          if (settledCount === tasks.length) {
            combinedTask.resolve(results);
          }
        },
        (error) => {
          results[index] = {
            status: error.type === "abort" ? "aborted" : "rejected",
            reason: error.reason
          };
          settledCount++;
          if (settledCount === tasks.length) {
            combinedTask.resolve(results);
          }
        }
      );
    });
    return combinedTask;
  }
  /**
   * Static method that resolves/rejects with the first task that settles
   *
   * @param tasks - array of tasks to race
   * @returns new task that settles with the first input task that settles
   * @public
   */
  static race(tasks) {
    const combinedTask = new Task();
    if (tasks.length === 0) {
      combinedTask.reject("No tasks provided");
      return combinedTask;
    }
    let isSettled = false;
    tasks.forEach((task) => {
      task.wait(
        (result) => {
          if (isSettled) return;
          isSettled = true;
          combinedTask.resolve(result);
        },
        (error) => {
          if (isSettled) return;
          isSettled = true;
          if (error.type === "abort") {
            combinedTask.abort(error.reason);
          } else {
            combinedTask.reject(error.reason);
          }
        }
      );
    });
    return combinedTask;
  }
  /**
   * Utility to track progress of multiple tasks
   *
   * @param tasks - array of tasks to track
   * @param onProgress - callback called when any task completes
   * @returns new task that resolves when all input tasks resolve
   * @public
   */
  static withProgress(tasks, onProgress) {
    const combinedTask = Task.all(tasks);
    if (onProgress) {
      let completedCount = 0;
      tasks.forEach((task) => {
        task.wait(
          () => {
            completedCount++;
            onProgress(completedCount, tasks.length);
          },
          () => {
            completedCount++;
            onProgress(completedCount, tasks.length);
          }
        );
      });
    }
    return combinedTask;
  }
}
const PdfSoftHyphenMarker = "­";
const PdfZeroWidthSpace = "​";
const PdfWordJoiner = "⁠";
const PdfBomOrZwnbsp = "\\uFEFF";
const PdfNonCharacterFFFE = "￾";
const PdfNonCharacterFFFF = "￿";
const PdfUnwantedTextMarkers = Object.freeze([
  PdfSoftHyphenMarker,
  PdfZeroWidthSpace,
  PdfWordJoiner,
  PdfBomOrZwnbsp,
  PdfNonCharacterFFFE,
  PdfNonCharacterFFFF
]);
const PdfUnwantedTextRegex = new RegExp(\`[\${PdfUnwantedTextMarkers.join("")}]\`, "g");
function stripPdfUnwantedMarkers(text) {
  return text.replace(PdfUnwantedTextRegex, "");
}
var PdfZoomMode = /* @__PURE__ */ ((PdfZoomMode2) => {
  PdfZoomMode2[PdfZoomMode2["Unknown"] = 0] = "Unknown";
  PdfZoomMode2[PdfZoomMode2["XYZ"] = 1] = "XYZ";
  PdfZoomMode2[PdfZoomMode2["FitPage"] = 2] = "FitPage";
  PdfZoomMode2[PdfZoomMode2["FitHorizontal"] = 3] = "FitHorizontal";
  PdfZoomMode2[PdfZoomMode2["FitVertical"] = 4] = "FitVertical";
  PdfZoomMode2[PdfZoomMode2["FitRectangle"] = 5] = "FitRectangle";
  PdfZoomMode2[PdfZoomMode2["FitBoundingBox"] = 6] = "FitBoundingBox";
  PdfZoomMode2[PdfZoomMode2["FitBoundingBoxHorizontal"] = 7] = "FitBoundingBoxHorizontal";
  PdfZoomMode2[PdfZoomMode2["FitBoundingBoxVertical"] = 8] = "FitBoundingBoxVertical";
  return PdfZoomMode2;
})(PdfZoomMode || {});
var PdfTrappedStatus = /* @__PURE__ */ ((PdfTrappedStatus2) => {
  PdfTrappedStatus2[PdfTrappedStatus2["NotSet"] = 0] = "NotSet";
  PdfTrappedStatus2[PdfTrappedStatus2["True"] = 1] = "True";
  PdfTrappedStatus2[PdfTrappedStatus2["False"] = 2] = "False";
  PdfTrappedStatus2[PdfTrappedStatus2["Unknown"] = 3] = "Unknown";
  return PdfTrappedStatus2;
})(PdfTrappedStatus || {});
var PdfStandardFont = /* @__PURE__ */ ((PdfStandardFont2) => {
  PdfStandardFont2[PdfStandardFont2["Unknown"] = -1] = "Unknown";
  PdfStandardFont2[PdfStandardFont2["Courier"] = 0] = "Courier";
  PdfStandardFont2[PdfStandardFont2["Courier_Bold"] = 1] = "Courier_Bold";
  PdfStandardFont2[PdfStandardFont2["Courier_BoldOblique"] = 2] = "Courier_BoldOblique";
  PdfStandardFont2[PdfStandardFont2["Courier_Oblique"] = 3] = "Courier_Oblique";
  PdfStandardFont2[PdfStandardFont2["Helvetica"] = 4] = "Helvetica";
  PdfStandardFont2[PdfStandardFont2["Helvetica_Bold"] = 5] = "Helvetica_Bold";
  PdfStandardFont2[PdfStandardFont2["Helvetica_BoldOblique"] = 6] = "Helvetica_BoldOblique";
  PdfStandardFont2[PdfStandardFont2["Helvetica_Oblique"] = 7] = "Helvetica_Oblique";
  PdfStandardFont2[PdfStandardFont2["Times_Roman"] = 8] = "Times_Roman";
  PdfStandardFont2[PdfStandardFont2["Times_Bold"] = 9] = "Times_Bold";
  PdfStandardFont2[PdfStandardFont2["Times_BoldItalic"] = 10] = "Times_BoldItalic";
  PdfStandardFont2[PdfStandardFont2["Times_Italic"] = 11] = "Times_Italic";
  PdfStandardFont2[PdfStandardFont2["Symbol"] = 12] = "Symbol";
  PdfStandardFont2[PdfStandardFont2["ZapfDingbats"] = 13] = "ZapfDingbats";
  return PdfStandardFont2;
})(PdfStandardFont || {});
var PdfTextAlignment = /* @__PURE__ */ ((PdfTextAlignment2) => {
  PdfTextAlignment2[PdfTextAlignment2["Left"] = 0] = "Left";
  PdfTextAlignment2[PdfTextAlignment2["Center"] = 1] = "Center";
  PdfTextAlignment2[PdfTextAlignment2["Right"] = 2] = "Right";
  return PdfTextAlignment2;
})(PdfTextAlignment || {});
var PdfBlendMode = /* @__PURE__ */ ((PdfBlendMode2) => {
  PdfBlendMode2[PdfBlendMode2["Normal"] = 0] = "Normal";
  PdfBlendMode2[PdfBlendMode2["Multiply"] = 1] = "Multiply";
  PdfBlendMode2[PdfBlendMode2["Screen"] = 2] = "Screen";
  PdfBlendMode2[PdfBlendMode2["Overlay"] = 3] = "Overlay";
  PdfBlendMode2[PdfBlendMode2["Darken"] = 4] = "Darken";
  PdfBlendMode2[PdfBlendMode2["Lighten"] = 5] = "Lighten";
  PdfBlendMode2[PdfBlendMode2["ColorDodge"] = 6] = "ColorDodge";
  PdfBlendMode2[PdfBlendMode2["ColorBurn"] = 7] = "ColorBurn";
  PdfBlendMode2[PdfBlendMode2["HardLight"] = 8] = "HardLight";
  PdfBlendMode2[PdfBlendMode2["SoftLight"] = 9] = "SoftLight";
  PdfBlendMode2[PdfBlendMode2["Difference"] = 10] = "Difference";
  PdfBlendMode2[PdfBlendMode2["Exclusion"] = 11] = "Exclusion";
  PdfBlendMode2[PdfBlendMode2["Hue"] = 12] = "Hue";
  PdfBlendMode2[PdfBlendMode2["Saturation"] = 13] = "Saturation";
  PdfBlendMode2[PdfBlendMode2["Color"] = 14] = "Color";
  PdfBlendMode2[PdfBlendMode2["Luminosity"] = 15] = "Luminosity";
  return PdfBlendMode2;
})(PdfBlendMode || {});
var PdfStampFit = /* @__PURE__ */ ((PdfStampFit2) => {
  PdfStampFit2[PdfStampFit2["Contain"] = 0] = "Contain";
  PdfStampFit2[PdfStampFit2["Cover"] = 1] = "Cover";
  PdfStampFit2[PdfStampFit2["Stretch"] = 2] = "Stretch";
  return PdfStampFit2;
})(PdfStampFit || {});
var PdfActionType = /* @__PURE__ */ ((PdfActionType2) => {
  PdfActionType2[PdfActionType2["Unsupported"] = 0] = "Unsupported";
  PdfActionType2[PdfActionType2["Goto"] = 1] = "Goto";
  PdfActionType2[PdfActionType2["RemoteGoto"] = 2] = "RemoteGoto";
  PdfActionType2[PdfActionType2["URI"] = 3] = "URI";
  PdfActionType2[PdfActionType2["LaunchAppOrOpenFile"] = 4] = "LaunchAppOrOpenFile";
  return PdfActionType2;
})(PdfActionType || {});
const AP_MODE_NORMAL = 1;
const AP_MODE_ROLLOVER = 2;
const AP_MODE_DOWN = 4;
var PdfAnnotationSubtype = /* @__PURE__ */ ((PdfAnnotationSubtype2) => {
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["UNKNOWN"] = 0] = "UNKNOWN";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["TEXT"] = 1] = "TEXT";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["LINK"] = 2] = "LINK";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["FREETEXT"] = 3] = "FREETEXT";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["LINE"] = 4] = "LINE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["SQUARE"] = 5] = "SQUARE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["CIRCLE"] = 6] = "CIRCLE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["POLYGON"] = 7] = "POLYGON";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["POLYLINE"] = 8] = "POLYLINE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["HIGHLIGHT"] = 9] = "HIGHLIGHT";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["UNDERLINE"] = 10] = "UNDERLINE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["SQUIGGLY"] = 11] = "SQUIGGLY";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["STRIKEOUT"] = 12] = "STRIKEOUT";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["STAMP"] = 13] = "STAMP";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["CARET"] = 14] = "CARET";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["INK"] = 15] = "INK";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["POPUP"] = 16] = "POPUP";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["FILEATTACHMENT"] = 17] = "FILEATTACHMENT";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["SOUND"] = 18] = "SOUND";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["MOVIE"] = 19] = "MOVIE";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["WIDGET"] = 20] = "WIDGET";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["SCREEN"] = 21] = "SCREEN";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["PRINTERMARK"] = 22] = "PRINTERMARK";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["TRAPNET"] = 23] = "TRAPNET";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["WATERMARK"] = 24] = "WATERMARK";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["THREED"] = 25] = "THREED";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["RICHMEDIA"] = 26] = "RICHMEDIA";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["XFAWIDGET"] = 27] = "XFAWIDGET";
  PdfAnnotationSubtype2[PdfAnnotationSubtype2["REDACT"] = 28] = "REDACT";
  return PdfAnnotationSubtype2;
})(PdfAnnotationSubtype || {});
var AppearanceMode = /* @__PURE__ */ ((AppearanceMode2) => {
  AppearanceMode2[AppearanceMode2["Normal"] = 0] = "Normal";
  AppearanceMode2[AppearanceMode2["Rollover"] = 1] = "Rollover";
  AppearanceMode2[AppearanceMode2["Down"] = 2] = "Down";
  return AppearanceMode2;
})(AppearanceMode || {});
var PdfAnnotationIcon = /* @__PURE__ */ ((PdfAnnotationIcon2) => {
  PdfAnnotationIcon2[PdfAnnotationIcon2["Unknown"] = -1] = "Unknown";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Comment"] = 0] = "Comment";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Key"] = 1] = "Key";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Note"] = 2] = "Note";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Help"] = 3] = "Help";
  PdfAnnotationIcon2[PdfAnnotationIcon2["NewParagraph"] = 4] = "NewParagraph";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Paragraph"] = 5] = "Paragraph";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Insert"] = 6] = "Insert";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Graph"] = 7] = "Graph";
  PdfAnnotationIcon2[PdfAnnotationIcon2["PushPin"] = 8] = "PushPin";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Paperclip"] = 9] = "Paperclip";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Tag"] = 10] = "Tag";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Speaker"] = 11] = "Speaker";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Mic"] = 12] = "Mic";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Approved"] = 13] = "Approved";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Experimental"] = 14] = "Experimental";
  PdfAnnotationIcon2[PdfAnnotationIcon2["NotApproved"] = 15] = "NotApproved";
  PdfAnnotationIcon2[PdfAnnotationIcon2["AsIs"] = 16] = "AsIs";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Expired"] = 17] = "Expired";
  PdfAnnotationIcon2[PdfAnnotationIcon2["NotForPublicRelease"] = 18] = "NotForPublicRelease";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Confidential"] = 19] = "Confidential";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Final"] = 20] = "Final";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Sold"] = 21] = "Sold";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Departmental"] = 22] = "Departmental";
  PdfAnnotationIcon2[PdfAnnotationIcon2["ForComment"] = 23] = "ForComment";
  PdfAnnotationIcon2[PdfAnnotationIcon2["TopSecret"] = 24] = "TopSecret";
  PdfAnnotationIcon2[PdfAnnotationIcon2["Draft"] = 25] = "Draft";
  PdfAnnotationIcon2[PdfAnnotationIcon2["ForPublicRelease"] = 26] = "ForPublicRelease";
  return PdfAnnotationIcon2;
})(PdfAnnotationIcon || {});
var PdfAnnotationLineEnding = /* @__PURE__ */ ((PdfAnnotationLineEnding2) => {
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["None"] = 0] = "None";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Square"] = 1] = "Square";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Circle"] = 2] = "Circle";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Diamond"] = 3] = "Diamond";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["OpenArrow"] = 4] = "OpenArrow";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["ClosedArrow"] = 5] = "ClosedArrow";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Butt"] = 6] = "Butt";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["ROpenArrow"] = 7] = "ROpenArrow";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["RClosedArrow"] = 8] = "RClosedArrow";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Slash"] = 9] = "Slash";
  PdfAnnotationLineEnding2[PdfAnnotationLineEnding2["Unknown"] = 10] = "Unknown";
  return PdfAnnotationLineEnding2;
})(PdfAnnotationLineEnding || {});
var PdfAnnotationReplyType = /* @__PURE__ */ ((PdfAnnotationReplyType2) => {
  PdfAnnotationReplyType2[PdfAnnotationReplyType2["Unknown"] = 0] = "Unknown";
  PdfAnnotationReplyType2[PdfAnnotationReplyType2["Reply"] = 1] = "Reply";
  PdfAnnotationReplyType2[PdfAnnotationReplyType2["Group"] = 2] = "Group";
  return PdfAnnotationReplyType2;
})(PdfAnnotationReplyType || {});
var PDF_FORM_FIELD_TYPE = /* @__PURE__ */ ((PDF_FORM_FIELD_TYPE2) => {
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["UNKNOWN"] = 0] = "UNKNOWN";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["PUSHBUTTON"] = 1] = "PUSHBUTTON";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["CHECKBOX"] = 2] = "CHECKBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["RADIOBUTTON"] = 3] = "RADIOBUTTON";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["COMBOBOX"] = 4] = "COMBOBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["LISTBOX"] = 5] = "LISTBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["TEXTFIELD"] = 6] = "TEXTFIELD";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["SIGNATURE"] = 7] = "SIGNATURE";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA"] = 8] = "XFA";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_CHECKBOX"] = 9] = "XFA_CHECKBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_COMBOBOX"] = 10] = "XFA_COMBOBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_IMAGEFIELD"] = 11] = "XFA_IMAGEFIELD";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_LISTBOX"] = 12] = "XFA_LISTBOX";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_PUSHBUTTON"] = 13] = "XFA_PUSHBUTTON";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_SIGNATURE"] = 14] = "XFA_SIGNATURE";
  PDF_FORM_FIELD_TYPE2[PDF_FORM_FIELD_TYPE2["XFA_TEXTFIELD"] = 15] = "XFA_TEXTFIELD";
  return PDF_FORM_FIELD_TYPE2;
})(PDF_FORM_FIELD_TYPE || {});
var PdfAnnotationColorType = /* @__PURE__ */ ((PdfAnnotationColorType2) => {
  PdfAnnotationColorType2[PdfAnnotationColorType2["Color"] = 0] = "Color";
  PdfAnnotationColorType2[PdfAnnotationColorType2["InteriorColor"] = 1] = "InteriorColor";
  PdfAnnotationColorType2[PdfAnnotationColorType2["OverlayColor"] = 2] = "OverlayColor";
  PdfAnnotationColorType2[PdfAnnotationColorType2["TextColor"] = 3] = "TextColor";
  return PdfAnnotationColorType2;
})(PdfAnnotationColorType || {});
var PdfAnnotationBorderStyle = /* @__PURE__ */ ((PdfAnnotationBorderStyle2) => {
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["UNKNOWN"] = 0] = "UNKNOWN";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["SOLID"] = 1] = "SOLID";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["DASHED"] = 2] = "DASHED";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["BEVELED"] = 3] = "BEVELED";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["INSET"] = 4] = "INSET";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["UNDERLINE"] = 5] = "UNDERLINE";
  PdfAnnotationBorderStyle2[PdfAnnotationBorderStyle2["CLOUDY"] = 6] = "CLOUDY";
  return PdfAnnotationBorderStyle2;
})(PdfAnnotationBorderStyle || {});
var PdfPageObjectType = /* @__PURE__ */ ((PdfPageObjectType2) => {
  PdfPageObjectType2[PdfPageObjectType2["UNKNOWN"] = 0] = "UNKNOWN";
  PdfPageObjectType2[PdfPageObjectType2["TEXT"] = 1] = "TEXT";
  PdfPageObjectType2[PdfPageObjectType2["PATH"] = 2] = "PATH";
  PdfPageObjectType2[PdfPageObjectType2["IMAGE"] = 3] = "IMAGE";
  PdfPageObjectType2[PdfPageObjectType2["SHADING"] = 4] = "SHADING";
  PdfPageObjectType2[PdfPageObjectType2["FORM"] = 5] = "FORM";
  return PdfPageObjectType2;
})(PdfPageObjectType || {});
const PdfAnnotationFlagName = Object.freeze({
  [
    1
    /* INVISIBLE */
  ]: "invisible",
  [
    2
    /* HIDDEN */
  ]: "hidden",
  [
    4
    /* PRINT */
  ]: "print",
  [
    8
    /* NO_ZOOM */
  ]: "noZoom",
  [
    16
    /* NO_ROTATE */
  ]: "noRotate",
  [
    32
    /* NO_VIEW */
  ]: "noView",
  [
    64
    /* READ_ONLY */
  ]: "readOnly",
  [
    128
    /* LOCKED */
  ]: "locked",
  [
    256
    /* TOGGLE_NOVIEW */
  ]: "toggleNoView"
});
const PdfAnnotationFlagValue = Object.entries(
  PdfAnnotationFlagName
).reduce(
  (acc, [bit, name]) => {
    acc[name] = Number(bit);
    return acc;
  },
  {}
);
function flagsToNames(raw) {
  return Object.keys(PdfAnnotationFlagName).filter((flag) => (raw & flag) !== 0).map((flag) => PdfAnnotationFlagName[flag]);
}
function namesToFlags(names) {
  return names.reduce(
    (mask, name) => mask | PdfAnnotationFlagValue[name],
    0
    /* NONE */
  );
}
var FontCharset = /* @__PURE__ */ ((FontCharset2) => {
  FontCharset2[FontCharset2["ANSI"] = 0] = "ANSI";
  FontCharset2[FontCharset2["DEFAULT"] = 1] = "DEFAULT";
  FontCharset2[FontCharset2["SYMBOL"] = 2] = "SYMBOL";
  FontCharset2[FontCharset2["SHIFTJIS"] = 128] = "SHIFTJIS";
  FontCharset2[FontCharset2["HANGEUL"] = 129] = "HANGEUL";
  FontCharset2[FontCharset2["GB2312"] = 134] = "GB2312";
  FontCharset2[FontCharset2["CHINESEBIG5"] = 136] = "CHINESEBIG5";
  FontCharset2[FontCharset2["GREEK"] = 161] = "GREEK";
  FontCharset2[FontCharset2["VIETNAMESE"] = 163] = "VIETNAMESE";
  FontCharset2[FontCharset2["HEBREW"] = 177] = "HEBREW";
  FontCharset2[FontCharset2["ARABIC"] = 178] = "ARABIC";
  FontCharset2[FontCharset2["CYRILLIC"] = 204] = "CYRILLIC";
  FontCharset2[FontCharset2["THAI"] = 222] = "THAI";
  FontCharset2[FontCharset2["EASTERNEUROPEAN"] = 238] = "EASTERNEUROPEAN";
  return FontCharset2;
})(FontCharset || {});
var PdfPageFlattenFlag = /* @__PURE__ */ ((PdfPageFlattenFlag2) => {
  PdfPageFlattenFlag2[PdfPageFlattenFlag2["Display"] = 0] = "Display";
  PdfPageFlattenFlag2[PdfPageFlattenFlag2["Print"] = 1] = "Print";
  return PdfPageFlattenFlag2;
})(PdfPageFlattenFlag || {});
var PdfErrorCode = /* @__PURE__ */ ((PdfErrorCode2) => {
  PdfErrorCode2[PdfErrorCode2["Ok"] = 0] = "Ok";
  PdfErrorCode2[PdfErrorCode2["Unknown"] = 1] = "Unknown";
  PdfErrorCode2[PdfErrorCode2["NotFound"] = 2] = "NotFound";
  PdfErrorCode2[PdfErrorCode2["WrongFormat"] = 3] = "WrongFormat";
  PdfErrorCode2[PdfErrorCode2["Password"] = 4] = "Password";
  PdfErrorCode2[PdfErrorCode2["Security"] = 5] = "Security";
  PdfErrorCode2[PdfErrorCode2["PageError"] = 6] = "PageError";
  PdfErrorCode2[PdfErrorCode2["XFALoad"] = 7] = "XFALoad";
  PdfErrorCode2[PdfErrorCode2["XFALayout"] = 8] = "XFALayout";
  PdfErrorCode2[PdfErrorCode2["Cancelled"] = 9] = "Cancelled";
  PdfErrorCode2[PdfErrorCode2["Initialization"] = 10] = "Initialization";
  PdfErrorCode2[PdfErrorCode2["NotReady"] = 11] = "NotReady";
  PdfErrorCode2[PdfErrorCode2["NotSupport"] = 12] = "NotSupport";
  PdfErrorCode2[PdfErrorCode2["LoadDoc"] = 13] = "LoadDoc";
  PdfErrorCode2[PdfErrorCode2["DocNotOpen"] = 14] = "DocNotOpen";
  PdfErrorCode2[PdfErrorCode2["CantCloseDoc"] = 15] = "CantCloseDoc";
  PdfErrorCode2[PdfErrorCode2["CantCreateNewDoc"] = 16] = "CantCreateNewDoc";
  PdfErrorCode2[PdfErrorCode2["CantImportPages"] = 17] = "CantImportPages";
  PdfErrorCode2[PdfErrorCode2["CantCreateAnnot"] = 18] = "CantCreateAnnot";
  PdfErrorCode2[PdfErrorCode2["CantSetAnnotRect"] = 19] = "CantSetAnnotRect";
  PdfErrorCode2[PdfErrorCode2["CantSetAnnotContent"] = 20] = "CantSetAnnotContent";
  PdfErrorCode2[PdfErrorCode2["CantRemoveInkList"] = 21] = "CantRemoveInkList";
  PdfErrorCode2[PdfErrorCode2["CantAddInkStoke"] = 22] = "CantAddInkStoke";
  PdfErrorCode2[PdfErrorCode2["CantReadAttachmentSize"] = 23] = "CantReadAttachmentSize";
  PdfErrorCode2[PdfErrorCode2["CantReadAttachmentContent"] = 24] = "CantReadAttachmentContent";
  PdfErrorCode2[PdfErrorCode2["CantFocusAnnot"] = 25] = "CantFocusAnnot";
  PdfErrorCode2[PdfErrorCode2["CantSelectText"] = 26] = "CantSelectText";
  PdfErrorCode2[PdfErrorCode2["CantSelectOption"] = 27] = "CantSelectOption";
  PdfErrorCode2[PdfErrorCode2["CantCheckField"] = 28] = "CantCheckField";
  PdfErrorCode2[PdfErrorCode2["CantSetAnnotString"] = 29] = "CantSetAnnotString";
  return PdfErrorCode2;
})(PdfErrorCode || {});
class PdfTaskHelper {
  /**
   * Create a task
   * @returns new task
   */
  static create() {
    return new Task();
  }
  /**
   * Create a task that has been resolved with value
   * @param result - resolved value
   * @returns resolved task
   */
  static resolve(result) {
    const task = new Task();
    task.resolve(result);
    return task;
  }
  /**
   * Create a task that has been rejected with error
   * @param reason - rejected error
   * @returns rejected task
   */
  static reject(reason) {
    const task = new Task();
    task.reject(reason);
    return task;
  }
  /**
   * Create a task that has been aborted with error
   * @param reason - aborted error
   * @returns aborted task
   */
  static abort(reason) {
    const task = new Task();
    task.reject(reason);
    return task;
  }
}
function pdfColorToWebColor(c) {
  const clamp = (n) => Math.max(0, Math.min(255, n));
  const toHex = (n) => clamp(n).toString(16).padStart(2, "0");
  return \`#\${toHex(c.red)}\${toHex(c.green)}\${toHex(c.blue)}\`;
}
function webColorToPdfColor(color) {
  if (/^#?[0-9a-f]{3}$/i.test(color)) {
    color = color.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "#$1$1$2$2$3$3").toLowerCase();
  }
  const [, r, g, b] = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color) ?? (() => {
    throw new Error(\`Invalid hex colour: "\${color}"\`);
  })();
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16)
  };
}
function pdfAlphaToWebOpacity(alpha) {
  const clamp = (n) => Math.max(0, Math.min(255, n));
  return clamp(alpha) / 255;
}
function webOpacityToPdfAlpha(opacity) {
  const clamp = (n, hi = 255) => Math.max(0, Math.min(hi, n));
  return clamp(Math.round(opacity * 255));
}
function pdfDateToDate(pdf) {
  if (!(pdf == null ? void 0 : pdf.startsWith("D:")) || pdf.length < 16) return;
  const y = +pdf.slice(2, 6);
  const mo = +pdf.slice(6, 8) - 1;
  const d = +pdf.slice(8, 10);
  const H = +pdf.slice(10, 12);
  const M = +pdf.slice(12, 14);
  const S = +pdf.slice(14, 16);
  return new Date(Date.UTC(y, mo, d, H, M, S));
}
function dateToPdfDate(date = /* @__PURE__ */ new Date()) {
  const z = (n, len = 2) => n.toString().padStart(len, "0");
  const YYYY = date.getUTCFullYear();
  const MM = z(date.getUTCMonth() + 1);
  const DD = z(date.getUTCDate());
  const HH = z(date.getUTCHours());
  const mm = z(date.getUTCMinutes());
  const SS = z(date.getUTCSeconds());
  return \`D:\${YYYY}\${MM}\${DD}\${HH}\${mm}\${SS}\`;
}
const TEXT_ALIGNMENT_INFOS = Object.freeze([
  { id: PdfTextAlignment.Left, label: "Left", css: "left" },
  { id: PdfTextAlignment.Center, label: "Center", css: "center" },
  { id: PdfTextAlignment.Right, label: "Right", css: "right" }
]);
TEXT_ALIGNMENT_INFOS.reduce(
  (m, info) => {
    m[info.id] = info;
    return m;
  },
  {}
);
TEXT_ALIGNMENT_INFOS.reduce(
  (m, info) => {
    m[info.css] = info.id;
    return m;
  },
  {}
);
TEXT_ALIGNMENT_INFOS.map((info) => ({
  value: info.id,
  label: info.label
}));
var PdfStandardFontFamily = /* @__PURE__ */ ((PdfStandardFontFamily2) => {
  PdfStandardFontFamily2["Courier"] = "Courier";
  PdfStandardFontFamily2["Helvetica"] = "Helvetica";
  PdfStandardFontFamily2["Times"] = "Times";
  PdfStandardFontFamily2["Symbol"] = "Symbol";
  PdfStandardFontFamily2["ZapfDingbats"] = "ZapfDingbats";
  PdfStandardFontFamily2["Unknown"] = "Unknown";
  return PdfStandardFontFamily2;
})(PdfStandardFontFamily || {});
PdfStandardFont.Helvetica;
const HELVETICA_DESC = {
  id: PdfStandardFont.Helvetica,
  family: "Helvetica",
  bold: false,
  italic: false,
  label: "Helvetica",
  css: "Helvetica, Arial, sans-serif"
};
const STANDARD_FONT_DESCRIPTORS = Object.freeze([
  {
    id: PdfStandardFont.Courier,
    family: "Courier",
    bold: false,
    italic: false,
    label: "Courier",
    css: "Courier, monospace"
  },
  {
    id: PdfStandardFont.Courier_Bold,
    family: "Courier",
    bold: true,
    italic: false,
    label: "Courier Bold",
    css: "Courier, monospace"
  },
  {
    id: PdfStandardFont.Courier_BoldOblique,
    family: "Courier",
    bold: true,
    italic: true,
    label: "Courier Bold Oblique",
    css: "Courier, monospace"
  },
  {
    id: PdfStandardFont.Courier_Oblique,
    family: "Courier",
    bold: false,
    italic: true,
    label: "Courier Oblique",
    css: "Courier, monospace"
  },
  HELVETICA_DESC,
  {
    id: PdfStandardFont.Helvetica_Bold,
    family: "Helvetica",
    bold: true,
    italic: false,
    label: "Helvetica Bold",
    css: "Helvetica, Arial, sans-serif"
  },
  {
    id: PdfStandardFont.Helvetica_BoldOblique,
    family: "Helvetica",
    bold: true,
    italic: true,
    label: "Helvetica Bold Oblique",
    css: "Helvetica, Arial, sans-serif"
  },
  {
    id: PdfStandardFont.Helvetica_Oblique,
    family: "Helvetica",
    bold: false,
    italic: true,
    label: "Helvetica Oblique",
    css: "Helvetica, Arial, sans-serif"
  },
  {
    id: PdfStandardFont.Times_Roman,
    family: "Times",
    bold: false,
    italic: false,
    label: "Times Roman",
    css: '"Times New Roman", Times, serif'
  },
  {
    id: PdfStandardFont.Times_Bold,
    family: "Times",
    bold: true,
    italic: false,
    label: "Times Bold",
    css: '"Times New Roman", Times, serif'
  },
  {
    id: PdfStandardFont.Times_BoldItalic,
    family: "Times",
    bold: true,
    italic: true,
    label: "Times Bold Italic",
    css: '"Times New Roman", Times, serif'
  },
  {
    id: PdfStandardFont.Times_Italic,
    family: "Times",
    bold: false,
    italic: true,
    label: "Times Italic",
    css: '"Times New Roman", Times, serif'
  },
  {
    id: PdfStandardFont.Symbol,
    family: "Symbol",
    bold: false,
    italic: false,
    label: "Symbol",
    css: "Symbol, serif"
  },
  {
    id: PdfStandardFont.ZapfDingbats,
    family: "ZapfDingbats",
    bold: false,
    italic: false,
    label: "Zapf Dingbats",
    css: "ZapfDingbats, serif"
  }
]);
STANDARD_FONT_DESCRIPTORS.reduce((m, d) => (m[d.id] = d, m), {});
const familyStyleToId = /* @__PURE__ */ new Map();
for (const d of STANDARD_FONT_DESCRIPTORS) {
  familyStyleToId.set(\`\${d.family}_\${d.bold}_\${d.italic}\`, d.id);
}
Object.values(PdfStandardFontFamily).filter(
  (f) => f !== "Unknown"
  /* Unknown */
).map((family) => ({ value: family, label: family }));
[
  ...new Set(STANDARD_FONT_DESCRIPTORS.map((d) => d.family))
];
const BLEND_MODE_INFOS = Object.freeze([
  { id: PdfBlendMode.Normal, label: "Normal", css: "normal" },
  { id: PdfBlendMode.Multiply, label: "Multiply", css: "multiply" },
  { id: PdfBlendMode.Screen, label: "Screen", css: "screen" },
  { id: PdfBlendMode.Overlay, label: "Overlay", css: "overlay" },
  { id: PdfBlendMode.Darken, label: "Darken", css: "darken" },
  { id: PdfBlendMode.Lighten, label: "Lighten", css: "lighten" },
  { id: PdfBlendMode.ColorDodge, label: "Color Dodge", css: "color-dodge" },
  { id: PdfBlendMode.ColorBurn, label: "Color Burn", css: "color-burn" },
  { id: PdfBlendMode.HardLight, label: "Hard Light", css: "hard-light" },
  { id: PdfBlendMode.SoftLight, label: "Soft Light", css: "soft-light" },
  { id: PdfBlendMode.Difference, label: "Difference", css: "difference" },
  { id: PdfBlendMode.Exclusion, label: "Exclusion", css: "exclusion" },
  { id: PdfBlendMode.Hue, label: "Hue", css: "hue" },
  { id: PdfBlendMode.Saturation, label: "Saturation", css: "saturation" },
  { id: PdfBlendMode.Color, label: "Color", css: "color" },
  { id: PdfBlendMode.Luminosity, label: "Luminosity", css: "luminosity" }
]);
BLEND_MODE_INFOS.reduce(
  (m, info) => {
    m[info.id] = info;
    return m;
  },
  {}
);
BLEND_MODE_INFOS.reduce(
  (m, info) => {
    m[info.css] = info.id;
    return m;
  },
  {}
);
BLEND_MODE_INFOS.map((info) => ({
  value: info.id,
  label: info.label
}));
BLEND_MODE_INFOS.map((info) => info.id);
function deserializeLogger(serialized) {
  var _a, _b, _c;
  switch (serialized.type) {
    case "noop":
      return new NoopLogger();
    case "console":
      return new ConsoleLogger();
    case "perf":
      return new PerfLogger();
    case "level":
      if (!((_a = serialized.config) == null ? void 0 : _a.logger) || ((_b = serialized.config) == null ? void 0 : _b.level) === void 0) {
        throw new Error("LevelLogger requires logger and level in config");
      }
      return new LevelLogger(deserializeLogger(serialized.config.logger), serialized.config.level);
    case "all":
      if (!((_c = serialized.config) == null ? void 0 : _c.loggers)) {
        throw new Error("AllLogger requires loggers array in config");
      }
      return new AllLogger(serialized.config.loggers.map(deserializeLogger));
    default:
      return new NoopLogger();
  }
}
const V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function isUuidV4(str) {
  return V4_REGEX.test(str);
}
function getRandomBytes(len) {
  var _a;
  if (typeof ((_a = globalThis.crypto) == null ? void 0 : _a.getRandomValues) === "function") {
    return globalThis.crypto.getRandomValues(new Uint8Array(len));
  }
  if (typeof require === "function") {
    try {
      const { randomBytes } = require("crypto");
      return randomBytes(len);
    } catch {
    }
  }
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = Math.floor(Math.random() * 256);
  return bytes;
}
function uuidV4() {
  var _a;
  if (typeof ((_a = globalThis.crypto) == null ? void 0 : _a.randomUUID) === "function") {
    return globalThis.crypto.randomUUID();
  }
  const bytes = getRandomBytes(16);
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return \`\${hex.slice(0, 8)}-\${hex.slice(8, 12)}-\${hex.slice(12, 16)}-\${hex.slice(16, 20)}-\${hex.slice(20)}\`;
}
var createPdfium = (() => {
  var _scriptName = import.meta.url;
  return (async function(moduleArg = {}) {
    var moduleRtn;
    var Module = moduleArg;
    var readyPromiseResolve, readyPromiseReject;
    var readyPromise = new Promise((resolve, reject) => {
      readyPromiseResolve = resolve;
      readyPromiseReject = reject;
    });
    var ENVIRONMENT_IS_WEB = typeof window == "object";
    var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";
    typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
    var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && true && !ENVIRONMENT_IS_WORKER;
    var moduleOverrides = Object.assign({}, Module);
    var thisProgram = "./this.program";
    var scriptDirectory = "";
    function locateFile(path) {
      if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory);
      }
      return scriptDirectory + path;
    }
    var readAsync, readBinary;
    if (ENVIRONMENT_IS_SHELL) {
      readBinary = (f) => {
        if (typeof readbuffer == "function") {
          return new Uint8Array(readbuffer(f));
        }
        let data = read(f, "binary");
        assert(typeof data == "object");
        return data;
      };
      readAsync = (f) => new Promise((resolve, reject) => {
        setTimeout(() => resolve(readBinary(f)));
      });
      globalThis.clearTimeout ?? (globalThis.clearTimeout = (id) => {
      });
      globalThis.setTimeout ?? (globalThis.setTimeout = (f) => typeof f == "function" ? f() : abort());
      if (typeof print != "undefined") {
        globalThis.console ?? (globalThis.console = {});
        console.log = print;
        console.warn = console.error = globalThis.printErr ?? print;
      }
    } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
      if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href;
      } else if (typeof document != "undefined" && document.currentScript) {
        scriptDirectory = document.currentScript.src;
      }
      if (_scriptName) {
        scriptDirectory = _scriptName;
      }
      if (scriptDirectory.startsWith("blob:")) {
        scriptDirectory = "";
      } else {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
      }
      {
        if (ENVIRONMENT_IS_WORKER) {
          readBinary = (url) => {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.responseType = "arraybuffer";
            xhr.send(null);
            return new Uint8Array(xhr.response);
          };
        }
        readAsync = (url) => fetch(url, { credentials: "same-origin" }).then((response) => {
          if (response.ok) {
            return response.arrayBuffer();
          }
          return Promise.reject(new Error(response.status + " : " + response.url));
        });
      }
    } else ;
    var out = Module["print"] || console.log.bind(console);
    var err = Module["printErr"] || console.error.bind(console);
    Object.assign(Module, moduleOverrides);
    moduleOverrides = null;
    if (Module["arguments"]) Module["arguments"];
    if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
    var wasmBinary = Module["wasmBinary"];
    var wasmMemory;
    var ABORT = false;
    function assert(condition, text) {
      if (!condition) {
        abort(text);
      }
    }
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var b = wasmMemory.buffer;
      Module["HEAP8"] = HEAP8 = new Int8Array(b);
      Module["HEAP16"] = HEAP16 = new Int16Array(b);
      Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
      Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
      Module["HEAP32"] = HEAP32 = new Int32Array(b);
      Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
      Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
      Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
    }
    var __ATPRERUN__ = [];
    var __ATINIT__ = [];
    var __ATPOSTRUN__ = [];
    function preRun() {
      var preRuns = Module["preRun"];
      if (preRuns) {
        if (typeof preRuns == "function") preRuns = [preRuns];
        preRuns.forEach(addOnPreRun);
      }
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      if (!Module["noFSInit"] && !FS.initialized) FS.init();
      FS.ignorePermissions = false;
      callRuntimeCallbacks(__ATINIT__);
    }
    function postRun() {
      var postRuns = Module["postRun"];
      if (postRuns) {
        if (typeof postRuns == "function") postRuns = [postRuns];
        postRuns.forEach(addOnPostRun);
      }
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(cb) {
      __ATPRERUN__.unshift(cb);
    }
    function addOnInit(cb) {
      __ATINIT__.unshift(cb);
    }
    function addOnPostRun(cb) {
      __ATPOSTRUN__.unshift(cb);
    }
    var runDependencies = 0;
    var dependenciesFulfilled = null;
    function getUniqueRunDependency(id) {
      return id;
    }
    function addRunDependency(id) {
      var _a;
      runDependencies++;
      (_a = Module["monitorRunDependencies"]) == null ? void 0 : _a.call(Module, runDependencies);
    }
    function removeRunDependency(id) {
      var _a;
      runDependencies--;
      (_a = Module["monitorRunDependencies"]) == null ? void 0 : _a.call(Module, runDependencies);
      if (runDependencies == 0) {
        if (dependenciesFulfilled) {
          var callback = dependenciesFulfilled;
          dependenciesFulfilled = null;
          callback();
        }
      }
    }
    function abort(what) {
      var _a;
      (_a = Module["onAbort"]) == null ? void 0 : _a.call(Module, what);
      what = "Aborted(" + what + ")";
      err(what);
      ABORT = true;
      what += ". Build with -sASSERTIONS for more info.";
      var e = new WebAssembly.RuntimeError(what);
      readyPromiseReject(e);
      throw e;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,";
    var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
    function findWasmBinary() {
      if (Module["locateFile"]) {
        var f = "pdfium.wasm";
        if (!isDataURI(f)) {
          return locateFile(f);
        }
        return f;
      }
      if (ENVIRONMENT_IS_SHELL) return "pdfium.wasm";
      return "pdfium.wasm";
    }
    var wasmBinaryFile;
    function getBinarySync(file) {
      if (file == wasmBinaryFile && wasmBinary) {
        return new Uint8Array(wasmBinary);
      }
      if (readBinary) {
        return readBinary(file);
      }
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(binaryFile) {
      if (!wasmBinary) {
        return readAsync(binaryFile).then((response) => new Uint8Array(response), () => getBinarySync(binaryFile));
      }
      return Promise.resolve().then(() => getBinarySync(binaryFile));
    }
    function instantiateArrayBuffer(binaryFile, imports, receiver) {
      return getBinaryPromise(binaryFile).then((binary) => WebAssembly.instantiate(binary, imports)).then(receiver, (reason) => {
        err(\`failed to asynchronously prepare wasm: \${reason}\`);
        abort(reason);
      });
    }
    function instantiateAsync(binary, binaryFile, imports, callback) {
      if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && true && typeof fetch == "function") {
        return fetch(binaryFile, { credentials: "same-origin" }).then((response) => {
          var result = WebAssembly.instantiateStreaming(response, imports);
          return result.then(callback, function(reason) {
            err(\`wasm streaming compile failed: \${reason}\`);
            err("falling back to ArrayBuffer instantiation");
            return instantiateArrayBuffer(binaryFile, imports, callback);
          });
        });
      }
      return instantiateArrayBuffer(binaryFile, imports, callback);
    }
    function getWasmImports() {
      return { a: wasmImports };
    }
    function createWasm() {
      var info = getWasmImports();
      function receiveInstance(instance, module) {
        wasmExports = instance.exports;
        Module["wasmExports"] = wasmExports;
        wasmMemory = wasmExports["N"];
        updateMemoryViews();
        wasmTable = wasmExports["P"];
        addOnInit(wasmExports["O"]);
        removeRunDependency();
        return wasmExports;
      }
      addRunDependency();
      function receiveInstantiationResult(result) {
        receiveInstance(result["instance"]);
      }
      if (Module["instantiateWasm"]) {
        try {
          return Module["instantiateWasm"](info, receiveInstance);
        } catch (e) {
          err(\`Module.instantiateWasm callback failed with error: \${e}\`);
          readyPromiseReject(e);
        }
      }
      wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
      instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
      return {};
    }
    var tempDouble;
    var tempI64;
    var callRuntimeCallbacks = (callbacks) => {
      callbacks.forEach((f) => f(Module));
    };
    function getValue(ptr, type = "i8") {
      if (type.endsWith("*")) type = "*";
      switch (type) {
        case "i1":
          return HEAP8[ptr];
        case "i8":
          return HEAP8[ptr];
        case "i16":
          return HEAP16[ptr >> 1];
        case "i32":
          return HEAP32[ptr >> 2];
        case "i64":
          abort("to do getValue(i64) use WASM_BIGINT");
        case "float":
          return HEAPF32[ptr >> 2];
        case "double":
          return HEAPF64[ptr >> 3];
        case "*":
          return HEAPU32[ptr >> 2];
        default:
          abort(\`invalid type for getValue: \${type}\`);
      }
    }
    Module["noExitRuntime"] || true;
    function setValue(ptr, value, type = "i8") {
      if (type.endsWith("*")) type = "*";
      switch (type) {
        case "i1":
          HEAP8[ptr] = value;
          break;
        case "i8":
          HEAP8[ptr] = value;
          break;
        case "i16":
          HEAP16[ptr >> 1] = value;
          break;
        case "i32":
          HEAP32[ptr >> 2] = value;
          break;
        case "i64":
          abort("to do setValue(i64) use WASM_BIGINT");
        case "float":
          HEAPF32[ptr >> 2] = value;
          break;
        case "double":
          HEAPF64[ptr >> 3] = value;
          break;
        case "*":
          HEAPU32[ptr >> 2] = value;
          break;
        default:
          abort(\`invalid type for setValue: \${type}\`);
      }
    }
    var stackRestore = (val) => __emscripten_stack_restore(val);
    var stackSave = () => _emscripten_stack_get_current();
    var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
    var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = "";
      while (idx < endPtr) {
        var u0 = heapOrArray[idx++];
        if (!(u0 & 128)) {
          str += String.fromCharCode(u0);
          continue;
        }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 224) == 192) {
          str += String.fromCharCode((u0 & 31) << 6 | u1);
          continue;
        }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 240) == 224) {
          u0 = (u0 & 15) << 12 | u1 << 6 | u2;
        } else {
          u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
        }
        if (u0 < 65536) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 65536;
          str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
        }
      }
      return str;
    };
    var UTF8ToString = (ptr, maxBytesToRead) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
    var ___assert_fail = (condition, filename, line, func) => {
      abort(\`Assertion failed: \${UTF8ToString(condition)}, at: \` + [filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function"]);
    };
    class ExceptionInfo {
      constructor(excPtr) {
        this.excPtr = excPtr;
        this.ptr = excPtr - 24;
      }
      set_type(type) {
        HEAPU32[this.ptr + 4 >> 2] = type;
      }
      get_type() {
        return HEAPU32[this.ptr + 4 >> 2];
      }
      set_destructor(destructor) {
        HEAPU32[this.ptr + 8 >> 2] = destructor;
      }
      get_destructor() {
        return HEAPU32[this.ptr + 8 >> 2];
      }
      set_caught(caught) {
        caught = caught ? 1 : 0;
        HEAP8[this.ptr + 12] = caught;
      }
      get_caught() {
        return HEAP8[this.ptr + 12] != 0;
      }
      set_rethrown(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[this.ptr + 13] = rethrown;
      }
      get_rethrown() {
        return HEAP8[this.ptr + 13] != 0;
      }
      init(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
      set_adjusted_ptr(adjustedPtr) {
        HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
      }
      get_adjusted_ptr() {
        return HEAPU32[this.ptr + 16 >> 2];
      }
    }
    var exceptionLast = 0;
    var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      info.init(type, destructor);
      exceptionLast = ptr;
      throw exceptionLast;
    };
    function syscallGetVarargI() {
      var ret = HEAP32[+SYSCALLS.varargs >> 2];
      SYSCALLS.varargs += 4;
      return ret;
    }
    var syscallGetVarargP = syscallGetVarargI;
    var PATH = { isAbs: (path) => path.charAt(0) === "/", splitPath: (filename) => {
      var splitPathRe = /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;
      return splitPathRe.exec(filename).slice(1);
    }, normalizeArray: (parts, allowAboveRoot) => {
      var up = 0;
      for (var i = parts.length - 1; i >= 0; i--) {
        var last = parts[i];
        if (last === ".") {
          parts.splice(i, 1);
        } else if (last === "..") {
          parts.splice(i, 1);
          up++;
        } else if (up) {
          parts.splice(i, 1);
          up--;
        }
      }
      if (allowAboveRoot) {
        for (; up; up--) {
          parts.unshift("..");
        }
      }
      return parts;
    }, normalize: (path) => {
      var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
      path = PATH.normalizeArray(path.split("/").filter((p) => !!p), !isAbsolute).join("/");
      if (!path && !isAbsolute) {
        path = ".";
      }
      if (path && trailingSlash) {
        path += "/";
      }
      return (isAbsolute ? "/" : "") + path;
    }, dirname: (path) => {
      var result = PATH.splitPath(path), root = result[0], dir = result[1];
      if (!root && !dir) {
        return ".";
      }
      if (dir) {
        dir = dir.substr(0, dir.length - 1);
      }
      return root + dir;
    }, basename: (path) => {
      if (path === "/") return "/";
      path = PATH.normalize(path);
      path = path.replace(/\\/$/, "");
      var lastSlash = path.lastIndexOf("/");
      if (lastSlash === -1) return path;
      return path.substr(lastSlash + 1);
    }, join: (...paths) => PATH.normalize(paths.join("/")), join2: (l, r) => PATH.normalize(l + "/" + r) };
    var initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
        return (view) => crypto.getRandomValues(view);
      }
      abort("initRandomDevice");
    };
    var randomFill = (view) => (randomFill = initRandomFill())(view);
    var PATH_FS = { resolve: (...args) => {
      var resolvedPath = "", resolvedAbsolute = false;
      for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path = i >= 0 ? args[i] : FS.cwd();
        if (typeof path != "string") {
          throw new TypeError("Arguments to path.resolve must be strings");
        } else if (!path) {
          return "";
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = PATH.isAbs(path);
      }
      resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
      return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
    }, relative: (from, to) => {
      from = PATH_FS.resolve(from).substr(1);
      to = PATH_FS.resolve(to).substr(1);
      function trim(arr) {
        var start = 0;
        for (; start < arr.length; start++) {
          if (arr[start] !== "") break;
        }
        var end = arr.length - 1;
        for (; end >= 0; end--) {
          if (arr[end] !== "") break;
        }
        if (start > end) return [];
        return arr.slice(start, end - start + 1);
      }
      var fromParts = trim(from.split("/"));
      var toParts = trim(to.split("/"));
      var length = Math.min(fromParts.length, toParts.length);
      var samePartsLength = length;
      for (var i = 0; i < length; i++) {
        if (fromParts[i] !== toParts[i]) {
          samePartsLength = i;
          break;
        }
      }
      var outputParts = [];
      for (var i = samePartsLength; i < fromParts.length; i++) {
        outputParts.push("..");
      }
      outputParts = outputParts.concat(toParts.slice(samePartsLength));
      return outputParts.join("/");
    } };
    var FS_stdin_getChar_buffer = [];
    var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        var c = str.charCodeAt(i);
        if (c <= 127) {
          len++;
        } else if (c <= 2047) {
          len += 2;
        } else if (c >= 55296 && c <= 57343) {
          len += 4;
          ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
    var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      if (!(maxBytesToWrite > 0)) return 0;
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1;
      for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
          var u1 = str.charCodeAt(++i);
          u = 65536 + ((u & 1023) << 10) | u1 & 1023;
        }
        if (u <= 127) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 2047) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 192 | u >> 6;
          heap[outIdx++] = 128 | u & 63;
        } else if (u <= 65535) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 224 | u >> 12;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        } else {
          if (outIdx + 3 >= endIdx) break;
          heap[outIdx++] = 240 | u >> 18;
          heap[outIdx++] = 128 | u >> 12 & 63;
          heap[outIdx++] = 128 | u >> 6 & 63;
          heap[outIdx++] = 128 | u & 63;
        }
      }
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
    function intArrayFromString(stringy, dontAddNull, length) {
      var len = lengthBytesUTF8(stringy) + 1;
      var u8array = new Array(len);
      var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
      u8array.length = numBytesWritten;
      return u8array;
    }
    var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (typeof window != "undefined" && typeof window.prompt == "function") {
          result = window.prompt("Input: ");
          if (result !== null) {
            result += "\\n";
          }
        } else if (typeof readline == "function") {
          result = readline();
          if (result) {
            result += "\\n";
          }
        } else ;
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result);
      }
      return FS_stdin_getChar_buffer.shift();
    };
    var TTY = { ttys: [], init() {
    }, shutdown() {
    }, register(dev, ops) {
      TTY.ttys[dev] = { input: [], output: [], ops };
      FS.registerDevice(dev, TTY.stream_ops);
    }, stream_ops: { open(stream) {
      var tty = TTY.ttys[stream.node.rdev];
      if (!tty) {
        throw new FS.ErrnoError(43);
      }
      stream.tty = tty;
      stream.seekable = false;
    }, close(stream) {
      stream.tty.ops.fsync(stream.tty);
    }, fsync(stream) {
      stream.tty.ops.fsync(stream.tty);
    }, read(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.get_char) {
        throw new FS.ErrnoError(60);
      }
      var bytesRead = 0;
      for (var i = 0; i < length; i++) {
        var result;
        try {
          result = stream.tty.ops.get_char(stream.tty);
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
        if (result === void 0 && bytesRead === 0) {
          throw new FS.ErrnoError(6);
        }
        if (result === null || result === void 0) break;
        bytesRead++;
        buffer[offset + i] = result;
      }
      if (bytesRead) {
        stream.node.timestamp = Date.now();
      }
      return bytesRead;
    }, write(stream, buffer, offset, length, pos) {
      if (!stream.tty || !stream.tty.ops.put_char) {
        throw new FS.ErrnoError(60);
      }
      try {
        for (var i = 0; i < length; i++) {
          stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
        }
      } catch (e) {
        throw new FS.ErrnoError(29);
      }
      if (length) {
        stream.node.timestamp = Date.now();
      }
      return i;
    } }, default_tty_ops: { get_char(tty) {
      return FS_stdin_getChar();
    }, put_char(tty, val) {
      if (val === null || val === 10) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    }, fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        out(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    }, ioctl_tcgets(tty) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets(tty, optional_actions, data) {
      return 0;
    }, ioctl_tiocgwinsz(tty) {
      return [24, 80];
    } }, default_tty1_ops: { put_char(tty, val) {
      if (val === null || val === 10) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      } else {
        if (val != 0) tty.output.push(val);
      }
    }, fsync(tty) {
      if (tty.output && tty.output.length > 0) {
        err(UTF8ArrayToString(tty.output));
        tty.output = [];
      }
    } } };
    var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
    };
    var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
    var mmapAlloc = (size) => {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (ptr) zeroMemory(ptr, size);
      return ptr;
    };
    var MEMFS = { ops_table: null, mount(mount) {
      return MEMFS.createNode(null, "/", 16384 | 511, 0);
    }, createNode(parent, name, mode, dev) {
      if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
        throw new FS.ErrnoError(63);
      }
      MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
      var node = FS.createNode(parent, name, mode, dev);
      if (FS.isDir(node.mode)) {
        node.node_ops = MEMFS.ops_table.dir.node;
        node.stream_ops = MEMFS.ops_table.dir.stream;
        node.contents = {};
      } else if (FS.isFile(node.mode)) {
        node.node_ops = MEMFS.ops_table.file.node;
        node.stream_ops = MEMFS.ops_table.file.stream;
        node.usedBytes = 0;
        node.contents = null;
      } else if (FS.isLink(node.mode)) {
        node.node_ops = MEMFS.ops_table.link.node;
        node.stream_ops = MEMFS.ops_table.link.stream;
      } else if (FS.isChrdev(node.mode)) {
        node.node_ops = MEMFS.ops_table.chrdev.node;
        node.stream_ops = MEMFS.ops_table.chrdev.stream;
      }
      node.timestamp = Date.now();
      if (parent) {
        parent.contents[name] = node;
        parent.timestamp = node.timestamp;
      }
      return node;
    }, getFileDataAsTypedArray(node) {
      if (!node.contents) return new Uint8Array(0);
      if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
      return new Uint8Array(node.contents);
    }, expandFileStorage(node, newCapacity) {
      var prevCapacity = node.contents ? node.contents.length : 0;
      if (prevCapacity >= newCapacity) return;
      var CAPACITY_DOUBLING_MAX = 1024 * 1024;
      newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
      if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
      var oldContents = node.contents;
      node.contents = new Uint8Array(newCapacity);
      if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
    }, resizeFileStorage(node, newSize) {
      if (node.usedBytes == newSize) return;
      if (newSize == 0) {
        node.contents = null;
        node.usedBytes = 0;
      } else {
        var oldContents = node.contents;
        node.contents = new Uint8Array(newSize);
        if (oldContents) {
          node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
        }
        node.usedBytes = newSize;
      }
    }, node_ops: { getattr(node) {
      var attr = {};
      attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
      attr.ino = node.id;
      attr.mode = node.mode;
      attr.nlink = 1;
      attr.uid = 0;
      attr.gid = 0;
      attr.rdev = node.rdev;
      if (FS.isDir(node.mode)) {
        attr.size = 4096;
      } else if (FS.isFile(node.mode)) {
        attr.size = node.usedBytes;
      } else if (FS.isLink(node.mode)) {
        attr.size = node.link.length;
      } else {
        attr.size = 0;
      }
      attr.atime = new Date(node.timestamp);
      attr.mtime = new Date(node.timestamp);
      attr.ctime = new Date(node.timestamp);
      attr.blksize = 4096;
      attr.blocks = Math.ceil(attr.size / attr.blksize);
      return attr;
    }, setattr(node, attr) {
      if (attr.mode !== void 0) {
        node.mode = attr.mode;
      }
      if (attr.timestamp !== void 0) {
        node.timestamp = attr.timestamp;
      }
      if (attr.size !== void 0) {
        MEMFS.resizeFileStorage(node, attr.size);
      }
    }, lookup(parent, name) {
      throw FS.genericErrors[44];
    }, mknod(parent, name, mode, dev) {
      return MEMFS.createNode(parent, name, mode, dev);
    }, rename(old_node, new_dir, new_name) {
      if (FS.isDir(old_node.mode)) {
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
        }
        if (new_node) {
          for (var i in new_node.contents) {
            throw new FS.ErrnoError(55);
          }
        }
      }
      delete old_node.parent.contents[old_node.name];
      old_node.parent.timestamp = Date.now();
      old_node.name = new_name;
      new_dir.contents[new_name] = old_node;
      new_dir.timestamp = old_node.parent.timestamp;
    }, unlink(parent, name) {
      delete parent.contents[name];
      parent.timestamp = Date.now();
    }, rmdir(parent, name) {
      var node = FS.lookupNode(parent, name);
      for (var i in node.contents) {
        throw new FS.ErrnoError(55);
      }
      delete parent.contents[name];
      parent.timestamp = Date.now();
    }, readdir(node) {
      var entries = [".", ".."];
      for (var key of Object.keys(node.contents)) {
        entries.push(key);
      }
      return entries;
    }, symlink(parent, newname, oldpath) {
      var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
      node.link = oldpath;
      return node;
    }, readlink(node) {
      if (!FS.isLink(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      return node.link;
    } }, stream_ops: { read(stream, buffer, offset, length, position) {
      var contents = stream.node.contents;
      if (position >= stream.node.usedBytes) return 0;
      var size = Math.min(stream.node.usedBytes - position, length);
      if (size > 8 && contents.subarray) {
        buffer.set(contents.subarray(position, position + size), offset);
      } else {
        for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
      }
      return size;
    }, write(stream, buffer, offset, length, position, canOwn) {
      if (buffer.buffer === HEAP8.buffer) {
        canOwn = false;
      }
      if (!length) return 0;
      var node = stream.node;
      node.timestamp = Date.now();
      if (buffer.subarray && (!node.contents || node.contents.subarray)) {
        if (canOwn) {
          node.contents = buffer.subarray(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (node.usedBytes === 0 && position === 0) {
          node.contents = buffer.slice(offset, offset + length);
          node.usedBytes = length;
          return length;
        } else if (position + length <= node.usedBytes) {
          node.contents.set(buffer.subarray(offset, offset + length), position);
          return length;
        }
      }
      MEMFS.expandFileStorage(node, position + length);
      if (node.contents.subarray && buffer.subarray) {
        node.contents.set(buffer.subarray(offset, offset + length), position);
      } else {
        for (var i = 0; i < length; i++) {
          node.contents[position + i] = buffer[offset + i];
        }
      }
      node.usedBytes = Math.max(node.usedBytes, position + length);
      return length;
    }, llseek(stream, offset, whence) {
      var position = offset;
      if (whence === 1) {
        position += stream.position;
      } else if (whence === 2) {
        if (FS.isFile(stream.node.mode)) {
          position += stream.node.usedBytes;
        }
      }
      if (position < 0) {
        throw new FS.ErrnoError(28);
      }
      return position;
    }, allocate(stream, offset, length) {
      MEMFS.expandFileStorage(stream.node, offset + length);
      stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
    }, mmap(stream, length, position, prot, flags) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      var ptr;
      var allocated;
      var contents = stream.node.contents;
      if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
        allocated = false;
        ptr = contents.byteOffset;
      } else {
        allocated = true;
        ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        if (contents) {
          if (position > 0 || position + length < contents.length) {
            if (contents.subarray) {
              contents = contents.subarray(position, position + length);
            } else {
              contents = Array.prototype.slice.call(contents, position, position + length);
            }
          }
          HEAP8.set(contents, ptr);
        }
      }
      return { ptr, allocated };
    }, msync(stream, buffer, offset, length, mmapFlags) {
      MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
      return 0;
    } } };
    var asyncLoad = (url, onload, onerror, noRunDep) => {
      var dep = getUniqueRunDependency(\`al \${url}\`);
      readAsync(url).then((arrayBuffer) => {
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency();
      }, (err2) => {
        if (onerror) {
          onerror();
        } else {
          throw \`Loading data file "\${url}" failed.\`;
        }
      });
      if (dep) addRunDependency();
    };
    var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
    var preloadPlugins = Module["preloadPlugins"] || [];
    var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      if (typeof Browser != "undefined") Browser.init();
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin["canHandle"](fullname)) {
          plugin["handle"](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
    var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      function processData(byteArray) {
        function finish(byteArray2) {
          preFinish == null ? void 0 : preFinish();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray2, canRead, canWrite, canOwn);
          }
          onload == null ? void 0 : onload();
          removeRunDependency();
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          onerror == null ? void 0 : onerror();
          removeRunDependency();
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency();
      if (typeof url == "string") {
        asyncLoad(url, processData, onerror);
      } else {
        processData(url);
      }
    };
    var FS_modeStringToFlags = (str) => {
      var flagModes = { r: 0, "r+": 2, w: 512 | 64 | 1, "w+": 512 | 64 | 2, a: 1024 | 64 | 1, "a+": 1024 | 64 | 2 };
      var flags = flagModes[str];
      if (typeof flags == "undefined") {
        throw new Error(\`Unknown file open mode: \${str}\`);
      }
      return flags;
    };
    var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
    var FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class {
      constructor(errno) {
        this.name = "ErrnoError";
        this.errno = errno;
      }
    }, genericErrors: {}, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
      constructor() {
        this.shared = {};
      }
      get object() {
        return this.node;
      }
      set object(val) {
        this.node = val;
      }
      get isRead() {
        return (this.flags & 2097155) !== 1;
      }
      get isWrite() {
        return (this.flags & 2097155) !== 0;
      }
      get isAppend() {
        return this.flags & 1024;
      }
      get flags() {
        return this.shared.flags;
      }
      set flags(val) {
        this.shared.flags = val;
      }
      get position() {
        return this.shared.position;
      }
      set position(val) {
        this.shared.position = val;
      }
    }, FSNode: class {
      constructor(parent, name, mode, rdev) {
        if (!parent) {
          parent = this;
        }
        this.parent = parent;
        this.mount = parent.mount;
        this.mounted = null;
        this.id = FS.nextInode++;
        this.name = name;
        this.mode = mode;
        this.node_ops = {};
        this.stream_ops = {};
        this.rdev = rdev;
        this.readMode = 292 | 73;
        this.writeMode = 146;
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(val) {
        val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(val) {
        val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return FS.isDir(this.mode);
      }
      get isDevice() {
        return FS.isChrdev(this.mode);
      }
    }, lookupPath(path, opts = {}) {
      path = PATH_FS.resolve(path);
      if (!path) return { path: "", node: null };
      var defaults = { follow_mount: true, recurse_count: 0 };
      opts = Object.assign(defaults, opts);
      if (opts.recurse_count > 8) {
        throw new FS.ErrnoError(32);
      }
      var parts = path.split("/").filter((p) => !!p);
      var current = FS.root;
      var current_path = "/";
      for (var i = 0; i < parts.length; i++) {
        var islast = i === parts.length - 1;
        if (islast && opts.parent) {
          break;
        }
        current = FS.lookupNode(current, parts[i]);
        current_path = PATH.join2(current_path, parts[i]);
        if (FS.isMountpoint(current)) {
          if (!islast || islast && opts.follow_mount) {
            current = current.mounted.root;
          }
        }
        if (!islast || opts.follow) {
          var count = 0;
          while (FS.isLink(current.mode)) {
            var link = FS.readlink(current_path);
            current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
            var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
            current = lookup.node;
            if (count++ > 40) {
              throw new FS.ErrnoError(32);
            }
          }
        }
      }
      return { path: current_path, node: current };
    }, getPath(node) {
      var path;
      while (true) {
        if (FS.isRoot(node)) {
          var mount = node.mount.mountpoint;
          if (!path) return mount;
          return mount[mount.length - 1] !== "/" ? \`\${mount}/\${path}\` : mount + path;
        }
        path = path ? \`\${node.name}/\${path}\` : node.name;
        node = node.parent;
      }
    }, hashName(parentid, name) {
      var hash = 0;
      for (var i = 0; i < name.length; i++) {
        hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
      }
      return (parentid + hash >>> 0) % FS.nameTable.length;
    }, hashAddNode(node) {
      var hash = FS.hashName(node.parent.id, node.name);
      node.name_next = FS.nameTable[hash];
      FS.nameTable[hash] = node;
    }, hashRemoveNode(node) {
      var hash = FS.hashName(node.parent.id, node.name);
      if (FS.nameTable[hash] === node) {
        FS.nameTable[hash] = node.name_next;
      } else {
        var current = FS.nameTable[hash];
        while (current) {
          if (current.name_next === node) {
            current.name_next = node.name_next;
            break;
          }
          current = current.name_next;
        }
      }
    }, lookupNode(parent, name) {
      var errCode = FS.mayLookup(parent);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      var hash = FS.hashName(parent.id, name);
      for (var node = FS.nameTable[hash]; node; node = node.name_next) {
        var nodeName = node.name;
        if (node.parent.id === parent.id && nodeName === name) {
          return node;
        }
      }
      return FS.lookup(parent, name);
    }, createNode(parent, name, mode, rdev) {
      var node = new FS.FSNode(parent, name, mode, rdev);
      FS.hashAddNode(node);
      return node;
    }, destroyNode(node) {
      FS.hashRemoveNode(node);
    }, isRoot(node) {
      return node === node.parent;
    }, isMountpoint(node) {
      return !!node.mounted;
    }, isFile(mode) {
      return (mode & 61440) === 32768;
    }, isDir(mode) {
      return (mode & 61440) === 16384;
    }, isLink(mode) {
      return (mode & 61440) === 40960;
    }, isChrdev(mode) {
      return (mode & 61440) === 8192;
    }, isBlkdev(mode) {
      return (mode & 61440) === 24576;
    }, isFIFO(mode) {
      return (mode & 61440) === 4096;
    }, isSocket(mode) {
      return (mode & 49152) === 49152;
    }, flagsToPermissionString(flag) {
      var perms = ["r", "w", "rw"][flag & 3];
      if (flag & 512) {
        perms += "w";
      }
      return perms;
    }, nodePermissions(node, perms) {
      if (FS.ignorePermissions) {
        return 0;
      }
      if (perms.includes("r") && !(node.mode & 292)) {
        return 2;
      } else if (perms.includes("w") && !(node.mode & 146)) {
        return 2;
      } else if (perms.includes("x") && !(node.mode & 73)) {
        return 2;
      }
      return 0;
    }, mayLookup(dir) {
      if (!FS.isDir(dir.mode)) return 54;
      var errCode = FS.nodePermissions(dir, "x");
      if (errCode) return errCode;
      if (!dir.node_ops.lookup) return 2;
      return 0;
    }, mayCreate(dir, name) {
      try {
        var node = FS.lookupNode(dir, name);
        return 20;
      } catch (e) {
      }
      return FS.nodePermissions(dir, "wx");
    }, mayDelete(dir, name, isdir) {
      var node;
      try {
        node = FS.lookupNode(dir, name);
      } catch (e) {
        return e.errno;
      }
      var errCode = FS.nodePermissions(dir, "wx");
      if (errCode) {
        return errCode;
      }
      if (isdir) {
        if (!FS.isDir(node.mode)) {
          return 54;
        }
        if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
          return 10;
        }
      } else {
        if (FS.isDir(node.mode)) {
          return 31;
        }
      }
      return 0;
    }, mayOpen(node, flags) {
      if (!node) {
        return 44;
      }
      if (FS.isLink(node.mode)) {
        return 32;
      } else if (FS.isDir(node.mode)) {
        if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
          return 31;
        }
      }
      return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
    }, MAX_OPEN_FDS: 4096, nextfd() {
      for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
        if (!FS.streams[fd]) {
          return fd;
        }
      }
      throw new FS.ErrnoError(33);
    }, getStreamChecked(fd) {
      var stream = FS.getStream(fd);
      if (!stream) {
        throw new FS.ErrnoError(8);
      }
      return stream;
    }, getStream: (fd) => FS.streams[fd], createStream(stream, fd = -1) {
      stream = Object.assign(new FS.FSStream(), stream);
      if (fd == -1) {
        fd = FS.nextfd();
      }
      stream.fd = fd;
      FS.streams[fd] = stream;
      return stream;
    }, closeStream(fd) {
      FS.streams[fd] = null;
    }, dupStream(origStream, fd = -1) {
      var _a, _b;
      var stream = FS.createStream(origStream, fd);
      (_b = (_a = stream.stream_ops) == null ? void 0 : _a.dup) == null ? void 0 : _b.call(_a, stream);
      return stream;
    }, chrdev_stream_ops: { open(stream) {
      var _a, _b;
      var device = FS.getDevice(stream.node.rdev);
      stream.stream_ops = device.stream_ops;
      (_b = (_a = stream.stream_ops).open) == null ? void 0 : _b.call(_a, stream);
    }, llseek() {
      throw new FS.ErrnoError(70);
    } }, major: (dev) => dev >> 8, minor: (dev) => dev & 255, makedev: (ma, mi) => ma << 8 | mi, registerDevice(dev, ops) {
      FS.devices[dev] = { stream_ops: ops };
    }, getDevice: (dev) => FS.devices[dev], getMounts(mount) {
      var mounts = [];
      var check = [mount];
      while (check.length) {
        var m = check.pop();
        mounts.push(m);
        check.push(...m.mounts);
      }
      return mounts;
    }, syncfs(populate, callback) {
      if (typeof populate == "function") {
        callback = populate;
        populate = false;
      }
      FS.syncFSRequests++;
      if (FS.syncFSRequests > 1) {
        err(\`warning: \${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work\`);
      }
      var mounts = FS.getMounts(FS.root.mount);
      var completed = 0;
      function doCallback(errCode) {
        FS.syncFSRequests--;
        return callback(errCode);
      }
      function done(errCode) {
        if (errCode) {
          if (!done.errored) {
            done.errored = true;
            return doCallback(errCode);
          }
          return;
        }
        if (++completed >= mounts.length) {
          doCallback(null);
        }
      }
      mounts.forEach((mount) => {
        if (!mount.type.syncfs) {
          return done(null);
        }
        mount.type.syncfs(mount, populate, done);
      });
    }, mount(type, opts, mountpoint) {
      var root = mountpoint === "/";
      var pseudo = !mountpoint;
      var node;
      if (root && FS.root) {
        throw new FS.ErrnoError(10);
      } else if (!root && !pseudo) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
        mountpoint = lookup.path;
        node = lookup.node;
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        if (!FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
      }
      var mount = { type, opts, mountpoint, mounts: [] };
      var mountRoot = type.mount(mount);
      mountRoot.mount = mount;
      mount.root = mountRoot;
      if (root) {
        FS.root = mountRoot;
      } else if (node) {
        node.mounted = mount;
        if (node.mount) {
          node.mount.mounts.push(mount);
        }
      }
      return mountRoot;
    }, unmount(mountpoint) {
      var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
      if (!FS.isMountpoint(lookup.node)) {
        throw new FS.ErrnoError(28);
      }
      var node = lookup.node;
      var mount = node.mounted;
      var mounts = FS.getMounts(mount);
      Object.keys(FS.nameTable).forEach((hash) => {
        var current = FS.nameTable[hash];
        while (current) {
          var next = current.name_next;
          if (mounts.includes(current.mount)) {
            FS.destroyNode(current);
          }
          current = next;
        }
      });
      node.mounted = null;
      var idx = node.mount.mounts.indexOf(mount);
      node.mount.mounts.splice(idx, 1);
    }, lookup(parent, name) {
      return parent.node_ops.lookup(parent, name);
    }, mknod(path, mode, dev) {
      var lookup = FS.lookupPath(path, { parent: true });
      var parent = lookup.node;
      var name = PATH.basename(path);
      if (!name || name === "." || name === "..") {
        throw new FS.ErrnoError(28);
      }
      var errCode = FS.mayCreate(parent, name);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      if (!parent.node_ops.mknod) {
        throw new FS.ErrnoError(63);
      }
      return parent.node_ops.mknod(parent, name, mode, dev);
    }, create(path, mode) {
      mode = mode !== void 0 ? mode : 438;
      mode &= 4095;
      mode |= 32768;
      return FS.mknod(path, mode, 0);
    }, mkdir(path, mode) {
      mode = mode !== void 0 ? mode : 511;
      mode &= 511 | 512;
      mode |= 16384;
      return FS.mknod(path, mode, 0);
    }, mkdirTree(path, mode) {
      var dirs = path.split("/");
      var d = "";
      for (var i = 0; i < dirs.length; ++i) {
        if (!dirs[i]) continue;
        d += "/" + dirs[i];
        try {
          FS.mkdir(d, mode);
        } catch (e) {
          if (e.errno != 20) throw e;
        }
      }
    }, mkdev(path, mode, dev) {
      if (typeof dev == "undefined") {
        dev = mode;
        mode = 438;
      }
      mode |= 8192;
      return FS.mknod(path, mode, dev);
    }, symlink(oldpath, newpath) {
      if (!PATH_FS.resolve(oldpath)) {
        throw new FS.ErrnoError(44);
      }
      var lookup = FS.lookupPath(newpath, { parent: true });
      var parent = lookup.node;
      if (!parent) {
        throw new FS.ErrnoError(44);
      }
      var newname = PATH.basename(newpath);
      var errCode = FS.mayCreate(parent, newname);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      if (!parent.node_ops.symlink) {
        throw new FS.ErrnoError(63);
      }
      return parent.node_ops.symlink(parent, newname, oldpath);
    }, rename(old_path, new_path) {
      var old_dirname = PATH.dirname(old_path);
      var new_dirname = PATH.dirname(new_path);
      var old_name = PATH.basename(old_path);
      var new_name = PATH.basename(new_path);
      var lookup, old_dir, new_dir;
      lookup = FS.lookupPath(old_path, { parent: true });
      old_dir = lookup.node;
      lookup = FS.lookupPath(new_path, { parent: true });
      new_dir = lookup.node;
      if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
      if (old_dir.mount !== new_dir.mount) {
        throw new FS.ErrnoError(75);
      }
      var old_node = FS.lookupNode(old_dir, old_name);
      var relative = PATH_FS.relative(old_path, new_dirname);
      if (relative.charAt(0) !== ".") {
        throw new FS.ErrnoError(28);
      }
      relative = PATH_FS.relative(new_path, old_dirname);
      if (relative.charAt(0) !== ".") {
        throw new FS.ErrnoError(55);
      }
      var new_node;
      try {
        new_node = FS.lookupNode(new_dir, new_name);
      } catch (e) {
      }
      if (old_node === new_node) {
        return;
      }
      var isdir = FS.isDir(old_node.mode);
      var errCode = FS.mayDelete(old_dir, old_name, isdir);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      if (!old_dir.node_ops.rename) {
        throw new FS.ErrnoError(63);
      }
      if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
        throw new FS.ErrnoError(10);
      }
      if (new_dir !== old_dir) {
        errCode = FS.nodePermissions(old_dir, "w");
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
      }
      FS.hashRemoveNode(old_node);
      try {
        old_dir.node_ops.rename(old_node, new_dir, new_name);
        old_node.parent = new_dir;
      } catch (e) {
        throw e;
      } finally {
        FS.hashAddNode(old_node);
      }
    }, rmdir(path) {
      var lookup = FS.lookupPath(path, { parent: true });
      var parent = lookup.node;
      var name = PATH.basename(path);
      var node = FS.lookupNode(parent, name);
      var errCode = FS.mayDelete(parent, name, true);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      if (!parent.node_ops.rmdir) {
        throw new FS.ErrnoError(63);
      }
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      parent.node_ops.rmdir(parent, name);
      FS.destroyNode(node);
    }, readdir(path) {
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      if (!node.node_ops.readdir) {
        throw new FS.ErrnoError(54);
      }
      return node.node_ops.readdir(node);
    }, unlink(path) {
      var lookup = FS.lookupPath(path, { parent: true });
      var parent = lookup.node;
      if (!parent) {
        throw new FS.ErrnoError(44);
      }
      var name = PATH.basename(path);
      var node = FS.lookupNode(parent, name);
      var errCode = FS.mayDelete(parent, name, false);
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      if (!parent.node_ops.unlink) {
        throw new FS.ErrnoError(63);
      }
      if (FS.isMountpoint(node)) {
        throw new FS.ErrnoError(10);
      }
      parent.node_ops.unlink(parent, name);
      FS.destroyNode(node);
    }, readlink(path) {
      var lookup = FS.lookupPath(path);
      var link = lookup.node;
      if (!link) {
        throw new FS.ErrnoError(44);
      }
      if (!link.node_ops.readlink) {
        throw new FS.ErrnoError(28);
      }
      return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
    }, stat(path, dontFollow) {
      var lookup = FS.lookupPath(path, { follow: !dontFollow });
      var node = lookup.node;
      if (!node) {
        throw new FS.ErrnoError(44);
      }
      if (!node.node_ops.getattr) {
        throw new FS.ErrnoError(63);
      }
      return node.node_ops.getattr(node);
    }, lstat(path) {
      return FS.stat(path, true);
    }, chmod(path, mode, dontFollow) {
      var node;
      if (typeof path == "string") {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        node = lookup.node;
      } else {
        node = path;
      }
      if (!node.node_ops.setattr) {
        throw new FS.ErrnoError(63);
      }
      node.node_ops.setattr(node, { mode: mode & 4095 | node.mode & -4096, timestamp: Date.now() });
    }, lchmod(path, mode) {
      FS.chmod(path, mode, true);
    }, fchmod(fd, mode) {
      var stream = FS.getStreamChecked(fd);
      FS.chmod(stream.node, mode);
    }, chown(path, uid, gid, dontFollow) {
      var node;
      if (typeof path == "string") {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        node = lookup.node;
      } else {
        node = path;
      }
      if (!node.node_ops.setattr) {
        throw new FS.ErrnoError(63);
      }
      node.node_ops.setattr(node, { timestamp: Date.now() });
    }, lchown(path, uid, gid) {
      FS.chown(path, uid, gid, true);
    }, fchown(fd, uid, gid) {
      var stream = FS.getStreamChecked(fd);
      FS.chown(stream.node, uid, gid);
    }, truncate(path, len) {
      if (len < 0) {
        throw new FS.ErrnoError(28);
      }
      var node;
      if (typeof path == "string") {
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
      } else {
        node = path;
      }
      if (!node.node_ops.setattr) {
        throw new FS.ErrnoError(63);
      }
      if (FS.isDir(node.mode)) {
        throw new FS.ErrnoError(31);
      }
      if (!FS.isFile(node.mode)) {
        throw new FS.ErrnoError(28);
      }
      var errCode = FS.nodePermissions(node, "w");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      node.node_ops.setattr(node, { size: len, timestamp: Date.now() });
    }, ftruncate(fd, len) {
      var stream = FS.getStreamChecked(fd);
      if ((stream.flags & 2097155) === 0) {
        throw new FS.ErrnoError(28);
      }
      FS.truncate(stream.node, len);
    }, utime(path, atime, mtime) {
      var lookup = FS.lookupPath(path, { follow: true });
      var node = lookup.node;
      node.node_ops.setattr(node, { timestamp: Math.max(atime, mtime) });
    }, open(path, flags, mode) {
      if (path === "") {
        throw new FS.ErrnoError(44);
      }
      flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
      if (flags & 64) {
        mode = typeof mode == "undefined" ? 438 : mode;
        mode = mode & 4095 | 32768;
      } else {
        mode = 0;
      }
      var node;
      if (typeof path == "object") {
        node = path;
      } else {
        path = PATH.normalize(path);
        try {
          var lookup = FS.lookupPath(path, { follow: !(flags & 131072) });
          node = lookup.node;
        } catch (e) {
        }
      }
      var created = false;
      if (flags & 64) {
        if (node) {
          if (flags & 128) {
            throw new FS.ErrnoError(20);
          }
        } else {
          node = FS.mknod(path, mode, 0);
          created = true;
        }
      }
      if (!node) {
        throw new FS.ErrnoError(44);
      }
      if (FS.isChrdev(node.mode)) {
        flags &= -513;
      }
      if (flags & 65536 && !FS.isDir(node.mode)) {
        throw new FS.ErrnoError(54);
      }
      if (!created) {
        var errCode = FS.mayOpen(node, flags);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
      }
      if (flags & 512 && !created) {
        FS.truncate(node, 0);
      }
      flags &= -131713;
      var stream = FS.createStream({ node, path: FS.getPath(node), flags, seekable: true, position: 0, stream_ops: node.stream_ops, ungotten: [], error: false });
      if (stream.stream_ops.open) {
        stream.stream_ops.open(stream);
      }
      if (Module["logReadFiles"] && !(flags & 1)) {
        if (!(path in FS.readFiles)) {
          FS.readFiles[path] = 1;
        }
      }
      return stream;
    }, close(stream) {
      if (FS.isClosed(stream)) {
        throw new FS.ErrnoError(8);
      }
      if (stream.getdents) stream.getdents = null;
      try {
        if (stream.stream_ops.close) {
          stream.stream_ops.close(stream);
        }
      } catch (e) {
        throw e;
      } finally {
        FS.closeStream(stream.fd);
      }
      stream.fd = null;
    }, isClosed(stream) {
      return stream.fd === null;
    }, llseek(stream, offset, whence) {
      if (FS.isClosed(stream)) {
        throw new FS.ErrnoError(8);
      }
      if (!stream.seekable || !stream.stream_ops.llseek) {
        throw new FS.ErrnoError(70);
      }
      if (whence != 0 && whence != 1 && whence != 2) {
        throw new FS.ErrnoError(28);
      }
      stream.position = stream.stream_ops.llseek(stream, offset, whence);
      stream.ungotten = [];
      return stream.position;
    }, read(stream, buffer, offset, length, position) {
      if (length < 0 || position < 0) {
        throw new FS.ErrnoError(28);
      }
      if (FS.isClosed(stream)) {
        throw new FS.ErrnoError(8);
      }
      if ((stream.flags & 2097155) === 1) {
        throw new FS.ErrnoError(8);
      }
      if (FS.isDir(stream.node.mode)) {
        throw new FS.ErrnoError(31);
      }
      if (!stream.stream_ops.read) {
        throw new FS.ErrnoError(28);
      }
      var seeking = typeof position != "undefined";
      if (!seeking) {
        position = stream.position;
      } else if (!stream.seekable) {
        throw new FS.ErrnoError(70);
      }
      var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
      if (!seeking) stream.position += bytesRead;
      return bytesRead;
    }, write(stream, buffer, offset, length, position, canOwn) {
      if (length < 0 || position < 0) {
        throw new FS.ErrnoError(28);
      }
      if (FS.isClosed(stream)) {
        throw new FS.ErrnoError(8);
      }
      if ((stream.flags & 2097155) === 0) {
        throw new FS.ErrnoError(8);
      }
      if (FS.isDir(stream.node.mode)) {
        throw new FS.ErrnoError(31);
      }
      if (!stream.stream_ops.write) {
        throw new FS.ErrnoError(28);
      }
      if (stream.seekable && stream.flags & 1024) {
        FS.llseek(stream, 0, 2);
      }
      var seeking = typeof position != "undefined";
      if (!seeking) {
        position = stream.position;
      } else if (!stream.seekable) {
        throw new FS.ErrnoError(70);
      }
      var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
      if (!seeking) stream.position += bytesWritten;
      return bytesWritten;
    }, allocate(stream, offset, length) {
      if (FS.isClosed(stream)) {
        throw new FS.ErrnoError(8);
      }
      if (offset < 0 || length <= 0) {
        throw new FS.ErrnoError(28);
      }
      if ((stream.flags & 2097155) === 0) {
        throw new FS.ErrnoError(8);
      }
      if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      if (!stream.stream_ops.allocate) {
        throw new FS.ErrnoError(138);
      }
      stream.stream_ops.allocate(stream, offset, length);
    }, mmap(stream, length, position, prot, flags) {
      if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
        throw new FS.ErrnoError(2);
      }
      if ((stream.flags & 2097155) === 1) {
        throw new FS.ErrnoError(2);
      }
      if (!stream.stream_ops.mmap) {
        throw new FS.ErrnoError(43);
      }
      if (!length) {
        throw new FS.ErrnoError(28);
      }
      return stream.stream_ops.mmap(stream, length, position, prot, flags);
    }, msync(stream, buffer, offset, length, mmapFlags) {
      if (!stream.stream_ops.msync) {
        return 0;
      }
      return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
    }, ioctl(stream, cmd, arg) {
      if (!stream.stream_ops.ioctl) {
        throw new FS.ErrnoError(59);
      }
      return stream.stream_ops.ioctl(stream, cmd, arg);
    }, readFile(path, opts = {}) {
      opts.flags = opts.flags || 0;
      opts.encoding = opts.encoding || "binary";
      if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
        throw new Error(\`Invalid encoding type "\${opts.encoding}"\`);
      }
      var ret;
      var stream = FS.open(path, opts.flags);
      var stat = FS.stat(path);
      var length = stat.size;
      var buf = new Uint8Array(length);
      FS.read(stream, buf, 0, length, 0);
      if (opts.encoding === "utf8") {
        ret = UTF8ArrayToString(buf);
      } else if (opts.encoding === "binary") {
        ret = buf;
      }
      FS.close(stream);
      return ret;
    }, writeFile(path, data, opts = {}) {
      opts.flags = opts.flags || 577;
      var stream = FS.open(path, opts.flags, opts.mode);
      if (typeof data == "string") {
        var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
        var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
        FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
      } else if (ArrayBuffer.isView(data)) {
        FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
      } else {
        throw new Error("Unsupported data type");
      }
      FS.close(stream);
    }, cwd: () => FS.currentPath, chdir(path) {
      var lookup = FS.lookupPath(path, { follow: true });
      if (lookup.node === null) {
        throw new FS.ErrnoError(44);
      }
      if (!FS.isDir(lookup.node.mode)) {
        throw new FS.ErrnoError(54);
      }
      var errCode = FS.nodePermissions(lookup.node, "x");
      if (errCode) {
        throw new FS.ErrnoError(errCode);
      }
      FS.currentPath = lookup.path;
    }, createDefaultDirectories() {
      FS.mkdir("/tmp");
      FS.mkdir("/home");
      FS.mkdir("/home/web_user");
    }, createDefaultDevices() {
      FS.mkdir("/dev");
      FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (stream, buffer, offset, length, pos) => length });
      FS.mkdev("/dev/null", FS.makedev(1, 3));
      TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
      TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
      FS.mkdev("/dev/tty", FS.makedev(5, 0));
      FS.mkdev("/dev/tty1", FS.makedev(6, 0));
      var randomBuffer = new Uint8Array(1024), randomLeft = 0;
      var randomByte = () => {
        if (randomLeft === 0) {
          randomLeft = randomFill(randomBuffer).byteLength;
        }
        return randomBuffer[--randomLeft];
      };
      FS.createDevice("/dev", "random", randomByte);
      FS.createDevice("/dev", "urandom", randomByte);
      FS.mkdir("/dev/shm");
      FS.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      FS.mkdir("/proc");
      var proc_self = FS.mkdir("/proc/self");
      FS.mkdir("/proc/self/fd");
      FS.mount({ mount() {
        var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
        node.node_ops = { lookup(parent, name) {
          var fd = +name;
          var stream = FS.getStreamChecked(fd);
          var ret = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => stream.path } };
          ret.parent = ret;
          return ret;
        } };
        return node;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(input, output, error) {
      if (input) {
        FS.createDevice("/dev", "stdin", input);
      } else {
        FS.symlink("/dev/tty", "/dev/stdin");
      }
      if (output) {
        FS.createDevice("/dev", "stdout", null, output);
      } else {
        FS.symlink("/dev/tty", "/dev/stdout");
      }
      if (error) {
        FS.createDevice("/dev", "stderr", null, error);
      } else {
        FS.symlink("/dev/tty1", "/dev/stderr");
      }
      FS.open("/dev/stdin", 0);
      FS.open("/dev/stdout", 1);
      FS.open("/dev/stderr", 1);
    }, staticInit() {
      [44].forEach((code) => {
        FS.genericErrors[code] = new FS.ErrnoError(code);
        FS.genericErrors[code].stack = "<generic error, no stack>";
      });
      FS.nameTable = new Array(4096);
      FS.mount(MEMFS, {}, "/");
      FS.createDefaultDirectories();
      FS.createDefaultDevices();
      FS.createSpecialDirectories();
      FS.filesystems = { MEMFS };
    }, init(input, output, error) {
      FS.initialized = true;
      input ?? (input = Module["stdin"]);
      output ?? (output = Module["stdout"]);
      error ?? (error = Module["stderr"]);
      FS.createStandardStreams(input, output, error);
    }, quit() {
      FS.initialized = false;
      for (var i = 0; i < FS.streams.length; i++) {
        var stream = FS.streams[i];
        if (!stream) {
          continue;
        }
        FS.close(stream);
      }
    }, findObject(path, dontResolveLastLink) {
      var ret = FS.analyzePath(path, dontResolveLastLink);
      if (!ret.exists) {
        return null;
      }
      return ret.object;
    }, analyzePath(path, dontResolveLastLink) {
      try {
        var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
        path = lookup.path;
      } catch (e) {
      }
      var ret = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
      try {
        var lookup = FS.lookupPath(path, { parent: true });
        ret.parentExists = true;
        ret.parentPath = lookup.path;
        ret.parentObject = lookup.node;
        ret.name = PATH.basename(path);
        lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
        ret.exists = true;
        ret.path = lookup.path;
        ret.object = lookup.node;
        ret.name = lookup.node.name;
        ret.isRoot = lookup.path === "/";
      } catch (e) {
        ret.error = e.errno;
      }
      return ret;
    }, createPath(parent, path, canRead, canWrite) {
      parent = typeof parent == "string" ? parent : FS.getPath(parent);
      var parts = path.split("/").reverse();
      while (parts.length) {
        var part = parts.pop();
        if (!part) continue;
        var current = PATH.join2(parent, part);
        try {
          FS.mkdir(current);
        } catch (e) {
        }
        parent = current;
      }
      return current;
    }, createFile(parent, name, properties, canRead, canWrite) {
      var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
      var mode = FS_getMode(canRead, canWrite);
      return FS.create(path, mode);
    }, createDataFile(parent, name, data, canRead, canWrite, canOwn) {
      var path = name;
      if (parent) {
        parent = typeof parent == "string" ? parent : FS.getPath(parent);
        path = name ? PATH.join2(parent, name) : parent;
      }
      var mode = FS_getMode(canRead, canWrite);
      var node = FS.create(path, mode);
      if (data) {
        if (typeof data == "string") {
          var arr = new Array(data.length);
          for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
          data = arr;
        }
        FS.chmod(node, mode | 146);
        var stream = FS.open(node, 577);
        FS.write(stream, data, 0, data.length, 0, canOwn);
        FS.close(stream);
        FS.chmod(node, mode);
      }
    }, createDevice(parent, name, input, output) {
      var _a;
      var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
      var mode = FS_getMode(!!input, !!output);
      (_a = FS.createDevice).major ?? (_a.major = 64);
      var dev = FS.makedev(FS.createDevice.major++, 0);
      FS.registerDevice(dev, { open(stream) {
        stream.seekable = false;
      }, close(stream) {
        var _a2;
        if ((_a2 = output == null ? void 0 : output.buffer) == null ? void 0 : _a2.length) {
          output(10);
        }
      }, read(stream, buffer, offset, length, pos) {
        var bytesRead = 0;
        for (var i = 0; i < length; i++) {
          var result;
          try {
            result = input();
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (result === void 0 && bytesRead === 0) {
            throw new FS.ErrnoError(6);
          }
          if (result === null || result === void 0) break;
          bytesRead++;
          buffer[offset + i] = result;
        }
        if (bytesRead) {
          stream.node.timestamp = Date.now();
        }
        return bytesRead;
      }, write(stream, buffer, offset, length, pos) {
        for (var i = 0; i < length; i++) {
          try {
            output(buffer[offset + i]);
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        }
        if (length) {
          stream.node.timestamp = Date.now();
        }
        return i;
      } });
      return FS.mkdev(path, mode, dev);
    }, forceLoadFile(obj) {
      if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
      if (typeof XMLHttpRequest != "undefined") {
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      } else {
        try {
          obj.contents = readBinary(obj.url);
          obj.usedBytes = obj.contents.length;
        } catch (e) {
          throw new FS.ErrnoError(29);
        }
      }
    }, createLazyFile(parent, name, url, canRead, canWrite) {
      class LazyUint8Array {
        constructor() {
          this.lengthKnown = false;
          this.chunks = [];
        }
        get(idx) {
          if (idx > this.length - 1 || idx < 0) {
            return void 0;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = idx / this.chunkSize | 0;
          return this.getter(chunkNum)[chunkOffset];
        }
        setDataGetter(getter) {
          this.getter = getter;
        }
        cacheLength() {
          var xhr = new XMLHttpRequest();
          xhr.open("HEAD", url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
          var chunkSize = 1024 * 1024;
          if (!hasByteServing) chunkSize = datalength;
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", url, false);
            if (datalength !== chunkSize) xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
            xhr2.responseType = "arraybuffer";
            if (xhr2.overrideMimeType) {
              xhr2.overrideMimeType("text/plain; charset=x-user-defined");
            }
            xhr2.send(null);
            if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr2.status);
            if (xhr2.response !== void 0) {
              return new Uint8Array(xhr2.response || []);
            }
            return intArrayFromString(xhr2.responseText || "");
          };
          var lazyArray2 = this;
          lazyArray2.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum + 1) * chunkSize - 1;
            end = Math.min(end, datalength - 1);
            if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
              lazyArray2.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray2.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
            return lazyArray2.chunks[chunkNum];
          });
          if (usesGzip || !datalength) {
            chunkSize = datalength = 1;
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        }
        get length() {
          if (!this.lengthKnown) {
            this.cacheLength();
          }
          return this._length;
        }
        get chunkSize() {
          if (!this.lengthKnown) {
            this.cacheLength();
          }
          return this._chunkSize;
        }
      }
      if (typeof XMLHttpRequest != "undefined") {
        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var lazyArray = new LazyUint8Array();
        var properties = { isDevice: false, contents: lazyArray };
      } else {
        var properties = { isDevice: false, url };
      }
      var node = FS.createFile(parent, name, properties, canRead, canWrite);
      if (properties.contents) {
        node.contents = properties.contents;
      } else if (properties.url) {
        node.contents = null;
        node.url = properties.url;
      }
      Object.defineProperties(node, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var stream_ops = {};
      var keys = Object.keys(node.stream_ops);
      keys.forEach((key) => {
        var fn = node.stream_ops[key];
        stream_ops[key] = (...args) => {
          FS.forceLoadFile(node);
          return fn(...args);
        };
      });
      function writeChunks(stream, buffer, offset, length, position) {
        var contents = stream.node.contents;
        if (position >= contents.length) return 0;
        var size = Math.min(contents.length - position, length);
        if (contents.slice) {
          for (var i = 0; i < size; i++) {
            buffer[offset + i] = contents[position + i];
          }
        } else {
          for (var i = 0; i < size; i++) {
            buffer[offset + i] = contents.get(position + i);
          }
        }
        return size;
      }
      stream_ops.read = (stream, buffer, offset, length, position) => {
        FS.forceLoadFile(node);
        return writeChunks(stream, buffer, offset, length, position);
      };
      stream_ops.mmap = (stream, length, position, prot, flags) => {
        FS.forceLoadFile(node);
        var ptr = mmapAlloc(length);
        if (!ptr) {
          throw new FS.ErrnoError(48);
        }
        writeChunks(stream, HEAP8, ptr, length, position);
        return { ptr, allocated: true };
      };
      node.stream_ops = stream_ops;
      return node;
    } };
    var SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt(dirfd, path, allowEmpty) {
      if (PATH.isAbs(path)) {
        return path;
      }
      var dir;
      if (dirfd === -100) {
        dir = FS.cwd();
      } else {
        var dirstream = SYSCALLS.getStreamFromFD(dirfd);
        dir = dirstream.path;
      }
      if (path.length == 0) {
        if (!allowEmpty) {
          throw new FS.ErrnoError(44);
        }
        return dir;
      }
      return PATH.join2(dir, path);
    }, doStat(func, path, buf) {
      var stat = func(path);
      HEAP32[buf >> 2] = stat.dev;
      HEAP32[buf + 4 >> 2] = stat.mode;
      HEAPU32[buf + 8 >> 2] = stat.nlink;
      HEAP32[buf + 12 >> 2] = stat.uid;
      HEAP32[buf + 16 >> 2] = stat.gid;
      HEAP32[buf + 20 >> 2] = stat.rdev;
      tempI64 = [stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
      HEAP32[buf + 32 >> 2] = 4096;
      HEAP32[buf + 36 >> 2] = stat.blocks;
      var atime = stat.atime.getTime();
      var mtime = stat.mtime.getTime();
      var ctime = stat.ctime.getTime();
      tempI64 = [Math.floor(atime / 1e3) >>> 0, (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
      HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
      tempI64 = [Math.floor(mtime / 1e3) >>> 0, (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
      HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
      tempI64 = [Math.floor(ctime / 1e3) >>> 0, (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
      HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
      tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
      return 0;
    }, doMsync(addr, stream, len, flags, offset) {
      if (!FS.isFile(stream.node.mode)) {
        throw new FS.ErrnoError(43);
      }
      if (flags & 2) {
        return 0;
      }
      var buffer = HEAPU8.slice(addr, addr + len);
      FS.msync(stream, buffer, offset, len, flags);
    }, getStreamFromFD(fd) {
      var stream = FS.getStreamChecked(fd);
      return stream;
    }, varargs: void 0, getStr(ptr) {
      var ret = UTF8ToString(ptr);
      return ret;
    } };
    function ___syscall_fcntl64(fd, cmd, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (cmd) {
          case 0: {
            var arg = syscallGetVarargI();
            if (arg < 0) {
              return -28;
            }
            while (FS.streams[arg]) {
              arg++;
            }
            var newStream;
            newStream = FS.dupStream(stream, arg);
            return newStream.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return stream.flags;
          case 4: {
            var arg = syscallGetVarargI();
            stream.flags |= arg;
            return 0;
          }
          case 12: {
            var arg = syscallGetVarargP();
            var offset = 0;
            HEAP16[arg + offset >> 1] = 2;
            return 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_fstat64(fd, buf) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        return SYSCALLS.doStat(FS.stat, stream.path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var convertI32PairToI53Checked = (lo, hi) => hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
    function ___syscall_ftruncate64(fd, length_low, length_high) {
      var length = convertI32PairToI53Checked(length_low, length_high);
      try {
        if (isNaN(length)) return 61;
        FS.ftruncate(fd, length);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    function ___syscall_getdents64(fd, dirp, count) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        stream.getdents || (stream.getdents = FS.readdir(stream.path));
        var struct_size = 280;
        var pos = 0;
        var off = FS.llseek(stream, 0, 1);
        var idx = Math.floor(off / struct_size);
        while (idx < stream.getdents.length && pos + struct_size <= count) {
          var id;
          var type;
          var name = stream.getdents[idx];
          if (name === ".") {
            id = stream.node.id;
            type = 4;
          } else if (name === "..") {
            var lookup = FS.lookupPath(stream.path, { parent: true });
            id = lookup.node.id;
            type = 4;
          } else {
            var child = FS.lookupNode(stream.node, name);
            id = child.id;
            type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
          }
          tempI64 = [id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
          tempI64 = [(idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
          HEAP16[dirp + pos + 16 >> 1] = 280;
          HEAP8[dirp + pos + 18] = type;
          stringToUTF8(name, dirp + pos + 19, 256);
          pos += struct_size;
          idx += 1;
        }
        FS.llseek(stream, idx * struct_size, 0);
        return pos;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_ioctl(fd, op, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        switch (op) {
          case 21509: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21505: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcgets) {
              var termios = stream.tty.ops.ioctl_tcgets(stream);
              var argp = syscallGetVarargP();
              HEAP32[argp >> 2] = termios.c_iflag || 0;
              HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
              HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
              HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
              for (var i = 0; i < 32; i++) {
                HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
              }
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21506:
          case 21507:
          case 21508: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tcsets) {
              var argp = syscallGetVarargP();
              var c_iflag = HEAP32[argp >> 2];
              var c_oflag = HEAP32[argp + 4 >> 2];
              var c_cflag = HEAP32[argp + 8 >> 2];
              var c_lflag = HEAP32[argp + 12 >> 2];
              var c_cc = [];
              for (var i = 0; i < 32; i++) {
                c_cc.push(HEAP8[argp + i + 17]);
              }
              return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
            }
            return 0;
          }
          case 21519: {
            if (!stream.tty) return -59;
            var argp = syscallGetVarargP();
            HEAP32[argp >> 2] = 0;
            return 0;
          }
          case 21520: {
            if (!stream.tty) return -59;
            return -28;
          }
          case 21531: {
            var argp = syscallGetVarargP();
            return FS.ioctl(stream, op, argp);
          }
          case 21523: {
            if (!stream.tty) return -59;
            if (stream.tty.ops.ioctl_tiocgwinsz) {
              var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
              var argp = syscallGetVarargP();
              HEAP16[argp >> 1] = winsize[0];
              HEAP16[argp + 2 >> 1] = winsize[1];
            }
            return 0;
          }
          case 21524: {
            if (!stream.tty) return -59;
            return 0;
          }
          case 21515: {
            if (!stream.tty) return -59;
            return 0;
          }
          default:
            return -28;
        }
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_lstat64(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.lstat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_newfstatat(dirfd, path, buf, flags) {
      try {
        path = SYSCALLS.getStr(path);
        var nofollow = flags & 256;
        var allowEmpty = flags & 4096;
        flags = flags & ~6400;
        path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
        return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_openat(dirfd, path, flags, varargs) {
      SYSCALLS.varargs = varargs;
      try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        var mode = varargs ? syscallGetVarargI() : 0;
        return FS.open(path, flags, mode).fd;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_rmdir(path) {
      try {
        path = SYSCALLS.getStr(path);
        FS.rmdir(path);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_stat64(path, buf) {
      try {
        path = SYSCALLS.getStr(path);
        return SYSCALLS.doStat(FS.stat, path, buf);
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    function ___syscall_unlinkat(dirfd, path, flags) {
      try {
        path = SYSCALLS.getStr(path);
        path = SYSCALLS.calculateAt(dirfd, path);
        if (flags === 0) {
          FS.unlink(path);
        } else if (flags === 512) {
          FS.rmdir(path);
        } else {
          abort("Invalid flags passed to unlinkat");
        }
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return -e.errno;
      }
    }
    var __abort_js = () => {
      abort("");
    };
    var nowIsMonotonic = 1;
    var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
    var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
    var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };
    function __gmtime_js(time_low, time_high, tmPtr) {
      var time = convertI32PairToI53Checked(time_low, time_high);
      var date = new Date(time * 1e3);
      HEAP32[tmPtr >> 2] = date.getUTCSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
      HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
      HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
    }
    var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    var MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    var MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE;
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1;
      return yday;
    };
    function __localtime_js(time_low, time_high, tmPtr) {
      var time = convertI32PairToI53Checked(time_low, time_high);
      var date = new Date(time * 1e3);
      HEAP32[tmPtr >> 2] = date.getSeconds();
      HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
      HEAP32[tmPtr + 8 >> 2] = date.getHours();
      HEAP32[tmPtr + 12 >> 2] = date.getDate();
      HEAP32[tmPtr + 16 >> 2] = date.getMonth();
      HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
      HEAP32[tmPtr + 24 >> 2] = date.getDay();
      var yday = ydayFromDate(date) | 0;
      HEAP32[tmPtr + 28 >> 2] = yday;
      HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
      HEAP32[tmPtr + 32 >> 2] = dst;
    }
    var __tzset_js = (timezone, daylight, std_name, dst_name) => {
      var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
      HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
      HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
      var extractZone = (timezoneOffset) => {
        var sign = timezoneOffset >= 0 ? "-" : "+";
        var absOffset = Math.abs(timezoneOffset);
        var hours = String(Math.floor(absOffset / 60)).padStart(2, "0");
        var minutes = String(absOffset % 60).padStart(2, "0");
        return \`UTC\${sign}\${hours}\${minutes}\`;
      };
      var winterName = extractZone(winterOffset);
      var summerName = extractZone(summerOffset);
      if (summerOffset < winterOffset) {
        stringToUTF8(winterName, std_name, 17);
        stringToUTF8(summerName, dst_name, 17);
      } else {
        stringToUTF8(winterName, dst_name, 17);
        stringToUTF8(summerName, std_name, 17);
      }
    };
    var _emscripten_date_now = () => Date.now();
    var getHeapMax = () => 2147483648;
    var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536 | 0;
      try {
        wasmMemory.grow(pages);
        updateMemoryViews();
        return 1;
      } catch (e) {
      }
    };
    var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      requestedSize >>>= 0;
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        return false;
      }
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
        var newSize = Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536));
        var replacement = growMemory(newSize);
        if (replacement) {
          return true;
        }
      }
      return false;
    };
    var ENV = {};
    var getExecutableName = () => thisProgram || "./this.program";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
        var env = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: lang, _: getExecutableName() };
        for (var x in ENV) {
          if (ENV[x] === void 0) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(\`\${x}=\${env[x]}\`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
    var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++] = str.charCodeAt(i);
      }
      HEAP8[buffer] = 0;
    };
    var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[__environ + i * 4 >> 2] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };
    var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[penviron_count >> 2] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => bufSize += string.length + 1);
      HEAPU32[penviron_buf_size >> 2] = bufSize;
      return 0;
    };
    function _fd_close(fd) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break;
      }
      return ret;
    };
    function _fd_read(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doReadv(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
      var offset = convertI32PairToI53Checked(offset_low, offset_high);
      try {
        if (isNaN(offset)) return 61;
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    function _fd_sync(fd) {
      var _a;
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        if ((_a = stream.stream_ops) == null ? void 0 : _a.fsync) {
          return stream.stream_ops.fsync(stream);
        }
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[iov >> 2];
        var len = HEAPU32[iov + 4 >> 2];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) {
          break;
        }
      }
      return ret;
    };
    function _fd_write(fd, iov, iovcnt, pnum) {
      try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = doWritev(stream, iov, iovcnt);
        HEAPU32[pnum >> 2] = num;
        return 0;
      } catch (e) {
        if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
        return e.errno;
      }
    }
    var wasmTableMirror = [];
    var wasmTable;
    var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      return func;
    };
    var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : void 0;
    var UTF16ToString = (ptr, maxBytesToRead) => {
      var endPtr = ptr;
      var idx = endPtr >> 1;
      var maxIdx = idx + maxBytesToRead / 2;
      while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
      endPtr = idx << 1;
      if (endPtr - ptr > 32 && UTF16Decoder) return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
      var str = "";
      for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
        var codeUnit = HEAP16[ptr + i * 2 >> 1];
        if (codeUnit == 0) break;
        str += String.fromCharCode(codeUnit);
      }
      return str;
    };
    var uleb128Encode = (n, target) => {
      if (n < 128) {
        target.push(n);
      } else {
        target.push(n % 128 | 128, n >> 7);
      }
    };
    var sigToWasmTypes = (sig) => {
      var typeNames = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" };
      var type = { parameters: [], results: sig[0] == "v" ? [] : [typeNames[sig[0]]] };
      for (var i = 1; i < sig.length; ++i) {
        type.parameters.push(typeNames[sig[i]]);
      }
      return type;
    };
    var generateFuncType = (sig, target) => {
      var sigRet = sig.slice(0, 1);
      var sigParam = sig.slice(1);
      var typeCodes = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      target.push(96);
      uleb128Encode(sigParam.length, target);
      for (var i = 0; i < sigParam.length; ++i) {
        target.push(typeCodes[sigParam[i]]);
      }
      if (sigRet == "v") {
        target.push(0);
      } else {
        target.push(1, typeCodes[sigRet]);
      }
    };
    var convertJsFunctionToWasm = (func, sig) => {
      if (typeof WebAssembly.Function == "function") {
        return new WebAssembly.Function(sigToWasmTypes(sig), func);
      }
      var typeSectionBody = [1];
      generateFuncType(sig, typeSectionBody);
      var bytes = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      uleb128Encode(typeSectionBody.length, bytes);
      bytes.push(...typeSectionBody);
      bytes.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var module = new WebAssembly.Module(new Uint8Array(bytes));
      var instance = new WebAssembly.Instance(module, { e: { f: func } });
      var wrappedFunc = instance.exports["f"];
      return wrappedFunc;
    };
    var updateTableMap = (offset, count) => {
      if (functionsInTableMap) {
        for (var i = offset; i < offset + count; i++) {
          var item = getWasmTableEntry(i);
          if (item) {
            functionsInTableMap.set(item, i);
          }
        }
      }
    };
    var functionsInTableMap;
    var getFunctionAddress = (func) => {
      if (!functionsInTableMap) {
        functionsInTableMap = /* @__PURE__ */ new WeakMap();
        updateTableMap(0, wasmTable.length);
      }
      return functionsInTableMap.get(func) || 0;
    };
    var freeTableIndexes = [];
    var getEmptyTableSlot = () => {
      if (freeTableIndexes.length) {
        return freeTableIndexes.pop();
      }
      try {
        wasmTable.grow(1);
      } catch (err2) {
        if (!(err2 instanceof RangeError)) {
          throw err2;
        }
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return wasmTable.length - 1;
    };
    var setWasmTableEntry = (idx, func) => {
      wasmTable.set(idx, func);
      wasmTableMirror[idx] = wasmTable.get(idx);
    };
    var addFunction = (func, sig) => {
      var rtn = getFunctionAddress(func);
      if (rtn) {
        return rtn;
      }
      var ret = getEmptyTableSlot();
      try {
        setWasmTableEntry(ret, func);
      } catch (err2) {
        if (!(err2 instanceof TypeError)) {
          throw err2;
        }
        var wrapped = convertJsFunctionToWasm(func, sig);
        setWasmTableEntry(ret, wrapped);
      }
      functionsInTableMap.set(func, ret);
      return ret;
    };
    var getCFunc = (ident) => {
      var func = Module["_" + ident];
      return func;
    };
    var writeArrayToMemory = (array, buffer) => {
      HEAP8.set(array, buffer);
    };
    var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
    var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
    var ccall = (ident, returnType, argTypes, args, opts) => {
      var toC = { string: (str) => {
        var ret2 = 0;
        if (str !== null && str !== void 0 && str !== 0) {
          ret2 = stringToUTF8OnStack(str);
        }
        return ret2;
      }, array: (arr) => {
        var ret2 = stackAlloc(arr.length);
        writeArrayToMemory(arr, ret2);
        return ret2;
      } };
      function convertReturnValue(ret2) {
        if (returnType === "string") {
          return UTF8ToString(ret2);
        }
        if (returnType === "boolean") return Boolean(ret2);
        return ret2;
      }
      var func = getCFunc(ident);
      var cArgs = [];
      var stack = 0;
      if (args) {
        for (var i = 0; i < args.length; i++) {
          var converter = toC[argTypes[i]];
          if (converter) {
            if (stack === 0) stack = stackSave();
            cArgs[i] = converter(args[i]);
          } else {
            cArgs[i] = args[i];
          }
        }
      }
      var ret = func(...cArgs);
      function onDone(ret2) {
        if (stack !== 0) stackRestore(stack);
        return convertReturnValue(ret2);
      }
      ret = onDone(ret);
      return ret;
    };
    var cwrap = (ident, returnType, argTypes, opts) => {
      var numericArgs = !argTypes || argTypes.every((type) => type === "number" || type === "boolean");
      var numericRet = returnType !== "string";
      if (numericRet && numericArgs && !opts) {
        return getCFunc(ident);
      }
      return (...args) => ccall(ident, returnType, argTypes, args);
    };
    var removeFunction = (index) => {
      functionsInTableMap.delete(getWasmTableEntry(index));
      setWasmTableEntry(index, null);
      freeTableIndexes.push(index);
    };
    var stringToUTF16 = (str, outPtr, maxBytesToWrite) => {
      maxBytesToWrite ?? (maxBytesToWrite = 2147483647);
      if (maxBytesToWrite < 2) return 0;
      maxBytesToWrite -= 2;
      var startPtr = outPtr;
      var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
      for (var i = 0; i < numCharsToWrite; ++i) {
        var codeUnit = str.charCodeAt(i);
        HEAP16[outPtr >> 1] = codeUnit;
        outPtr += 2;
      }
      HEAP16[outPtr >> 1] = 0;
      return outPtr - startPtr;
    };
    FS.createPreloadedFile = FS_createPreloadedFile;
    FS.staticInit();
    var wasmImports = { a: ___assert_fail, h: ___cxa_throw, q: ___syscall_fcntl64, G: ___syscall_fstat64, u: ___syscall_ftruncate64, z: ___syscall_getdents64, H: ___syscall_ioctl, D: ___syscall_lstat64, E: ___syscall_newfstatat, m: ___syscall_openat, y: ___syscall_rmdir, F: ___syscall_stat64, o: ___syscall_unlinkat, K: __abort_js, I: __emscripten_get_now_is_monotonic, J: __emscripten_memcpy_js, w: __emscripten_throw_longjmp, r: __gmtime_js, s: __localtime_js, L: __tzset_js, n: _emscripten_date_now, x: _emscripten_resize_heap, A: _environ_get, B: _environ_sizes_get, f: _fd_close, p: _fd_read, t: _fd_seek, C: _fd_sync, l: _fd_write, g: invoke_ii, c: invoke_iii, k: invoke_iiii, j: invoke_iiiii, i: invoke_v, d: invoke_vi, b: invoke_vii, e: invoke_viii, M: invoke_viiii, v: invoke_viiiiiiiii };
    var wasmExports = createWasm();
    Module["_PDFiumExt_Init"] = () => (Module["_PDFiumExt_Init"] = wasmExports["Q"])();
    Module["_FPDF_InitLibraryWithConfig"] = (a0) => (Module["_FPDF_InitLibraryWithConfig"] = wasmExports["R"])(a0);
    Module["_PDFiumExt_OpenFileWriter"] = () => (Module["_PDFiumExt_OpenFileWriter"] = wasmExports["S"])();
    Module["_PDFiumExt_GetFileWriterSize"] = (a0) => (Module["_PDFiumExt_GetFileWriterSize"] = wasmExports["T"])(a0);
    Module["_PDFiumExt_GetFileWriterData"] = (a0, a1, a2) => (Module["_PDFiumExt_GetFileWriterData"] = wasmExports["U"])(a0, a1, a2);
    Module["_PDFiumExt_CloseFileWriter"] = (a0) => (Module["_PDFiumExt_CloseFileWriter"] = wasmExports["V"])(a0);
    Module["_PDFiumExt_SaveAsCopy"] = (a0, a1) => (Module["_PDFiumExt_SaveAsCopy"] = wasmExports["W"])(a0, a1);
    Module["_FPDF_SaveAsCopy"] = (a0, a1, a2) => (Module["_FPDF_SaveAsCopy"] = wasmExports["X"])(a0, a1, a2);
    Module["_PDFiumExt_OpenFormFillInfo"] = () => (Module["_PDFiumExt_OpenFormFillInfo"] = wasmExports["Y"])();
    Module["_PDFiumExt_CloseFormFillInfo"] = (a0) => (Module["_PDFiumExt_CloseFormFillInfo"] = wasmExports["Z"])(a0);
    Module["_PDFiumExt_InitFormFillEnvironment"] = (a0, a1) => (Module["_PDFiumExt_InitFormFillEnvironment"] = wasmExports["_"])(a0, a1);
    Module["_FPDFDOC_InitFormFillEnvironment"] = (a0, a1) => (Module["_FPDFDOC_InitFormFillEnvironment"] = wasmExports["$"])(a0, a1);
    Module["_PDFiumExt_ExitFormFillEnvironment"] = (a0) => (Module["_PDFiumExt_ExitFormFillEnvironment"] = wasmExports["aa"])(a0);
    Module["_FPDFDOC_ExitFormFillEnvironment"] = (a0) => (Module["_FPDFDOC_ExitFormFillEnvironment"] = wasmExports["ba"])(a0);
    Module["_free"] = (a0) => (Module["_free"] = wasmExports["ca"])(a0);
    Module["_malloc"] = (a0) => (Module["_malloc"] = wasmExports["da"])(a0);
    Module["_FPDFPageObj_Destroy"] = (a0) => (Module["_FPDFPageObj_Destroy"] = wasmExports["ea"])(a0);
    Module["_FPDFFormObj_CountObjects"] = (a0) => (Module["_FPDFFormObj_CountObjects"] = wasmExports["fa"])(a0);
    Module["_FPDFFormObj_GetObject"] = (a0, a1) => (Module["_FPDFFormObj_GetObject"] = wasmExports["ga"])(a0, a1);
    Module["_FPDFPage_CountObjects"] = (a0) => (Module["_FPDFPage_CountObjects"] = wasmExports["ha"])(a0);
    Module["_FPDFPage_GetObject"] = (a0, a1) => (Module["_FPDFPage_GetObject"] = wasmExports["ia"])(a0, a1);
    Module["_FPDFPageObj_GetMatrix"] = (a0, a1) => (Module["_FPDFPageObj_GetMatrix"] = wasmExports["ja"])(a0, a1);
    Module["_FPDFFormObj_RemoveObject"] = (a0, a1) => (Module["_FPDFFormObj_RemoveObject"] = wasmExports["ka"])(a0, a1);
    Module["_FPDFPage_RemoveObject"] = (a0, a1) => (Module["_FPDFPage_RemoveObject"] = wasmExports["la"])(a0, a1);
    Module["_FPDFPage_InsertObjectAtIndex"] = (a0, a1, a2) => (Module["_FPDFPage_InsertObjectAtIndex"] = wasmExports["ma"])(a0, a1, a2);
    Module["_FPDFPage_InsertObject"] = (a0, a1) => (Module["_FPDFPage_InsertObject"] = wasmExports["na"])(a0, a1);
    Module["_FPDFPageObj_TransformClipPath"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFPageObj_TransformClipPath"] = wasmExports["oa"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFPageObj_SetMatrix"] = (a0, a1) => (Module["_FPDFPageObj_SetMatrix"] = wasmExports["pa"])(a0, a1);
    Module["_FPDFPageObj_TransformF"] = (a0, a1) => (Module["_FPDFPageObj_TransformF"] = wasmExports["qa"])(a0, a1);
    Module["_FPDFText_SetCharcodes"] = (a0, a1, a2) => (Module["_FPDFText_SetCharcodes"] = wasmExports["ra"])(a0, a1, a2);
    Module["_FPDFText_SetPositions"] = (a0, a1, a2) => (Module["_FPDFText_SetPositions"] = wasmExports["sa"])(a0, a1, a2);
    Module["_FPDFFont_GetFontData"] = (a0, a1, a2, a3) => (Module["_FPDFFont_GetFontData"] = wasmExports["ta"])(a0, a1, a2, a3);
    Module["_FPDFFont_GetGlyphWidth"] = (a0, a1, a2, a3) => (Module["_FPDFFont_GetGlyphWidth"] = wasmExports["ua"])(a0, a1, a2, a3);
    Module["_FPDFFont_GetGlyphPath"] = (a0, a1, a2) => (Module["_FPDFFont_GetGlyphPath"] = wasmExports["va"])(a0, a1, a2);
    Module["_FPDFGlyphPath_CountGlyphSegments"] = (a0) => (Module["_FPDFGlyphPath_CountGlyphSegments"] = wasmExports["wa"])(a0);
    Module["_FPDFFont_GetBaseFontName"] = (a0, a1, a2) => (Module["_FPDFFont_GetBaseFontName"] = wasmExports["xa"])(a0, a1, a2);
    Module["_FPDFFont_GetFlags"] = (a0) => (Module["_FPDFFont_GetFlags"] = wasmExports["ya"])(a0);
    Module["_FPDFText_LoadFont"] = (a0, a1, a2, a3, a4) => (Module["_FPDFText_LoadFont"] = wasmExports["za"])(a0, a1, a2, a3, a4);
    Module["_FPDFText_LoadStandardFont"] = (a0, a1) => (Module["_FPDFText_LoadStandardFont"] = wasmExports["Aa"])(a0, a1);
    Module["_FPDFPageObj_GetType"] = (a0) => (Module["_FPDFPageObj_GetType"] = wasmExports["Ba"])(a0);
    Module["_FPDFPageObj_CreateTextObj"] = (a0, a1, a2) => (Module["_FPDFPageObj_CreateTextObj"] = wasmExports["Ca"])(a0, a1, a2);
    Module["_FPDFText_SetText"] = (a0, a1) => (Module["_FPDFText_SetText"] = wasmExports["Da"])(a0, a1);
    Module["_FPDFPageObj_SetFillColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObj_SetFillColor"] = wasmExports["Ea"])(a0, a1, a2, a3, a4);
    Module["_FPDF_GetPageWidthF"] = (a0) => (Module["_FPDF_GetPageWidthF"] = wasmExports["Fa"])(a0);
    Module["_FPDF_StructTree_GetForPage"] = (a0) => (Module["_FPDF_StructTree_GetForPage"] = wasmExports["Ga"])(a0);
    Module["_FPDF_StructTree_CountChildren"] = (a0) => (Module["_FPDF_StructTree_CountChildren"] = wasmExports["Ha"])(a0);
    Module["_FPDF_StructTree_Close"] = (a0) => (Module["_FPDF_StructTree_Close"] = wasmExports["Ia"])(a0);
    Module["_FPDFFont_GetAscent"] = (a0, a1, a2) => (Module["_FPDFFont_GetAscent"] = wasmExports["Ja"])(a0, a1, a2);
    Module["_FPDFText_LoadCidType2Font"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFText_LoadCidType2Font"] = wasmExports["Ka"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFTextObj_SetTextRenderMode"] = (a0, a1) => (Module["_FPDFTextObj_SetTextRenderMode"] = wasmExports["La"])(a0, a1);
    Module["_FPDFPageObj_SetStrokeColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObj_SetStrokeColor"] = wasmExports["Ma"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObj_SetStrokeWidth"] = (a0, a1) => (Module["_FPDFPageObj_SetStrokeWidth"] = wasmExports["Na"])(a0, a1);
    Module["_FPDFPageObj_AddMark"] = (a0, a1) => (Module["_FPDFPageObj_AddMark"] = wasmExports["Oa"])(a0, a1);
    Module["_FPDFPageObjMark_SetIntParam"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_SetIntParam"] = wasmExports["Pa"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObjMark_SetStringParam"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_SetStringParam"] = wasmExports["Qa"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObj_CreateNewRect"] = (a0, a1, a2, a3) => (Module["_FPDFPageObj_CreateNewRect"] = wasmExports["Ra"])(a0, a1, a2, a3);
    Module["_FPDFPath_SetDrawMode"] = (a0, a1, a2) => (Module["_FPDFPath_SetDrawMode"] = wasmExports["Sa"])(a0, a1, a2);
    Module["_FPDFFont_GetDescent"] = (a0, a1, a2) => (Module["_FPDFFont_GetDescent"] = wasmExports["Ta"])(a0, a1, a2);
    Module["_FPDFPageObj_CountMarks"] = (a0) => (Module["_FPDFPageObj_CountMarks"] = wasmExports["Ua"])(a0);
    Module["_FPDFPageObj_GetMark"] = (a0, a1) => (Module["_FPDFPageObj_GetMark"] = wasmExports["Va"])(a0, a1);
    Module["_FPDFPageObjMark_GetName"] = (a0, a1, a2, a3) => (Module["_FPDFPageObjMark_GetName"] = wasmExports["Wa"])(a0, a1, a2, a3);
    Module["_FPDFPageObj_RemoveMark"] = (a0, a1) => (Module["_FPDFPageObj_RemoveMark"] = wasmExports["Xa"])(a0, a1);
    Module["_FPDFPageObj_GetBounds"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObj_GetBounds"] = wasmExports["Ya"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetMediaBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_GetMediaBox"] = wasmExports["Za"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetCropBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_GetCropBox"] = wasmExports["_a"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetRotation"] = (a0) => (Module["_FPDFPage_GetRotation"] = wasmExports["$a"])(a0);
    Module["_FPDFText_LoadPage"] = (a0) => (Module["_FPDFText_LoadPage"] = wasmExports["ab"])(a0);
    Module["_FPDFText_CountChars"] = (a0) => (Module["_FPDFText_CountChars"] = wasmExports["bb"])(a0);
    Module["_FPDFText_GetUnicode"] = (a0, a1) => (Module["_FPDFText_GetUnicode"] = wasmExports["cb"])(a0, a1);
    Module["_FPDFText_GetTextObject"] = (a0, a1) => (Module["_FPDFText_GetTextObject"] = wasmExports["db"])(a0, a1);
    Module["_FPDFTextObj_GetFont"] = (a0) => (Module["_FPDFTextObj_GetFont"] = wasmExports["eb"])(a0);
    Module["_FPDFText_GetCharBox"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFText_GetCharBox"] = wasmExports["fb"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDF_GetPageHeightF"] = (a0) => (Module["_FPDF_GetPageHeightF"] = wasmExports["gb"])(a0);
    Module["_FPDFText_GetCharOrigin"] = (a0, a1, a2, a3) => (Module["_FPDFText_GetCharOrigin"] = wasmExports["hb"])(a0, a1, a2, a3);
    Module["_FPDFText_GetFontSize"] = (a0, a1) => (Module["_FPDFText_GetFontSize"] = wasmExports["ib"])(a0, a1);
    Module["_FPDFText_GetLooseCharBox"] = (a0, a1, a2) => (Module["_FPDFText_GetLooseCharBox"] = wasmExports["jb"])(a0, a1, a2);
    Module["_FPDFText_GetMatrix"] = (a0, a1, a2) => (Module["_FPDFText_GetMatrix"] = wasmExports["kb"])(a0, a1, a2);
    Module["_FPDFFont_GetFamilyName"] = (a0, a1, a2) => (Module["_FPDFFont_GetFamilyName"] = wasmExports["lb"])(a0, a1, a2);
    Module["_FPDFFont_GetWeight"] = (a0) => (Module["_FPDFFont_GetWeight"] = wasmExports["mb"])(a0);
    Module["_FPDFFont_GetItalicAngle"] = (a0, a1) => (Module["_FPDFFont_GetItalicAngle"] = wasmExports["nb"])(a0, a1);
    Module["_FPDFPageObj_GetFillColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObj_GetFillColor"] = wasmExports["ob"])(a0, a1, a2, a3, a4);
    Module["_FPDFTextObj_GetTextRenderMode"] = (a0) => (Module["_FPDFTextObj_GetTextRenderMode"] = wasmExports["pb"])(a0);
    Module["_FPDFPageObj_GetStrokeColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObj_GetStrokeColor"] = wasmExports["qb"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObj_GetStrokeWidth"] = (a0, a1) => (Module["_FPDFPageObj_GetStrokeWidth"] = wasmExports["rb"])(a0, a1);
    Module["_FPDFTextObj_GetText"] = (a0, a1, a2, a3) => (Module["_FPDFTextObj_GetText"] = wasmExports["sb"])(a0, a1, a2, a3);
    Module["_FPDFText_ClosePage"] = (a0) => (Module["_FPDFText_ClosePage"] = wasmExports["tb"])(a0);
    Module["_FPDFPath_CountSegments"] = (a0) => (Module["_FPDFPath_CountSegments"] = wasmExports["ub"])(a0);
    Module["_FPDFPath_GetPathSegment"] = (a0, a1) => (Module["_FPDFPath_GetPathSegment"] = wasmExports["vb"])(a0, a1);
    Module["_FPDFPathSegment_GetPoint"] = (a0, a1, a2) => (Module["_FPDFPathSegment_GetPoint"] = wasmExports["wb"])(a0, a1, a2);
    Module["_FPDFPathSegment_GetType"] = (a0) => (Module["_FPDFPathSegment_GetType"] = wasmExports["xb"])(a0);
    Module["_FPDFPathSegment_GetClose"] = (a0) => (Module["_FPDFPathSegment_GetClose"] = wasmExports["yb"])(a0);
    Module["_FPDFPageObjMark_CountParams"] = (a0) => (Module["_FPDFPageObjMark_CountParams"] = wasmExports["zb"])(a0);
    Module["_FPDFPageObjMark_GetParamKey"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_GetParamKey"] = wasmExports["Ab"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObjMark_GetParamValueType"] = (a0, a1) => (Module["_FPDFPageObjMark_GetParamValueType"] = wasmExports["Bb"])(a0, a1);
    Module["_FPDFPageObjMark_GetParamIntValue"] = (a0, a1, a2) => (Module["_FPDFPageObjMark_GetParamIntValue"] = wasmExports["Cb"])(a0, a1, a2);
    Module["_FPDFPageObjMark_GetParamStringValue"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_GetParamStringValue"] = wasmExports["Db"])(a0, a1, a2, a3, a4);
    Module["_FPDFTextObj_GetFontSize"] = (a0, a1) => (Module["_FPDFTextObj_GetFontSize"] = wasmExports["Eb"])(a0, a1);
    Module["_FPDFPageObj_GetClipPath"] = (a0) => (Module["_FPDFPageObj_GetClipPath"] = wasmExports["Fb"])(a0);
    Module["_FPDFClipPath_CountPaths"] = (a0) => (Module["_FPDFClipPath_CountPaths"] = wasmExports["Gb"])(a0);
    Module["_ec_version"] = () => (Module["_ec_version"] = wasmExports["Hb"])();
    Module["_ec_buffer_alloc"] = (a0) => (Module["_ec_buffer_alloc"] = wasmExports["Ib"])(a0);
    Module["_ec_string_free"] = (a0) => (Module["_ec_string_free"] = wasmExports["Jb"])(a0);
    Module["_ec_session_create"] = (a0, a1, a2) => (Module["_ec_session_create"] = wasmExports["Kb"])(a0, a1, a2);
    Module["_ec_session_destroy"] = (a0) => (Module["_ec_session_destroy"] = wasmExports["Lb"])(a0);
    Module["_FPDFFont_Close"] = (a0) => (Module["_FPDFFont_Close"] = wasmExports["Mb"])(a0);
    Module["_FPDFPageObj_CreateNewPath"] = (a0, a1) => (Module["_FPDFPageObj_CreateNewPath"] = wasmExports["Nb"])(a0, a1);
    Module["_FPDFPath_LineTo"] = (a0, a1, a2) => (Module["_FPDFPath_LineTo"] = wasmExports["Ob"])(a0, a1, a2);
    Module["_FPDFPath_BezierTo"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFPath_BezierTo"] = wasmExports["Pb"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFPath_Close"] = (a0) => (Module["_FPDFPath_Close"] = wasmExports["Qb"])(a0);
    Module["_FPDFPath_MoveTo"] = (a0, a1, a2) => (Module["_FPDFPath_MoveTo"] = wasmExports["Rb"])(a0, a1, a2);
    Module["_FPDFPath_GetDrawMode"] = (a0, a1, a2) => (Module["_FPDFPath_GetDrawMode"] = wasmExports["Sb"])(a0, a1, a2);
    Module["_FPDFBitmap_Create"] = (a0, a1, a2) => (Module["_FPDFBitmap_Create"] = wasmExports["Tb"])(a0, a1, a2);
    Module["_FPDFBitmap_FillRect"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFBitmap_FillRect"] = wasmExports["Ub"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDF_RenderPageBitmap"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (Module["_FPDF_RenderPageBitmap"] = wasmExports["Vb"])(a0, a1, a2, a3, a4, a5, a6, a7);
    Module["_FPDFBitmap_GetBuffer"] = (a0) => (Module["_FPDFBitmap_GetBuffer"] = wasmExports["Wb"])(a0);
    Module["_FPDFBitmap_GetStride"] = (a0) => (Module["_FPDFBitmap_GetStride"] = wasmExports["Xb"])(a0);
    Module["_FPDFBitmap_Destroy"] = (a0) => (Module["_FPDFBitmap_Destroy"] = wasmExports["Yb"])(a0);
    Module["_FPDFPageObj_HasTransparency"] = (a0) => (Module["_FPDFPageObj_HasTransparency"] = wasmExports["Zb"])(a0);
    Module["_ec_set_flatten_forms"] = (a0, a1) => (Module["_ec_set_flatten_forms"] = wasmExports["_b"])(a0, a1);
    Module["_ec_build_page_model"] = (a0, a1) => (Module["_ec_build_page_model"] = wasmExports["$b"])(a0, a1);
    Module["_ec_spell_load"] = (a0, a1, a2) => (Module["_ec_spell_load"] = wasmExports["ac"])(a0, a1, a2);
    Module["_ec_spell_check_page"] = (a0, a1) => (Module["_ec_spell_check_page"] = wasmExports["bc"])(a0, a1);
    Module["_ec_select_text"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_ec_select_text"] = wasmExports["cc"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_ec_build_page_model_region"] = (a0, a1, a2, a3, a4, a5) => (Module["_ec_build_page_model_region"] = wasmExports["dc"])(a0, a1, a2, a3, a4, a5);
    Module["_ec_page_text_json"] = (a0, a1) => (Module["_ec_page_text_json"] = wasmExports["ec"])(a0, a1);
    Module["_ec_get_paragraph_objects"] = (a0, a1, a2, a3, a4) => (Module["_ec_get_paragraph_objects"] = wasmExports["fc"])(a0, a1, a2, a3, a4);
    Module["_ec_get_run_font_data"] = (a0, a1, a2, a3, a4, a5) => (Module["_ec_get_run_font_data"] = wasmExports["gc"])(a0, a1, a2, a3, a4, a5);
    Module["_ec_form_draw"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (Module["_ec_form_draw"] = wasmExports["hc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    Module["_FPDF_SetFormFieldHighlightAlpha"] = (a0, a1) => (Module["_FPDF_SetFormFieldHighlightAlpha"] = wasmExports["ic"])(a0, a1);
    Module["_FORM_OnAfterLoadPage"] = (a0, a1) => (Module["_FORM_OnAfterLoadPage"] = wasmExports["jc"])(a0, a1);
    Module["_FPDF_FFLDraw"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (Module["_FPDF_FFLDraw"] = wasmExports["kc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    Module["_ec_page_crop_origin"] = (a0, a1, a2, a3) => (Module["_ec_page_crop_origin"] = wasmExports["lc"])(a0, a1, a2, a3);
    Module["_ec_page_transform"] = (a0, a1, a2) => (Module["_ec_page_transform"] = wasmExports["mc"])(a0, a1, a2);
    Module["_ec_preview_paragraph"] = (a0, a1, a2, a3, a4, a5) => (Module["_ec_preview_paragraph"] = wasmExports["nc"])(a0, a1, a2, a3, a4, a5);
    Module["_ec_commit_paragraph"] = (a0, a1, a2, a3, a4, a5) => (Module["_ec_commit_paragraph"] = wasmExports["oc"])(a0, a1, a2, a3, a4, a5);
    Module["_ec_render_paragraph_live_end"] = (a0, a1) => (Module["_ec_render_paragraph_live_end"] = wasmExports["pc"])(a0, a1);
    Module["_ec_render_paragraph_live"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => (Module["_ec_render_paragraph_live"] = wasmExports["qc"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
    Module["_FPDFBitmap_CreateEx"] = (a0, a1, a2, a3, a4) => (Module["_FPDFBitmap_CreateEx"] = wasmExports["rc"])(a0, a1, a2, a3, a4);
    Module["_ec_add_paragraph"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (Module["_ec_add_paragraph"] = wasmExports["sc"])(a0, a1, a2, a3, a4, a5, a6, a7);
    Module["_ec_duplicate_paragraph"] = (a0, a1, a2, a3, a4) => (Module["_ec_duplicate_paragraph"] = wasmExports["tc"])(a0, a1, a2, a3, a4);
    Module["_ec_clone_marker"] = (a0, a1, a2, a3) => (Module["_ec_clone_marker"] = wasmExports["uc"])(a0, a1, a2, a3);
    Module["_ec_test_arabic"] = (a0, a1) => (Module["_ec_test_arabic"] = wasmExports["vc"])(a0, a1);
    Module["_ec_document_info"] = (a0) => (Module["_ec_document_info"] = wasmExports["wc"])(a0);
    Module["_FPDF_GetPageCount"] = (a0) => (Module["_FPDF_GetPageCount"] = wasmExports["xc"])(a0);
    Module["_FPDF_GetSignatureCount"] = (a0) => (Module["_FPDF_GetSignatureCount"] = wasmExports["yc"])(a0);
    Module["_FPDF_GetSecurityHandlerRevision"] = (a0) => (Module["_FPDF_GetSecurityHandlerRevision"] = wasmExports["zc"])(a0);
    Module["_FPDF_GetDocPermissions"] = (a0) => (Module["_FPDF_GetDocPermissions"] = wasmExports["Ac"])(a0);
    Module["_ec_test_bidi"] = (a0, a1) => (Module["_ec_test_bidi"] = wasmExports["Bc"])(a0, a1);
    Module["_ec_test_pagetext"] = (a0, a1) => (Module["_ec_test_pagetext"] = wasmExports["Cc"])(a0, a1);
    Module["_ec_test_paraadv"] = (a0, a1, a2) => (Module["_ec_test_paraadv"] = wasmExports["Dc"])(a0, a1, a2);
    Module["_ec_move_paragraph"] = (a0, a1, a2, a3, a4) => (Module["_ec_move_paragraph"] = wasmExports["Ec"])(a0, a1, a2, a3, a4);
    Module["_ec_resize_paragraph"] = (a0, a1, a2, a3) => (Module["_ec_resize_paragraph"] = wasmExports["Fc"])(a0, a1, a2, a3);
    Module["_ec_reencode_page_fonts"] = (a0, a1) => (Module["_ec_reencode_page_fonts"] = wasmExports["Gc"])(a0, a1);
    Module["_ec_dealias_page_fonts"] = (a0, a1) => (Module["_ec_dealias_page_fonts"] = wasmExports["Hc"])(a0, a1);
    Module["_ec_set_surgical"] = (a0, a1) => (Module["_ec_set_surgical"] = wasmExports["Ic"])(a0, a1);
    Module["_ec_last_splice_plan"] = (a0, a1) => (Module["_ec_last_splice_plan"] = wasmExports["Jc"])(a0, a1);
    Module["_ec_mark_fonts_fragile"] = (a0, a1) => (Module["_ec_mark_fonts_fragile"] = wasmExports["Kc"])(a0, a1);
    Module["_ec_page_has_cid_fonts"] = (a0, a1) => (Module["_ec_page_has_cid_fonts"] = wasmExports["Lc"])(a0, a1);
    Module["_ec_page_text_state"] = (a0, a1) => (Module["_ec_page_text_state"] = wasmExports["Mc"])(a0, a1);
    Module["_ec_normalize_page_paint"] = (a0) => (Module["_ec_normalize_page_paint"] = wasmExports["Nc"])(a0);
    Module["_ec_page_regen_is_lossy"] = (a0, a1, a2) => (Module["_ec_page_regen_is_lossy"] = wasmExports["Oc"])(a0, a1, a2);
    Module["_FPDF_CreateNewDocument"] = () => (Module["_FPDF_CreateNewDocument"] = wasmExports["Pc"])();
    Module["_FPDF_ImportPagesByIndex"] = (a0, a1, a2, a3, a4) => (Module["_FPDF_ImportPagesByIndex"] = wasmExports["Qc"])(a0, a1, a2, a3, a4);
    Module["_FPDF_CloseDocument"] = (a0) => (Module["_FPDF_CloseDocument"] = wasmExports["Rc"])(a0);
    Module["_ec_save_document"] = (a0, a1, a2) => (Module["_ec_save_document"] = wasmExports["Sc"])(a0, a1, a2);
    Module["_FPDF_LoadMemDocument64"] = (a0, a1, a2) => (Module["_FPDF_LoadMemDocument64"] = wasmExports["Tc"])(a0, a1, a2);
    Module["_FPDF_LoadPage"] = (a0, a1) => (Module["_FPDF_LoadPage"] = wasmExports["Uc"])(a0, a1);
    Module["_FPDFPage_GenerateContent"] = (a0) => (Module["_FPDFPage_GenerateContent"] = wasmExports["Vc"])(a0);
    Module["_FPDF_ClosePage"] = (a0) => (Module["_FPDF_ClosePage"] = wasmExports["Wc"])(a0);
    Module["_FPDF_SaveWithVersion"] = (a0, a1, a2, a3) => (Module["_FPDF_SaveWithVersion"] = wasmExports["Xc"])(a0, a1, a2, a3);
    Module["_ec_history_begin"] = (a0, a1, a2) => (Module["_ec_history_begin"] = wasmExports["Yc"])(a0, a1, a2);
    Module["_ec_history_end"] = (a0, a1) => (Module["_ec_history_end"] = wasmExports["Zc"])(a0, a1);
    Module["_ec_history_undo"] = (a0, a1) => (Module["_ec_history_undo"] = wasmExports["_c"])(a0, a1);
    Module["_ec_history_redo"] = (a0, a1) => (Module["_ec_history_redo"] = wasmExports["$c"])(a0, a1);
    Module["_ec_history_drop_page"] = (a0, a1) => (Module["_ec_history_drop_page"] = wasmExports["ad"])(a0, a1);
    Module["_ec_history_next_page"] = (a0, a1) => (Module["_ec_history_next_page"] = wasmExports["bd"])(a0, a1);
    Module["_ec_history_depth"] = (a0, a1) => (Module["_ec_history_depth"] = wasmExports["cd"])(a0, a1);
    Module["_ec_history_note_matrix"] = (a0, a1, a2) => (Module["_ec_history_note_matrix"] = wasmExports["dd"])(a0, a1, a2);
    Module["_ec_history_note_zorder"] = (a0, a1, a2) => (Module["_ec_history_note_zorder"] = wasmExports["ed"])(a0, a1, a2);
    Module["_ec_history_note_insert"] = (a0, a1, a2) => (Module["_ec_history_note_insert"] = wasmExports["fd"])(a0, a1, a2);
    Module["_ec_history_remove_object"] = (a0, a1, a2) => (Module["_ec_history_remove_object"] = wasmExports["gd"])(a0, a1, a2);
    Module["_ec_history_clear"] = (a0) => (Module["_ec_history_clear"] = wasmExports["hd"])(a0);
    Module["_ec_delete_paragraph"] = (a0, a1, a2) => (Module["_ec_delete_paragraph"] = wasmExports["id"])(a0, a1, a2);
    Module["_FPDFGlyphPath_GetGlyphPathSegment"] = (a0, a1) => (Module["_FPDFGlyphPath_GetGlyphPathSegment"] = wasmExports["jd"])(a0, a1);
    Module["_ec_synth_run_font"] = (a0, a1, a2, a3, a4) => (Module["_ec_synth_run_font"] = wasmExports["kd"])(a0, a1, a2, a3, a4);
    Module["_ec_test_shape"] = (a0, a1, a2) => (Module["_ec_test_shape"] = wasmExports["ld"])(a0, a1, a2);
    Module["_ec_test_subset"] = (a0, a1, a2, a3) => (Module["_ec_test_subset"] = wasmExports["md"])(a0, a1, a2, a3);
    Module["_EPDFAction_CloseModel"] = (a0) => (Module["_EPDFAction_CloseModel"] = wasmExports["nd"])(a0);
    Module["_EPDFAction_LoadModel"] = (a0) => (Module["_EPDFAction_LoadModel"] = wasmExports["od"])(a0);
    Module["_EPDFAction_GetRootNode"] = (a0) => (Module["_EPDFAction_GetRootNode"] = wasmExports["pd"])(a0);
    Module["_EPDFAction_GetNodeCount"] = (a0) => (Module["_EPDFAction_GetNodeCount"] = wasmExports["qd"])(a0);
    Module["_EPDFAction_GetNodeType"] = (a0, a1) => (Module["_EPDFAction_GetNodeType"] = wasmExports["rd"])(a0, a1);
    Module["_EPDFAction_GetNodeSubtype"] = (a0, a1, a2, a3) => (Module["_EPDFAction_GetNodeSubtype"] = wasmExports["sd"])(a0, a1, a2, a3);
    Module["_EPDFAction_NodeHasJavaScript"] = (a0, a1) => (Module["_EPDFAction_NodeHasJavaScript"] = wasmExports["td"])(a0, a1);
    Module["_EPDFAction_GetNodeJavaScript"] = (a0, a1, a2, a3) => (Module["_EPDFAction_GetNodeJavaScript"] = wasmExports["ud"])(a0, a1, a2, a3);
    Module["_EPDFAction_GetNodeDest"] = (a0, a1, a2) => (Module["_EPDFAction_GetNodeDest"] = wasmExports["vd"])(a0, a1, a2);
    Module["_EPDFAction_GetNodeURI"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAction_GetNodeURI"] = wasmExports["wd"])(a0, a1, a2, a3, a4);
    Module["_EPDFAction_GetNodeFilePath"] = (a0, a1, a2, a3) => (Module["_EPDFAction_GetNodeFilePath"] = wasmExports["xd"])(a0, a1, a2, a3);
    Module["_EPDFAction_GetNodeName"] = (a0, a1, a2, a3) => (Module["_EPDFAction_GetNodeName"] = wasmExports["yd"])(a0, a1, a2, a3);
    Module["_EPDFAction_GetNextCount"] = (a0, a1) => (Module["_EPDFAction_GetNextCount"] = wasmExports["zd"])(a0, a1);
    Module["_EPDFAction_GetNextAt"] = (a0, a1, a2) => (Module["_EPDFAction_GetNextAt"] = wasmExports["Ad"])(a0, a1, a2);
    Module["_EPDFAction_GetWarningFlags"] = (a0) => (Module["_EPDFAction_GetWarningFlags"] = wasmExports["Bd"])(a0);
    Module["_EPDFAction_IsComplete"] = (a0) => (Module["_EPDFAction_IsComplete"] = wasmExports["Cd"])(a0);
    Module["_EPDFDoc_GetOpenActionModel"] = (a0) => (Module["_EPDFDoc_GetOpenActionModel"] = wasmExports["Dd"])(a0);
    Module["_EPDFDoc_GetAdditionalActionModel"] = (a0, a1) => (Module["_EPDFDoc_GetAdditionalActionModel"] = wasmExports["Ed"])(a0, a1);
    Module["_EPDFDoc_GetPageActionModel"] = (a0, a1, a2) => (Module["_EPDFDoc_GetPageActionModel"] = wasmExports["Fd"])(a0, a1, a2);
    Module["_EPDFAnnot_GetActionModel"] = (a0, a1) => (Module["_EPDFAnnot_GetActionModel"] = wasmExports["Gd"])(a0, a1);
    Module["_EPDF_LoadBaseDocument"] = (a0, a1) => (Module["_EPDF_LoadBaseDocument"] = wasmExports["Hd"])(a0, a1);
    Module["_EPDF_LoadMemBaseDocument"] = (a0, a1, a2) => (Module["_EPDF_LoadMemBaseDocument"] = wasmExports["Id"])(a0, a1, a2);
    Module["_EPDF_LoadMemBaseDocument64"] = (a0, a1, a2) => (Module["_EPDF_LoadMemBaseDocument64"] = wasmExports["Jd"])(a0, a1, a2);
    Module["_EPDF_ReleaseBaseDocument"] = (a0) => (Module["_EPDF_ReleaseBaseDocument"] = wasmExports["Kd"])(a0);
    Module["_EPDFFont_RegisterFont"] = (a0, a1, a2, a3) => (Module["_EPDFFont_RegisterFont"] = wasmExports["Ld"])(a0, a1, a2, a3);
    Module["_EPDFFont_RegisterMemFont"] = (a0, a1, a2, a3, a4) => (Module["_EPDFFont_RegisterMemFont"] = wasmExports["Md"])(a0, a1, a2, a3, a4);
    Module["_EPDFFont_RegisterMemFont64"] = (a0, a1, a2, a3, a4) => (Module["_EPDFFont_RegisterMemFont64"] = wasmExports["Nd"])(a0, a1, a2, a3, a4);
    Module["_EPDFFont_ClearRegisteredFonts"] = () => (Module["_EPDFFont_ClearRegisteredFonts"] = wasmExports["Od"])();
    Module["_EPDFFont_AddFallbackFont"] = (a0) => (Module["_EPDFFont_AddFallbackFont"] = wasmExports["Pd"])(a0);
    Module["_EPDFFont_ClearFallbackFonts"] = () => (Module["_EPDFFont_ClearFallbackFonts"] = wasmExports["Qd"])();
    Module["_EPDFForm_LoadModel"] = (a0) => (Module["_EPDFForm_LoadModel"] = wasmExports["Rd"])(a0);
    Module["_EPDFForm_CloseModel"] = (a0) => (Module["_EPDFForm_CloseModel"] = wasmExports["Sd"])(a0);
    Module["_EPDFForm_GetFormKind"] = (a0) => (Module["_EPDFForm_GetFormKind"] = wasmExports["Td"])(a0);
    Module["_EPDFForm_GetNeedAppearances"] = (a0) => (Module["_EPDFForm_GetNeedAppearances"] = wasmExports["Ud"])(a0);
    Module["_EPDFForm_CountFields"] = (a0) => (Module["_EPDFForm_CountFields"] = wasmExports["Vd"])(a0);
    Module["_EPDFForm_GetFieldActionModel"] = (a0, a1, a2) => (Module["_EPDFForm_GetFieldActionModel"] = wasmExports["Wd"])(a0, a1, a2);
    Module["_EPDFForm_CountCalculationOrder"] = (a0) => (Module["_EPDFForm_CountCalculationOrder"] = wasmExports["Xd"])(a0);
    Module["_EPDFForm_GetCalculationOrderFieldIndex"] = (a0, a1) => (Module["_EPDFForm_GetCalculationOrderFieldIndex"] = wasmExports["Yd"])(a0, a1);
    Module["_EPDFForm_GetFieldObjNum"] = (a0, a1) => (Module["_EPDFForm_GetFieldObjNum"] = wasmExports["Zd"])(a0, a1);
    Module["_EPDFForm_GetFieldFamily"] = (a0, a1) => (Module["_EPDFForm_GetFieldFamily"] = wasmExports["_d"])(a0, a1);
    Module["_EPDFForm_GetFieldFlags"] = (a0, a1) => (Module["_EPDFForm_GetFieldFlags"] = wasmExports["$d"])(a0, a1);
    Module["_EPDFForm_GetFieldOrigin"] = (a0, a1) => (Module["_EPDFForm_GetFieldOrigin"] = wasmExports["ae"])(a0, a1);
    Module["_EPDFForm_GetFieldName"] = (a0, a1, a2, a3) => (Module["_EPDFForm_GetFieldName"] = wasmExports["be"])(a0, a1, a2, a3);
    Module["_EPDFForm_GetFieldAlternateName"] = (a0, a1, a2, a3) => (Module["_EPDFForm_GetFieldAlternateName"] = wasmExports["ce"])(a0, a1, a2, a3);
    Module["_EPDFForm_GetFieldMappingName"] = (a0, a1, a2, a3) => (Module["_EPDFForm_GetFieldMappingName"] = wasmExports["de"])(a0, a1, a2, a3);
    Module["_EPDFForm_GetFieldValueKind"] = (a0, a1) => (Module["_EPDFForm_GetFieldValueKind"] = wasmExports["ee"])(a0, a1);
    Module["_EPDFForm_CountFieldValues"] = (a0, a1) => (Module["_EPDFForm_CountFieldValues"] = wasmExports["fe"])(a0, a1);
    Module["_EPDFForm_GetFieldValueAt"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldValueAt"] = wasmExports["ge"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_GetFieldDefaultValueKind"] = (a0, a1) => (Module["_EPDFForm_GetFieldDefaultValueKind"] = wasmExports["he"])(a0, a1);
    Module["_EPDFForm_CountFieldDefaultValues"] = (a0, a1) => (Module["_EPDFForm_CountFieldDefaultValues"] = wasmExports["ie"])(a0, a1);
    Module["_EPDFForm_GetFieldDefaultValueAt"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldDefaultValueAt"] = wasmExports["je"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_GetFieldMaxLen"] = (a0, a1) => (Module["_EPDFForm_GetFieldMaxLen"] = wasmExports["ke"])(a0, a1);
    Module["_EPDFForm_CountFieldOptions"] = (a0, a1) => (Module["_EPDFForm_CountFieldOptions"] = wasmExports["le"])(a0, a1);
    Module["_EPDFForm_GetFieldOptionLabel"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldOptionLabel"] = wasmExports["me"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_GetFieldOptionValue"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldOptionValue"] = wasmExports["ne"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_IsFieldOptionSelected"] = (a0, a1, a2) => (Module["_EPDFForm_IsFieldOptionSelected"] = wasmExports["oe"])(a0, a1, a2);
    Module["_EPDFForm_CountFieldWidgets"] = (a0, a1) => (Module["_EPDFForm_CountFieldWidgets"] = wasmExports["pe"])(a0, a1);
    Module["_EPDFForm_GetFieldWidgetObjNum"] = (a0, a1, a2) => (Module["_EPDFForm_GetFieldWidgetObjNum"] = wasmExports["qe"])(a0, a1, a2);
    Module["_EPDFForm_GetFieldWidgetPageObjNum"] = (a0, a1, a2) => (Module["_EPDFForm_GetFieldWidgetPageObjNum"] = wasmExports["re"])(a0, a1, a2);
    Module["_EPDFForm_GetFieldWidgetOnState"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldWidgetOnState"] = wasmExports["se"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_GetFieldWidgetExportValue"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_GetFieldWidgetExportValue"] = wasmExports["te"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_IsFieldWidgetChecked"] = (a0, a1, a2) => (Module["_EPDFForm_IsFieldWidgetChecked"] = wasmExports["ue"])(a0, a1, a2);
    Module["_EPDFForm_GetFieldIndexByObjNum"] = (a0, a1) => (Module["_EPDFForm_GetFieldIndexByObjNum"] = wasmExports["ve"])(a0, a1);
    Module["_EPDFForm_GetFieldIndexForWidget"] = (a0, a1) => (Module["_EPDFForm_GetFieldIndexForWidget"] = wasmExports["we"])(a0, a1);
    Module["_EPDFForm_SetToggle"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFForm_SetToggle"] = wasmExports["xe"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFForm_SetTextValue"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFForm_SetTextValue"] = wasmExports["ye"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFForm_SetChoiceValues"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_EPDFForm_SetChoiceValues"] = wasmExports["ze"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_EPDFForm_ResetField"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_ResetField"] = wasmExports["Ae"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_SetFieldDisplay"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFForm_SetFieldDisplay"] = wasmExports["Be"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFForm_SetFieldAppearanceText"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFForm_SetFieldAppearanceText"] = wasmExports["Ce"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFForm_ExportFDF"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_ExportFDF"] = wasmExports["De"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_ExportXFDF"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_ExportXFDF"] = wasmExports["Ee"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_ImportFDF"] = (a0, a1, a2, a3) => (Module["_EPDFForm_ImportFDF"] = wasmExports["Fe"])(a0, a1, a2, a3);
    Module["_EPDFForm_ImportXFDF"] = (a0, a1, a2, a3) => (Module["_EPDFForm_ImportXFDF"] = wasmExports["Ge"])(a0, a1, a2, a3);
    Module["_EPDFForm_Repair"] = (a0, a1, a2) => (Module["_EPDFForm_Repair"] = wasmExports["He"])(a0, a1, a2);
    Module["_EPDFForm_CreateField"] = (a0, a1, a2) => (Module["_EPDFForm_CreateField"] = wasmExports["Ie"])(a0, a1, a2);
    Module["_EPDFForm_AttachWidget"] = (a0, a1, a2, a3) => (Module["_EPDFForm_AttachWidget"] = wasmExports["Je"])(a0, a1, a2, a3);
    Module["_EPDFForm_DetachWidget"] = (a0, a1, a2) => (Module["_EPDFForm_DetachWidget"] = wasmExports["Ke"])(a0, a1, a2);
    Module["_EPDFForm_DeleteField"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_DeleteField"] = wasmExports["Le"])(a0, a1, a2, a3, a4);
    Module["_EPDFForm_SetFieldName"] = (a0, a1, a2) => (Module["_EPDFForm_SetFieldName"] = wasmExports["Me"])(a0, a1, a2);
    Module["_EPDFForm_SetFieldFlags"] = (a0, a1, a2, a3) => (Module["_EPDFForm_SetFieldFlags"] = wasmExports["Ne"])(a0, a1, a2, a3);
    Module["_EPDFForm_SetFieldMaxLen"] = (a0, a1, a2) => (Module["_EPDFForm_SetFieldMaxLen"] = wasmExports["Oe"])(a0, a1, a2);
    Module["_EPDFForm_SetFieldDefaultValues"] = (a0, a1, a2, a3) => (Module["_EPDFForm_SetFieldDefaultValues"] = wasmExports["Pe"])(a0, a1, a2, a3);
    Module["_EPDFForm_SetFieldDefaultToggle"] = (a0, a1, a2) => (Module["_EPDFForm_SetFieldDefaultToggle"] = wasmExports["Qe"])(a0, a1, a2);
    Module["_EPDFForm_RemoveFieldDefaultValue"] = (a0, a1) => (Module["_EPDFForm_RemoveFieldDefaultValue"] = wasmExports["Re"])(a0, a1);
    Module["_EPDFForm_SetFieldAlternateName"] = (a0, a1, a2) => (Module["_EPDFForm_SetFieldAlternateName"] = wasmExports["Se"])(a0, a1, a2);
    Module["_EPDFForm_SetFieldMappingName"] = (a0, a1, a2) => (Module["_EPDFForm_SetFieldMappingName"] = wasmExports["Te"])(a0, a1, a2);
    Module["_EPDFForm_SetFieldOptions"] = (a0, a1, a2, a3, a4) => (Module["_EPDFForm_SetFieldOptions"] = wasmExports["Ue"])(a0, a1, a2, a3, a4);
    Module["_EPDFPage_Flatten"] = (a0, a1) => (Module["_EPDFPage_Flatten"] = wasmExports["Ve"])(a0, a1);
    Module["_EPDFAnnot_Flatten"] = (a0, a1, a2) => (Module["_EPDFAnnot_Flatten"] = wasmExports["We"])(a0, a1, a2);
    Module["_EPDFLayer_OpenLayer"] = (a0, a1, a2, a3) => (Module["_EPDFLayer_OpenLayer"] = wasmExports["Xe"])(a0, a1, a2, a3);
    Module["_EPDFLayer_OpenLayerArtifact"] = (a0, a1, a2, a3) => (Module["_EPDFLayer_OpenLayerArtifact"] = wasmExports["Ye"])(a0, a1, a2, a3);
    Module["_EPDFLayer_IsObjectPromoted"] = (a0, a1) => (Module["_EPDFLayer_IsObjectPromoted"] = wasmExports["Ze"])(a0, a1);
    Module["_EPDFLayer_GetPromotedObjectCount"] = (a0) => (Module["_EPDFLayer_GetPromotedObjectCount"] = wasmExports["_e"])(a0);
    Module["_EPDFLayer_GetBaseDocument"] = (a0) => (Module["_EPDFLayer_GetBaseDocument"] = wasmExports["$e"])(a0);
    Module["_EPDFLayer_SaveDelta"] = (a0, a1, a2) => (Module["_EPDFLayer_SaveDelta"] = wasmExports["af"])(a0, a1, a2);
    Module["_EPDFLayer_SaveDeltaToOwnedBuffer"] = (a0, a1, a2) => (Module["_EPDFLayer_SaveDeltaToOwnedBuffer"] = wasmExports["bf"])(a0, a1, a2);
    Module["_EPDFLayer_SaveLayerArtifact"] = (a0, a1, a2) => (Module["_EPDFLayer_SaveLayerArtifact"] = wasmExports["cf"])(a0, a1, a2);
    Module["_EPDFLayer_SaveLayerArtifactToOwnedBuffer"] = (a0, a1, a2) => (Module["_EPDFLayer_SaveLayerArtifactToOwnedBuffer"] = wasmExports["df"])(a0, a1, a2);
    Module["_EPDFNamedDest_SetDest"] = (a0, a1, a2) => (Module["_EPDFNamedDest_SetDest"] = wasmExports["ef"])(a0, a1, a2);
    Module["_EPDFNamedDest_Remove"] = (a0, a1) => (Module["_EPDFNamedDest_Remove"] = wasmExports["ff"])(a0, a1);
    Module["_EPDFDest_CreateView"] = (a0, a1, a2, a3) => (Module["_EPDFDest_CreateView"] = wasmExports["gf"])(a0, a1, a2, a3);
    Module["_EPDFDest_CreateXYZ"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_EPDFDest_CreateXYZ"] = wasmExports["hf"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_EPDFDest_CreateRemoteView"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDest_CreateRemoteView"] = wasmExports["jf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDest_CreateRemoteXYZ"] = (a0, a1, a2, a3, a4, a5, a6, a7) => (Module["_EPDFDest_CreateRemoteXYZ"] = wasmExports["kf"])(a0, a1, a2, a3, a4, a5, a6, a7);
    Module["_EPDFAction_CreateGoTo"] = (a0, a1) => (Module["_EPDFAction_CreateGoTo"] = wasmExports["lf"])(a0, a1);
    Module["_EPDFAction_CreateGoToNamed"] = (a0, a1) => (Module["_EPDFAction_CreateGoToNamed"] = wasmExports["mf"])(a0, a1);
    Module["_EPDFAction_CreateLaunch"] = (a0, a1) => (Module["_EPDFAction_CreateLaunch"] = wasmExports["nf"])(a0, a1);
    Module["_EPDFAction_CreateRemoteGoToByName"] = (a0, a1, a2) => (Module["_EPDFAction_CreateRemoteGoToByName"] = wasmExports["of"])(a0, a1, a2);
    Module["_EPDFAction_CreateRemoteGoToDest"] = (a0, a1, a2) => (Module["_EPDFAction_CreateRemoteGoToDest"] = wasmExports["pf"])(a0, a1, a2);
    Module["_EPDFAction_CreateURI"] = (a0, a1) => (Module["_EPDFAction_CreateURI"] = wasmExports["qf"])(a0, a1);
    Module["_EPDFBookmark_Create"] = (a0, a1) => (Module["_EPDFBookmark_Create"] = wasmExports["rf"])(a0, a1);
    Module["_EPDFBookmark_Delete"] = (a0, a1) => (Module["_EPDFBookmark_Delete"] = wasmExports["sf"])(a0, a1);
    Module["_EPDFBookmark_AppendChild"] = (a0, a1, a2) => (Module["_EPDFBookmark_AppendChild"] = wasmExports["tf"])(a0, a1, a2);
    Module["_EPDFBookmark_InsertAfter"] = (a0, a1, a2, a3) => (Module["_EPDFBookmark_InsertAfter"] = wasmExports["uf"])(a0, a1, a2, a3);
    Module["_EPDFBookmark_Clear"] = (a0) => (Module["_EPDFBookmark_Clear"] = wasmExports["vf"])(a0);
    Module["_EPDFBookmark_SetTitle"] = (a0, a1) => (Module["_EPDFBookmark_SetTitle"] = wasmExports["wf"])(a0, a1);
    Module["_EPDFBookmark_SetDest"] = (a0, a1, a2) => (Module["_EPDFBookmark_SetDest"] = wasmExports["xf"])(a0, a1, a2);
    Module["_EPDFBookmark_SetAction"] = (a0, a1, a2) => (Module["_EPDFBookmark_SetAction"] = wasmExports["yf"])(a0, a1, a2);
    Module["_EPDFBookmark_ClearTarget"] = (a0) => (Module["_EPDFBookmark_ClearTarget"] = wasmExports["zf"])(a0);
    Module["_EPDFDoc_HasPieceInfoEntry"] = (a0, a1) => (Module["_EPDFDoc_HasPieceInfoEntry"] = wasmExports["Af"])(a0, a1);
    Module["_EPDFDoc_GetPieceInfoEntryCount"] = (a0) => (Module["_EPDFDoc_GetPieceInfoEntryCount"] = wasmExports["Bf"])(a0);
    Module["_EPDFDoc_GetPieceInfoEntryAt"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPieceInfoEntryAt"] = wasmExports["Cf"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetLastModified"] = (a0, a1, a2) => (Module["_EPDFDoc_GetLastModified"] = wasmExports["Df"])(a0, a1, a2);
    Module["_EPDFDoc_GetPieceInfoLastModified"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPieceInfoLastModified"] = wasmExports["Ef"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetPieceInfoKeyCount"] = (a0, a1) => (Module["_EPDFDoc_GetPieceInfoKeyCount"] = wasmExports["Ff"])(a0, a1);
    Module["_EPDFDoc_GetPieceInfoKeyAt"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPieceInfoKeyAt"] = wasmExports["Gf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPieceInfoValueType"] = (a0, a1, a2) => (Module["_EPDFDoc_GetPieceInfoValueType"] = wasmExports["Hf"])(a0, a1, a2);
    Module["_EPDFDoc_SetPieceInfoString"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_SetPieceInfoString"] = wasmExports["If"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPieceInfoString"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPieceInfoString"] = wasmExports["Jf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_SetPieceInfoNumber"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_SetPieceInfoNumber"] = wasmExports["Kf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPieceInfoNumber"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPieceInfoNumber"] = wasmExports["Lf"])(a0, a1, a2, a3);
    Module["_EPDFDoc_SetPieceInfoBoolean"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_SetPieceInfoBoolean"] = wasmExports["Mf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPieceInfoBoolean"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPieceInfoBoolean"] = wasmExports["Nf"])(a0, a1, a2, a3);
    Module["_EPDFDoc_SetPieceInfoName"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_SetPieceInfoName"] = wasmExports["Of"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPieceInfoName"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPieceInfoName"] = wasmExports["Pf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_SetPieceInfoStringArray"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_SetPieceInfoStringArray"] = wasmExports["Qf"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPieceInfoStringArrayCount"] = (a0, a1, a2) => (Module["_EPDFDoc_GetPieceInfoStringArrayCount"] = wasmExports["Rf"])(a0, a1, a2);
    Module["_EPDFDoc_GetPieceInfoStringArrayAt"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_GetPieceInfoStringArrayAt"] = wasmExports["Sf"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_ClearPieceInfoKey"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_ClearPieceInfoKey"] = wasmExports["Tf"])(a0, a1, a2, a3);
    Module["_EPDFDoc_ClearPieceInfoEntry"] = (a0, a1) => (Module["_EPDFDoc_ClearPieceInfoEntry"] = wasmExports["Uf"])(a0, a1);
    Module["_EPDFDoc_HasPagePieceInfoEntry"] = (a0, a1, a2) => (Module["_EPDFDoc_HasPagePieceInfoEntry"] = wasmExports["Vf"])(a0, a1, a2);
    Module["_EPDFDoc_GetPagePieceInfoEntryCount"] = (a0, a1) => (Module["_EPDFDoc_GetPagePieceInfoEntryCount"] = wasmExports["Wf"])(a0, a1);
    Module["_EPDFDoc_GetPagePieceInfoEntryAt"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPagePieceInfoEntryAt"] = wasmExports["Xf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPageLastModified"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPageLastModified"] = wasmExports["Yf"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetPagePieceInfoLastModified"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPagePieceInfoLastModified"] = wasmExports["Zf"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_GetPagePieceInfoKeyCount"] = (a0, a1, a2) => (Module["_EPDFDoc_GetPagePieceInfoKeyCount"] = wasmExports["_f"])(a0, a1, a2);
    Module["_EPDFDoc_GetPagePieceInfoKeyAt"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_GetPagePieceInfoKeyAt"] = wasmExports["$f"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPagePieceInfoValueType"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPagePieceInfoValueType"] = wasmExports["ag"])(a0, a1, a2, a3);
    Module["_EPDFDoc_SetPagePieceInfoString"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_SetPagePieceInfoString"] = wasmExports["bg"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPagePieceInfoString"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_GetPagePieceInfoString"] = wasmExports["cg"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_SetPagePieceInfoNumber"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_SetPagePieceInfoNumber"] = wasmExports["dg"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPagePieceInfoNumber"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPagePieceInfoNumber"] = wasmExports["eg"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_SetPagePieceInfoBoolean"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_SetPagePieceInfoBoolean"] = wasmExports["fg"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPagePieceInfoBoolean"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_GetPagePieceInfoBoolean"] = wasmExports["gg"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_SetPagePieceInfoName"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_SetPagePieceInfoName"] = wasmExports["hg"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_GetPagePieceInfoName"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFDoc_GetPagePieceInfoName"] = wasmExports["ig"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFDoc_SetPagePieceInfoStringArray"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_EPDFDoc_SetPagePieceInfoStringArray"] = wasmExports["jg"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_EPDFDoc_GetPagePieceInfoStringArrayCount"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPagePieceInfoStringArrayCount"] = wasmExports["kg"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetPagePieceInfoStringArrayAt"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_EPDFDoc_GetPagePieceInfoStringArrayAt"] = wasmExports["lg"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_EPDFDoc_ClearPagePieceInfoKey"] = (a0, a1, a2, a3, a4) => (Module["_EPDFDoc_ClearPagePieceInfoKey"] = wasmExports["mg"])(a0, a1, a2, a3, a4);
    Module["_EPDFDoc_ClearPagePieceInfoEntry"] = (a0, a1, a2) => (Module["_EPDFDoc_ClearPagePieceInfoEntry"] = wasmExports["ng"])(a0, a1, a2);
    Module["_EPDF_PNG_EncodeRGBA"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDF_PNG_EncodeRGBA"] = wasmExports["og"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFAnnot_ApplyRedaction"] = (a0, a1, a2) => (Module["_EPDFAnnot_ApplyRedaction"] = wasmExports["pg"])(a0, a1, a2);
    Module["_EPDFPage_ApplyRedactions"] = (a0, a1) => (Module["_EPDFPage_ApplyRedactions"] = wasmExports["qg"])(a0, a1);
    Module["_EPDF_InitThread"] = () => (Module["_EPDF_InitThread"] = wasmExports["rg"])();
    Module["_EPDF_ShutdownThread"] = () => (Module["_EPDF_ShutdownThread"] = wasmExports["sg"])();
    Module["_FPDFAnnot_IsSupportedSubtype"] = (a0) => (Module["_FPDFAnnot_IsSupportedSubtype"] = wasmExports["tg"])(a0);
    Module["_FPDFPage_CreateAnnot"] = (a0, a1) => (Module["_FPDFPage_CreateAnnot"] = wasmExports["ug"])(a0, a1);
    Module["_FPDFPage_GetAnnotCount"] = (a0) => (Module["_FPDFPage_GetAnnotCount"] = wasmExports["vg"])(a0);
    Module["_FPDFPage_GetAnnot"] = (a0, a1) => (Module["_FPDFPage_GetAnnot"] = wasmExports["wg"])(a0, a1);
    Module["_FPDFPage_GetAnnotIndex"] = (a0, a1) => (Module["_FPDFPage_GetAnnotIndex"] = wasmExports["xg"])(a0, a1);
    Module["_FPDFPage_CloseAnnot"] = (a0) => (Module["_FPDFPage_CloseAnnot"] = wasmExports["yg"])(a0);
    Module["_FPDFPage_RemoveAnnot"] = (a0, a1) => (Module["_FPDFPage_RemoveAnnot"] = wasmExports["zg"])(a0, a1);
    Module["_FPDFAnnot_GetSubtype"] = (a0) => (Module["_FPDFAnnot_GetSubtype"] = wasmExports["Ag"])(a0);
    Module["_FPDFAnnot_IsObjectSupportedSubtype"] = (a0) => (Module["_FPDFAnnot_IsObjectSupportedSubtype"] = wasmExports["Bg"])(a0);
    Module["_FPDFAnnot_UpdateObject"] = (a0, a1) => (Module["_FPDFAnnot_UpdateObject"] = wasmExports["Cg"])(a0, a1);
    Module["_FPDFAnnot_AddInkStroke"] = (a0, a1, a2) => (Module["_FPDFAnnot_AddInkStroke"] = wasmExports["Dg"])(a0, a1, a2);
    Module["_FPDFAnnot_RemoveInkList"] = (a0) => (Module["_FPDFAnnot_RemoveInkList"] = wasmExports["Eg"])(a0);
    Module["_FPDFAnnot_AppendObject"] = (a0, a1) => (Module["_FPDFAnnot_AppendObject"] = wasmExports["Fg"])(a0, a1);
    Module["_FPDFAnnot_GetObjectCount"] = (a0) => (Module["_FPDFAnnot_GetObjectCount"] = wasmExports["Gg"])(a0);
    Module["_FPDFAnnot_GetObject"] = (a0, a1) => (Module["_FPDFAnnot_GetObject"] = wasmExports["Hg"])(a0, a1);
    Module["_FPDFAnnot_RemoveObject"] = (a0, a1) => (Module["_FPDFAnnot_RemoveObject"] = wasmExports["Ig"])(a0, a1);
    Module["_FPDFAnnot_SetColor"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFAnnot_SetColor"] = wasmExports["Jg"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFAnnot_GetColor"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFAnnot_GetColor"] = wasmExports["Kg"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFAnnot_HasAttachmentPoints"] = (a0) => (Module["_FPDFAnnot_HasAttachmentPoints"] = wasmExports["Lg"])(a0);
    Module["_FPDFAnnot_SetAttachmentPoints"] = (a0, a1, a2) => (Module["_FPDFAnnot_SetAttachmentPoints"] = wasmExports["Mg"])(a0, a1, a2);
    Module["_FPDFAnnot_AppendAttachmentPoints"] = (a0, a1) => (Module["_FPDFAnnot_AppendAttachmentPoints"] = wasmExports["Ng"])(a0, a1);
    Module["_FPDFAnnot_CountAttachmentPoints"] = (a0) => (Module["_FPDFAnnot_CountAttachmentPoints"] = wasmExports["Og"])(a0);
    Module["_FPDFAnnot_GetAttachmentPoints"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetAttachmentPoints"] = wasmExports["Pg"])(a0, a1, a2);
    Module["_FPDFAnnot_SetRect"] = (a0, a1) => (Module["_FPDFAnnot_SetRect"] = wasmExports["Qg"])(a0, a1);
    Module["_FPDFAnnot_GetRect"] = (a0, a1) => (Module["_FPDFAnnot_GetRect"] = wasmExports["Rg"])(a0, a1);
    Module["_FPDFAnnot_GetVertices"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetVertices"] = wasmExports["Sg"])(a0, a1, a2);
    Module["_FPDFAnnot_GetInkListCount"] = (a0) => (Module["_FPDFAnnot_GetInkListCount"] = wasmExports["Tg"])(a0);
    Module["_FPDFAnnot_GetInkListPath"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetInkListPath"] = wasmExports["Ug"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetLine"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetLine"] = wasmExports["Vg"])(a0, a1, a2);
    Module["_FPDFAnnot_SetBorder"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_SetBorder"] = wasmExports["Wg"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetBorder"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetBorder"] = wasmExports["Xg"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_HasKey"] = (a0, a1) => (Module["_FPDFAnnot_HasKey"] = wasmExports["Yg"])(a0, a1);
    Module["_FPDFAnnot_GetValueType"] = (a0, a1) => (Module["_FPDFAnnot_GetValueType"] = wasmExports["Zg"])(a0, a1);
    Module["_FPDFAnnot_SetStringValue"] = (a0, a1, a2) => (Module["_FPDFAnnot_SetStringValue"] = wasmExports["_g"])(a0, a1, a2);
    Module["_FPDFAnnot_GetStringValue"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetStringValue"] = wasmExports["$g"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetNumberValue"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetNumberValue"] = wasmExports["ah"])(a0, a1, a2);
    Module["_EPDFAnnot_SetNumberValue"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetNumberValue"] = wasmExports["bh"])(a0, a1, a2);
    Module["_EPDFAnnot_HasEmbedMetadata"] = (a0) => (Module["_EPDFAnnot_HasEmbedMetadata"] = wasmExports["ch"])(a0);
    Module["_EPDFAnnot_ClearEmbedMetadata"] = (a0) => (Module["_EPDFAnnot_ClearEmbedMetadata"] = wasmExports["dh"])(a0);
    Module["_EPDFAnnot_ClearEmbedMetadataKey"] = (a0, a1) => (Module["_EPDFAnnot_ClearEmbedMetadataKey"] = wasmExports["eh"])(a0, a1);
    Module["_EPDFAnnot_SetEmbedMetadataString"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetEmbedMetadataString"] = wasmExports["fh"])(a0, a1, a2);
    Module["_EPDFAnnot_GetEmbedMetadataString"] = (a0, a1, a2, a3) => (Module["_EPDFAnnot_GetEmbedMetadataString"] = wasmExports["gh"])(a0, a1, a2, a3);
    Module["_EPDFAnnot_SetEmbedMetadataNumber"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetEmbedMetadataNumber"] = wasmExports["hh"])(a0, a1, a2);
    Module["_EPDFAnnot_GetEmbedMetadataNumber"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetEmbedMetadataNumber"] = wasmExports["ih"])(a0, a1, a2);
    Module["_EPDFAnnot_SetEmbedMetadataBoolean"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetEmbedMetadataBoolean"] = wasmExports["jh"])(a0, a1, a2);
    Module["_EPDFAnnot_GetEmbedMetadataBoolean"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetEmbedMetadataBoolean"] = wasmExports["kh"])(a0, a1, a2);
    Module["_EPDFAnnot_SetEmbedMetadataRect"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetEmbedMetadataRect"] = wasmExports["lh"])(a0, a1, a2);
    Module["_EPDFAnnot_GetEmbedMetadataRect"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetEmbedMetadataRect"] = wasmExports["mh"])(a0, a1, a2);
    Module["_EPDFAnnot_SetEmbedMetadataJSON"] = (a0, a1) => (Module["_EPDFAnnot_SetEmbedMetadataJSON"] = wasmExports["nh"])(a0, a1);
    Module["_EPDFAnnot_GetEmbedMetadataJSON"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetEmbedMetadataJSON"] = wasmExports["oh"])(a0, a1, a2);
    Module["_EPDFDocument_ClearEmbedMetadata"] = (a0) => (Module["_EPDFDocument_ClearEmbedMetadata"] = wasmExports["ph"])(a0);
    Module["_FPDFAnnot_SetAP"] = (a0, a1, a2) => (Module["_FPDFAnnot_SetAP"] = wasmExports["qh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetAP"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetAP"] = wasmExports["rh"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetLinkedAnnot"] = (a0, a1) => (Module["_FPDFAnnot_GetLinkedAnnot"] = wasmExports["sh"])(a0, a1);
    Module["_FPDFAnnot_GetFlags"] = (a0) => (Module["_FPDFAnnot_GetFlags"] = wasmExports["th"])(a0);
    Module["_FPDFAnnot_SetFlags"] = (a0, a1) => (Module["_FPDFAnnot_SetFlags"] = wasmExports["uh"])(a0, a1);
    Module["_FPDFAnnot_GetFormFieldFlags"] = (a0, a1) => (Module["_FPDFAnnot_GetFormFieldFlags"] = wasmExports["vh"])(a0, a1);
    Module["_FPDFAnnot_SetFormFieldFlags"] = (a0, a1, a2) => (Module["_FPDFAnnot_SetFormFieldFlags"] = wasmExports["wh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetFormFieldAtPoint"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetFormFieldAtPoint"] = wasmExports["xh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetFormFieldName"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetFormFieldName"] = wasmExports["yh"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetFormFieldType"] = (a0, a1) => (Module["_FPDFAnnot_GetFormFieldType"] = wasmExports["zh"])(a0, a1);
    Module["_FPDFAnnot_GetFormAdditionalActionJavaScript"] = (a0, a1, a2, a3, a4) => (Module["_FPDFAnnot_GetFormAdditionalActionJavaScript"] = wasmExports["Ah"])(a0, a1, a2, a3, a4);
    Module["_FPDFAnnot_GetFormFieldAlternateName"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetFormFieldAlternateName"] = wasmExports["Bh"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetFormFieldValue"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetFormFieldValue"] = wasmExports["Ch"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_GetOptionCount"] = (a0, a1) => (Module["_FPDFAnnot_GetOptionCount"] = wasmExports["Dh"])(a0, a1);
    Module["_FPDFAnnot_GetOptionLabel"] = (a0, a1, a2, a3, a4) => (Module["_FPDFAnnot_GetOptionLabel"] = wasmExports["Eh"])(a0, a1, a2, a3, a4);
    Module["_FPDFAnnot_IsOptionSelected"] = (a0, a1, a2) => (Module["_FPDFAnnot_IsOptionSelected"] = wasmExports["Fh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetFontSize"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetFontSize"] = wasmExports["Gh"])(a0, a1, a2);
    Module["_FPDFAnnot_SetFontColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFAnnot_SetFontColor"] = wasmExports["Hh"])(a0, a1, a2, a3, a4);
    Module["_FPDFAnnot_GetFontColor"] = (a0, a1, a2, a3, a4) => (Module["_FPDFAnnot_GetFontColor"] = wasmExports["Ih"])(a0, a1, a2, a3, a4);
    Module["_FPDFAnnot_IsChecked"] = (a0, a1) => (Module["_FPDFAnnot_IsChecked"] = wasmExports["Jh"])(a0, a1);
    Module["_FPDFAnnot_SetFocusableSubtypes"] = (a0, a1, a2) => (Module["_FPDFAnnot_SetFocusableSubtypes"] = wasmExports["Kh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetFocusableSubtypesCount"] = (a0) => (Module["_FPDFAnnot_GetFocusableSubtypesCount"] = wasmExports["Lh"])(a0);
    Module["_FPDFAnnot_GetFocusableSubtypes"] = (a0, a1, a2) => (Module["_FPDFAnnot_GetFocusableSubtypes"] = wasmExports["Mh"])(a0, a1, a2);
    Module["_FPDFAnnot_GetLink"] = (a0) => (Module["_FPDFAnnot_GetLink"] = wasmExports["Nh"])(a0);
    Module["_FPDFAnnot_GetFormControlCount"] = (a0, a1) => (Module["_FPDFAnnot_GetFormControlCount"] = wasmExports["Oh"])(a0, a1);
    Module["_FPDFAnnot_GetFormControlIndex"] = (a0, a1) => (Module["_FPDFAnnot_GetFormControlIndex"] = wasmExports["Ph"])(a0, a1);
    Module["_FPDFAnnot_GetFormFieldExportValue"] = (a0, a1, a2, a3) => (Module["_FPDFAnnot_GetFormFieldExportValue"] = wasmExports["Qh"])(a0, a1, a2, a3);
    Module["_FPDFAnnot_SetURI"] = (a0, a1) => (Module["_FPDFAnnot_SetURI"] = wasmExports["Rh"])(a0, a1);
    Module["_EPDFAnnot_SetAction"] = (a0, a1) => (Module["_EPDFAnnot_SetAction"] = wasmExports["Sh"])(a0, a1);
    Module["_EPDFAnnot_RemoveAction"] = (a0) => (Module["_EPDFAnnot_RemoveAction"] = wasmExports["Th"])(a0);
    Module["_EPDFAnnot_RemoveDest"] = (a0) => (Module["_EPDFAnnot_RemoveDest"] = wasmExports["Uh"])(a0);
    Module["_FPDFAnnot_GetFileAttachment"] = (a0) => (Module["_FPDFAnnot_GetFileAttachment"] = wasmExports["Vh"])(a0);
    Module["_FPDFAnnot_AddFileAttachment"] = (a0, a1) => (Module["_FPDFAnnot_AddFileAttachment"] = wasmExports["Wh"])(a0, a1);
    Module["_EPDFAnnot_SetColor"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_SetColor"] = wasmExports["Xh"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_GetColor"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_GetColor"] = wasmExports["Yh"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_ClearColor"] = (a0, a1) => (Module["_EPDFAnnot_ClearColor"] = wasmExports["Zh"])(a0, a1);
    Module["_EPDFAnnot_SetOpacity"] = (a0, a1) => (Module["_EPDFAnnot_SetOpacity"] = wasmExports["_h"])(a0, a1);
    Module["_EPDFAnnot_GetOpacity"] = (a0, a1) => (Module["_EPDFAnnot_GetOpacity"] = wasmExports["$h"])(a0, a1);
    Module["_EPDFAnnot_GetBorderEffect"] = (a0, a1) => (Module["_EPDFAnnot_GetBorderEffect"] = wasmExports["ai"])(a0, a1);
    Module["_EPDFAnnot_SetBorderEffect"] = (a0, a1) => (Module["_EPDFAnnot_SetBorderEffect"] = wasmExports["bi"])(a0, a1);
    Module["_EPDFAnnot_ClearBorderEffect"] = (a0) => (Module["_EPDFAnnot_ClearBorderEffect"] = wasmExports["ci"])(a0);
    Module["_EPDFAnnot_GetRectangleDifferences"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_GetRectangleDifferences"] = wasmExports["di"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_SetRectangleDifferences"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_SetRectangleDifferences"] = wasmExports["ei"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_ClearRectangleDifferences"] = (a0) => (Module["_EPDFAnnot_ClearRectangleDifferences"] = wasmExports["fi"])(a0);
    Module["_EPDFAnnot_GetBorderDashPatternCount"] = (a0) => (Module["_EPDFAnnot_GetBorderDashPatternCount"] = wasmExports["gi"])(a0);
    Module["_EPDFAnnot_GetBorderDashPattern"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetBorderDashPattern"] = wasmExports["hi"])(a0, a1, a2);
    Module["_EPDFAnnot_SetBorderDashPattern"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetBorderDashPattern"] = wasmExports["ii"])(a0, a1, a2);
    Module["_EPDFAnnot_GetBorderStyle"] = (a0, a1) => (Module["_EPDFAnnot_GetBorderStyle"] = wasmExports["ji"])(a0, a1);
    Module["_EPDFAnnot_SetBorderStyle"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetBorderStyle"] = wasmExports["ki"])(a0, a1, a2);
    Module["_EPDFAnnot_GenerateAppearance"] = (a0) => (Module["_EPDFAnnot_GenerateAppearance"] = wasmExports["li"])(a0);
    Module["_EPDFAnnot_GenerateAppearanceWithBlend"] = (a0, a1) => (Module["_EPDFAnnot_GenerateAppearanceWithBlend"] = wasmExports["mi"])(a0, a1);
    Module["_EPDFAnnot_GetBlendMode"] = (a0) => (Module["_EPDFAnnot_GetBlendMode"] = wasmExports["ni"])(a0);
    Module["_EPDFAnnot_SetIntent"] = (a0, a1) => (Module["_EPDFAnnot_SetIntent"] = wasmExports["oi"])(a0, a1);
    Module["_EPDFAnnot_GetIntent"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetIntent"] = wasmExports["pi"])(a0, a1, a2);
    Module["_EPDFAnnot_GetRichContent"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetRichContent"] = wasmExports["qi"])(a0, a1, a2);
    Module["_EPDFAnnot_SetLineEndings"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetLineEndings"] = wasmExports["ri"])(a0, a1, a2);
    Module["_EPDFAnnot_GetLineEndings"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetLineEndings"] = wasmExports["si"])(a0, a1, a2);
    Module["_EPDFAnnot_SetVertices"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetVertices"] = wasmExports["ti"])(a0, a1, a2);
    Module["_EPDFAnnot_SetLine"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetLine"] = wasmExports["ui"])(a0, a1, a2);
    Module["_EPDFAnnot_SetDefaultAppearance"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFAnnot_SetDefaultAppearance"] = wasmExports["vi"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFAnnot_SetDefaultAppearanceRegisteredFont"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFAnnot_SetDefaultAppearanceRegisteredFont"] = wasmExports["wi"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFAnnot_GetDefaultAppearance"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFAnnot_GetDefaultAppearance"] = wasmExports["xi"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFAnnot_SetTextAlignment"] = (a0, a1) => (Module["_EPDFAnnot_SetTextAlignment"] = wasmExports["yi"])(a0, a1);
    Module["_EPDFAnnot_GetTextAlignment"] = (a0) => (Module["_EPDFAnnot_GetTextAlignment"] = wasmExports["zi"])(a0);
    Module["_EPDFPage_GetAnnotByName"] = (a0, a1) => (Module["_EPDFPage_GetAnnotByName"] = wasmExports["Ai"])(a0, a1);
    Module["_EPDFPage_RemoveAnnotByName"] = (a0, a1) => (Module["_EPDFPage_RemoveAnnotByName"] = wasmExports["Bi"])(a0, a1);
    Module["_EPDFAnnot_SetLinkedAnnot"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetLinkedAnnot"] = wasmExports["Ci"])(a0, a1, a2);
    Module["_EPDFPage_GetAnnotCountRaw"] = (a0, a1) => (Module["_EPDFPage_GetAnnotCountRaw"] = wasmExports["Di"])(a0, a1);
    Module["_EPDFPage_GetAnnotRaw"] = (a0, a1, a2) => (Module["_EPDFPage_GetAnnotRaw"] = wasmExports["Ei"])(a0, a1, a2);
    Module["_EPDFPage_RemoveAnnotRaw"] = (a0, a1, a2) => (Module["_EPDFPage_RemoveAnnotRaw"] = wasmExports["Fi"])(a0, a1, a2);
    Module["_EPDFAnnot_SetName"] = (a0, a1) => (Module["_EPDFAnnot_SetName"] = wasmExports["Gi"])(a0, a1);
    Module["_EPDFAnnot_GetName"] = (a0) => (Module["_EPDFAnnot_GetName"] = wasmExports["Hi"])(a0);
    Module["_EPDFAnnot_UpdateAppearanceToRect"] = (a0, a1) => (Module["_EPDFAnnot_UpdateAppearanceToRect"] = wasmExports["Ii"])(a0, a1);
    Module["_EPDFPage_CreateAnnot"] = (a0, a1) => (Module["_EPDFPage_CreateAnnot"] = wasmExports["Ji"])(a0, a1);
    Module["_EPDFAnnot_SetRotate"] = (a0, a1) => (Module["_EPDFAnnot_SetRotate"] = wasmExports["Ki"])(a0, a1);
    Module["_EPDFAnnot_GetRotate"] = (a0, a1) => (Module["_EPDFAnnot_GetRotate"] = wasmExports["Li"])(a0, a1);
    Module["_EPDFAnnot_GetReplyType"] = (a0) => (Module["_EPDFAnnot_GetReplyType"] = wasmExports["Mi"])(a0);
    Module["_EPDFAnnot_SetReplyType"] = (a0, a1) => (Module["_EPDFAnnot_SetReplyType"] = wasmExports["Ni"])(a0, a1);
    Module["_EPDFAnnot_SetOverlayText"] = (a0, a1) => (Module["_EPDFAnnot_SetOverlayText"] = wasmExports["Oi"])(a0, a1);
    Module["_EPDFAnnot_GetOverlayText"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetOverlayText"] = wasmExports["Pi"])(a0, a1, a2);
    Module["_EPDFAnnot_SetOverlayTextRepeat"] = (a0, a1) => (Module["_EPDFAnnot_SetOverlayTextRepeat"] = wasmExports["Qi"])(a0, a1);
    Module["_EPDFAnnot_GetOverlayTextRepeat"] = (a0) => (Module["_EPDFAnnot_GetOverlayTextRepeat"] = wasmExports["Ri"])(a0);
    Module["_EPDFAnnot_SetAppearanceFromPage"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetAppearanceFromPage"] = wasmExports["Si"])(a0, a1, a2);
    Module["_EPDFAnnot_ExportAppearanceAsDocument"] = (a0) => (Module["_EPDFAnnot_ExportAppearanceAsDocument"] = wasmExports["Ti"])(a0);
    Module["_EPDFAnnot_ExportMultipleAppearancesAsDocument"] = (a0, a1) => (Module["_EPDFAnnot_ExportMultipleAppearancesAsDocument"] = wasmExports["Ui"])(a0, a1);
    Module["_EPDFAnnot_GetRect"] = (a0, a1) => (Module["_EPDFAnnot_GetRect"] = wasmExports["Vi"])(a0, a1);
    Module["_EPDFAnnot_SetAPMatrix"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetAPMatrix"] = wasmExports["Wi"])(a0, a1, a2);
    Module["_EPDFAnnot_GetAPMatrix"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetAPMatrix"] = wasmExports["Xi"])(a0, a1, a2);
    Module["_EPDFAnnot_GetAvailableAppearanceModes"] = (a0) => (Module["_EPDFAnnot_GetAvailableAppearanceModes"] = wasmExports["Yi"])(a0);
    Module["_EPDFAnnot_HasAppearanceStream"] = (a0, a1) => (Module["_EPDFAnnot_HasAppearanceStream"] = wasmExports["Zi"])(a0, a1);
    Module["_EPDFAnnot_SetMKColor"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_SetMKColor"] = wasmExports["_i"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_GetMKColor"] = (a0, a1, a2, a3, a4) => (Module["_EPDFAnnot_GetMKColor"] = wasmExports["$i"])(a0, a1, a2, a3, a4);
    Module["_EPDFAnnot_ClearMKColor"] = (a0, a1) => (Module["_EPDFAnnot_ClearMKColor"] = wasmExports["aj"])(a0, a1);
    Module["_EPDFAnnot_GenerateFormFieldAP"] = (a0) => (Module["_EPDFAnnot_GenerateFormFieldAP"] = wasmExports["bj"])(a0);
    Module["_EPDFAnnot_GetCalloutLineCount"] = (a0) => (Module["_EPDFAnnot_GetCalloutLineCount"] = wasmExports["cj"])(a0);
    Module["_EPDFAnnot_GetCalloutLine"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetCalloutLine"] = wasmExports["dj"])(a0, a1, a2);
    Module["_EPDFAnnot_SetCalloutLine"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetCalloutLine"] = wasmExports["ej"])(a0, a1, a2);
    Module["_EPDFAnnot_GetObjectNumber"] = (a0) => (Module["_EPDFAnnot_GetObjectNumber"] = wasmExports["fj"])(a0);
    Module["_EPDFPage_GetAnnotByObjectNumber"] = (a0, a1) => (Module["_EPDFPage_GetAnnotByObjectNumber"] = wasmExports["gj"])(a0, a1);
    Module["_EPDFPage_RemoveAnnot"] = (a0, a1) => (Module["_EPDFPage_RemoveAnnot"] = wasmExports["hj"])(a0, a1);
    Module["_EPDFPage_RemoveAnnotByObjectNumber"] = (a0, a1) => (Module["_EPDFPage_RemoveAnnotByObjectNumber"] = wasmExports["ij"])(a0, a1);
    Module["_EPDFPage_MoveAnnots"] = (a0, a1, a2, a3) => (Module["_EPDFPage_MoveAnnots"] = wasmExports["jj"])(a0, a1, a2, a3);
    Module["_EPDFAnnot_SetExtendedRotation"] = (a0, a1) => (Module["_EPDFAnnot_SetExtendedRotation"] = wasmExports["kj"])(a0, a1);
    Module["_EPDFAnnot_GetExtendedRotation"] = (a0, a1) => (Module["_EPDFAnnot_GetExtendedRotation"] = wasmExports["lj"])(a0, a1);
    Module["_EPDFAnnot_SetUnrotatedRect"] = (a0, a1) => (Module["_EPDFAnnot_SetUnrotatedRect"] = wasmExports["mj"])(a0, a1);
    Module["_EPDFAnnot_GetUnrotatedRect"] = (a0, a1) => (Module["_EPDFAnnot_GetUnrotatedRect"] = wasmExports["nj"])(a0, a1);
    Module["_EPDFAnnot_SetVerticalAlignment"] = (a0, a1) => (Module["_EPDFAnnot_SetVerticalAlignment"] = wasmExports["oj"])(a0, a1);
    Module["_EPDFAnnot_GetVerticalAlignment"] = (a0) => (Module["_EPDFAnnot_GetVerticalAlignment"] = wasmExports["pj"])(a0);
    Module["_EPDFAnnot_SetMeasureRectilinear"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) => (Module["_EPDFAnnot_SetMeasureRectilinear"] = wasmExports["qj"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
    Module["_EPDFAnnot_HasMeasure"] = (a0) => (Module["_EPDFAnnot_HasMeasure"] = wasmExports["rj"])(a0);
    Module["_EPDFAnnot_GetMeasureJson"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetMeasureJson"] = wasmExports["sj"])(a0, a1, a2);
    Module["_EPDFDoc_GetViewportsJson"] = (a0, a1, a2) => (Module["_EPDFDoc_GetViewportsJson"] = wasmExports["tj"])(a0, a1, a2);
    Module["_EPDFDoc_SetPageViewport"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) => (Module["_EPDFDoc_SetPageViewport"] = wasmExports["uj"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
    Module["_EPDFDoc_RemovePageViewport"] = (a0, a1, a2) => (Module["_EPDFDoc_RemovePageViewport"] = wasmExports["vj"])(a0, a1, a2);
    Module["_EPDFDoc_MovePageViewport"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_MovePageViewport"] = wasmExports["wj"])(a0, a1, a2, a3);
    Module["_EPDFDoc_CopyPageViewport"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_CopyPageViewport"] = wasmExports["xj"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetPageViewportsSyntax"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetPageViewportsSyntax"] = wasmExports["yj"])(a0, a1, a2, a3);
    Module["_EPDFDoc_SetPageViewportsSyntax"] = (a0, a1, a2) => (Module["_EPDFDoc_SetPageViewportsSyntax"] = wasmExports["zj"])(a0, a1, a2);
    Module["_EPDFAnnot_SetCaptionOffset"] = (a0, a1, a2) => (Module["_EPDFAnnot_SetCaptionOffset"] = wasmExports["Aj"])(a0, a1, a2);
    Module["_EPDFAnnot_GetCaptionOffset"] = (a0, a1, a2) => (Module["_EPDFAnnot_GetCaptionOffset"] = wasmExports["Bj"])(a0, a1, a2);
    Module["_EPDFAnnot_GenerateMeasurementAppearance"] = (a0, a1, a2) => (Module["_EPDFAnnot_GenerateMeasurementAppearance"] = wasmExports["Cj"])(a0, a1, a2);
    Module["_FPDFDoc_GetAttachmentCount"] = (a0) => (Module["_FPDFDoc_GetAttachmentCount"] = wasmExports["Dj"])(a0);
    Module["_FPDFDoc_AddAttachment"] = (a0, a1) => (Module["_FPDFDoc_AddAttachment"] = wasmExports["Ej"])(a0, a1);
    Module["_FPDFDoc_GetAttachment"] = (a0, a1) => (Module["_FPDFDoc_GetAttachment"] = wasmExports["Fj"])(a0, a1);
    Module["_EPDFDoc_GetAttachmentKey"] = (a0, a1, a2, a3) => (Module["_EPDFDoc_GetAttachmentKey"] = wasmExports["Gj"])(a0, a1, a2, a3);
    Module["_EPDFDoc_GetAttachmentIndexByKey"] = (a0, a1) => (Module["_EPDFDoc_GetAttachmentIndexByKey"] = wasmExports["Hj"])(a0, a1);
    Module["_FPDFDoc_DeleteAttachment"] = (a0, a1) => (Module["_FPDFDoc_DeleteAttachment"] = wasmExports["Ij"])(a0, a1);
    Module["_FPDFAttachment_GetName"] = (a0, a1, a2) => (Module["_FPDFAttachment_GetName"] = wasmExports["Jj"])(a0, a1, a2);
    Module["_FPDFAttachment_HasKey"] = (a0, a1) => (Module["_FPDFAttachment_HasKey"] = wasmExports["Kj"])(a0, a1);
    Module["_FPDFAttachment_GetValueType"] = (a0, a1) => (Module["_FPDFAttachment_GetValueType"] = wasmExports["Lj"])(a0, a1);
    Module["_FPDFAttachment_SetStringValue"] = (a0, a1, a2) => (Module["_FPDFAttachment_SetStringValue"] = wasmExports["Mj"])(a0, a1, a2);
    Module["_FPDFAttachment_GetStringValue"] = (a0, a1, a2, a3) => (Module["_FPDFAttachment_GetStringValue"] = wasmExports["Nj"])(a0, a1, a2, a3);
    Module["_FPDFAttachment_SetFile"] = (a0, a1, a2, a3) => (Module["_FPDFAttachment_SetFile"] = wasmExports["Oj"])(a0, a1, a2, a3);
    Module["_FPDFAttachment_GetFile"] = (a0, a1, a2, a3) => (Module["_FPDFAttachment_GetFile"] = wasmExports["Pj"])(a0, a1, a2, a3);
    Module["_FPDFAttachment_GetSubtype"] = (a0, a1, a2) => (Module["_FPDFAttachment_GetSubtype"] = wasmExports["Qj"])(a0, a1, a2);
    Module["_EPDFAttachment_SetSubtype"] = (a0, a1) => (Module["_EPDFAttachment_SetSubtype"] = wasmExports["Rj"])(a0, a1);
    Module["_EPDFAttachment_SetDescription"] = (a0, a1) => (Module["_EPDFAttachment_SetDescription"] = wasmExports["Sj"])(a0, a1);
    Module["_EPDFAttachment_GetDescription"] = (a0, a1, a2) => (Module["_EPDFAttachment_GetDescription"] = wasmExports["Tj"])(a0, a1, a2);
    Module["_EPDFAttachment_GetIntegerValue"] = (a0, a1, a2) => (Module["_EPDFAttachment_GetIntegerValue"] = wasmExports["Uj"])(a0, a1, a2);
    Module["_EPDFAttachment_ExtractFile"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFAttachment_ExtractFile"] = wasmExports["Vj"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDFAttachment_ExtractFileToOwnedBuffer"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDFAttachment_ExtractFileToOwnedBuffer"] = wasmExports["Wj"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFCatalog_IsTagged"] = (a0) => (Module["_FPDFCatalog_IsTagged"] = wasmExports["Xj"])(a0);
    Module["_FPDFCatalog_GetLanguage"] = (a0, a1, a2) => (Module["_FPDFCatalog_GetLanguage"] = wasmExports["Yj"])(a0, a1, a2);
    Module["_FPDFCatalog_SetLanguage"] = (a0, a1) => (Module["_FPDFCatalog_SetLanguage"] = wasmExports["Zj"])(a0, a1);
    Module["_EPDFCatalog_GetLanguage"] = (a0, a1, a2) => (Module["_EPDFCatalog_GetLanguage"] = wasmExports["_j"])(a0, a1, a2);
    Module["_FPDFAvail_Create"] = (a0, a1) => (Module["_FPDFAvail_Create"] = wasmExports["$j"])(a0, a1);
    Module["_FPDFAvail_Destroy"] = (a0) => (Module["_FPDFAvail_Destroy"] = wasmExports["ak"])(a0);
    Module["_FPDFAvail_IsDocAvail"] = (a0, a1) => (Module["_FPDFAvail_IsDocAvail"] = wasmExports["bk"])(a0, a1);
    Module["_FPDFAvail_GetDocument"] = (a0, a1) => (Module["_FPDFAvail_GetDocument"] = wasmExports["ck"])(a0, a1);
    Module["_FPDFAvail_GetFirstPageNum"] = (a0) => (Module["_FPDFAvail_GetFirstPageNum"] = wasmExports["dk"])(a0);
    Module["_FPDFAvail_IsPageAvail"] = (a0, a1, a2) => (Module["_FPDFAvail_IsPageAvail"] = wasmExports["ek"])(a0, a1, a2);
    Module["_FPDFAvail_IsFormAvail"] = (a0, a1) => (Module["_FPDFAvail_IsFormAvail"] = wasmExports["fk"])(a0, a1);
    Module["_FPDFAvail_IsLinearized"] = (a0) => (Module["_FPDFAvail_IsLinearized"] = wasmExports["gk"])(a0);
    Module["_FPDFBookmark_GetFirstChild"] = (a0, a1) => (Module["_FPDFBookmark_GetFirstChild"] = wasmExports["hk"])(a0, a1);
    Module["_FPDFBookmark_GetNextSibling"] = (a0, a1) => (Module["_FPDFBookmark_GetNextSibling"] = wasmExports["ik"])(a0, a1);
    Module["_FPDFBookmark_GetTitle"] = (a0, a1, a2) => (Module["_FPDFBookmark_GetTitle"] = wasmExports["jk"])(a0, a1, a2);
    Module["_FPDFBookmark_GetCount"] = (a0) => (Module["_FPDFBookmark_GetCount"] = wasmExports["kk"])(a0);
    Module["_FPDFBookmark_Find"] = (a0, a1) => (Module["_FPDFBookmark_Find"] = wasmExports["lk"])(a0, a1);
    Module["_FPDFBookmark_GetDest"] = (a0, a1) => (Module["_FPDFBookmark_GetDest"] = wasmExports["mk"])(a0, a1);
    Module["_FPDFBookmark_GetAction"] = (a0) => (Module["_FPDFBookmark_GetAction"] = wasmExports["nk"])(a0);
    Module["_FPDFAction_GetType"] = (a0) => (Module["_FPDFAction_GetType"] = wasmExports["ok"])(a0);
    Module["_FPDFAction_GetDest"] = (a0, a1) => (Module["_FPDFAction_GetDest"] = wasmExports["pk"])(a0, a1);
    Module["_FPDFAction_GetFilePath"] = (a0, a1, a2) => (Module["_FPDFAction_GetFilePath"] = wasmExports["qk"])(a0, a1, a2);
    Module["_FPDFAction_GetURIPath"] = (a0, a1, a2, a3) => (Module["_FPDFAction_GetURIPath"] = wasmExports["rk"])(a0, a1, a2, a3);
    Module["_FPDFDest_GetDestPageIndex"] = (a0, a1) => (Module["_FPDFDest_GetDestPageIndex"] = wasmExports["sk"])(a0, a1);
    Module["_EPDFDest_GetPageObjectNumber"] = (a0, a1) => (Module["_EPDFDest_GetPageObjectNumber"] = wasmExports["tk"])(a0, a1);
    Module["_FPDFDest_GetView"] = (a0, a1, a2) => (Module["_FPDFDest_GetView"] = wasmExports["uk"])(a0, a1, a2);
    Module["_FPDFDest_GetLocationInPage"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFDest_GetLocationInPage"] = wasmExports["vk"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFLink_GetLinkAtPoint"] = (a0, a1, a2) => (Module["_FPDFLink_GetLinkAtPoint"] = wasmExports["wk"])(a0, a1, a2);
    Module["_FPDFLink_GetLinkZOrderAtPoint"] = (a0, a1, a2) => (Module["_FPDFLink_GetLinkZOrderAtPoint"] = wasmExports["xk"])(a0, a1, a2);
    Module["_FPDFLink_GetDest"] = (a0, a1) => (Module["_FPDFLink_GetDest"] = wasmExports["yk"])(a0, a1);
    Module["_FPDFLink_GetAction"] = (a0) => (Module["_FPDFLink_GetAction"] = wasmExports["zk"])(a0);
    Module["_FPDFLink_Enumerate"] = (a0, a1, a2) => (Module["_FPDFLink_Enumerate"] = wasmExports["Ak"])(a0, a1, a2);
    Module["_FPDFLink_GetAnnot"] = (a0, a1) => (Module["_FPDFLink_GetAnnot"] = wasmExports["Bk"])(a0, a1);
    Module["_FPDFLink_GetAnnotRect"] = (a0, a1) => (Module["_FPDFLink_GetAnnotRect"] = wasmExports["Ck"])(a0, a1);
    Module["_FPDFLink_CountQuadPoints"] = (a0) => (Module["_FPDFLink_CountQuadPoints"] = wasmExports["Dk"])(a0);
    Module["_FPDFLink_GetQuadPoints"] = (a0, a1, a2) => (Module["_FPDFLink_GetQuadPoints"] = wasmExports["Ek"])(a0, a1, a2);
    Module["_FPDF_GetPageAAction"] = (a0, a1) => (Module["_FPDF_GetPageAAction"] = wasmExports["Fk"])(a0, a1);
    Module["_FPDF_GetFileIdentifier"] = (a0, a1, a2, a3) => (Module["_FPDF_GetFileIdentifier"] = wasmExports["Gk"])(a0, a1, a2, a3);
    Module["_FPDF_GetMetaText"] = (a0, a1, a2, a3) => (Module["_FPDF_GetMetaText"] = wasmExports["Hk"])(a0, a1, a2, a3);
    Module["_FPDF_GetPageLabel"] = (a0, a1, a2, a3) => (Module["_FPDF_GetPageLabel"] = wasmExports["Ik"])(a0, a1, a2, a3);
    Module["_EPDF_SetMetaText"] = (a0, a1, a2) => (Module["_EPDF_SetMetaText"] = wasmExports["Jk"])(a0, a1, a2);
    Module["_EPDF_HasMetaText"] = (a0, a1) => (Module["_EPDF_HasMetaText"] = wasmExports["Kk"])(a0, a1);
    Module["_EPDF_GetMetaTrapped"] = (a0) => (Module["_EPDF_GetMetaTrapped"] = wasmExports["Lk"])(a0);
    Module["_EPDF_SetMetaTrapped"] = (a0, a1) => (Module["_EPDF_SetMetaTrapped"] = wasmExports["Mk"])(a0, a1);
    Module["_EPDF_GetMetaKeyCount"] = (a0, a1) => (Module["_EPDF_GetMetaKeyCount"] = wasmExports["Nk"])(a0, a1);
    Module["_EPDF_GetMetaKeyName"] = (a0, a1, a2, a3, a4) => (Module["_EPDF_GetMetaKeyName"] = wasmExports["Ok"])(a0, a1, a2, a3, a4);
    Module["_EPDFPageLabel_GetRulesJSON"] = (a0) => (Module["_EPDFPageLabel_GetRulesJSON"] = wasmExports["Pk"])(a0);
    Module["_EPDFPageLabel_SetRulesJSON"] = (a0, a1) => (Module["_EPDFPageLabel_SetRulesJSON"] = wasmExports["Qk"])(a0, a1);
    Module["_EPDFDoc_PushDownInheritedAttrs"] = (a0, a1, a2) => (Module["_EPDFDoc_PushDownInheritedAttrs"] = wasmExports["Rk"])(a0, a1, a2);
    Module["_FPDFPageObj_NewImageObj"] = (a0) => (Module["_FPDFPageObj_NewImageObj"] = wasmExports["Sk"])(a0);
    Module["_FPDFImageObj_LoadJpegFile"] = (a0, a1, a2, a3) => (Module["_FPDFImageObj_LoadJpegFile"] = wasmExports["Tk"])(a0, a1, a2, a3);
    Module["_FPDFImageObj_LoadJpegFileInline"] = (a0, a1, a2, a3) => (Module["_FPDFImageObj_LoadJpegFileInline"] = wasmExports["Uk"])(a0, a1, a2, a3);
    Module["_FPDFImageObj_SetMatrix"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFImageObj_SetMatrix"] = wasmExports["Vk"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFImageObj_SetBitmap"] = (a0, a1, a2, a3) => (Module["_FPDFImageObj_SetBitmap"] = wasmExports["Wk"])(a0, a1, a2, a3);
    Module["_FPDFImageObj_GetBitmap"] = (a0) => (Module["_FPDFImageObj_GetBitmap"] = wasmExports["Xk"])(a0);
    Module["_FPDFImageObj_GetRenderedBitmap"] = (a0, a1, a2) => (Module["_FPDFImageObj_GetRenderedBitmap"] = wasmExports["Yk"])(a0, a1, a2);
    Module["_FPDFImageObj_GetImageDataDecoded"] = (a0, a1, a2) => (Module["_FPDFImageObj_GetImageDataDecoded"] = wasmExports["Zk"])(a0, a1, a2);
    Module["_FPDFImageObj_GetImageDataRaw"] = (a0, a1, a2) => (Module["_FPDFImageObj_GetImageDataRaw"] = wasmExports["_k"])(a0, a1, a2);
    Module["_FPDFImageObj_GetImageFilterCount"] = (a0) => (Module["_FPDFImageObj_GetImageFilterCount"] = wasmExports["$k"])(a0);
    Module["_FPDFImageObj_GetImageFilter"] = (a0, a1, a2, a3) => (Module["_FPDFImageObj_GetImageFilter"] = wasmExports["al"])(a0, a1, a2, a3);
    Module["_FPDFImageObj_GetImageMetadata"] = (a0, a1, a2) => (Module["_FPDFImageObj_GetImageMetadata"] = wasmExports["bl"])(a0, a1, a2);
    Module["_FPDFImageObj_GetImagePixelSize"] = (a0, a1, a2) => (Module["_FPDFImageObj_GetImagePixelSize"] = wasmExports["cl"])(a0, a1, a2);
    Module["_FPDFImageObj_GetIccProfileDataDecoded"] = (a0, a1, a2, a3, a4) => (Module["_FPDFImageObj_GetIccProfileDataDecoded"] = wasmExports["dl"])(a0, a1, a2, a3, a4);
    Module["_EPDFImageObj_SetPng"] = (a0, a1, a2, a3, a4) => (Module["_EPDFImageObj_SetPng"] = wasmExports["el"])(a0, a1, a2, a3, a4);
    Module["_EPDFImageObj_SetJpeg"] = (a0, a1, a2, a3, a4) => (Module["_EPDFImageObj_SetJpeg"] = wasmExports["fl"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_Delete"] = (a0, a1) => (Module["_FPDFPage_Delete"] = wasmExports["gl"])(a0, a1);
    Module["_FPDF_MovePages"] = (a0, a1, a2, a3) => (Module["_FPDF_MovePages"] = wasmExports["hl"])(a0, a1, a2, a3);
    Module["_FPDFPage_New"] = (a0, a1, a2, a3) => (Module["_FPDFPage_New"] = wasmExports["il"])(a0, a1, a2, a3);
    Module["_FPDFPage_HasTransparency"] = (a0) => (Module["_FPDFPage_HasTransparency"] = wasmExports["jl"])(a0);
    Module["_FPDFPageObj_GetMarkedContentID"] = (a0) => (Module["_FPDFPageObj_GetMarkedContentID"] = wasmExports["kl"])(a0);
    Module["_FPDFPageObjMark_GetParamFloatValue"] = (a0, a1, a2) => (Module["_FPDFPageObjMark_GetParamFloatValue"] = wasmExports["ll"])(a0, a1, a2);
    Module["_FPDFPageObjMark_GetParamBlobValue"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_GetParamBlobValue"] = wasmExports["ml"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObjMark_SetFloatParam"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPageObjMark_SetFloatParam"] = wasmExports["nl"])(a0, a1, a2, a3, a4);
    Module["_FPDFPageObjMark_SetBlobParam"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFPageObjMark_SetBlobParam"] = wasmExports["ol"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFPageObjMark_RemoveParam"] = (a0, a1, a2) => (Module["_FPDFPageObjMark_RemoveParam"] = wasmExports["pl"])(a0, a1, a2);
    Module["_FPDFPageObj_GetIsActive"] = (a0, a1) => (Module["_FPDFPageObj_GetIsActive"] = wasmExports["ql"])(a0, a1);
    Module["_FPDFPageObj_SetIsActive"] = (a0, a1) => (Module["_FPDFPageObj_SetIsActive"] = wasmExports["rl"])(a0, a1);
    Module["_FPDFPageObj_Transform"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFPageObj_Transform"] = wasmExports["sl"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFPageObj_SetBlendMode"] = (a0, a1) => (Module["_FPDFPageObj_SetBlendMode"] = wasmExports["tl"])(a0, a1);
    Module["_FPDFPage_TransformAnnots"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFPage_TransformAnnots"] = wasmExports["ul"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFPage_SetRotation"] = (a0, a1) => (Module["_FPDFPage_SetRotation"] = wasmExports["vl"])(a0, a1);
    Module["_FPDFPageObj_GetRotatedBounds"] = (a0, a1) => (Module["_FPDFPageObj_GetRotatedBounds"] = wasmExports["wl"])(a0, a1);
    Module["_FPDFPageObj_GetLineJoin"] = (a0) => (Module["_FPDFPageObj_GetLineJoin"] = wasmExports["xl"])(a0);
    Module["_FPDFPageObj_SetLineJoin"] = (a0, a1) => (Module["_FPDFPageObj_SetLineJoin"] = wasmExports["yl"])(a0, a1);
    Module["_FPDFPageObj_GetLineCap"] = (a0) => (Module["_FPDFPageObj_GetLineCap"] = wasmExports["zl"])(a0);
    Module["_FPDFPageObj_SetLineCap"] = (a0, a1) => (Module["_FPDFPageObj_SetLineCap"] = wasmExports["Al"])(a0, a1);
    Module["_FPDFPageObj_GetDashPhase"] = (a0, a1) => (Module["_FPDFPageObj_GetDashPhase"] = wasmExports["Bl"])(a0, a1);
    Module["_FPDFPageObj_SetDashPhase"] = (a0, a1) => (Module["_FPDFPageObj_SetDashPhase"] = wasmExports["Cl"])(a0, a1);
    Module["_FPDFPageObj_GetDashCount"] = (a0) => (Module["_FPDFPageObj_GetDashCount"] = wasmExports["Dl"])(a0);
    Module["_FPDFPageObj_GetDashArray"] = (a0, a1, a2) => (Module["_FPDFPageObj_GetDashArray"] = wasmExports["El"])(a0, a1, a2);
    Module["_FPDFPageObj_SetDashArray"] = (a0, a1, a2, a3) => (Module["_FPDFPageObj_SetDashArray"] = wasmExports["Fl"])(a0, a1, a2, a3);
    Module["_FPDFPageObj_NewTextObj"] = (a0, a1, a2) => (Module["_FPDFPageObj_NewTextObj"] = wasmExports["Gl"])(a0, a1, a2);
    Module["_FPDFTextObj_GetRenderedBitmap"] = (a0, a1, a2, a3) => (Module["_FPDFTextObj_GetRenderedBitmap"] = wasmExports["Hl"])(a0, a1, a2, a3);
    Module["_FPDFFont_GetIsEmbedded"] = (a0) => (Module["_FPDFFont_GetIsEmbedded"] = wasmExports["Il"])(a0);
    Module["_EPDFText_RedactInRect"] = (a0, a1, a2, a3) => (Module["_EPDFText_RedactInRect"] = wasmExports["Jl"])(a0, a1, a2, a3);
    Module["_EPDFText_RedactInQuads"] = (a0, a1, a2, a3, a4) => (Module["_EPDFText_RedactInQuads"] = wasmExports["Kl"])(a0, a1, a2, a3, a4);
    Module["_FPDFDoc_GetPageMode"] = (a0) => (Module["_FPDFDoc_GetPageMode"] = wasmExports["Ll"])(a0);
    Module["_FPDFPage_Flatten"] = (a0, a1) => (Module["_FPDFPage_Flatten"] = wasmExports["Ml"])(a0, a1);
    Module["_FPDFPage_HasFormFieldAtPoint"] = (a0, a1, a2, a3) => (Module["_FPDFPage_HasFormFieldAtPoint"] = wasmExports["Nl"])(a0, a1, a2, a3);
    Module["_FPDFPage_FormFieldZOrderAtPoint"] = (a0, a1, a2, a3) => (Module["_FPDFPage_FormFieldZOrderAtPoint"] = wasmExports["Ol"])(a0, a1, a2, a3);
    Module["_FORM_OnMouseMove"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnMouseMove"] = wasmExports["Pl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnMouseWheel"] = (a0, a1, a2, a3, a4, a5) => (Module["_FORM_OnMouseWheel"] = wasmExports["Ql"])(a0, a1, a2, a3, a4, a5);
    Module["_FORM_OnFocus"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnFocus"] = wasmExports["Rl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnLButtonDown"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnLButtonDown"] = wasmExports["Sl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnLButtonUp"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnLButtonUp"] = wasmExports["Tl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnLButtonDoubleClick"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnLButtonDoubleClick"] = wasmExports["Ul"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnRButtonDown"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnRButtonDown"] = wasmExports["Vl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnRButtonUp"] = (a0, a1, a2, a3, a4) => (Module["_FORM_OnRButtonUp"] = wasmExports["Wl"])(a0, a1, a2, a3, a4);
    Module["_FORM_OnKeyDown"] = (a0, a1, a2, a3) => (Module["_FORM_OnKeyDown"] = wasmExports["Xl"])(a0, a1, a2, a3);
    Module["_FORM_OnKeyUp"] = (a0, a1, a2, a3) => (Module["_FORM_OnKeyUp"] = wasmExports["Yl"])(a0, a1, a2, a3);
    Module["_FORM_OnChar"] = (a0, a1, a2, a3) => (Module["_FORM_OnChar"] = wasmExports["Zl"])(a0, a1, a2, a3);
    Module["_FORM_GetFocusedText"] = (a0, a1, a2, a3) => (Module["_FORM_GetFocusedText"] = wasmExports["_l"])(a0, a1, a2, a3);
    Module["_FORM_GetSelectedText"] = (a0, a1, a2, a3) => (Module["_FORM_GetSelectedText"] = wasmExports["$l"])(a0, a1, a2, a3);
    Module["_FORM_ReplaceAndKeepSelection"] = (a0, a1, a2) => (Module["_FORM_ReplaceAndKeepSelection"] = wasmExports["am"])(a0, a1, a2);
    Module["_FORM_ReplaceSelection"] = (a0, a1, a2) => (Module["_FORM_ReplaceSelection"] = wasmExports["bm"])(a0, a1, a2);
    Module["_FORM_SelectAllText"] = (a0, a1) => (Module["_FORM_SelectAllText"] = wasmExports["cm"])(a0, a1);
    Module["_FORM_CanUndo"] = (a0, a1) => (Module["_FORM_CanUndo"] = wasmExports["dm"])(a0, a1);
    Module["_FORM_CanRedo"] = (a0, a1) => (Module["_FORM_CanRedo"] = wasmExports["em"])(a0, a1);
    Module["_FORM_Undo"] = (a0, a1) => (Module["_FORM_Undo"] = wasmExports["fm"])(a0, a1);
    Module["_FORM_Redo"] = (a0, a1) => (Module["_FORM_Redo"] = wasmExports["gm"])(a0, a1);
    Module["_FORM_ForceToKillFocus"] = (a0) => (Module["_FORM_ForceToKillFocus"] = wasmExports["hm"])(a0);
    Module["_FORM_GetFocusedAnnot"] = (a0, a1, a2) => (Module["_FORM_GetFocusedAnnot"] = wasmExports["im"])(a0, a1, a2);
    Module["_FORM_SetFocusedAnnot"] = (a0, a1) => (Module["_FORM_SetFocusedAnnot"] = wasmExports["jm"])(a0, a1);
    Module["_FPDF_SetFormFieldHighlightColor"] = (a0, a1, a2) => (Module["_FPDF_SetFormFieldHighlightColor"] = wasmExports["km"])(a0, a1, a2);
    Module["_FPDF_RemoveFormFieldHighlight"] = (a0) => (Module["_FPDF_RemoveFormFieldHighlight"] = wasmExports["lm"])(a0);
    Module["_FORM_OnBeforeClosePage"] = (a0, a1) => (Module["_FORM_OnBeforeClosePage"] = wasmExports["mm"])(a0, a1);
    Module["_FORM_DoDocumentJSAction"] = (a0) => (Module["_FORM_DoDocumentJSAction"] = wasmExports["nm"])(a0);
    Module["_FORM_DoDocumentOpenAction"] = (a0) => (Module["_FORM_DoDocumentOpenAction"] = wasmExports["om"])(a0);
    Module["_FORM_DoDocumentAAction"] = (a0, a1) => (Module["_FORM_DoDocumentAAction"] = wasmExports["pm"])(a0, a1);
    Module["_FORM_DoPageAAction"] = (a0, a1, a2) => (Module["_FORM_DoPageAAction"] = wasmExports["qm"])(a0, a1, a2);
    Module["_FORM_SetIndexSelected"] = (a0, a1, a2, a3) => (Module["_FORM_SetIndexSelected"] = wasmExports["rm"])(a0, a1, a2, a3);
    Module["_FORM_IsIndexSelected"] = (a0, a1, a2) => (Module["_FORM_IsIndexSelected"] = wasmExports["sm"])(a0, a1, a2);
    Module["_FPDFDoc_GetJavaScriptActionCount"] = (a0) => (Module["_FPDFDoc_GetJavaScriptActionCount"] = wasmExports["tm"])(a0);
    Module["_FPDFDoc_GetJavaScriptAction"] = (a0, a1) => (Module["_FPDFDoc_GetJavaScriptAction"] = wasmExports["um"])(a0, a1);
    Module["_EPDFDoc_GetNamedJavaScriptActionModel"] = (a0, a1) => (Module["_EPDFDoc_GetNamedJavaScriptActionModel"] = wasmExports["vm"])(a0, a1);
    Module["_FPDFDoc_CloseJavaScriptAction"] = (a0) => (Module["_FPDFDoc_CloseJavaScriptAction"] = wasmExports["wm"])(a0);
    Module["_FPDFJavaScriptAction_GetName"] = (a0, a1, a2) => (Module["_FPDFJavaScriptAction_GetName"] = wasmExports["xm"])(a0, a1, a2);
    Module["_FPDFJavaScriptAction_GetScript"] = (a0, a1, a2) => (Module["_FPDFJavaScriptAction_GetScript"] = wasmExports["ym"])(a0, a1, a2);
    Module["_FPDF_ImportPages"] = (a0, a1, a2, a3) => (Module["_FPDF_ImportPages"] = wasmExports["zm"])(a0, a1, a2, a3);
    Module["_FPDF_ImportNPagesToOne"] = (a0, a1, a2, a3, a4) => (Module["_FPDF_ImportNPagesToOne"] = wasmExports["Am"])(a0, a1, a2, a3, a4);
    Module["_FPDF_NewXObjectFromPage"] = (a0, a1, a2) => (Module["_FPDF_NewXObjectFromPage"] = wasmExports["Bm"])(a0, a1, a2);
    Module["_FPDF_CloseXObject"] = (a0) => (Module["_FPDF_CloseXObject"] = wasmExports["Cm"])(a0);
    Module["_FPDF_NewFormObjectFromXObject"] = (a0) => (Module["_FPDF_NewFormObjectFromXObject"] = wasmExports["Dm"])(a0);
    Module["_FPDF_CopyViewerPreferences"] = (a0, a1) => (Module["_FPDF_CopyViewerPreferences"] = wasmExports["Em"])(a0, a1);
    Module["_FPDF_RenderPageBitmapWithColorScheme_Start"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (Module["_FPDF_RenderPageBitmapWithColorScheme_Start"] = wasmExports["Fm"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    Module["_FPDF_RenderPageBitmap_Start"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => (Module["_FPDF_RenderPageBitmap_Start"] = wasmExports["Gm"])(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    Module["_FPDF_RenderPage_Continue"] = (a0, a1) => (Module["_FPDF_RenderPage_Continue"] = wasmExports["Hm"])(a0, a1);
    Module["_FPDF_RenderPage_Close"] = (a0) => (Module["_FPDF_RenderPage_Close"] = wasmExports["Im"])(a0);
    Module["_EPDF_FreeBuffer"] = (a0) => (Module["_EPDF_FreeBuffer"] = wasmExports["Jm"])(a0);
    Module["_EPDF_SaveDocumentToOwnedBuffer"] = (a0, a1, a2) => (Module["_EPDF_SaveDocumentToOwnedBuffer"] = wasmExports["Km"])(a0, a1, a2);
    Module["_EPDF_SaveDocumentToOwnedBufferWithVersion"] = (a0, a1, a2, a3) => (Module["_EPDF_SaveDocumentToOwnedBufferWithVersion"] = wasmExports["Lm"])(a0, a1, a2, a3);
    Module["_FPDFText_GetCharIndexFromTextIndex"] = (a0, a1) => (Module["_FPDFText_GetCharIndexFromTextIndex"] = wasmExports["Mm"])(a0, a1);
    Module["_FPDFText_GetTextIndexFromCharIndex"] = (a0, a1) => (Module["_FPDFText_GetTextIndexFromCharIndex"] = wasmExports["Nm"])(a0, a1);
    Module["_FPDF_GetSignatureObject"] = (a0, a1) => (Module["_FPDF_GetSignatureObject"] = wasmExports["Om"])(a0, a1);
    Module["_FPDFSignatureObj_GetContents"] = (a0, a1, a2) => (Module["_FPDFSignatureObj_GetContents"] = wasmExports["Pm"])(a0, a1, a2);
    Module["_FPDFSignatureObj_GetByteRange"] = (a0, a1, a2) => (Module["_FPDFSignatureObj_GetByteRange"] = wasmExports["Qm"])(a0, a1, a2);
    Module["_FPDFSignatureObj_GetSubFilter"] = (a0, a1, a2) => (Module["_FPDFSignatureObj_GetSubFilter"] = wasmExports["Rm"])(a0, a1, a2);
    Module["_FPDFSignatureObj_GetReason"] = (a0, a1, a2) => (Module["_FPDFSignatureObj_GetReason"] = wasmExports["Sm"])(a0, a1, a2);
    Module["_FPDFSignatureObj_GetTime"] = (a0, a1, a2) => (Module["_FPDFSignatureObj_GetTime"] = wasmExports["Tm"])(a0, a1, a2);
    Module["_FPDFSignatureObj_GetDocMDPPermission"] = (a0) => (Module["_FPDFSignatureObj_GetDocMDPPermission"] = wasmExports["Um"])(a0);
    Module["_FPDF_StructTree_GetChildAtIndex"] = (a0, a1) => (Module["_FPDF_StructTree_GetChildAtIndex"] = wasmExports["Vm"])(a0, a1);
    Module["_FPDF_StructElement_GetAltText"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetAltText"] = wasmExports["Wm"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetActualText"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetActualText"] = wasmExports["Xm"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetID"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetID"] = wasmExports["Ym"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetLang"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetLang"] = wasmExports["Zm"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetAttributeCount"] = (a0) => (Module["_FPDF_StructElement_GetAttributeCount"] = wasmExports["_m"])(a0);
    Module["_FPDF_StructElement_GetAttributeAtIndex"] = (a0, a1) => (Module["_FPDF_StructElement_GetAttributeAtIndex"] = wasmExports["$m"])(a0, a1);
    Module["_FPDF_StructElement_GetStringAttribute"] = (a0, a1, a2, a3) => (Module["_FPDF_StructElement_GetStringAttribute"] = wasmExports["an"])(a0, a1, a2, a3);
    Module["_FPDF_StructElement_GetMarkedContentID"] = (a0) => (Module["_FPDF_StructElement_GetMarkedContentID"] = wasmExports["bn"])(a0);
    Module["_FPDF_StructElement_GetType"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetType"] = wasmExports["cn"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetObjType"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetObjType"] = wasmExports["dn"])(a0, a1, a2);
    Module["_FPDF_StructElement_GetTitle"] = (a0, a1, a2) => (Module["_FPDF_StructElement_GetTitle"] = wasmExports["en"])(a0, a1, a2);
    Module["_FPDF_StructElement_CountChildren"] = (a0) => (Module["_FPDF_StructElement_CountChildren"] = wasmExports["fn"])(a0);
    Module["_FPDF_StructElement_GetChildAtIndex"] = (a0, a1) => (Module["_FPDF_StructElement_GetChildAtIndex"] = wasmExports["gn"])(a0, a1);
    Module["_FPDF_StructElement_GetChildMarkedContentID"] = (a0, a1) => (Module["_FPDF_StructElement_GetChildMarkedContentID"] = wasmExports["hn"])(a0, a1);
    Module["_FPDF_StructElement_GetParent"] = (a0) => (Module["_FPDF_StructElement_GetParent"] = wasmExports["jn"])(a0);
    Module["_FPDF_StructElement_Attr_GetCount"] = (a0) => (Module["_FPDF_StructElement_Attr_GetCount"] = wasmExports["kn"])(a0);
    Module["_FPDF_StructElement_Attr_GetName"] = (a0, a1, a2, a3, a4) => (Module["_FPDF_StructElement_Attr_GetName"] = wasmExports["ln"])(a0, a1, a2, a3, a4);
    Module["_FPDF_StructElement_Attr_GetValue"] = (a0, a1) => (Module["_FPDF_StructElement_Attr_GetValue"] = wasmExports["mn"])(a0, a1);
    Module["_FPDF_StructElement_Attr_GetType"] = (a0) => (Module["_FPDF_StructElement_Attr_GetType"] = wasmExports["nn"])(a0);
    Module["_FPDF_StructElement_Attr_GetBooleanValue"] = (a0, a1) => (Module["_FPDF_StructElement_Attr_GetBooleanValue"] = wasmExports["on"])(a0, a1);
    Module["_FPDF_StructElement_Attr_GetNumberValue"] = (a0, a1) => (Module["_FPDF_StructElement_Attr_GetNumberValue"] = wasmExports["pn"])(a0, a1);
    Module["_FPDF_StructElement_Attr_GetStringValue"] = (a0, a1, a2, a3) => (Module["_FPDF_StructElement_Attr_GetStringValue"] = wasmExports["qn"])(a0, a1, a2, a3);
    Module["_FPDF_StructElement_Attr_GetBlobValue"] = (a0, a1, a2, a3) => (Module["_FPDF_StructElement_Attr_GetBlobValue"] = wasmExports["rn"])(a0, a1, a2, a3);
    Module["_FPDF_StructElement_Attr_CountChildren"] = (a0) => (Module["_FPDF_StructElement_Attr_CountChildren"] = wasmExports["sn"])(a0);
    Module["_FPDF_StructElement_Attr_GetChildAtIndex"] = (a0, a1) => (Module["_FPDF_StructElement_Attr_GetChildAtIndex"] = wasmExports["tn"])(a0, a1);
    Module["_FPDF_StructElement_GetMarkedContentIdCount"] = (a0) => (Module["_FPDF_StructElement_GetMarkedContentIdCount"] = wasmExports["un"])(a0);
    Module["_FPDF_StructElement_GetMarkedContentIdAtIndex"] = (a0, a1) => (Module["_FPDF_StructElement_GetMarkedContentIdAtIndex"] = wasmExports["vn"])(a0, a1);
    Module["_FPDF_AddInstalledFont"] = (a0, a1, a2) => (Module["_FPDF_AddInstalledFont"] = wasmExports["wn"])(a0, a1, a2);
    Module["_FPDF_SetSystemFontInfo"] = (a0) => (Module["_FPDF_SetSystemFontInfo"] = wasmExports["xn"])(a0);
    Module["_FPDF_GetDefaultTTFMap"] = () => (Module["_FPDF_GetDefaultTTFMap"] = wasmExports["yn"])();
    Module["_FPDF_GetDefaultTTFMapCount"] = () => (Module["_FPDF_GetDefaultTTFMapCount"] = wasmExports["zn"])();
    Module["_FPDF_GetDefaultTTFMapEntry"] = (a0) => (Module["_FPDF_GetDefaultTTFMapEntry"] = wasmExports["An"])(a0);
    Module["_FPDF_GetDefaultSystemFontInfo"] = () => (Module["_FPDF_GetDefaultSystemFontInfo"] = wasmExports["Bn"])();
    Module["_FPDF_FreeDefaultSystemFontInfo"] = (a0) => (Module["_FPDF_FreeDefaultSystemFontInfo"] = wasmExports["Cn"])(a0);
    Module["_FPDFText_IsGenerated"] = (a0, a1) => (Module["_FPDFText_IsGenerated"] = wasmExports["Dn"])(a0, a1);
    Module["_FPDFText_IsHyphen"] = (a0, a1) => (Module["_FPDFText_IsHyphen"] = wasmExports["En"])(a0, a1);
    Module["_FPDFText_HasUnicodeMapError"] = (a0, a1) => (Module["_FPDFText_HasUnicodeMapError"] = wasmExports["Fn"])(a0, a1);
    Module["_FPDFText_GetFontInfo"] = (a0, a1, a2, a3, a4) => (Module["_FPDFText_GetFontInfo"] = wasmExports["Gn"])(a0, a1, a2, a3, a4);
    Module["_FPDFText_GetFontWeight"] = (a0, a1) => (Module["_FPDFText_GetFontWeight"] = wasmExports["Hn"])(a0, a1);
    Module["_FPDFText_GetFillColor"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFText_GetFillColor"] = wasmExports["In"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFText_GetStrokeColor"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFText_GetStrokeColor"] = wasmExports["Jn"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFText_GetCharAngle"] = (a0, a1) => (Module["_FPDFText_GetCharAngle"] = wasmExports["Kn"])(a0, a1);
    Module["_EPDFText_GetCharGeometry"] = (a0, a1, a2) => (Module["_EPDFText_GetCharGeometry"] = wasmExports["Ln"])(a0, a1, a2);
    Module["_EPDFText_GetTextFull"] = (a0, a1, a2) => (Module["_EPDFText_GetTextFull"] = wasmExports["Mn"])(a0, a1, a2);
    Module["_EPDFText_GetCharToTextMap"] = (a0, a1, a2) => (Module["_EPDFText_GetCharToTextMap"] = wasmExports["Nn"])(a0, a1, a2);
    Module["_FPDFText_GetCharIndexAtPos"] = (a0, a1, a2, a3, a4) => (Module["_FPDFText_GetCharIndexAtPos"] = wasmExports["On"])(a0, a1, a2, a3, a4);
    Module["_FPDFText_GetText"] = (a0, a1, a2, a3) => (Module["_FPDFText_GetText"] = wasmExports["Pn"])(a0, a1, a2, a3);
    Module["_FPDFText_CountRects"] = (a0, a1, a2) => (Module["_FPDFText_CountRects"] = wasmExports["Qn"])(a0, a1, a2);
    Module["_FPDFText_GetRect"] = (a0, a1, a2, a3, a4, a5) => (Module["_FPDFText_GetRect"] = wasmExports["Rn"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDFText_GetBoundedText"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFText_GetBoundedText"] = wasmExports["Sn"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFText_FindStart"] = (a0, a1, a2, a3) => (Module["_FPDFText_FindStart"] = wasmExports["Tn"])(a0, a1, a2, a3);
    Module["_FPDFText_FindNext"] = (a0) => (Module["_FPDFText_FindNext"] = wasmExports["Un"])(a0);
    Module["_FPDFText_FindPrev"] = (a0) => (Module["_FPDFText_FindPrev"] = wasmExports["Vn"])(a0);
    Module["_FPDFText_GetSchResultIndex"] = (a0) => (Module["_FPDFText_GetSchResultIndex"] = wasmExports["Wn"])(a0);
    Module["_FPDFText_GetSchCount"] = (a0) => (Module["_FPDFText_GetSchCount"] = wasmExports["Xn"])(a0);
    Module["_FPDFText_FindClose"] = (a0) => (Module["_FPDFText_FindClose"] = wasmExports["Yn"])(a0);
    Module["_FPDFLink_LoadWebLinks"] = (a0) => (Module["_FPDFLink_LoadWebLinks"] = wasmExports["Zn"])(a0);
    Module["_FPDFLink_CountWebLinks"] = (a0) => (Module["_FPDFLink_CountWebLinks"] = wasmExports["_n"])(a0);
    Module["_FPDFLink_GetURL"] = (a0, a1, a2, a3) => (Module["_FPDFLink_GetURL"] = wasmExports["$n"])(a0, a1, a2, a3);
    Module["_FPDFLink_CountRects"] = (a0, a1) => (Module["_FPDFLink_CountRects"] = wasmExports["ao"])(a0, a1);
    Module["_FPDFLink_GetRect"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_FPDFLink_GetRect"] = wasmExports["bo"])(a0, a1, a2, a3, a4, a5, a6);
    Module["_FPDFLink_GetTextRange"] = (a0, a1, a2, a3) => (Module["_FPDFLink_GetTextRange"] = wasmExports["co"])(a0, a1, a2, a3);
    Module["_FPDFLink_CloseWebLinks"] = (a0) => (Module["_FPDFLink_CloseWebLinks"] = wasmExports["eo"])(a0);
    Module["_FPDFPage_GetDecodedThumbnailData"] = (a0, a1, a2) => (Module["_FPDFPage_GetDecodedThumbnailData"] = wasmExports["fo"])(a0, a1, a2);
    Module["_FPDFPage_GetRawThumbnailData"] = (a0, a1, a2) => (Module["_FPDFPage_GetRawThumbnailData"] = wasmExports["go"])(a0, a1, a2);
    Module["_FPDFPage_GetThumbnailAsBitmap"] = (a0) => (Module["_FPDFPage_GetThumbnailAsBitmap"] = wasmExports["ho"])(a0);
    Module["_FPDFPage_SetMediaBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_SetMediaBox"] = wasmExports["io"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_SetCropBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_SetCropBox"] = wasmExports["jo"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_SetBleedBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_SetBleedBox"] = wasmExports["ko"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_SetTrimBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_SetTrimBox"] = wasmExports["lo"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_SetArtBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_SetArtBox"] = wasmExports["mo"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetBleedBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_GetBleedBox"] = wasmExports["no"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetTrimBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_GetTrimBox"] = wasmExports["oo"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_GetArtBox"] = (a0, a1, a2, a3, a4) => (Module["_FPDFPage_GetArtBox"] = wasmExports["po"])(a0, a1, a2, a3, a4);
    Module["_FPDFPage_TransFormWithClip"] = (a0, a1, a2) => (Module["_FPDFPage_TransFormWithClip"] = wasmExports["qo"])(a0, a1, a2);
    Module["_FPDFClipPath_CountPathSegments"] = (a0, a1) => (Module["_FPDFClipPath_CountPathSegments"] = wasmExports["ro"])(a0, a1);
    Module["_FPDFClipPath_GetPathSegment"] = (a0, a1, a2) => (Module["_FPDFClipPath_GetPathSegment"] = wasmExports["so"])(a0, a1, a2);
    Module["_FPDF_CreateClipPath"] = (a0, a1, a2, a3) => (Module["_FPDF_CreateClipPath"] = wasmExports["to"])(a0, a1, a2, a3);
    Module["_FPDF_DestroyClipPath"] = (a0) => (Module["_FPDF_DestroyClipPath"] = wasmExports["uo"])(a0);
    Module["_FPDFPage_InsertClipPath"] = (a0, a1) => (Module["_FPDFPage_InsertClipPath"] = wasmExports["vo"])(a0, a1);
    Module["_FPDF_InitLibrary"] = () => (Module["_FPDF_InitLibrary"] = wasmExports["wo"])();
    Module["_FPDF_DestroyLibrary"] = () => (Module["_FPDF_DestroyLibrary"] = wasmExports["xo"])();
    Module["_FPDF_SetSandBoxPolicy"] = (a0, a1) => (Module["_FPDF_SetSandBoxPolicy"] = wasmExports["yo"])(a0, a1);
    Module["_FPDF_LoadDocument"] = (a0, a1) => (Module["_FPDF_LoadDocument"] = wasmExports["zo"])(a0, a1);
    Module["_FPDF_GetFormType"] = (a0) => (Module["_FPDF_GetFormType"] = wasmExports["Ao"])(a0);
    Module["_FPDF_LoadXFA"] = (a0) => (Module["_FPDF_LoadXFA"] = wasmExports["Bo"])(a0);
    Module["_FPDF_LoadMemDocument"] = (a0, a1, a2) => (Module["_FPDF_LoadMemDocument"] = wasmExports["Co"])(a0, a1, a2);
    Module["_FPDF_LoadCustomDocument"] = (a0, a1) => (Module["_FPDF_LoadCustomDocument"] = wasmExports["Do"])(a0, a1);
    Module["_FPDF_GetFileVersion"] = (a0, a1) => (Module["_FPDF_GetFileVersion"] = wasmExports["Eo"])(a0, a1);
    Module["_FPDF_DocumentHasValidCrossReferenceTable"] = (a0) => (Module["_FPDF_DocumentHasValidCrossReferenceTable"] = wasmExports["Fo"])(a0);
    Module["_FPDF_GetDocUserPermissions"] = (a0) => (Module["_FPDF_GetDocUserPermissions"] = wasmExports["Go"])(a0);
    Module["_EPDF_SetEncryption"] = (a0, a1, a2, a3) => (Module["_EPDF_SetEncryption"] = wasmExports["Ho"])(a0, a1, a2, a3);
    Module["_EPDF_RemoveEncryption"] = (a0) => (Module["_EPDF_RemoveEncryption"] = wasmExports["Io"])(a0);
    Module["_EPDF_UnlockOwnerPermissions"] = (a0, a1) => (Module["_EPDF_UnlockOwnerPermissions"] = wasmExports["Jo"])(a0, a1);
    Module["_EPDF_CheckPasswordPermissions"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDF_CheckPasswordPermissions"] = wasmExports["Ko"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDF_SetRuntimeOwnerPermissions"] = (a0, a1) => (Module["_EPDF_SetRuntimeOwnerPermissions"] = wasmExports["Lo"])(a0, a1);
    Module["_EPDF_IsEncrypted"] = (a0) => (Module["_EPDF_IsEncrypted"] = wasmExports["Mo"])(a0);
    Module["_EPDF_IsOwnerUnlocked"] = (a0) => (Module["_EPDF_IsOwnerUnlocked"] = wasmExports["No"])(a0);
    Module["_EPDFDoc_LoadPageByObjectNumber"] = (a0, a1) => (Module["_EPDFDoc_LoadPageByObjectNumber"] = wasmExports["Oo"])(a0, a1);
    Module["_EPDFDoc_LoadPageByObjectNumberNormalized"] = (a0, a1) => (Module["_EPDFDoc_LoadPageByObjectNumberNormalized"] = wasmExports["Po"])(a0, a1);
    Module["_EPDFDoc_GetPageObjectNumberByIndex"] = (a0, a1) => (Module["_EPDFDoc_GetPageObjectNumberByIndex"] = wasmExports["Qo"])(a0, a1);
    Module["_EPDFDoc_DeletePageByObjectNumber"] = (a0, a1) => (Module["_EPDFDoc_DeletePageByObjectNumber"] = wasmExports["Ro"])(a0, a1);
    Module["_EPDFDoc_SetPageRotationByObjectNumber"] = (a0, a1, a2) => (Module["_EPDFDoc_SetPageRotationByObjectNumber"] = wasmExports["So"])(a0, a1, a2);
    Module["_EPDFPage_GetObjectNumber"] = (a0) => (Module["_EPDFPage_GetObjectNumber"] = wasmExports["To"])(a0);
    Module["_FPDF_GetPageWidth"] = (a0) => (Module["_FPDF_GetPageWidth"] = wasmExports["Uo"])(a0);
    Module["_FPDF_GetPageHeight"] = (a0) => (Module["_FPDF_GetPageHeight"] = wasmExports["Vo"])(a0);
    Module["_FPDF_GetPageBoundingBox"] = (a0, a1) => (Module["_FPDF_GetPageBoundingBox"] = wasmExports["Wo"])(a0, a1);
    Module["_FPDF_RenderPageBitmapWithMatrix"] = (a0, a1, a2, a3, a4) => (Module["_FPDF_RenderPageBitmapWithMatrix"] = wasmExports["Xo"])(a0, a1, a2, a3, a4);
    Module["_EPDF_RenderAnnotBitmap"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDF_RenderAnnotBitmap"] = wasmExports["Yo"])(a0, a1, a2, a3, a4, a5);
    Module["_EPDF_RenderAnnotBitmapUnrotated"] = (a0, a1, a2, a3, a4, a5) => (Module["_EPDF_RenderAnnotBitmapUnrotated"] = wasmExports["Zo"])(a0, a1, a2, a3, a4, a5);
    Module["_FPDF_GetLastError"] = () => (Module["_FPDF_GetLastError"] = wasmExports["_o"])();
    Module["_FPDF_DeviceToPage"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (Module["_FPDF_DeviceToPage"] = wasmExports["$o"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    Module["_FPDF_PageToDevice"] = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => (Module["_FPDF_PageToDevice"] = wasmExports["ap"])(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
    Module["_FPDFBitmap_GetFormat"] = (a0) => (Module["_FPDFBitmap_GetFormat"] = wasmExports["bp"])(a0);
    Module["_FPDFBitmap_GetWidth"] = (a0) => (Module["_FPDFBitmap_GetWidth"] = wasmExports["cp"])(a0);
    Module["_FPDFBitmap_GetHeight"] = (a0) => (Module["_FPDFBitmap_GetHeight"] = wasmExports["dp"])(a0);
    Module["_FPDF_GetPageSizeByIndexF"] = (a0, a1, a2) => (Module["_FPDF_GetPageSizeByIndexF"] = wasmExports["ep"])(a0, a1, a2);
    Module["_EPDF_GetPageRotationByIndex"] = (a0, a1) => (Module["_EPDF_GetPageRotationByIndex"] = wasmExports["fp"])(a0, a1);
    Module["_EPDF_GetPageSizeByIndexNormalized"] = (a0, a1, a2) => (Module["_EPDF_GetPageSizeByIndexNormalized"] = wasmExports["gp"])(a0, a1, a2);
    Module["_EPDF_GetPageBoxByIndex"] = (a0, a1, a2, a3) => (Module["_EPDF_GetPageBoxByIndex"] = wasmExports["hp"])(a0, a1, a2, a3);
    Module["_EPDF_GetPageUserUnitByIndex"] = (a0, a1, a2) => (Module["_EPDF_GetPageUserUnitByIndex"] = wasmExports["ip"])(a0, a1, a2);
    Module["_EPDF_LoadPageNormalized"] = (a0, a1, a2) => (Module["_EPDF_LoadPageNormalized"] = wasmExports["jp"])(a0, a1, a2);
    Module["_FPDF_GetPageSizeByIndex"] = (a0, a1, a2, a3) => (Module["_FPDF_GetPageSizeByIndex"] = wasmExports["kp"])(a0, a1, a2, a3);
    Module["_FPDF_VIEWERREF_GetPrintScaling"] = (a0) => (Module["_FPDF_VIEWERREF_GetPrintScaling"] = wasmExports["lp"])(a0);
    Module["_FPDF_VIEWERREF_GetNumCopies"] = (a0) => (Module["_FPDF_VIEWERREF_GetNumCopies"] = wasmExports["mp"])(a0);
    Module["_FPDF_VIEWERREF_GetPrintPageRange"] = (a0) => (Module["_FPDF_VIEWERREF_GetPrintPageRange"] = wasmExports["np"])(a0);
    Module["_FPDF_VIEWERREF_GetPrintPageRangeCount"] = (a0) => (Module["_FPDF_VIEWERREF_GetPrintPageRangeCount"] = wasmExports["op"])(a0);
    Module["_FPDF_VIEWERREF_GetPrintPageRangeElement"] = (a0, a1) => (Module["_FPDF_VIEWERREF_GetPrintPageRangeElement"] = wasmExports["pp"])(a0, a1);
    Module["_FPDF_VIEWERREF_GetDuplex"] = (a0) => (Module["_FPDF_VIEWERREF_GetDuplex"] = wasmExports["qp"])(a0);
    Module["_FPDF_VIEWERREF_GetName"] = (a0, a1, a2, a3) => (Module["_FPDF_VIEWERREF_GetName"] = wasmExports["rp"])(a0, a1, a2, a3);
    Module["_FPDF_CountNamedDests"] = (a0) => (Module["_FPDF_CountNamedDests"] = wasmExports["sp"])(a0);
    Module["_FPDF_GetNamedDestByName"] = (a0, a1) => (Module["_FPDF_GetNamedDestByName"] = wasmExports["tp"])(a0, a1);
    Module["_FPDF_GetNamedDest"] = (a0, a1, a2, a3) => (Module["_FPDF_GetNamedDest"] = wasmExports["up"])(a0, a1, a2, a3);
    Module["_FPDF_GetXFAPacketCount"] = (a0) => (Module["_FPDF_GetXFAPacketCount"] = wasmExports["vp"])(a0);
    Module["_FPDF_GetXFAPacketName"] = (a0, a1, a2, a3) => (Module["_FPDF_GetXFAPacketName"] = wasmExports["wp"])(a0, a1, a2, a3);
    Module["_FPDF_GetXFAPacketContent"] = (a0, a1, a2, a3, a4) => (Module["_FPDF_GetXFAPacketContent"] = wasmExports["xp"])(a0, a1, a2, a3, a4);
    Module["_FPDF_GetTrailerEnds"] = (a0, a1, a2) => (Module["_FPDF_GetTrailerEnds"] = wasmExports["yp"])(a0, a1, a2);
    Module["_EPDFPage_GetPathSegments"] = (a0, a1, a2, a3, a4, a5, a6) => (Module["_EPDFPage_GetPathSegments"] = wasmExports["zp"])(a0, a1, a2, a3, a4, a5, a6);
    var _emscripten_builtin_memalign = (a0, a1) => (_emscripten_builtin_memalign = wasmExports["Ap"])(a0, a1);
    var _setThrew = (a0, a1) => (_setThrew = wasmExports["Bp"])(a0, a1);
    var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports["Cp"])(a0);
    var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports["Dp"])(a0);
    var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["Ep"])();
    function invoke_viii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_ii(index, a1) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(index, a1, a2) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiii(index, a1, a2, a3) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        return getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vii(index, a1, a2) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_vi(index, a1) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_v(index) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)();
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiii(index, a1, a2, a3, a4) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
      var sp = stackSave();
      try {
        getWasmTableEntry(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
      } catch (e) {
        stackRestore(sp);
        if (e !== e + 0) throw e;
        _setThrew(1, 0);
      }
    }
    Module["wasmExports"] = wasmExports;
    Module["ccall"] = ccall;
    Module["cwrap"] = cwrap;
    Module["addFunction"] = addFunction;
    Module["removeFunction"] = removeFunction;
    Module["setValue"] = setValue;
    Module["getValue"] = getValue;
    Module["UTF8ToString"] = UTF8ToString;
    Module["stringToUTF8"] = stringToUTF8;
    Module["lengthBytesUTF8"] = lengthBytesUTF8;
    Module["UTF16ToString"] = UTF16ToString;
    Module["stringToUTF16"] = stringToUTF16;
    var calledRun;
    var calledPrerun;
    dependenciesFulfilled = function runCaller() {
      if (!calledRun) run();
      if (!calledRun) dependenciesFulfilled = runCaller;
    };
    function run() {
      if (runDependencies > 0) {
        return;
      }
      if (!calledPrerun) {
        calledPrerun = 1;
        preRun();
        if (runDependencies > 0) {
          return;
        }
      }
      function doRun() {
        var _a;
        if (calledRun) return;
        calledRun = 1;
        Module["calledRun"] = 1;
        if (ABORT) return;
        initRuntime();
        readyPromiseResolve(Module);
        (_a = Module["onRuntimeInitialized"]) == null ? void 0 : _a.call(Module);
        postRun();
      }
      if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(() => {
          setTimeout(() => Module["setStatus"](""), 1);
          doRun();
        }, 1);
      } else {
        doRun();
      }
    }
    if (Module["preInit"]) {
      if (typeof Module["preInit"] == "function") Module["preInit"] = [Module["preInit"]];
      while (Module["preInit"].length > 0) {
        Module["preInit"].pop()();
      }
    }
    run();
    moduleRtn = readyPromise;
    return moduleRtn;
  });
})();
const functions = {
  ec_add_paragraph: [["number", "number", "number", "number", "number", "number", "number", "number"], "number"],
  ec_buffer_alloc: [["number"], "number"],
  ec_build_page_model: [["number", "number"], "number"],
  ec_build_page_model_region: [["number", "number", "number", "number", "number", "number"], "number"],
  ec_clone_marker: [["number", "number", "number", "number"], "number"],
  ec_commit_paragraph: [["number", "number", "number", "number", "number", "number"], "number"],
  ec_dealias_page_fonts: [["number", "number"], "number"],
  ec_delete_paragraph: [["number", "number", "number"], "number"],
  ec_document_info: [["number"], "number"],
  ec_duplicate_paragraph: [["number", "number", "number", "number", "number"], "number"],
  ec_form_draw: [["number", "number", "number", "number", "number", "number", "number", "number", "number"], null],
  ec_get_paragraph_objects: [["number", "number", "number", "number", "number"], "number"],
  ec_get_run_font_data: [["number", "number", "number", "number", "number", "number"], "number"],
  ec_history_begin: [["number", "number", "number"], null],
  ec_history_clear: [["number"], null],
  ec_history_depth: [["number", "number"], "number"],
  ec_history_drop_page: [["number", "number"], null],
  ec_history_end: [["number", "number"], null],
  ec_history_next_page: [["number", "number"], "number"],
  ec_history_note_insert: [["number", "number", "number"], null],
  ec_history_note_matrix: [["number", "number", "number"], null],
  ec_history_note_zorder: [["number", "number", "number"], null],
  ec_history_redo: [["number", "number"], "number"],
  ec_history_remove_object: [["number", "number", "number"], "number"],
  ec_history_undo: [["number", "number"], "number"],
  ec_last_splice_plan: [["number", "number"], "number"],
  ec_mark_fonts_fragile: [["number", "number"], null],
  ec_move_paragraph: [["number", "number", "number", "number", "number"], "number"],
  ec_normalize_page_paint: [["number"], "number"],
  ec_page_crop_origin: [["number", "number", "number", "number"], null],
  ec_page_has_cid_fonts: [["number", "number"], "number"],
  ec_page_regen_is_lossy: [["number", "number", "number"], "number"],
  ec_page_text_json: [["number", "number"], "number"],
  ec_page_text_state: [["number", "number"], "number"],
  ec_page_transform: [["number", "number", "number"], null],
  ec_preview_paragraph: [["number", "number", "number", "number", "number", "number"], "number"],
  ec_reencode_page_fonts: [["number", "number"], "number"],
  ec_render_paragraph_live: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"],
  ec_render_paragraph_live_end: [["number", "number"], "number"],
  ec_resize_paragraph: [["number", "number", "number", "number"], "number"],
  ec_save_document: [["number", "number", "number"], "number"],
  ec_select_text: [["number", "number", "number", "number", "number", "number", "number"], "number"],
  ec_session_create: [["number", "number", "number"], "number"],
  ec_session_destroy: [["number"], null],
  ec_set_flatten_forms: [["number", "number"], null],
  ec_set_surgical: [["number", "number"], null],
  ec_spell_check_page: [["number", "number"], "number"],
  ec_spell_load: [["number", "number", "number"], "number"],
  ec_string_free: [["number"], null],
  ec_synth_run_font: [["number", "number", "number", "number", "number"], "number"],
  ec_test_arabic: [["number", "number"], "number"],
  ec_test_bidi: [["number", "number"], "number"],
  ec_test_pagetext: [["number", "number"], "number"],
  ec_test_paraadv: [["number", "number", "number"], "number"],
  ec_test_shape: [["number", "number", "number"], "number"],
  ec_test_subset: [["number", "number", "number", "number"], "number"],
  ec_version: [[], "number"],
  EPDF_CheckPasswordPermissions: [["number", "string", "number", "number", "number", "number"], "boolean"],
  EPDF_FreeBuffer: [["number"], null],
  EPDF_GetMetaKeyCount: [["number", "boolean"], "number"],
  EPDF_GetMetaKeyName: [["number", "number", "boolean", "number", "number"], "number"],
  EPDF_GetMetaTrapped: [["number"], "number"],
  EPDF_GetPageBoxByIndex: [["number", "number", "number", "number"], "boolean"],
  EPDF_GetPageRotationByIndex: [["number", "number"], "number"],
  EPDF_GetPageSizeByIndexNormalized: [["number", "number", "number"], "boolean"],
  EPDF_GetPageUserUnitByIndex: [["number", "number", "number"], "boolean"],
  EPDF_HasMetaText: [["number", "string"], "boolean"],
  EPDF_InitThread: [[], null],
  EPDF_IsEncrypted: [["number"], "boolean"],
  EPDF_IsOwnerUnlocked: [["number"], "boolean"],
  EPDF_LoadBaseDocument: [["number", "string"], "number"],
  EPDF_LoadMemBaseDocument: [["number", "number", "string"], "number"],
  EPDF_LoadMemBaseDocument64: [["number", "number", "string"], "number"],
  EPDF_LoadPageNormalized: [["number", "number", "number"], "number"],
  EPDF_PNG_EncodeRGBA: [["number", "number", "number", "number", "number", "number"], "number"],
  EPDF_ReleaseBaseDocument: [["number"], null],
  EPDF_RemoveEncryption: [["number"], "boolean"],
  EPDF_RenderAnnotBitmap: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDF_RenderAnnotBitmapUnrotated: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDF_SaveDocumentToOwnedBuffer: [["number", "number", "number"], "number"],
  EPDF_SaveDocumentToOwnedBufferWithVersion: [["number", "number", "number", "number"], "number"],
  EPDF_SetEncryption: [["number", "string", "string", "number"], "boolean"],
  EPDF_SetMetaText: [["number", "string", "number"], "boolean"],
  EPDF_SetMetaTrapped: [["number", "number"], "boolean"],
  EPDF_SetRuntimeOwnerPermissions: [["number", "boolean"], "boolean"],
  EPDF_ShutdownThread: [[], null],
  EPDF_UnlockOwnerPermissions: [["number", "string"], "boolean"],
  EPDFAction_CloseModel: [["number"], null],
  EPDFAction_CreateGoTo: [["number", "number"], "number"],
  EPDFAction_CreateGoToNamed: [["number", "string"], "number"],
  EPDFAction_CreateLaunch: [["number", "number"], "number"],
  EPDFAction_CreateRemoteGoToByName: [["number", "number", "number"], "number"],
  EPDFAction_CreateRemoteGoToDest: [["number", "number", "number"], "number"],
  EPDFAction_CreateURI: [["number", "string"], "number"],
  EPDFAction_GetNextAt: [["number", "number", "number"], "number"],
  EPDFAction_GetNextCount: [["number", "number"], "number"],
  EPDFAction_GetNodeCount: [["number"], "number"],
  EPDFAction_GetNodeDest: [["number", "number", "number"], "number"],
  EPDFAction_GetNodeFilePath: [["number", "number", "number", "number"], "number"],
  EPDFAction_GetNodeJavaScript: [["number", "number", "number", "number"], "number"],
  EPDFAction_GetNodeName: [["number", "number", "number", "number"], "number"],
  EPDFAction_GetNodeSubtype: [["number", "number", "number", "number"], "number"],
  EPDFAction_GetNodeType: [["number", "number"], "number"],
  EPDFAction_GetNodeURI: [["number", "number", "number", "number", "number"], "number"],
  EPDFAction_GetRootNode: [["number"], "number"],
  EPDFAction_GetWarningFlags: [["number"], "number"],
  EPDFAction_IsComplete: [["number"], "boolean"],
  EPDFAction_LoadModel: [["number"], "number"],
  EPDFAction_NodeHasJavaScript: [["number", "number"], "boolean"],
  EPDFAnnot_ApplyRedaction: [["number", "number", "number"], "boolean"],
  EPDFAnnot_ClearBorderEffect: [["number"], "boolean"],
  EPDFAnnot_ClearColor: [["number", "number"], "boolean"],
  EPDFAnnot_ClearEmbedMetadata: [["number"], "boolean"],
  EPDFAnnot_ClearEmbedMetadataKey: [["number", "string"], "boolean"],
  EPDFAnnot_ClearMKColor: [["number", "number"], "boolean"],
  EPDFAnnot_ClearRectangleDifferences: [["number"], "boolean"],
  EPDFAnnot_ExportAppearanceAsDocument: [["number"], "number"],
  EPDFAnnot_ExportMultipleAppearancesAsDocument: [["number", "number"], "number"],
  EPDFAnnot_Flatten: [["number", "number", "number"], "number"],
  EPDFAnnot_GenerateAppearance: [["number"], "boolean"],
  EPDFAnnot_GenerateAppearanceWithBlend: [["number", "number"], "boolean"],
  EPDFAnnot_GenerateFormFieldAP: [["number"], "boolean"],
  EPDFAnnot_GenerateMeasurementAppearance: [["number", "number", "number"], "boolean"],
  EPDFAnnot_GetActionModel: [["number", "number"], "number"],
  EPDFAnnot_GetAPMatrix: [["number", "number", "number"], "boolean"],
  EPDFAnnot_GetAvailableAppearanceModes: [["number"], "number"],
  EPDFAnnot_GetBlendMode: [["number"], "number"],
  EPDFAnnot_GetBorderDashPattern: [["number", "number", "number"], "boolean"],
  EPDFAnnot_GetBorderDashPatternCount: [["number"], "number"],
  EPDFAnnot_GetBorderEffect: [["number", "number"], "boolean"],
  EPDFAnnot_GetBorderStyle: [["number", "number"], "number"],
  EPDFAnnot_GetCalloutLine: [["number", "number", "number"], "number"],
  EPDFAnnot_GetCalloutLineCount: [["number"], "number"],
  EPDFAnnot_GetCaptionOffset: [["number", "number", "number"], "boolean"],
  EPDFAnnot_GetColor: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_GetDefaultAppearance: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_GetEmbedMetadataBoolean: [["number", "string", "number"], "boolean"],
  EPDFAnnot_GetEmbedMetadataJSON: [["number", "number", "number"], "number"],
  EPDFAnnot_GetEmbedMetadataNumber: [["number", "string", "number"], "boolean"],
  EPDFAnnot_GetEmbedMetadataRect: [["number", "string", "number"], "boolean"],
  EPDFAnnot_GetEmbedMetadataString: [["number", "string", "number", "number"], "number"],
  EPDFAnnot_GetExtendedRotation: [["number", "number"], "boolean"],
  EPDFAnnot_GetIntent: [["number", "number", "number"], "number"],
  EPDFAnnot_GetLineEndings: [["number", "number", "number"], "boolean"],
  EPDFAnnot_GetMeasureJson: [["number", "number", "number"], "number"],
  EPDFAnnot_GetMKColor: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_GetName: [["number"], "number"],
  EPDFAnnot_GetObjectNumber: [["number"], "number"],
  EPDFAnnot_GetOpacity: [["number", "number"], "boolean"],
  EPDFAnnot_GetOverlayText: [["number", "number", "number"], "number"],
  EPDFAnnot_GetOverlayTextRepeat: [["number"], "boolean"],
  EPDFAnnot_GetRect: [["number", "number"], "boolean"],
  EPDFAnnot_GetRectangleDifferences: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_GetReplyType: [["number"], "number"],
  EPDFAnnot_GetRichContent: [["number", "number", "number"], "number"],
  EPDFAnnot_GetRotate: [["number", "number"], "boolean"],
  EPDFAnnot_GetTextAlignment: [["number"], "number"],
  EPDFAnnot_GetUnrotatedRect: [["number", "number"], "boolean"],
  EPDFAnnot_GetVerticalAlignment: [["number"], "number"],
  EPDFAnnot_HasAppearanceStream: [["number", "number"], "boolean"],
  EPDFAnnot_HasEmbedMetadata: [["number"], "boolean"],
  EPDFAnnot_HasMeasure: [["number"], "boolean"],
  EPDFAnnot_RemoveAction: [["number"], "boolean"],
  EPDFAnnot_RemoveDest: [["number"], "boolean"],
  EPDFAnnot_SetAction: [["number", "number"], "boolean"],
  EPDFAnnot_SetAPMatrix: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetAppearanceFromPage: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetBorderDashPattern: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetBorderEffect: [["number", "number"], "boolean"],
  EPDFAnnot_SetBorderStyle: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetCalloutLine: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetCaptionOffset: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetColor: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetDefaultAppearance: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetDefaultAppearanceRegisteredFont: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetEmbedMetadataBoolean: [["number", "string", "boolean"], "boolean"],
  EPDFAnnot_SetEmbedMetadataJSON: [["number", "number"], "boolean"],
  EPDFAnnot_SetEmbedMetadataNumber: [["number", "string", "number"], "boolean"],
  EPDFAnnot_SetEmbedMetadataRect: [["number", "string", "number"], "boolean"],
  EPDFAnnot_SetEmbedMetadataString: [["number", "string", "number"], "boolean"],
  EPDFAnnot_SetExtendedRotation: [["number", "number"], "boolean"],
  EPDFAnnot_SetIntent: [["number", "string"], "boolean"],
  EPDFAnnot_SetLine: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetLineEndings: [["number", "number", "number"], "boolean"],
  EPDFAnnot_SetLinkedAnnot: [["number", "string", "number"], "boolean"],
  EPDFAnnot_SetMeasureRectilinear: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetMKColor: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetName: [["number", "number"], "boolean"],
  EPDFAnnot_SetNumberValue: [["number", "string", "number"], "boolean"],
  EPDFAnnot_SetOpacity: [["number", "number"], "boolean"],
  EPDFAnnot_SetOverlayText: [["number", "number"], "boolean"],
  EPDFAnnot_SetOverlayTextRepeat: [["number", "boolean"], "boolean"],
  EPDFAnnot_SetRectangleDifferences: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAnnot_SetReplyType: [["number", "number"], "boolean"],
  EPDFAnnot_SetRotate: [["number", "number"], "boolean"],
  EPDFAnnot_SetTextAlignment: [["number", "number"], "boolean"],
  EPDFAnnot_SetUnrotatedRect: [["number", "number"], "boolean"],
  EPDFAnnot_SetVerticalAlignment: [["number", "number"], "boolean"],
  EPDFAnnot_SetVertices: [["number", "number", "number"], "boolean"],
  EPDFAnnot_UpdateAppearanceToRect: [["number", "number"], "boolean"],
  EPDFAttachment_ExtractFile: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAttachment_ExtractFileToOwnedBuffer: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFAttachment_GetDescription: [["number", "number", "number"], "number"],
  EPDFAttachment_GetIntegerValue: [["number", "string", "number"], "boolean"],
  EPDFAttachment_SetDescription: [["number", "number"], "boolean"],
  EPDFAttachment_SetSubtype: [["number", "string"], "boolean"],
  EPDFBookmark_AppendChild: [["number", "number", "number"], "number"],
  EPDFBookmark_Clear: [["number"], "boolean"],
  EPDFBookmark_ClearTarget: [["number"], "boolean"],
  EPDFBookmark_Create: [["number", "number"], "number"],
  EPDFBookmark_Delete: [["number", "number"], "boolean"],
  EPDFBookmark_InsertAfter: [["number", "number", "number", "number"], "number"],
  EPDFBookmark_SetAction: [["number", "number", "number"], "boolean"],
  EPDFBookmark_SetDest: [["number", "number", "number"], "boolean"],
  EPDFBookmark_SetTitle: [["number", "number"], "boolean"],
  EPDFCatalog_GetLanguage: [["number", "number", "number"], "number"],
  EPDFDest_CreateRemoteView: [["number", "number", "number", "number", "number"], "number"],
  EPDFDest_CreateRemoteXYZ: [["number", "number", "boolean", "number", "boolean", "number", "boolean", "number"], "number"],
  EPDFDest_CreateView: [["number", "number", "number", "number"], "number"],
  EPDFDest_CreateXYZ: [["number", "boolean", "number", "boolean", "number", "boolean", "number"], "number"],
  EPDFDest_GetPageObjectNumber: [["number", "number"], "number"],
  EPDFDoc_ClearPagePieceInfoEntry: [["number", "number", "string"], "boolean"],
  EPDFDoc_ClearPagePieceInfoKey: [["number", "number", "string", "string", "number"], "boolean"],
  EPDFDoc_ClearPieceInfoEntry: [["number", "string"], "boolean"],
  EPDFDoc_ClearPieceInfoKey: [["number", "string", "string", "number"], "boolean"],
  EPDFDoc_CopyPageViewport: [["number", "number", "number", "number"], "number"],
  EPDFDoc_DeletePageByObjectNumber: [["number", "number"], "boolean"],
  EPDFDoc_GetAdditionalActionModel: [["number", "number"], "number"],
  EPDFDoc_GetAttachmentIndexByKey: [["number", "number"], "number"],
  EPDFDoc_GetAttachmentKey: [["number", "number", "number", "number"], "number"],
  EPDFDoc_GetLastModified: [["number", "number", "number"], "number"],
  EPDFDoc_GetNamedJavaScriptActionModel: [["number", "number"], "number"],
  EPDFDoc_GetOpenActionModel: [["number"], "number"],
  EPDFDoc_GetPageActionModel: [["number", "number", "number"], "number"],
  EPDFDoc_GetPageLastModified: [["number", "number", "number", "number"], "number"],
  EPDFDoc_GetPageObjectNumberByIndex: [["number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoBoolean: [["number", "number", "string", "string", "number"], "boolean"],
  EPDFDoc_GetPagePieceInfoEntryAt: [["number", "number", "number", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoEntryCount: [["number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoKeyAt: [["number", "number", "string", "number", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoKeyCount: [["number", "number", "string"], "number"],
  EPDFDoc_GetPagePieceInfoLastModified: [["number", "number", "string", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoName: [["number", "number", "string", "string", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoNumber: [["number", "number", "string", "string", "number"], "boolean"],
  EPDFDoc_GetPagePieceInfoString: [["number", "number", "string", "string", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoStringArrayAt: [["number", "number", "string", "string", "number", "number", "number"], "number"],
  EPDFDoc_GetPagePieceInfoStringArrayCount: [["number", "number", "string", "string"], "number"],
  EPDFDoc_GetPagePieceInfoValueType: [["number", "number", "string", "string"], "number"],
  EPDFDoc_GetPageViewportsSyntax: [["number", "number", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoBoolean: [["number", "string", "string", "number"], "boolean"],
  EPDFDoc_GetPieceInfoEntryAt: [["number", "number", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoEntryCount: [["number"], "number"],
  EPDFDoc_GetPieceInfoKeyAt: [["number", "string", "number", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoKeyCount: [["number", "string"], "number"],
  EPDFDoc_GetPieceInfoLastModified: [["number", "string", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoName: [["number", "string", "string", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoNumber: [["number", "string", "string", "number"], "boolean"],
  EPDFDoc_GetPieceInfoString: [["number", "string", "string", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoStringArrayAt: [["number", "string", "string", "number", "number", "number"], "number"],
  EPDFDoc_GetPieceInfoStringArrayCount: [["number", "string", "string"], "number"],
  EPDFDoc_GetPieceInfoValueType: [["number", "string", "string"], "number"],
  EPDFDoc_GetViewportsJson: [["number", "number", "number"], "number"],
  EPDFDoc_HasPagePieceInfoEntry: [["number", "number", "string"], "boolean"],
  EPDFDoc_HasPieceInfoEntry: [["number", "string"], "boolean"],
  EPDFDoc_LoadPageByObjectNumber: [["number", "number"], "number"],
  EPDFDoc_LoadPageByObjectNumberNormalized: [["number", "number"], "number"],
  EPDFDoc_MovePageViewport: [["number", "number", "number", "number"], "boolean"],
  EPDFDoc_PushDownInheritedAttrs: [["number", "number", "number"], "number"],
  EPDFDoc_RemovePageViewport: [["number", "number", "number"], "boolean"],
  EPDFDoc_SetPagePieceInfoBoolean: [["number", "number", "string", "string", "boolean", "number"], "boolean"],
  EPDFDoc_SetPagePieceInfoName: [["number", "number", "string", "string", "string", "number"], "boolean"],
  EPDFDoc_SetPagePieceInfoNumber: [["number", "number", "string", "string", "number", "number"], "boolean"],
  EPDFDoc_SetPagePieceInfoString: [["number", "number", "string", "string", "number", "number"], "boolean"],
  EPDFDoc_SetPagePieceInfoStringArray: [["number", "number", "string", "string", "number", "number", "number"], "boolean"],
  EPDFDoc_SetPageRotationByObjectNumber: [["number", "number", "number"], "boolean"],
  EPDFDoc_SetPageViewport: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"],
  EPDFDoc_SetPageViewportsSyntax: [["number", "number", "number"], "boolean"],
  EPDFDoc_SetPieceInfoBoolean: [["number", "string", "string", "boolean", "number"], "boolean"],
  EPDFDoc_SetPieceInfoName: [["number", "string", "string", "string", "number"], "boolean"],
  EPDFDoc_SetPieceInfoNumber: [["number", "string", "string", "number", "number"], "boolean"],
  EPDFDoc_SetPieceInfoString: [["number", "string", "string", "number", "number"], "boolean"],
  EPDFDoc_SetPieceInfoStringArray: [["number", "string", "string", "number", "number", "number"], "boolean"],
  EPDFDocument_ClearEmbedMetadata: [["number"], "boolean"],
  EPDFFont_AddFallbackFont: [["number"], "boolean"],
  EPDFFont_ClearFallbackFonts: [[], null],
  EPDFFont_ClearRegisteredFonts: [[], null],
  EPDFFont_RegisterFont: [["string", "number", "number", "number"], "number"],
  EPDFFont_RegisterMemFont: [["string", "number", "number", "number", "number"], "number"],
  EPDFFont_RegisterMemFont64: [["string", "number", "number", "number", "number"], "number"],
  EPDFForm_AttachWidget: [["number", "number", "number", "string"], "boolean"],
  EPDFForm_CloseModel: [["number"], null],
  EPDFForm_CountCalculationOrder: [["number"], "number"],
  EPDFForm_CountFieldDefaultValues: [["number", "number"], "number"],
  EPDFForm_CountFieldOptions: [["number", "number"], "number"],
  EPDFForm_CountFields: [["number"], "number"],
  EPDFForm_CountFieldValues: [["number", "number"], "number"],
  EPDFForm_CountFieldWidgets: [["number", "number"], "number"],
  EPDFForm_CreateField: [["number", "number", "number"], "number"],
  EPDFForm_DeleteField: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_DetachWidget: [["number", "number", "number"], "boolean"],
  EPDFForm_ExportFDF: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_ExportXFDF: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetCalculationOrderFieldIndex: [["number", "number"], "number"],
  EPDFForm_GetFieldActionModel: [["number", "number", "number"], "number"],
  EPDFForm_GetFieldAlternateName: [["number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldDefaultValueAt: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldDefaultValueKind: [["number", "number"], "number"],
  EPDFForm_GetFieldFamily: [["number", "number"], "number"],
  EPDFForm_GetFieldFlags: [["number", "number"], "number"],
  EPDFForm_GetFieldIndexByObjNum: [["number", "number"], "number"],
  EPDFForm_GetFieldIndexForWidget: [["number", "number"], "number"],
  EPDFForm_GetFieldMappingName: [["number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldMaxLen: [["number", "number"], "number"],
  EPDFForm_GetFieldName: [["number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldObjNum: [["number", "number"], "number"],
  EPDFForm_GetFieldOptionLabel: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldOptionValue: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldOrigin: [["number", "number"], "number"],
  EPDFForm_GetFieldValueAt: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldValueKind: [["number", "number"], "number"],
  EPDFForm_GetFieldWidgetExportValue: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldWidgetObjNum: [["number", "number", "number"], "number"],
  EPDFForm_GetFieldWidgetOnState: [["number", "number", "number", "number", "number"], "number"],
  EPDFForm_GetFieldWidgetPageObjNum: [["number", "number", "number"], "number"],
  EPDFForm_GetFormKind: [["number"], "number"],
  EPDFForm_GetNeedAppearances: [["number"], "boolean"],
  EPDFForm_ImportFDF: [["number", "number", "number", "number"], "boolean"],
  EPDFForm_ImportXFDF: [["number", "number", "number", "number"], "boolean"],
  EPDFForm_IsFieldOptionSelected: [["number", "number", "number"], "boolean"],
  EPDFForm_IsFieldWidgetChecked: [["number", "number", "number"], "boolean"],
  EPDFForm_LoadModel: [["number"], "number"],
  EPDFForm_RemoveFieldDefaultValue: [["number", "number"], "boolean"],
  EPDFForm_Repair: [["number", "number", "number"], "boolean"],
  EPDFForm_ResetField: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetChoiceValues: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetFieldAlternateName: [["number", "number", "number"], "boolean"],
  EPDFForm_SetFieldAppearanceText: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetFieldDefaultToggle: [["number", "number", "string"], "boolean"],
  EPDFForm_SetFieldDefaultValues: [["number", "number", "number", "number"], "boolean"],
  EPDFForm_SetFieldDisplay: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetFieldFlags: [["number", "number", "number", "number"], "boolean"],
  EPDFForm_SetFieldMappingName: [["number", "number", "number"], "boolean"],
  EPDFForm_SetFieldMaxLen: [["number", "number", "number"], "boolean"],
  EPDFForm_SetFieldName: [["number", "number", "number"], "boolean"],
  EPDFForm_SetFieldOptions: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetTextValue: [["number", "number", "number", "number", "number", "number"], "boolean"],
  EPDFForm_SetToggle: [["number", "number", "string", "number", "number", "number"], "boolean"],
  EPDFImageObj_SetJpeg: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFImageObj_SetPng: [["number", "number", "number", "number", "number"], "boolean"],
  EPDFLayer_GetBaseDocument: [["number"], "number"],
  EPDFLayer_GetPromotedObjectCount: [["number"], "number"],
  EPDFLayer_IsObjectPromoted: [["number", "number"], "boolean"],
  EPDFLayer_OpenLayer: [["number", "number", "string", "number"], "number"],
  EPDFLayer_OpenLayerArtifact: [["number", "number", "string", "number"], "number"],
  EPDFLayer_SaveDelta: [["number", "number", "number"], "boolean"],
  EPDFLayer_SaveDeltaToOwnedBuffer: [["number", "number", "number"], "number"],
  EPDFLayer_SaveLayerArtifact: [["number", "number", "number"], "boolean"],
  EPDFLayer_SaveLayerArtifactToOwnedBuffer: [["number", "number", "number"], "number"],
  EPDFNamedDest_Remove: [["number", "string"], "boolean"],
  EPDFNamedDest_SetDest: [["number", "string", "number"], "boolean"],
  EPDFPage_ApplyRedactions: [["number", "number"], "boolean"],
  EPDFPage_CreateAnnot: [["number", "number"], "number"],
  EPDFPage_Flatten: [["number", "number"], "number"],
  EPDFPage_GetAnnotByName: [["number", "number"], "number"],
  EPDFPage_GetAnnotByObjectNumber: [["number", "number"], "number"],
  EPDFPage_GetAnnotCountRaw: [["number", "number"], "number"],
  EPDFPage_GetAnnotRaw: [["number", "number", "number"], "number"],
  EPDFPage_GetObjectNumber: [["number"], "number"],
  EPDFPage_GetPathSegments: [["number", "number", "number", "number", "number", "number", "number"], "number"],
  EPDFPage_MoveAnnots: [["number", "number", "number", "number"], "boolean"],
  EPDFPage_RemoveAnnot: [["number", "number"], "boolean"],
  EPDFPage_RemoveAnnotByName: [["number", "number"], "boolean"],
  EPDFPage_RemoveAnnotByObjectNumber: [["number", "number"], "boolean"],
  EPDFPage_RemoveAnnotRaw: [["number", "number", "number"], "boolean"],
  EPDFPageLabel_GetRulesJSON: [["number"], "number"],
  EPDFPageLabel_SetRulesJSON: [["number", "number"], "boolean"],
  EPDFText_GetCharGeometry: [["number", "number", "number"], "boolean"],
  EPDFText_GetCharToTextMap: [["number", "number", "number"], "number"],
  EPDFText_GetTextFull: [["number", "number", "number"], "number"],
  EPDFText_RedactInQuads: [["number", "number", "number", "boolean", "boolean"], "boolean"],
  EPDFText_RedactInRect: [["number", "number", "boolean", "boolean"], "boolean"],
  FORM_CanRedo: [["number", "number"], "boolean"],
  FORM_CanUndo: [["number", "number"], "boolean"],
  FORM_DoDocumentAAction: [["number", "number"], null],
  FORM_DoDocumentJSAction: [["number"], null],
  FORM_DoDocumentOpenAction: [["number"], null],
  FORM_DoPageAAction: [["number", "number", "number"], null],
  FORM_ForceToKillFocus: [["number"], "boolean"],
  FORM_GetFocusedAnnot: [["number", "number", "number"], "boolean"],
  FORM_GetFocusedText: [["number", "number", "number", "number"], "number"],
  FORM_GetSelectedText: [["number", "number", "number", "number"], "number"],
  FORM_IsIndexSelected: [["number", "number", "number"], "boolean"],
  FORM_OnAfterLoadPage: [["number", "number"], null],
  FORM_OnBeforeClosePage: [["number", "number"], null],
  FORM_OnChar: [["number", "number", "number", "number"], "boolean"],
  FORM_OnFocus: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnKeyDown: [["number", "number", "number", "number"], "boolean"],
  FORM_OnKeyUp: [["number", "number", "number", "number"], "boolean"],
  FORM_OnLButtonDoubleClick: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnLButtonDown: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnLButtonUp: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnMouseMove: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnMouseWheel: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FORM_OnRButtonDown: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_OnRButtonUp: [["number", "number", "number", "number", "number"], "boolean"],
  FORM_Redo: [["number", "number"], "boolean"],
  FORM_ReplaceAndKeepSelection: [["number", "number", "number"], null],
  FORM_ReplaceSelection: [["number", "number", "number"], null],
  FORM_SelectAllText: [["number", "number"], "boolean"],
  FORM_SetFocusedAnnot: [["number", "number"], "boolean"],
  FORM_SetIndexSelected: [["number", "number", "number", "boolean"], "boolean"],
  FORM_Undo: [["number", "number"], "boolean"],
  FPDF_AddInstalledFont: [["number", "number", "number"], null],
  FPDF_CloseDocument: [["number"], null],
  FPDF_ClosePage: [["number"], null],
  FPDF_CloseXObject: [["number"], null],
  FPDF_CopyViewerPreferences: [["number", "number"], "boolean"],
  FPDF_CountNamedDests: [["number"], "number"],
  FPDF_CreateClipPath: [["number", "number", "number", "number"], "number"],
  FPDF_CreateNewDocument: [[], "number"],
  FPDF_DestroyClipPath: [["number"], null],
  FPDF_DestroyLibrary: [[], null],
  FPDF_DeviceToPage: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDF_DocumentHasValidCrossReferenceTable: [["number"], "boolean"],
  FPDF_FFLDraw: [["number", "number", "number", "number", "number", "number", "number", "number", "number"], null],
  FPDF_FreeDefaultSystemFontInfo: [["number"], null],
  FPDF_GetDefaultSystemFontInfo: [[], "number"],
  FPDF_GetDefaultTTFMap: [[], "number"],
  FPDF_GetDefaultTTFMapCount: [[], "number"],
  FPDF_GetDefaultTTFMapEntry: [["number"], "number"],
  FPDF_GetDocPermissions: [["number"], "number"],
  FPDF_GetDocUserPermissions: [["number"], "number"],
  FPDF_GetFileIdentifier: [["number", "number", "number", "number"], "number"],
  FPDF_GetFileVersion: [["number", "number"], "boolean"],
  FPDF_GetFormType: [["number"], "number"],
  FPDF_GetLastError: [[], "number"],
  FPDF_GetMetaText: [["number", "string", "number", "number"], "number"],
  FPDF_GetNamedDest: [["number", "number", "number", "number"], "number"],
  FPDF_GetNamedDestByName: [["number", "string"], "number"],
  FPDF_GetPageAAction: [["number", "number"], "number"],
  FPDF_GetPageBoundingBox: [["number", "number"], "boolean"],
  FPDF_GetPageCount: [["number"], "number"],
  FPDF_GetPageHeight: [["number"], "number"],
  FPDF_GetPageHeightF: [["number"], "number"],
  FPDF_GetPageLabel: [["number", "number", "number", "number"], "number"],
  FPDF_GetPageSizeByIndex: [["number", "number", "number", "number"], "number"],
  FPDF_GetPageSizeByIndexF: [["number", "number", "number"], "boolean"],
  FPDF_GetPageWidth: [["number"], "number"],
  FPDF_GetPageWidthF: [["number"], "number"],
  FPDF_GetSecurityHandlerRevision: [["number"], "number"],
  FPDF_GetSignatureCount: [["number"], "number"],
  FPDF_GetSignatureObject: [["number", "number"], "number"],
  FPDF_GetTrailerEnds: [["number", "number", "number"], "number"],
  FPDF_GetXFAPacketContent: [["number", "number", "number", "number", "number"], "boolean"],
  FPDF_GetXFAPacketCount: [["number"], "number"],
  FPDF_GetXFAPacketName: [["number", "number", "number", "number"], "number"],
  FPDF_ImportNPagesToOne: [["number", "number", "number", "number", "number"], "number"],
  FPDF_ImportPages: [["number", "number", "string", "number"], "boolean"],
  FPDF_ImportPagesByIndex: [["number", "number", "number", "number", "number"], "boolean"],
  FPDF_InitLibrary: [[], null],
  FPDF_InitLibraryWithConfig: [["number"], null],
  FPDF_LoadCustomDocument: [["number", "string"], "number"],
  FPDF_LoadDocument: [["number", "string"], "number"],
  FPDF_LoadMemDocument: [["number", "number", "string"], "number"],
  FPDF_LoadMemDocument64: [["number", "number", "string"], "number"],
  FPDF_LoadPage: [["number", "number"], "number"],
  FPDF_LoadXFA: [["number"], "boolean"],
  FPDF_MovePages: [["number", "number", "number", "number"], "boolean"],
  FPDF_NewFormObjectFromXObject: [["number"], "number"],
  FPDF_NewXObjectFromPage: [["number", "number", "number"], "number"],
  FPDF_PageToDevice: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDF_RemoveFormFieldHighlight: [["number"], null],
  FPDF_RenderPage_Close: [["number"], null],
  FPDF_RenderPage_Continue: [["number", "number"], "number"],
  FPDF_RenderPageBitmap: [["number", "number", "number", "number", "number", "number", "number", "number"], null],
  FPDF_RenderPageBitmap_Start: [["number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"],
  FPDF_RenderPageBitmapWithColorScheme_Start: [["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"], "number"],
  FPDF_RenderPageBitmapWithMatrix: [["number", "number", "number", "number", "number"], null],
  FPDF_SaveAsCopy: [["number", "number", "number"], "boolean"],
  FPDF_SaveWithVersion: [["number", "number", "number", "number"], "boolean"],
  FPDF_SetFormFieldHighlightAlpha: [["number", "number"], null],
  FPDF_SetFormFieldHighlightColor: [["number", "number", "number"], null],
  FPDF_SetSandBoxPolicy: [["number", "boolean"], null],
  FPDF_SetSystemFontInfo: [["number"], null],
  FPDF_StructElement_Attr_CountChildren: [["number"], "number"],
  FPDF_StructElement_Attr_GetBlobValue: [["number", "number", "number", "number"], "boolean"],
  FPDF_StructElement_Attr_GetBooleanValue: [["number", "number"], "boolean"],
  FPDF_StructElement_Attr_GetChildAtIndex: [["number", "number"], "number"],
  FPDF_StructElement_Attr_GetCount: [["number"], "number"],
  FPDF_StructElement_Attr_GetName: [["number", "number", "number", "number", "number"], "boolean"],
  FPDF_StructElement_Attr_GetNumberValue: [["number", "number"], "boolean"],
  FPDF_StructElement_Attr_GetStringValue: [["number", "number", "number", "number"], "boolean"],
  FPDF_StructElement_Attr_GetType: [["number"], "number"],
  FPDF_StructElement_Attr_GetValue: [["number", "string"], "number"],
  FPDF_StructElement_CountChildren: [["number"], "number"],
  FPDF_StructElement_GetActualText: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetAltText: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetAttributeAtIndex: [["number", "number"], "number"],
  FPDF_StructElement_GetAttributeCount: [["number"], "number"],
  FPDF_StructElement_GetChildAtIndex: [["number", "number"], "number"],
  FPDF_StructElement_GetChildMarkedContentID: [["number", "number"], "number"],
  FPDF_StructElement_GetID: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetLang: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetMarkedContentID: [["number"], "number"],
  FPDF_StructElement_GetMarkedContentIdAtIndex: [["number", "number"], "number"],
  FPDF_StructElement_GetMarkedContentIdCount: [["number"], "number"],
  FPDF_StructElement_GetObjType: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetParent: [["number"], "number"],
  FPDF_StructElement_GetStringAttribute: [["number", "string", "number", "number"], "number"],
  FPDF_StructElement_GetTitle: [["number", "number", "number"], "number"],
  FPDF_StructElement_GetType: [["number", "number", "number"], "number"],
  FPDF_StructTree_Close: [["number"], null],
  FPDF_StructTree_CountChildren: [["number"], "number"],
  FPDF_StructTree_GetChildAtIndex: [["number", "number"], "number"],
  FPDF_StructTree_GetForPage: [["number"], "number"],
  FPDF_VIEWERREF_GetDuplex: [["number"], "number"],
  FPDF_VIEWERREF_GetName: [["number", "string", "number", "number"], "number"],
  FPDF_VIEWERREF_GetNumCopies: [["number"], "number"],
  FPDF_VIEWERREF_GetPrintPageRange: [["number"], "number"],
  FPDF_VIEWERREF_GetPrintPageRangeCount: [["number"], "number"],
  FPDF_VIEWERREF_GetPrintPageRangeElement: [["number", "number"], "number"],
  FPDF_VIEWERREF_GetPrintScaling: [["number"], "boolean"],
  FPDFAction_GetDest: [["number", "number"], "number"],
  FPDFAction_GetFilePath: [["number", "number", "number"], "number"],
  FPDFAction_GetType: [["number"], "number"],
  FPDFAction_GetURIPath: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_AddFileAttachment: [["number", "number"], "number"],
  FPDFAnnot_AddInkStroke: [["number", "number", "number"], "number"],
  FPDFAnnot_AppendAttachmentPoints: [["number", "number"], "boolean"],
  FPDFAnnot_AppendObject: [["number", "number"], "boolean"],
  FPDFAnnot_CountAttachmentPoints: [["number"], "number"],
  FPDFAnnot_GetAP: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetAttachmentPoints: [["number", "number", "number"], "boolean"],
  FPDFAnnot_GetBorder: [["number", "number", "number", "number"], "boolean"],
  FPDFAnnot_GetColor: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFAnnot_GetFileAttachment: [["number"], "number"],
  FPDFAnnot_GetFlags: [["number"], "number"],
  FPDFAnnot_GetFocusableSubtypes: [["number", "number", "number"], "boolean"],
  FPDFAnnot_GetFocusableSubtypesCount: [["number"], "number"],
  FPDFAnnot_GetFontColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFAnnot_GetFontSize: [["number", "number", "number"], "boolean"],
  FPDFAnnot_GetFormAdditionalActionJavaScript: [["number", "number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormControlCount: [["number", "number"], "number"],
  FPDFAnnot_GetFormControlIndex: [["number", "number"], "number"],
  FPDFAnnot_GetFormFieldAlternateName: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldAtPoint: [["number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldExportValue: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldFlags: [["number", "number"], "number"],
  FPDFAnnot_GetFormFieldName: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetFormFieldType: [["number", "number"], "number"],
  FPDFAnnot_GetFormFieldValue: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetInkListCount: [["number"], "number"],
  FPDFAnnot_GetInkListPath: [["number", "number", "number", "number"], "number"],
  FPDFAnnot_GetLine: [["number", "number", "number"], "boolean"],
  FPDFAnnot_GetLink: [["number"], "number"],
  FPDFAnnot_GetLinkedAnnot: [["number", "string"], "number"],
  FPDFAnnot_GetNumberValue: [["number", "string", "number"], "boolean"],
  FPDFAnnot_GetObject: [["number", "number"], "number"],
  FPDFAnnot_GetObjectCount: [["number"], "number"],
  FPDFAnnot_GetOptionCount: [["number", "number"], "number"],
  FPDFAnnot_GetOptionLabel: [["number", "number", "number", "number", "number"], "number"],
  FPDFAnnot_GetRect: [["number", "number"], "boolean"],
  FPDFAnnot_GetStringValue: [["number", "string", "number", "number"], "number"],
  FPDFAnnot_GetSubtype: [["number"], "number"],
  FPDFAnnot_GetValueType: [["number", "string"], "number"],
  FPDFAnnot_GetVertices: [["number", "number", "number"], "number"],
  FPDFAnnot_HasAttachmentPoints: [["number"], "boolean"],
  FPDFAnnot_HasKey: [["number", "string"], "boolean"],
  FPDFAnnot_IsChecked: [["number", "number"], "boolean"],
  FPDFAnnot_IsObjectSupportedSubtype: [["number"], "boolean"],
  FPDFAnnot_IsOptionSelected: [["number", "number", "number"], "boolean"],
  FPDFAnnot_IsSupportedSubtype: [["number"], "boolean"],
  FPDFAnnot_RemoveInkList: [["number"], "boolean"],
  FPDFAnnot_RemoveObject: [["number", "number"], "boolean"],
  FPDFAnnot_SetAP: [["number", "number", "number"], "boolean"],
  FPDFAnnot_SetAttachmentPoints: [["number", "number", "number"], "boolean"],
  FPDFAnnot_SetBorder: [["number", "number", "number", "number"], "boolean"],
  FPDFAnnot_SetColor: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFAnnot_SetFlags: [["number", "number"], "boolean"],
  FPDFAnnot_SetFocusableSubtypes: [["number", "number", "number"], "boolean"],
  FPDFAnnot_SetFontColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFAnnot_SetFormFieldFlags: [["number", "number", "number"], "boolean"],
  FPDFAnnot_SetRect: [["number", "number"], "boolean"],
  FPDFAnnot_SetStringValue: [["number", "string", "number"], "boolean"],
  FPDFAnnot_SetURI: [["number", "number"], "boolean"],
  FPDFAnnot_UpdateObject: [["number", "number"], "boolean"],
  FPDFAttachment_GetFile: [["number", "number", "number", "number"], "boolean"],
  FPDFAttachment_GetName: [["number", "number", "number"], "number"],
  FPDFAttachment_GetStringValue: [["number", "string", "number", "number"], "number"],
  FPDFAttachment_GetSubtype: [["number", "number", "number"], "number"],
  FPDFAttachment_GetValueType: [["number", "string"], "number"],
  FPDFAttachment_HasKey: [["number", "string"], "boolean"],
  FPDFAttachment_SetFile: [["number", "number", "number", "number"], "boolean"],
  FPDFAttachment_SetStringValue: [["number", "string", "number"], "boolean"],
  FPDFAvail_Create: [["number", "number"], "number"],
  FPDFAvail_Destroy: [["number"], null],
  FPDFAvail_GetDocument: [["number", "string"], "number"],
  FPDFAvail_GetFirstPageNum: [["number"], "number"],
  FPDFAvail_IsDocAvail: [["number", "number"], "number"],
  FPDFAvail_IsFormAvail: [["number", "number"], "number"],
  FPDFAvail_IsLinearized: [["number"], "number"],
  FPDFAvail_IsPageAvail: [["number", "number", "number"], "number"],
  FPDFBitmap_Create: [["number", "number", "number"], "number"],
  FPDFBitmap_CreateEx: [["number", "number", "number", "number", "number"], "number"],
  FPDFBitmap_Destroy: [["number"], null],
  FPDFBitmap_FillRect: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFBitmap_GetBuffer: [["number"], "number"],
  FPDFBitmap_GetFormat: [["number"], "number"],
  FPDFBitmap_GetHeight: [["number"], "number"],
  FPDFBitmap_GetStride: [["number"], "number"],
  FPDFBitmap_GetWidth: [["number"], "number"],
  FPDFBookmark_Find: [["number", "number"], "number"],
  FPDFBookmark_GetAction: [["number"], "number"],
  FPDFBookmark_GetCount: [["number"], "number"],
  FPDFBookmark_GetDest: [["number", "number"], "number"],
  FPDFBookmark_GetFirstChild: [["number", "number"], "number"],
  FPDFBookmark_GetNextSibling: [["number", "number"], "number"],
  FPDFBookmark_GetTitle: [["number", "number", "number"], "number"],
  FPDFCatalog_GetLanguage: [["number", "number", "number"], "number"],
  FPDFCatalog_IsTagged: [["number"], "boolean"],
  FPDFCatalog_SetLanguage: [["number", "number"], "boolean"],
  FPDFClipPath_CountPaths: [["number"], "number"],
  FPDFClipPath_CountPathSegments: [["number", "number"], "number"],
  FPDFClipPath_GetPathSegment: [["number", "number", "number"], "number"],
  FPDFDest_GetDestPageIndex: [["number", "number"], "number"],
  FPDFDest_GetLocationInPage: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFDest_GetView: [["number", "number", "number"], "number"],
  FPDFDoc_AddAttachment: [["number", "number"], "number"],
  FPDFDoc_CloseJavaScriptAction: [["number"], null],
  FPDFDoc_DeleteAttachment: [["number", "number"], "boolean"],
  FPDFDOC_ExitFormFillEnvironment: [["number"], null],
  FPDFDoc_GetAttachment: [["number", "number"], "number"],
  FPDFDoc_GetAttachmentCount: [["number"], "number"],
  FPDFDoc_GetJavaScriptAction: [["number", "number"], "number"],
  FPDFDoc_GetJavaScriptActionCount: [["number"], "number"],
  FPDFDoc_GetPageMode: [["number"], "number"],
  FPDFDOC_InitFormFillEnvironment: [["number", "number"], "number"],
  FPDFFont_Close: [["number"], null],
  FPDFFont_GetAscent: [["number", "number", "number"], "boolean"],
  FPDFFont_GetBaseFontName: [["number", "number", "number"], "number"],
  FPDFFont_GetDescent: [["number", "number", "number"], "boolean"],
  FPDFFont_GetFamilyName: [["number", "number", "number"], "number"],
  FPDFFont_GetFlags: [["number"], "number"],
  FPDFFont_GetFontData: [["number", "number", "number", "number"], "boolean"],
  FPDFFont_GetGlyphPath: [["number", "number", "number"], "number"],
  FPDFFont_GetGlyphWidth: [["number", "number", "number", "number"], "boolean"],
  FPDFFont_GetIsEmbedded: [["number"], "number"],
  FPDFFont_GetItalicAngle: [["number", "number"], "boolean"],
  FPDFFont_GetWeight: [["number"], "number"],
  FPDFFormObj_CountObjects: [["number"], "number"],
  FPDFFormObj_GetObject: [["number", "number"], "number"],
  FPDFFormObj_RemoveObject: [["number", "number"], "boolean"],
  FPDFGlyphPath_CountGlyphSegments: [["number"], "number"],
  FPDFGlyphPath_GetGlyphPathSegment: [["number", "number"], "number"],
  FPDFImageObj_GetBitmap: [["number"], "number"],
  FPDFImageObj_GetIccProfileDataDecoded: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFImageObj_GetImageDataDecoded: [["number", "number", "number"], "number"],
  FPDFImageObj_GetImageDataRaw: [["number", "number", "number"], "number"],
  FPDFImageObj_GetImageFilter: [["number", "number", "number", "number"], "number"],
  FPDFImageObj_GetImageFilterCount: [["number"], "number"],
  FPDFImageObj_GetImageMetadata: [["number", "number", "number"], "boolean"],
  FPDFImageObj_GetImagePixelSize: [["number", "number", "number"], "boolean"],
  FPDFImageObj_GetRenderedBitmap: [["number", "number", "number"], "number"],
  FPDFImageObj_LoadJpegFile: [["number", "number", "number", "number"], "boolean"],
  FPDFImageObj_LoadJpegFileInline: [["number", "number", "number", "number"], "boolean"],
  FPDFImageObj_SetBitmap: [["number", "number", "number", "number"], "boolean"],
  FPDFImageObj_SetMatrix: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFJavaScriptAction_GetName: [["number", "number", "number"], "number"],
  FPDFJavaScriptAction_GetScript: [["number", "number", "number"], "number"],
  FPDFLink_CloseWebLinks: [["number"], null],
  FPDFLink_CountQuadPoints: [["number"], "number"],
  FPDFLink_CountRects: [["number", "number"], "number"],
  FPDFLink_CountWebLinks: [["number"], "number"],
  FPDFLink_Enumerate: [["number", "number", "number"], "boolean"],
  FPDFLink_GetAction: [["number"], "number"],
  FPDFLink_GetAnnot: [["number", "number"], "number"],
  FPDFLink_GetAnnotRect: [["number", "number"], "boolean"],
  FPDFLink_GetDest: [["number", "number"], "number"],
  FPDFLink_GetLinkAtPoint: [["number", "number", "number"], "number"],
  FPDFLink_GetLinkZOrderAtPoint: [["number", "number", "number"], "number"],
  FPDFLink_GetQuadPoints: [["number", "number", "number"], "boolean"],
  FPDFLink_GetRect: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFLink_GetTextRange: [["number", "number", "number", "number"], "boolean"],
  FPDFLink_GetURL: [["number", "number", "number", "number"], "number"],
  FPDFLink_LoadWebLinks: [["number"], "number"],
  FPDFPage_CloseAnnot: [["number"], null],
  FPDFPage_CountObjects: [["number"], "number"],
  FPDFPage_CreateAnnot: [["number", "number"], "number"],
  FPDFPage_Delete: [["number", "number"], null],
  FPDFPage_Flatten: [["number", "number"], "number"],
  FPDFPage_FormFieldZOrderAtPoint: [["number", "number", "number", "number"], "number"],
  FPDFPage_GenerateContent: [["number"], "boolean"],
  FPDFPage_GetAnnot: [["number", "number"], "number"],
  FPDFPage_GetAnnotCount: [["number"], "number"],
  FPDFPage_GetAnnotIndex: [["number", "number"], "number"],
  FPDFPage_GetArtBox: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_GetBleedBox: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_GetCropBox: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_GetDecodedThumbnailData: [["number", "number", "number"], "number"],
  FPDFPage_GetMediaBox: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_GetObject: [["number", "number"], "number"],
  FPDFPage_GetRawThumbnailData: [["number", "number", "number"], "number"],
  FPDFPage_GetRotation: [["number"], "number"],
  FPDFPage_GetThumbnailAsBitmap: [["number"], "number"],
  FPDFPage_GetTrimBox: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPage_HasFormFieldAtPoint: [["number", "number", "number", "number"], "number"],
  FPDFPage_HasTransparency: [["number"], "boolean"],
  FPDFPage_InsertClipPath: [["number", "number"], null],
  FPDFPage_InsertObject: [["number", "number"], null],
  FPDFPage_InsertObjectAtIndex: [["number", "number", "number"], "boolean"],
  FPDFPage_New: [["number", "number", "number", "number"], "number"],
  FPDFPage_RemoveAnnot: [["number", "number"], "boolean"],
  FPDFPage_RemoveObject: [["number", "number"], "boolean"],
  FPDFPage_SetArtBox: [["number", "number", "number", "number", "number"], null],
  FPDFPage_SetBleedBox: [["number", "number", "number", "number", "number"], null],
  FPDFPage_SetCropBox: [["number", "number", "number", "number", "number"], null],
  FPDFPage_SetMediaBox: [["number", "number", "number", "number", "number"], null],
  FPDFPage_SetRotation: [["number", "number"], null],
  FPDFPage_SetTrimBox: [["number", "number", "number", "number", "number"], null],
  FPDFPage_TransformAnnots: [["number", "number", "number", "number", "number", "number", "number"], null],
  FPDFPage_TransFormWithClip: [["number", "number", "number"], "boolean"],
  FPDFPageObj_AddMark: [["number", "string"], "number"],
  FPDFPageObj_CountMarks: [["number"], "number"],
  FPDFPageObj_CreateNewPath: [["number", "number"], "number"],
  FPDFPageObj_CreateNewRect: [["number", "number", "number", "number"], "number"],
  FPDFPageObj_CreateTextObj: [["number", "number", "number"], "number"],
  FPDFPageObj_Destroy: [["number"], null],
  FPDFPageObj_GetBounds: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_GetClipPath: [["number"], "number"],
  FPDFPageObj_GetDashArray: [["number", "number", "number"], "boolean"],
  FPDFPageObj_GetDashCount: [["number"], "number"],
  FPDFPageObj_GetDashPhase: [["number", "number"], "boolean"],
  FPDFPageObj_GetFillColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_GetIsActive: [["number", "number"], "boolean"],
  FPDFPageObj_GetLineCap: [["number"], "number"],
  FPDFPageObj_GetLineJoin: [["number"], "number"],
  FPDFPageObj_GetMark: [["number", "number"], "number"],
  FPDFPageObj_GetMarkedContentID: [["number"], "number"],
  FPDFPageObj_GetMatrix: [["number", "number"], "boolean"],
  FPDFPageObj_GetRotatedBounds: [["number", "number"], "boolean"],
  FPDFPageObj_GetStrokeColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_GetStrokeWidth: [["number", "number"], "boolean"],
  FPDFPageObj_GetType: [["number"], "number"],
  FPDFPageObj_HasTransparency: [["number"], "boolean"],
  FPDFPageObj_NewImageObj: [["number"], "number"],
  FPDFPageObj_NewTextObj: [["number", "string", "number"], "number"],
  FPDFPageObj_RemoveMark: [["number", "number"], "boolean"],
  FPDFPageObj_SetBlendMode: [["number", "string"], null],
  FPDFPageObj_SetDashArray: [["number", "number", "number", "number"], "boolean"],
  FPDFPageObj_SetDashPhase: [["number", "number"], "boolean"],
  FPDFPageObj_SetFillColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_SetIsActive: [["number", "boolean"], "boolean"],
  FPDFPageObj_SetLineCap: [["number", "number"], "boolean"],
  FPDFPageObj_SetLineJoin: [["number", "number"], "boolean"],
  FPDFPageObj_SetMatrix: [["number", "number"], "boolean"],
  FPDFPageObj_SetStrokeColor: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObj_SetStrokeWidth: [["number", "number"], "boolean"],
  FPDFPageObj_Transform: [["number", "number", "number", "number", "number", "number", "number"], null],
  FPDFPageObj_TransformClipPath: [["number", "number", "number", "number", "number", "number", "number"], null],
  FPDFPageObj_TransformF: [["number", "number"], "boolean"],
  FPDFPageObjMark_CountParams: [["number"], "number"],
  FPDFPageObjMark_GetName: [["number", "number", "number", "number"], "boolean"],
  FPDFPageObjMark_GetParamBlobValue: [["number", "string", "number", "number", "number"], "boolean"],
  FPDFPageObjMark_GetParamFloatValue: [["number", "string", "number"], "boolean"],
  FPDFPageObjMark_GetParamIntValue: [["number", "string", "number"], "boolean"],
  FPDFPageObjMark_GetParamKey: [["number", "number", "number", "number", "number"], "boolean"],
  FPDFPageObjMark_GetParamStringValue: [["number", "string", "number", "number", "number"], "boolean"],
  FPDFPageObjMark_GetParamValueType: [["number", "string"], "number"],
  FPDFPageObjMark_RemoveParam: [["number", "number", "string"], "boolean"],
  FPDFPageObjMark_SetBlobParam: [["number", "number", "number", "string", "number", "number"], "boolean"],
  FPDFPageObjMark_SetFloatParam: [["number", "number", "number", "string", "number"], "boolean"],
  FPDFPageObjMark_SetIntParam: [["number", "number", "number", "string", "number"], "boolean"],
  FPDFPageObjMark_SetStringParam: [["number", "number", "number", "string", "string"], "boolean"],
  FPDFPath_BezierTo: [["number", "number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFPath_Close: [["number"], "boolean"],
  FPDFPath_CountSegments: [["number"], "number"],
  FPDFPath_GetDrawMode: [["number", "number", "number"], "boolean"],
  FPDFPath_GetPathSegment: [["number", "number"], "number"],
  FPDFPath_LineTo: [["number", "number", "number"], "boolean"],
  FPDFPath_MoveTo: [["number", "number", "number"], "boolean"],
  FPDFPath_SetDrawMode: [["number", "number", "boolean"], "boolean"],
  FPDFPathSegment_GetClose: [["number"], "boolean"],
  FPDFPathSegment_GetPoint: [["number", "number", "number"], "boolean"],
  FPDFPathSegment_GetType: [["number"], "number"],
  FPDFSignatureObj_GetByteRange: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetContents: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetDocMDPPermission: [["number"], "number"],
  FPDFSignatureObj_GetReason: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetSubFilter: [["number", "number", "number"], "number"],
  FPDFSignatureObj_GetTime: [["number", "number", "number"], "number"],
  FPDFText_ClosePage: [["number"], null],
  FPDFText_CountChars: [["number"], "number"],
  FPDFText_CountRects: [["number", "number", "number"], "number"],
  FPDFText_FindClose: [["number"], null],
  FPDFText_FindNext: [["number"], "boolean"],
  FPDFText_FindPrev: [["number"], "boolean"],
  FPDFText_FindStart: [["number", "number", "number", "number"], "number"],
  FPDFText_GetBoundedText: [["number", "number", "number", "number", "number", "number", "number"], "number"],
  FPDFText_GetCharAngle: [["number", "number"], "number"],
  FPDFText_GetCharBox: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFText_GetCharIndexAtPos: [["number", "number", "number", "number", "number"], "number"],
  FPDFText_GetCharIndexFromTextIndex: [["number", "number"], "number"],
  FPDFText_GetCharOrigin: [["number", "number", "number", "number"], "boolean"],
  FPDFText_GetFillColor: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFText_GetFontInfo: [["number", "number", "number", "number", "number"], "number"],
  FPDFText_GetFontSize: [["number", "number"], "number"],
  FPDFText_GetFontWeight: [["number", "number"], "number"],
  FPDFText_GetLooseCharBox: [["number", "number", "number"], "boolean"],
  FPDFText_GetMatrix: [["number", "number", "number"], "boolean"],
  FPDFText_GetRect: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFText_GetSchCount: [["number"], "number"],
  FPDFText_GetSchResultIndex: [["number"], "number"],
  FPDFText_GetStrokeColor: [["number", "number", "number", "number", "number", "number"], "boolean"],
  FPDFText_GetText: [["number", "number", "number", "number"], "number"],
  FPDFText_GetTextIndexFromCharIndex: [["number", "number"], "number"],
  FPDFText_GetTextObject: [["number", "number"], "number"],
  FPDFText_GetUnicode: [["number", "number"], "number"],
  FPDFText_HasUnicodeMapError: [["number", "number"], "number"],
  FPDFText_IsGenerated: [["number", "number"], "number"],
  FPDFText_IsHyphen: [["number", "number"], "number"],
  FPDFText_LoadCidType2Font: [["number", "number", "number", "string", "number", "number"], "number"],
  FPDFText_LoadFont: [["number", "number", "number", "number", "boolean"], "number"],
  FPDFText_LoadPage: [["number"], "number"],
  FPDFText_LoadStandardFont: [["number", "string"], "number"],
  FPDFText_SetCharcodes: [["number", "number", "number"], "boolean"],
  FPDFText_SetPositions: [["number", "number", "number"], "boolean"],
  FPDFText_SetText: [["number", "number"], "boolean"],
  FPDFTextObj_GetFont: [["number"], "number"],
  FPDFTextObj_GetFontSize: [["number", "number"], "boolean"],
  FPDFTextObj_GetRenderedBitmap: [["number", "number", "number", "number"], "number"],
  FPDFTextObj_GetText: [["number", "number", "number", "number"], "number"],
  FPDFTextObj_GetTextRenderMode: [["number"], "number"],
  FPDFTextObj_SetTextRenderMode: [["number", "number"], "boolean"],
  PDFiumExt_CloseFileWriter: [["number"], null],
  PDFiumExt_CloseFormFillInfo: [["number"], null],
  PDFiumExt_ExitFormFillEnvironment: [["number"], null],
  PDFiumExt_GetFileWriterData: [["number", "number", "number"], "number"],
  PDFiumExt_GetFileWriterSize: [["number"], "number"],
  PDFiumExt_Init: [[], null],
  PDFiumExt_InitFormFillEnvironment: [["number", "number"], "number"],
  PDFiumExt_OpenFileWriter: [[], "number"],
  PDFiumExt_OpenFormFillInfo: [[], "number"],
  PDFiumExt_SaveAsCopy: [["number", "number"], "number"]
};
async function createWrappedModule(pdfium) {
  const module = {
    pdfium
  };
  for (const key in functions) {
    const ident = key;
    const args = functions[ident][0];
    const ret = functions[ident][1];
    module[ident] = pdfium.cwrap(key, ret, args);
  }
  return module;
}
async function init(moduleOverrides) {
  const pdfium = await createPdfium(moduleOverrides);
  return createWrappedModule(pdfium);
}
function readString(wasmModule, readChars, parseChars, defaultLength = 100) {
  let buffer = wasmModule._malloc(defaultLength);
  for (let i = 0; i < defaultLength; i++) {
    wasmModule.HEAP8[buffer + i] = 0;
  }
  const actualLength = readChars(buffer, defaultLength);
  let str;
  if (actualLength > defaultLength) {
    wasmModule._free(buffer);
    buffer = wasmModule._malloc(actualLength);
    for (let i = 0; i < actualLength; i++) {
      wasmModule.HEAP8[buffer + i] = 0;
    }
    readChars(buffer, actualLength);
    str = parseChars(buffer);
  } else {
    str = parseChars(buffer);
  }
  wasmModule._free(buffer);
  return str;
}
function readArrayBuffer(wasmModule, readChars) {
  const bufferSize = readChars(0, 0);
  const bufferPtr = wasmModule._malloc(bufferSize);
  readChars(bufferPtr, bufferSize);
  const arrayBuffer = new ArrayBuffer(bufferSize);
  const view = new DataView(arrayBuffer);
  for (let i = 0; i < bufferSize; i++) {
    view.setInt8(i, wasmModule.getValue(bufferPtr + i, "i8"));
  }
  wasmModule._free(bufferPtr);
  return arrayBuffer;
}
const RESERVED_INFO_KEYS = /* @__PURE__ */ new Set([
  "Title",
  "Author",
  "Subject",
  "Keywords",
  "Producer",
  "Creator",
  "CreationDate",
  "ModDate",
  "Trapped"
]);
function isValidCustomKey(key) {
  if (!key || key.length > 127) return false;
  if (RESERVED_INFO_KEYS.has(key)) return false;
  if (key[0] === "/") return false;
  for (let i = 0; i < key.length; i++) {
    const c = key.charCodeAt(i);
    if (c < 32 || c > 126) return false;
  }
  return true;
}
function computeFormDrawParams(matrix, rect, pageSize, rotation) {
  const rectLeft = rect.origin.x;
  const rectBottom = rect.origin.y;
  const rectRight = rectLeft + rect.size.width;
  const rectTop = rectBottom + rect.size.height;
  const pageWidth = pageSize.width;
  const pageHeight = pageSize.height;
  const scaleX = Math.hypot(matrix.a, matrix.b);
  const scaleY = Math.hypot(matrix.c, matrix.d);
  const swap2 = (rotation & 1) === 1;
  const formsWidth = swap2 ? Math.max(1, Math.round(pageHeight * scaleX)) : Math.max(1, Math.round(pageWidth * scaleX));
  const formsHeight = swap2 ? Math.max(1, Math.round(pageWidth * scaleY)) : Math.max(1, Math.round(pageHeight * scaleY));
  let startX;
  let startY;
  switch (rotation) {
    case Rotation.Degree0:
      startX = -Math.round(rectLeft * scaleX);
      startY = -Math.round(rectBottom * scaleY);
      break;
    case Rotation.Degree90:
      startX = Math.round((rectTop - pageHeight) * scaleX);
      startY = -Math.round(rectLeft * scaleY);
      break;
    case Rotation.Degree180:
      startX = Math.round((rectRight - pageWidth) * scaleX);
      startY = Math.round((rectTop - pageHeight) * scaleY);
      break;
    case Rotation.Degree270:
      startX = -Math.round(rectBottom * scaleX);
      startY = Math.round((rectRight - pageWidth) * scaleY);
      break;
    default:
      startX = -Math.round(rectLeft * scaleX);
      startY = -Math.round(rectBottom * scaleY);
      break;
  }
  return { startX, startY, formsWidth, formsHeight, scaleX, scaleY };
}
const WasmPointer = (ptr) => ptr;
const DEFAULT_CONFIG = {
  pageTtl: 5e3,
  // 5 seconds
  maxPagesPerDocument: 10,
  normalizeRotation: false
};
class PdfCache {
  constructor(pdfium, memoryManager, config = {}) {
    this.pdfium = pdfium;
    this.memoryManager = memoryManager;
    this.docs = /* @__PURE__ */ new Map();
    this.config = { ...DEFAULT_CONFIG, ...config };
  }
  /** Open (or re-use) a document */
  setDocument(id, filePtr, docPtr, normalizeRotation = false) {
    let ctx = this.docs.get(id);
    if (!ctx) {
      const docConfig = { ...this.config, normalizeRotation };
      ctx = new DocumentContext(filePtr, docPtr, this.pdfium, this.memoryManager, docConfig);
      this.docs.set(id, ctx);
    }
  }
  /** Retrieve the DocumentContext for a given PdfDocumentObject */
  getContext(docId) {
    return this.docs.get(docId);
  }
  /** Close & fully release a document and all its pages */
  closeDocument(docId) {
    const ctx = this.docs.get(docId);
    if (!ctx) return false;
    ctx.dispose();
    this.docs.delete(docId);
    return true;
  }
  /** Close all documents */
  closeAllDocuments() {
    for (const ctx of this.docs.values()) {
      ctx.dispose();
    }
    this.docs.clear();
  }
  /** Update cache configuration for all existing documents */
  updateConfig(newConfig) {
    Object.assign(this.config, newConfig);
    for (const ctx of this.docs.values()) {
      ctx.updateConfig(this.config);
    }
  }
  /** Get current cache statistics */
  getCacheStats() {
    const pagesByDocument = {};
    let totalPages = 0;
    for (const [docId, ctx] of this.docs.entries()) {
      const pageCount = ctx.getCacheSize();
      pagesByDocument[docId] = pageCount;
      totalPages += pageCount;
    }
    return {
      documents: this.docs.size,
      totalPages,
      pagesByDocument
    };
  }
}
class DocumentContext {
  constructor(filePtr, docPtr, pdfium, memoryManager, config) {
    this.filePtr = filePtr;
    this.docPtr = docPtr;
    this.memoryManager = memoryManager;
    this.pageUids = [];
    this.pageUidSeq = 0;
    this.normalizeRotation = config.normalizeRotation;
    this.pageCache = new PageCache(pdfium, docPtr, config);
  }
  /** Main accessor for pages */
  acquirePage(pageIdx) {
    return this.pageCache.acquire(pageIdx);
  }
  /** Scoped accessor for one-off / bulk operations */
  borrowPage(pageIdx, fn) {
    return this.pageCache.borrowPage(pageIdx, fn);
  }
  /** Update cache configuration */
  updateConfig(config) {
    this.pageCache.updateConfig(config);
  }
  clearPages() {
    this.pageCache.forceReleaseAll();
  }
  newPageUids(count) {
    return Array.from({ length: count }, () => \`p\${++this.pageUidSeq}\`);
  }
  /** Get number of pages currently in cache */
  getCacheSize() {
    return this.pageCache.size();
  }
  /** Tear down all pages + this document */
  dispose() {
    this.pageCache.forceReleaseAll();
    this.pageCache.pdf.FPDF_CloseDocument(this.docPtr);
    this.memoryManager.free(WasmPointer(this.filePtr));
  }
}
class PageCache {
  constructor(pdf, docPtr, config) {
    this.pdf = pdf;
    this.docPtr = docPtr;
    this.cache = /* @__PURE__ */ new Map();
    this.accessOrder = [];
    this.config = config;
  }
  acquire(pageIdx) {
    let ctx = this.cache.get(pageIdx);
    if (!ctx) {
      this.evictIfNeeded();
      let pagePtr;
      if (this.config.normalizeRotation) {
        pagePtr = this.pdf.EPDF_LoadPageNormalized(this.docPtr, pageIdx, 0);
      } else {
        pagePtr = this.pdf.FPDF_LoadPage(this.docPtr, pageIdx);
      }
      ctx = new PageContext(this.pdf, this.docPtr, pageIdx, pagePtr, this.config.pageTtl, () => {
        this.cache.delete(pageIdx);
        this.removeFromAccessOrder(pageIdx);
      });
      this.cache.set(pageIdx, ctx);
    }
    this.updateAccessOrder(pageIdx);
    ctx.clearExpiryTimer();
    ctx.bumpRefCount();
    return ctx;
  }
  /** Helper: run a function "scoped" to a page.
   *    – if the page was already cached  → .release() (keeps TTL logic)
   *    – if the page was loaded just now → .disposeImmediate() (free right away)
   */
  borrowPage(pageIdx, fn) {
    const existed = this.cache.has(pageIdx);
    const ctx = this.acquire(pageIdx);
    try {
      return fn(ctx);
    } finally {
      existed ? ctx.release() : ctx.disposeImmediate();
    }
  }
  forceReleaseAll() {
    for (const ctx of this.cache.values()) {
      ctx.disposeImmediate();
    }
    this.cache.clear();
    this.accessOrder.length = 0;
  }
  /** Update cache configuration */
  updateConfig(config) {
    this.config = config;
    for (const ctx of this.cache.values()) {
      ctx.updateTtl(config.pageTtl);
    }
    this.evictIfNeeded();
  }
  /** Get current cache size */
  size() {
    return this.cache.size;
  }
  /** Evict least recently used pages if cache exceeds max size */
  evictIfNeeded() {
    while (this.cache.size >= this.config.maxPagesPerDocument) {
      const lruPageIdx = this.accessOrder[0];
      if (lruPageIdx !== void 0) {
        const ctx = this.cache.get(lruPageIdx);
        if (ctx) {
          if (ctx.getRefCount() === 0) {
            ctx.disposeImmediate();
          } else {
            break;
          }
        } else {
          this.removeFromAccessOrder(lruPageIdx);
        }
      } else {
        break;
      }
    }
  }
  /** Update the access order for LRU tracking */
  updateAccessOrder(pageIdx) {
    this.removeFromAccessOrder(pageIdx);
    this.accessOrder.push(pageIdx);
  }
  /** Remove a page from the access order array */
  removeFromAccessOrder(pageIdx) {
    const index = this.accessOrder.indexOf(pageIdx);
    if (index > -1) {
      this.accessOrder.splice(index, 1);
    }
  }
}
class PageContext {
  constructor(pdf, docPtr, pageIdx, pagePtr, ttl, onFinalDispose) {
    this.pdf = pdf;
    this.docPtr = docPtr;
    this.pageIdx = pageIdx;
    this.pagePtr = pagePtr;
    this.onFinalDispose = onFinalDispose;
    this.refCount = 0;
    this.disposed = false;
    this.ttl = ttl;
  }
  /** Called by PageCache.acquire() */
  bumpRefCount() {
    if (this.disposed) throw new Error("Context already disposed");
    this.refCount++;
  }
  /** Get current reference count */
  getRefCount() {
    return this.refCount;
  }
  /** Called by PageCache.acquire() */
  clearExpiryTimer() {
    if (this.expiryTimer) {
      clearTimeout(this.expiryTimer);
      this.expiryTimer = void 0;
    }
  }
  /** Update TTL configuration */
  updateTtl(newTtl) {
    this.ttl = newTtl;
    if (this.expiryTimer && this.refCount === 0) {
      this.clearExpiryTimer();
      this.expiryTimer = setTimeout(() => this.disposeImmediate(), this.ttl);
    }
  }
  /** Called by PageCache.release() internally */
  release() {
    if (this.disposed) return;
    this.refCount--;
    if (this.refCount === 0) {
      this.expiryTimer = setTimeout(() => this.disposeImmediate(), this.ttl);
    }
  }
  /** Tear down _all_ sub-pointers & the page. */
  disposeImmediate() {
    if (this.disposed) return;
    this.disposed = true;
    this.clearExpiryTimer();
    if (this.textPagePtr !== void 0) {
      this.pdf.FPDFText_ClosePage(this.textPagePtr);
    }
    if (this.formHandle !== void 0) {
      this.pdf.FORM_OnBeforeClosePage(this.pagePtr, this.formHandle);
      this.pdf.PDFiumExt_ExitFormFillEnvironment(this.formHandle);
    }
    if (this.formInfoPtr !== void 0) {
      this.pdf.PDFiumExt_CloseFormFillInfo(this.formInfoPtr);
    }
    this.pdf.FPDF_ClosePage(this.pagePtr);
    this.onFinalDispose();
  }
  // ── public helpers ──
  /** Always safe: opens (once) and returns the text-page ptr. */
  getTextPage() {
    this.ensureAlive();
    if (this.textPagePtr === void 0) {
      this.textPagePtr = this.pdf.FPDFText_LoadPage(this.pagePtr);
    }
    return this.textPagePtr;
  }
  /** Always safe: opens (once) and returns the form-fill handle. */
  getFormHandle() {
    this.ensureAlive();
    if (this.formHandle === void 0) {
      this.formInfoPtr = this.pdf.PDFiumExt_OpenFormFillInfo();
      this.formHandle = this.pdf.PDFiumExt_InitFormFillEnvironment(this.docPtr, this.formInfoPtr);
      this.pdf.FORM_OnAfterLoadPage(this.pagePtr, this.formHandle);
    }
    return this.formHandle;
  }
  /**
   * Safely execute \`fn\` with an annotation pointer.
   * Pointer is ALWAYS closed afterwards.
   */
  withAnnotation(annotIdx, fn) {
    this.ensureAlive();
    const annotPtr = this.pdf.FPDFPage_GetAnnot(this.pagePtr, annotIdx);
    try {
      return fn(annotPtr);
    } finally {
      this.pdf.FPDFPage_CloseAnnot(annotPtr);
    }
  }
  ensureAlive() {
    if (this.disposed) throw new Error("PageContext already disposed");
  }
}
const MEMORY_LIMITS = {
  /** Maximum total memory that can be allocated (2GB) */
  MAX_TOTAL_MEMORY: 2 * 1024 * 1024 * 1024
};
const LIMITS = {
  MEMORY: MEMORY_LIMITS
};
const LOG_SOURCE$3 = "PDFiumEngine";
const LOG_CATEGORY$3 = "MemoryManager";
class MemoryManager {
  constructor(pdfiumModule, logger) {
    this.pdfiumModule = pdfiumModule;
    this.logger = logger;
    this.allocations = /* @__PURE__ */ new Map();
    this.totalAllocated = 0;
  }
  /**
   * Allocate memory with tracking and validation
   */
  malloc(size) {
    if (this.totalAllocated + size > LIMITS.MEMORY.MAX_TOTAL_MEMORY) {
      throw new Error(
        \`Total memory usage would exceed limit: \${this.totalAllocated + size} > \${LIMITS.MEMORY.MAX_TOTAL_MEMORY}\`
      );
    }
    const ptr = this.pdfiumModule.pdfium._malloc(size);
    if (!ptr) {
      throw new Error(\`Failed to allocate \${size} bytes\`);
    }
    const allocation = {
      ptr: WasmPointer(ptr),
      size,
      timestamp: Date.now(),
      stack: this.logger.isEnabled("debug") ? new Error().stack : void 0
    };
    this.allocations.set(ptr, allocation);
    this.totalAllocated += size;
    return WasmPointer(ptr);
  }
  /**
   * Free memory with validation
   */
  free(ptr) {
    const allocation = this.allocations.get(ptr);
    if (!allocation) {
      this.logger.warn(LOG_SOURCE$3, LOG_CATEGORY$3, \`Freeing untracked pointer: \${ptr}\`);
    } else {
      this.totalAllocated -= allocation.size;
      this.allocations.delete(ptr);
    }
    this.pdfiumModule.pdfium._free(ptr);
  }
  /**
   * Get memory statistics
   */
  getStats() {
    return {
      totalAllocated: this.totalAllocated,
      allocationCount: this.allocations.size,
      allocations: this.logger.isEnabled("debug") ? Array.from(this.allocations.values()) : []
    };
  }
  /**
   * Check for memory leaks
   */
  checkLeaks() {
    if (this.allocations.size > 0) {
      this.logger.warn(
        LOG_SOURCE$3,
        LOG_CATEGORY$3,
        \`Potential memory leak: \${this.allocations.size} unfreed allocations\`
      );
      for (const [ptr, alloc] of this.allocations) {
        this.logger.warn(LOG_SOURCE$3, LOG_CATEGORY$3, \`  - \${ptr}: \${alloc.size} bytes\`, alloc.stack);
      }
    }
  }
}
const SYSFONTINFO_SIZE = 36;
const OFFSET_VERSION = 0;
const OFFSET_RELEASE = 4;
const OFFSET_ENUMFONTS = 8;
const OFFSET_MAPFONT = 12;
const OFFSET_GETFONT = 16;
const OFFSET_GETFONTDATA = 20;
const OFFSET_GETFACENAME = 24;
const OFFSET_GETFONTCHARSET = 28;
const OFFSET_DELETEFONT = 32;
const LOG_SOURCE$2 = "pdfium";
const LOG_CATEGORY$2 = "font-fallback";
class FontFallbackManager {
  constructor(config, logger = new NoopLogger()) {
    this.fontHandles = /* @__PURE__ */ new Map();
    this.fontCache = /* @__PURE__ */ new Map();
    this.nextHandleId = 1;
    this.module = null;
    this.enabled = false;
    this.structPtr = 0;
    this.releaseFnPtr = 0;
    this.enumFontsFnPtr = 0;
    this.mapFontFnPtr = 0;
    this.getFontFnPtr = 0;
    this.getFontDataFnPtr = 0;
    this.getFaceNameFnPtr = 0;
    this.getFontCharsetFnPtr = 0;
    this.deleteFontFnPtr = 0;
    this.fontConfig = config;
    this.logger = logger;
  }
  /**
   * Initialize the font fallback system and attach to PDFium module
   */
  initialize(module) {
    if (this.enabled) {
      this.logger.warn(LOG_SOURCE$2, LOG_CATEGORY$2, "Font fallback already initialized");
      return;
    }
    this.module = module;
    const pdfium = module.pdfium;
    if (typeof pdfium.addFunction !== "function") {
      this.logger.error(
        LOG_SOURCE$2,
        LOG_CATEGORY$2,
        "addFunction not available. Make sure WASM is compiled with -sALLOW_TABLE_GROWTH"
      );
      return;
    }
    try {
      this.structPtr = pdfium._malloc(SYSFONTINFO_SIZE);
      if (!this.structPtr) {
        throw new Error("Failed to allocate FPDF_SYSFONTINFO struct");
      }
      for (let i = 0; i < SYSFONTINFO_SIZE; i++) {
        pdfium.setValue(this.structPtr + i, 0, "i8");
      }
      this.releaseFnPtr = pdfium.addFunction((_pThis) => {
      }, "vi");
      this.enumFontsFnPtr = pdfium.addFunction((_pThis, _pMapper) => {
      }, "vii");
      this.mapFontFnPtr = pdfium.addFunction(
        (_pThis, weight, bItalic, charset, pitchFamily, facePtr, bExactPtr) => {
          const face = facePtr ? pdfium.UTF8ToString(facePtr) : "";
          const handle = this.mapFont(weight, bItalic, charset, pitchFamily, face);
          if (bExactPtr) {
            pdfium.setValue(bExactPtr, 0, "i32");
          }
          return handle;
        },
        "iiiiiiii"
      );
      this.getFontFnPtr = pdfium.addFunction((_pThis, facePtr) => {
        const face = facePtr ? pdfium.UTF8ToString(facePtr) : "";
        return this.mapFont(400, 0, 0, 0, face);
      }, "iii");
      this.getFontDataFnPtr = pdfium.addFunction(
        (_pThis, hFont, table, buffer, bufSize) => {
          return this.getFontData(hFont, table, buffer, bufSize);
        },
        "iiiiii"
      );
      this.getFaceNameFnPtr = pdfium.addFunction(
        (_pThis, _hFont, _buffer, _bufSize) => {
          return 0;
        },
        "iiiii"
      );
      this.getFontCharsetFnPtr = pdfium.addFunction((_pThis, hFont) => {
        const handle = this.fontHandles.get(hFont);
        return (handle == null ? void 0 : handle.charset) ?? 0;
      }, "iii");
      this.deleteFontFnPtr = pdfium.addFunction((_pThis, hFont) => {
        this.deleteFont(hFont);
      }, "vii");
      pdfium.setValue(this.structPtr + OFFSET_VERSION, 1, "i32");
      pdfium.setValue(this.structPtr + OFFSET_RELEASE, this.releaseFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_ENUMFONTS, this.enumFontsFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_MAPFONT, this.mapFontFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_GETFONT, this.getFontFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_GETFONTDATA, this.getFontDataFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_GETFACENAME, this.getFaceNameFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_GETFONTCHARSET, this.getFontCharsetFnPtr, "i32");
      pdfium.setValue(this.structPtr + OFFSET_DELETEFONT, this.deleteFontFnPtr, "i32");
      module.FPDF_SetSystemFontInfo(this.structPtr);
      this.enabled = true;
      this.logger.info(
        LOG_SOURCE$2,
        LOG_CATEGORY$2,
        "Font fallback system initialized (pure TypeScript)",
        Object.keys(this.fontConfig.fonts)
      );
    } catch (error) {
      this.logger.error(LOG_SOURCE$2, LOG_CATEGORY$2, "Failed to initialize font fallback", error);
      this.cleanup();
      throw error;
    }
  }
  /**
   * Disable the font fallback system and clean up resources
   */
  disable() {
    if (!this.enabled || !this.module) {
      return;
    }
    this.module.FPDF_SetSystemFontInfo(0);
    this.cleanup();
    this.enabled = false;
    this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, "Font fallback system disabled");
  }
  /**
   * Clean up allocated resources
   */
  cleanup() {
    if (!this.module) return;
    const pdfium = this.module.pdfium;
    if (this.structPtr) {
      pdfium._free(this.structPtr);
      this.structPtr = 0;
    }
    const removeIfExists = (ptr) => {
      if (ptr && typeof pdfium.removeFunction === "function") {
        try {
          pdfium.removeFunction(ptr);
        } catch {
        }
      }
    };
    removeIfExists(this.releaseFnPtr);
    removeIfExists(this.enumFontsFnPtr);
    removeIfExists(this.mapFontFnPtr);
    removeIfExists(this.getFontFnPtr);
    removeIfExists(this.getFontDataFnPtr);
    removeIfExists(this.getFaceNameFnPtr);
    removeIfExists(this.getFontCharsetFnPtr);
    removeIfExists(this.deleteFontFnPtr);
    this.releaseFnPtr = 0;
    this.enumFontsFnPtr = 0;
    this.mapFontFnPtr = 0;
    this.getFontFnPtr = 0;
    this.getFontDataFnPtr = 0;
    this.getFaceNameFnPtr = 0;
    this.getFontCharsetFnPtr = 0;
    this.deleteFontFnPtr = 0;
  }
  /**
   * Check if font fallback is enabled
   */
  isEnabled() {
    return this.enabled;
  }
  /**
   * Get statistics about font loading
   */
  getStats() {
    return {
      handleCount: this.fontHandles.size,
      cacheSize: this.fontCache.size,
      cachedUrls: Array.from(this.fontCache.keys())
    };
  }
  /**
   * Pre-load fonts for specific charsets (optional optimization)
   * This can be called to warm the cache before rendering
   */
  async preloadFonts(charsets) {
    const urls = charsets.map((charset) => this.getFontUrlForCharset(charset)).filter((url) => url !== null);
    const uniqueUrls = [...new Set(urls)];
    await Promise.all(
      uniqueUrls.map(async (url) => {
        if (!this.fontCache.has(url)) {
          try {
            const data = await this.fetchFontAsync(url);
            if (data) {
              this.fontCache.set(url, data);
              this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, \`Pre-loaded font: \${url}\`);
            }
          } catch (error) {
            this.logger.warn(LOG_SOURCE$2, LOG_CATEGORY$2, \`Failed to pre-load font: \${url}\`, error);
          }
        }
      })
    );
  }
  // ============================================================================
  // PDFium Callback Implementations
  // ============================================================================
  /**
   * MapFont - called by PDFium when it needs a font
   */
  mapFont(weight, bItalic, charset, pitchFamily, face) {
    const italic = bItalic !== 0;
    this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, "MapFont called", {
      weight,
      italic,
      charset,
      pitchFamily,
      face
    });
    const result = this.findBestFontMatch(charset, weight, italic);
    if (!result) {
      this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, \`No font configured for charset \${charset}\`);
      return 0;
    }
    const handle = {
      id: this.nextHandleId++,
      charset,
      weight,
      italic,
      url: result.url,
      data: null
    };
    this.fontHandles.set(handle.id, handle);
    this.logger.debug(
      LOG_SOURCE$2,
      LOG_CATEGORY$2,
      \`Created font handle \${handle.id} for \${result.url} (requested: weight=\${weight}, italic=\${italic}, matched: weight=\${result.matchedWeight}, italic=\${result.matchedItalic})\`
    );
    return handle.id;
  }
  /**
   * GetFontData - called by PDFium to get font bytes
   */
  getFontData(fontHandle, table, bufferPtr, bufSize) {
    const handle = this.fontHandles.get(fontHandle);
    if (!handle) {
      this.logger.warn(LOG_SOURCE$2, LOG_CATEGORY$2, \`Unknown font handle: \${fontHandle}\`);
      return 0;
    }
    if (!handle.data) {
      if (this.fontCache.has(handle.url)) {
        handle.data = this.fontCache.get(handle.url);
      } else {
        handle.data = this.fetchFontSync(handle.url);
        if (handle.data) {
          this.fontCache.set(handle.url, handle.data);
        }
      }
    }
    if (!handle.data) {
      this.logger.warn(LOG_SOURCE$2, LOG_CATEGORY$2, \`Failed to load font: \${handle.url}\`);
      return 0;
    }
    const fontData = handle.data;
    if (table !== 0) {
      this.logger.debug(
        LOG_SOURCE$2,
        LOG_CATEGORY$2,
        \`Table \${table} requested - returning 0 to request whole file\`
      );
      return 0;
    }
    if (bufferPtr === 0 || bufSize < fontData.length) {
      return fontData.length;
    }
    if (this.module) {
      const heap = this.module.pdfium.HEAPU8;
      heap.set(fontData, bufferPtr);
      this.logger.debug(
        LOG_SOURCE$2,
        LOG_CATEGORY$2,
        \`Copied \${fontData.length} bytes to buffer for handle \${fontHandle}\`
      );
    }
    return fontData.length;
  }
  /**
   * DeleteFont - called by PDFium when done with a font
   */
  deleteFont(fontHandle) {
    const handle = this.fontHandles.get(fontHandle);
    if (handle) {
      this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, \`Deleting font handle \${fontHandle}\`);
      this.fontHandles.delete(fontHandle);
    }
  }
  // ============================================================================
  // Helper Methods
  // ============================================================================
  /**
   * Find the best matching font variant for the given parameters
   */
  findBestFontMatch(charset, requestedWeight, requestedItalic) {
    const { fonts: fonts2, defaultFont, baseUrl } = this.fontConfig;
    const entry = fonts2[charset] ?? defaultFont;
    if (!entry) {
      return null;
    }
    const variants = this.normalizeToVariants(entry);
    if (variants.length === 0) {
      return null;
    }
    const best = this.selectBestVariant(variants, requestedWeight, requestedItalic);
    let url = best.url;
    if (baseUrl && !url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("/")) {
      url = \`\${baseUrl}/\${url}\`;
    }
    return {
      url,
      matchedWeight: best.weight ?? 400,
      matchedItalic: best.italic ?? false
    };
  }
  /**
   * Normalize a FontEntry to an array of FontVariants
   */
  normalizeToVariants(entry) {
    if (typeof entry === "string") {
      return [{ url: entry, weight: 400, italic: false }];
    }
    if (Array.isArray(entry)) {
      return entry.map((v) => ({
        url: v.url,
        weight: v.weight ?? 400,
        italic: v.italic ?? false
      }));
    }
    return [{ url: entry.url, weight: entry.weight ?? 400, italic: entry.italic ?? false }];
  }
  /**
   * Select the best matching variant based on weight and italic
   * Uses CSS font matching algorithm principles:
   * 1. Exact italic match preferred
   * 2. Closest weight (with bias toward bolder for weights >= 400)
   */
  selectBestVariant(variants, requestedWeight, requestedItalic) {
    if (variants.length === 1) {
      return variants[0];
    }
    const italicMatches = variants.filter((v) => (v.italic ?? false) === requestedItalic);
    const candidates = italicMatches.length > 0 ? italicMatches : variants;
    let bestMatch = candidates[0];
    let bestDistance = Math.abs((bestMatch.weight ?? 400) - requestedWeight);
    for (const variant of candidates) {
      const variantWeight = variant.weight ?? 400;
      const distance = Math.abs(variantWeight - requestedWeight);
      if (distance < bestDistance) {
        bestMatch = variant;
        bestDistance = distance;
      } else if (distance === bestDistance) {
        const currentWeight = bestMatch.weight ?? 400;
        if (requestedWeight >= 500) {
          if (variantWeight > currentWeight) {
            bestMatch = variant;
          }
        } else {
          if (variantWeight < currentWeight) {
            bestMatch = variant;
          }
        }
      }
    }
    return bestMatch;
  }
  /**
   * Get font URL for a charset (backward compatible helper)
   */
  getFontUrlForCharset(charset) {
    const result = this.findBestFontMatch(charset, 400, false);
    return (result == null ? void 0 : result.url) ?? null;
  }
  /**
   * Fetch font data synchronously
   * Uses custom fontLoader if provided, otherwise falls back to XMLHttpRequest (browser)
   */
  fetchFontSync(pathOrUrl) {
    this.logger.debug(LOG_SOURCE$2, LOG_CATEGORY$2, \`Fetching font synchronously: \${pathOrUrl}\`);
    if (this.fontConfig.fontLoader) {
      try {
        const data = this.fontConfig.fontLoader(pathOrUrl);
        if (data) {
          this.logger.info(
            LOG_SOURCE$2,
            LOG_CATEGORY$2,
            \`Loaded font via custom loader: \${pathOrUrl} (\${data.length} bytes)\`
          );
        } else {
          this.logger.warn(
            LOG_SOURCE$2,
            LOG_CATEGORY$2,
            \`Custom font loader returned null for: \${pathOrUrl}\`
          );
        }
        return data;
      } catch (error) {
        this.logger.error(
          LOG_SOURCE$2,
          LOG_CATEGORY$2,
          \`Error in custom font loader: \${pathOrUrl}\`,
          error
        );
        return null;
      }
    }
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", pathOrUrl, false);
      xhr.responseType = "arraybuffer";
      xhr.send();
      if (xhr.status === 200) {
        const data = new Uint8Array(xhr.response);
        this.logger.info(
          LOG_SOURCE$2,
          LOG_CATEGORY$2,
          \`Loaded font: \${pathOrUrl} (\${data.length} bytes)\`
        );
        return data;
      } else {
        this.logger.error(
          LOG_SOURCE$2,
          LOG_CATEGORY$2,
          \`Failed to load font: \${pathOrUrl} (HTTP \${xhr.status})\`
        );
        return null;
      }
    } catch (error) {
      this.logger.error(LOG_SOURCE$2, LOG_CATEGORY$2, \`Error fetching font: \${pathOrUrl}\`, error);
      return null;
    }
  }
  /**
   * Fetch font data asynchronously (for preloading)
   * Uses custom fontLoader if provided, otherwise falls back to fetch API
   */
  async fetchFontAsync(pathOrUrl) {
    if (this.fontConfig.fontLoader) {
      try {
        return this.fontConfig.fontLoader(pathOrUrl);
      } catch {
        return null;
      }
    }
    try {
      const response = await fetch(pathOrUrl);
      if (response.ok) {
        const buffer = await response.arrayBuffer();
        return new Uint8Array(buffer);
      }
      return null;
    } catch {
      return null;
    }
  }
}
const LOG_SOURCE$1 = "PDFiumEngine";
const LOG_CATEGORY$1 = "Engine";
const PATH_SEGMENT_SIZE = 28;
const NUMBER_FORMAT_SIZE = 48;
class PdfiumNative {
  /**
   * Create an instance of PdfiumNative and initialize PDFium
   * @param wasmModule - pdfium wasm module
   * @param options - configuration options
   */
  constructor(pdfiumModule, options = {}) {
    this.pdfiumModule = pdfiumModule;
    this.memoryLeakCheckInterval = null;
    this.fontFallbackManager = null;
    const { logger = new NoopLogger(), fontFallback } = options;
    this.logger = logger;
    this.memoryManager = new MemoryManager(this.pdfiumModule, this.logger);
    this.cache = new PdfCache(this.pdfiumModule, this.memoryManager);
    if (this.logger.isEnabled("debug")) {
      this.memoryLeakCheckInterval = setInterval(() => {
        this.memoryManager.checkLeaks();
      }, 1e4);
    }
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "initialize");
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Initialize\`, "Begin", "General");
    this.pdfiumModule.PDFiumExt_Init();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Initialize\`, "End", "General");
    if (fontFallback) {
      this.fontFallbackManager = new FontFallbackManager(fontFallback, this.logger);
      this.fontFallbackManager.initialize(this.pdfiumModule);
      this.logger.info(LOG_SOURCE$1, LOG_CATEGORY$1, "Font fallback system enabled");
    }
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.destroy}
   *
   * @public
   */
  destroy() {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "destroy");
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Destroy\`, "Begin", "General");
    if (this.fontFallbackManager) {
      this.fontFallbackManager.disable();
      this.fontFallbackManager = null;
    }
    this.pdfiumModule.FPDF_DestroyLibrary();
    if (this.memoryLeakCheckInterval) {
      clearInterval(this.memoryLeakCheckInterval);
      this.memoryLeakCheckInterval = null;
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Destroy\`, "End", "General");
    return PdfTaskHelper.resolve(true);
  }
  /**
   * Get the font fallback manager instance
   * Useful for pre-loading fonts or checking stats
   */
  getFontFallbackManager() {
    return this.fontFallbackManager;
  }
  /** Write a UTF-16LE (WIDESTRING) to wasm, call \`fn(ptr)\`, then free. */
  withWString(value, fn) {
    const length = (value.length + 1) * 2;
    const ptr = this.memoryManager.malloc(length);
    try {
      this.pdfiumModule.pdfium.stringToUTF16(value, ptr, length);
      return fn(ptr);
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  /** Write a float[] to wasm, call \`fn(ptr, count)\`, then free. */
  withFloatArray(values, fn) {
    const arr = values ?? [];
    const bytes = arr.length * 4;
    const ptr = bytes ? this.memoryManager.malloc(bytes) : WasmPointer(0);
    try {
      if (bytes) {
        for (let i = 0; i < arr.length; i++) {
          this.pdfiumModule.pdfium.setValue(ptr + i * 4, arr[i], "float");
        }
      }
      return fn(ptr, arr.length);
    } finally {
      if (bytes) this.memoryManager.free(ptr);
    }
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.openDocument}
   *
   * @public
   */
  openDocumentBuffer(file, options) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "openDocumentBuffer", file, options);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`OpenDocumentBuffer\`, "Begin", file.id);
    const normalizeRotation = (options == null ? void 0 : options.normalizeRotation) ?? false;
    const array = new Uint8Array(file.content);
    const length = array.length;
    const filePtr = this.memoryManager.malloc(length);
    this.pdfiumModule.pdfium.HEAPU8.set(array, filePtr);
    const docPtr = this.pdfiumModule.FPDF_LoadMemDocument(filePtr, length, (options == null ? void 0 : options.password) ?? "");
    if (!docPtr) {
      const lastError = this.pdfiumModule.FPDF_GetLastError();
      this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, \`FPDF_LoadMemDocument failed with \${lastError}\`);
      this.memoryManager.free(filePtr);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`OpenDocumentBuffer\`, "End", file.id);
      return PdfTaskHelper.reject({
        code: lastError,
        message: \`FPDF_LoadMemDocument failed\`
      });
    }
    const pageCount = this.pdfiumModule.FPDF_GetPageCount(docPtr);
    const pages = [];
    const sizePtr = this.memoryManager.malloc(8);
    for (let index = 0; index < pageCount; index++) {
      const result = normalizeRotation ? this.pdfiumModule.EPDF_GetPageSizeByIndexNormalized(docPtr, index, sizePtr) : this.pdfiumModule.FPDF_GetPageSizeByIndexF(docPtr, index, sizePtr);
      if (!result) {
        const lastError = this.pdfiumModule.FPDF_GetLastError();
        this.logger.error(
          LOG_SOURCE$1,
          LOG_CATEGORY$1,
          \`\${normalizeRotation ? "EPDF_GetPageSizeByIndexNormalized" : "FPDF_GetPageSizeByIndexF"} failed with \${lastError}\`
        );
        this.memoryManager.free(sizePtr);
        this.pdfiumModule.FPDF_CloseDocument(docPtr);
        this.memoryManager.free(filePtr);
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`OpenDocumentBuffer\`, "End", file.id);
        return PdfTaskHelper.reject({
          code: lastError,
          message: \`\${normalizeRotation ? "EPDF_GetPageSizeByIndexNormalized" : "FPDF_GetPageSizeByIndexF"} failed\`
        });
      }
      const rotation = this.pdfiumModule.EPDF_GetPageRotationByIndex(docPtr, index);
      const page = {
        index,
        size: {
          width: this.pdfiumModule.pdfium.getValue(sizePtr, "float"),
          height: this.pdfiumModule.pdfium.getValue(sizePtr + 4, "float")
        },
        rotation
      };
      pages.push(page);
    }
    this.memoryManager.free(sizePtr);
    const isEncrypted = this.pdfiumModule.EPDF_IsEncrypted(docPtr);
    const isOwnerUnlocked = this.pdfiumModule.EPDF_IsOwnerUnlocked(docPtr);
    const permissions = this.pdfiumModule.FPDF_GetDocPermissions(docPtr);
    const pdfDoc = {
      id: file.id,
      pageCount,
      pages,
      isEncrypted,
      isOwnerUnlocked,
      permissions,
      normalizedRotation: normalizeRotation
    };
    this.cache.setDocument(file.id, filePtr, docPtr, normalizeRotation);
    const openedCtx = this.cache.getContext(file.id);
    if (openedCtx) {
      openedCtx.pageUids = openedCtx.newPageUids(pageCount);
      pages.forEach((page, i) => page.uid = openedCtx.pageUids[i]);
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`OpenDocumentBuffer\`, "End", file.id);
    return PdfTaskHelper.resolve(pdfDoc);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getMetadata}
   *
   * @public
   */
  getMetadata(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getMetadata", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetMetadata\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetMetadata\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const creationRaw = this.readMetaText(ctx.docPtr, "CreationDate");
    const modRaw = this.readMetaText(ctx.docPtr, "ModDate");
    const metadata = {
      title: this.readMetaText(ctx.docPtr, "Title"),
      author: this.readMetaText(ctx.docPtr, "Author"),
      subject: this.readMetaText(ctx.docPtr, "Subject"),
      keywords: this.readMetaText(ctx.docPtr, "Keywords"),
      producer: this.readMetaText(ctx.docPtr, "Producer"),
      creator: this.readMetaText(ctx.docPtr, "Creator"),
      creationDate: creationRaw ? pdfDateToDate(creationRaw) ?? null : null,
      modificationDate: modRaw ? pdfDateToDate(modRaw) ?? null : null,
      trapped: this.getMetaTrapped(ctx.docPtr),
      custom: this.readAllMeta(ctx.docPtr, true)
    };
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetMetadata\`, "End", doc.id);
    return PdfTaskHelper.resolve(metadata);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.setMetadata}
   *
   * @public
   */
  setMetadata(doc, meta) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "setMetadata", doc, meta);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "SetMetadata", "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "SetMetadata", "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const strMap = [
      ["title", "Title"],
      ["author", "Author"],
      ["subject", "Subject"],
      ["keywords", "Keywords"],
      ["producer", "Producer"],
      ["creator", "Creator"]
    ];
    let ok = true;
    for (const [field, key] of strMap) {
      const v = meta[field];
      if (v === void 0) continue;
      const s = v === null ? null : v;
      if (!this.setMetaText(ctx.docPtr, key, s)) ok = false;
    }
    const writeDate = (field, key) => {
      const v = meta[field];
      if (v === void 0) return;
      if (v === null) {
        if (!this.setMetaText(ctx.docPtr, key, null)) ok = false;
        return;
      }
      const d = v;
      const raw = dateToPdfDate(d);
      if (!this.setMetaText(ctx.docPtr, key, raw)) ok = false;
    };
    writeDate("creationDate", "CreationDate");
    writeDate("modificationDate", "ModDate");
    if (meta.trapped !== void 0) {
      if (!this.setMetaTrapped(ctx.docPtr, meta.trapped ?? null)) ok = false;
    }
    if (meta.custom !== void 0) {
      for (const [key, value] of Object.entries(meta.custom)) {
        if (!isValidCustomKey(key)) {
          this.logger.warn(LOG_SOURCE$1, LOG_CATEGORY$1, "Invalid custom metadata key skipped", key);
          continue;
        }
        if (!this.setMetaText(ctx.docPtr, key, value ?? null)) ok = false;
      }
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "SetMetadata", "End", doc.id);
    return ok ? PdfTaskHelper.resolve(true) : PdfTaskHelper.reject({
      code: PdfErrorCode.Unknown,
      message: "one or more metadata fields could not be written"
    });
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getDocPermissions}
   *
   * @public
   */
  getDocPermissions(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getDocPermissions", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`getDocPermissions\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`getDocPermissions\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const permissions = this.pdfiumModule.FPDF_GetDocPermissions(ctx.docPtr);
    return PdfTaskHelper.resolve(permissions);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getDocUserPermissions}
   *
   * @public
   */
  getDocUserPermissions(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getDocUserPermissions", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`getDocUserPermissions\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`getDocUserPermissions\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const permissions = this.pdfiumModule.FPDF_GetDocUserPermissions(ctx.docPtr);
    return PdfTaskHelper.resolve(permissions);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getSignatures}
   *
   * @public
   */
  getSignatures(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getSignatures", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetSignatures\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetSignatures\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const signatures = [];
    const count = this.pdfiumModule.FPDF_GetSignatureCount(ctx.docPtr);
    for (let i = 0; i < count; i++) {
      const signatureObjPtr = this.pdfiumModule.FPDF_GetSignatureObject(ctx.docPtr, i);
      const contents = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetContents(signatureObjPtr, buffer, bufferSize);
      });
      const byteRange = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetByteRange(signatureObjPtr, buffer, bufferSize) * 4;
      });
      const subFilter = readArrayBuffer(this.pdfiumModule.pdfium, (buffer, bufferSize) => {
        return this.pdfiumModule.FPDFSignatureObj_GetSubFilter(signatureObjPtr, buffer, bufferSize);
      });
      const reason = readString(
        this.pdfiumModule.pdfium,
        (buffer, bufferLength) => {
          return this.pdfiumModule.FPDFSignatureObj_GetReason(
            signatureObjPtr,
            buffer,
            bufferLength
          );
        },
        this.pdfiumModule.pdfium.UTF16ToString
      );
      const time = readString(
        this.pdfiumModule.pdfium,
        (buffer, bufferLength) => {
          return this.pdfiumModule.FPDFSignatureObj_GetTime(signatureObjPtr, buffer, bufferLength);
        },
        this.pdfiumModule.pdfium.UTF8ToString
      );
      const docMDP = this.pdfiumModule.FPDFSignatureObj_GetDocMDPPermission(signatureObjPtr);
      signatures.push({
        contents,
        byteRange,
        subFilter,
        reason,
        time,
        docMDP
      });
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetSignatures\`, "End", doc.id);
    return PdfTaskHelper.resolve(signatures);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getBookmarks}
   *
   * @public
   */
  getBookmarks(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getBookmarks", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetBookmarks\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`getBookmarks\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const bookmarks = this.readPdfBookmarks(ctx.docPtr, 0);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetBookmarks\`, "End", doc.id);
    return PdfTaskHelper.resolve({
      bookmarks
    });
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.setBookmarks}
   *
   * @public
   */
  setBookmarks(doc, list) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "setBookmarks", doc, list);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SetBookmarks\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SetBookmarks\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    if (!this.pdfiumModule.EPDFBookmark_Clear(ctx.docPtr)) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SetBookmarks\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: "failed to clear existing bookmarks"
      });
    }
    const build = (parentPtr, items) => {
      var _a;
      for (const item of items) {
        const bmPtr = this.withWString(
          item.title ?? "",
          (wptr) => this.pdfiumModule.EPDFBookmark_AppendChild(ctx.docPtr, parentPtr, wptr)
        );
        if (!bmPtr) return false;
        if (item.target) {
          const ok2 = this.applyBookmarkTarget(ctx.docPtr, bmPtr, item.target);
          if (!ok2) return false;
        }
        if ((_a = item.children) == null ? void 0 : _a.length) {
          const ok2 = build(bmPtr, item.children);
          if (!ok2) return false;
        }
      }
      return true;
    };
    const ok = build(
      /*top-level*/
      0,
      list
    );
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SetBookmarks\`, "End", doc.id);
    if (!ok) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: "failed to build bookmark tree"
      });
    }
    return PdfTaskHelper.resolve(true);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.deleteBookmarks}
   *
   * @public
   */
  deleteBookmarks(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "deleteBookmarks", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteBookmarks\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteBookmarks\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const ok = this.pdfiumModule.EPDFBookmark_Clear(ctx.docPtr);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteBookmarks\`, "End", doc.id);
    return ok ? PdfTaskHelper.resolve(true) : PdfTaskHelper.reject({
      code: PdfErrorCode.Unknown,
      message: "failed to clear bookmarks"
    });
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.renderPage}
   *
   * @public
   */
  renderPageRaw(doc, page, options) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "renderPage", doc, page, options);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`RenderPage\`, "Begin", \`\${doc.id}-\${page.index}\`);
    const rect = { origin: { x: 0, y: 0 }, size: page.size };
    const task = this.renderRectEncoded(doc, page, rect, options);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`RenderPage\`, "End", \`\${doc.id}-\${page.index}\`);
    return task;
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.renderPageRect}
   *
   * @public
   */
  renderPageRect(doc, page, rect, options) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "renderPageRect", doc, page, rect, options);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderPageRect\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const task = this.renderRectEncoded(doc, page, rect, options);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`RenderPageRect\`, "End", \`\${doc.id}-\${page.index}\`);
    return task;
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getPageAnnotations}
   *
   * @public
   */
  getPageAnnotations(doc, page) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageAnnotations", doc, page);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageAnnotations\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`GetPageAnnotations\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const annotations = this.readPageAnnotations(doc, ctx, page);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageAnnotations\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    this.logger.debug(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageAnnotations\`,
      \`\${doc.id}-\${page.index}\`,
      annotations
    );
    return PdfTaskHelper.resolve(annotations);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.createPageAnnotation}
   *
   * @public
   */
  createPageAnnotation(doc, page, annotation, context) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "createPageAnnotation", doc, page, annotation);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`CreatePageAnnotation\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`CreatePageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const annotationPtr = this.pdfiumModule.EPDFPage_CreateAnnot(pageCtx.pagePtr, annotation.type);
    if (!annotationPtr) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`CreatePageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      pageCtx.release();
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantCreateAnnot,
        message: "can not create annotation with specified type"
      });
    }
    if (!isUuidV4(annotation.id)) {
      annotation.id = uuidV4();
    }
    if (!this.setAnnotString(annotationPtr, "NM", annotation.id)) {
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      pageCtx.release();
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantSetAnnotString,
        message: "can not set the name of the annotation"
      });
    }
    if (!this.setPageAnnoRect(doc, page, annotationPtr, annotation.rect)) {
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      pageCtx.release();
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`CreatePageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantSetAnnotRect,
        message: "can not set the rect of the annotation"
      });
    }
    const saveAnnotation = this.prepareAnnotationForSave(annotation);
    let isSucceed = false;
    switch (saveAnnotation.type) {
      case PdfAnnotationSubtype.INK:
        isSucceed = this.addInkStroke(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.STAMP:
        isSucceed = this.addStampContent(
          doc,
          ctx.docPtr,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation,
          context == null ? void 0 : context.imageData
        );
        break;
      case PdfAnnotationSubtype.TEXT:
        isSucceed = this.addTextContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.FREETEXT:
        isSucceed = this.addFreeTextContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.LINE:
        isSucceed = this.addLineContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.POLYLINE:
      case PdfAnnotationSubtype.POLYGON:
        isSucceed = this.addPolyContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.CIRCLE:
      case PdfAnnotationSubtype.SQUARE:
        isSucceed = this.addShapeContent(doc, page, pageCtx.pagePtr, annotationPtr, saveAnnotation);
        break;
      case PdfAnnotationSubtype.UNDERLINE:
      case PdfAnnotationSubtype.STRIKEOUT:
      case PdfAnnotationSubtype.SQUIGGLY:
      case PdfAnnotationSubtype.HIGHLIGHT:
        isSucceed = this.addTextMarkupContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.LINK:
        isSucceed = this.addLinkContent(
          doc,
          page,
          ctx.docPtr,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.CARET:
        isSucceed = this.addCaretContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
      case PdfAnnotationSubtype.REDACT:
        isSucceed = this.addRedactContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotationPtr,
          saveAnnotation
        );
        break;
    }
    if (!isSucceed) {
      this.pdfiumModule.FPDFPage_RemoveAnnot(pageCtx.pagePtr, annotationPtr);
      pageCtx.release();
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`CreatePageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantSetAnnotContent,
        message: "can not add content of the annotation"
      });
    }
    if (annotation.blendMode !== void 0) {
      this.pdfiumModule.EPDFAnnot_GenerateAppearanceWithBlend(annotationPtr, annotation.blendMode);
    } else {
      this.pdfiumModule.EPDFAnnot_GenerateAppearance(annotationPtr);
    }
    this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
    pageCtx.release();
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`CreatePageAnnotation\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    return PdfTaskHelper.resolve(annotation.id);
  }
  /**
   * Update an existing page annotation in-place
   *
   *  • Locates the annot by page-local index (\`annotation.id\`)
   *  • Re-writes its /Rect and type-specific payload
   *  • Calls FPDFPage_GenerateContent so the new appearance is rendered
   *
   * @returns PdfTask<boolean>  –  true on success
   */
  updatePageAnnotation(doc, page, annotation, options) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "updatePageAnnotation", doc, page, annotation);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "UpdatePageAnnotation",
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "UpdatePageAnnotation",
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const annotPtr = this.getAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!annotPtr) {
      pageCtx.release();
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "UpdatePageAnnotation",
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({ code: PdfErrorCode.NotFound, message: "annotation not found" });
    }
    if (!this.setPageAnnoRect(doc, page, annotPtr, annotation.rect)) {
      this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
      pageCtx.release();
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "UpdatePageAnnotation",
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantSetAnnotRect,
        message: "failed to move annotation"
      });
    }
    const saveAnnotation = this.prepareAnnotationForSave(annotation);
    let ok = false;
    switch (saveAnnotation.type) {
      /* ── Ink ─────────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.INK: {
        if (!this.pdfiumModule.FPDFAnnot_RemoveInkList(annotPtr)) break;
        ok = this.addInkStroke(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Stamp ───────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.STAMP: {
        ok = this.addStampContent(
          doc,
          ctx.docPtr,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      case PdfAnnotationSubtype.TEXT: {
        ok = this.addTextContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Free text ────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.FREETEXT: {
        ok = this.addFreeTextContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Shape ───────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.CIRCLE:
      case PdfAnnotationSubtype.SQUARE: {
        ok = this.addShapeContent(doc, page, pageCtx.pagePtr, annotPtr, saveAnnotation);
        break;
      }
      /* ── Line ─────────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.LINE: {
        ok = this.addLineContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Polygon / Polyline ───────────────────────────────────────────────── */
      case PdfAnnotationSubtype.POLYGON:
      case PdfAnnotationSubtype.POLYLINE: {
        ok = this.addPolyContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Text-markup family ──────────────────────────────────────────────── */
      case PdfAnnotationSubtype.HIGHLIGHT:
      case PdfAnnotationSubtype.UNDERLINE:
      case PdfAnnotationSubtype.STRIKEOUT:
      case PdfAnnotationSubtype.SQUIGGLY: {
        ok = this.addTextMarkupContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Link ─────────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.LINK: {
        ok = this.addLinkContent(
          doc,
          page,
          ctx.docPtr,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Caret ────────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.CARET: {
        ok = this.addCaretContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Redact ───────────────────────────────────────────────────────────── */
      case PdfAnnotationSubtype.REDACT: {
        ok = this.addRedactContent(
          doc,
          page,
          pageCtx.pagePtr,
          annotPtr,
          saveAnnotation
        );
        break;
      }
      /* ── Unsupported edits – fall through to error ───────────────────────── */
      default:
        ok = false;
    }
    if (ok && (options == null ? void 0 : options.regenerateAppearance) !== false) {
      if (annotation.blendMode !== void 0) {
        this.pdfiumModule.EPDFAnnot_GenerateAppearanceWithBlend(annotPtr, annotation.blendMode);
      } else {
        this.pdfiumModule.EPDFAnnot_GenerateAppearance(annotPtr);
      }
      this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    }
    this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
    pageCtx.release();
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "UpdatePageAnnotation",
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    return ok ? PdfTaskHelper.resolve(true) : PdfTaskHelper.reject({
      code: PdfErrorCode.CantSetAnnotContent,
      message: "failed to update annotation"
    });
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.removePageAnnotation}
   *
   * @public
   */
  removePageAnnotation(doc, page, annotation) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "removePageAnnotation", doc, page, annotation);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RemovePageAnnotation\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`RemovePageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    let result = false;
    result = this.removeAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!result) {
      this.logger.error(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`FPDFPage_RemoveAnnot Failed\`,
        \`\${doc.id}-\${page.index}\`
      );
    } else {
      result = this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
      if (!result) {
        this.logger.error(
          LOG_SOURCE$1,
          LOG_CATEGORY$1,
          \`FPDFPage_GenerateContent Failed\`,
          \`\${doc.id}-\${page.index}\`
        );
      }
    }
    pageCtx.release();
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RemovePageAnnotation\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    return PdfTaskHelper.resolve(result);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getPageTextRects}
   *
   * @public
   */
  getPageTextRects(doc, page) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageTextRects", doc, page);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageTextRects\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`GetPageTextRects\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pageCtx.pagePtr);
    const textRects = this.readPageTextRects(page, pageCtx.docPtr, pageCtx.pagePtr, textPagePtr);
    this.pdfiumModule.FPDFText_ClosePage(textPagePtr);
    pageCtx.release();
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageTextRects\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    return PdfTaskHelper.resolve(textRects);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.renderThumbnail}
   *
   * @public
   */
  renderThumbnailRaw(doc, page, options) {
    const { scaleFactor = 1, ...rest } = options ?? {};
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "renderThumbnail", doc, page, options);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderThumbnail\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`RenderThumbnail\`,
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const result = this.renderPageRaw(doc, page, {
      scaleFactor: Math.max(scaleFactor, 0.5),
      ...rest
    });
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`RenderThumbnail\`, "End", \`\${doc.id}-\${page.index}\`);
    return result;
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getAttachments}
   *
   * @public
   */
  getAttachments(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getAttachments", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetAttachments\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetAttachments\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const attachments = [];
    const count = this.pdfiumModule.FPDFDoc_GetAttachmentCount(ctx.docPtr);
    for (let i = 0; i < count; i++) {
      const attachment = this.readPdfAttachment(ctx.docPtr, i);
      attachments.push(attachment);
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`GetAttachments\`, "End", doc.id);
    return PdfTaskHelper.resolve(attachments);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.addAttachment}
   *
   * @public
   */
  addAttachment(doc, params) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "addAttachment", doc, params == null ? void 0 : params.name);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const { name, description, mimeType, data } = params ?? {};
    if (!name) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.NotFound,
        message: "attachment name is required"
      });
    }
    if (!data || (data instanceof Uint8Array ? data.byteLength === 0 : data.byteLength === 0)) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.NotFound,
        message: "attachment data is empty"
      });
    }
    const attachmentPtr = this.withWString(
      name,
      (wNamePtr) => this.pdfiumModule.FPDFDoc_AddAttachment(ctx.docPtr, wNamePtr)
    );
    if (!attachmentPtr) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: \`An attachment named "\${name}" already exists\`
      });
    }
    this.withWString(
      description,
      (wDescriptionPtr) => this.pdfiumModule.EPDFAttachment_SetDescription(attachmentPtr, wDescriptionPtr)
    );
    this.pdfiumModule.EPDFAttachment_SetSubtype(attachmentPtr, mimeType);
    const u8 = data instanceof Uint8Array ? data : new Uint8Array(data);
    const len = u8.byteLength;
    const contentPtr = this.memoryManager.malloc(len);
    try {
      this.pdfiumModule.pdfium.HEAPU8.set(u8, contentPtr);
      const ok = this.pdfiumModule.FPDFAttachment_SetFile(
        attachmentPtr,
        ctx.docPtr,
        contentPtr,
        len
      );
      if (!ok) {
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
        return PdfTaskHelper.reject({
          code: PdfErrorCode.Unknown,
          message: "failed to write attachment bytes"
        });
      }
    } finally {
      this.memoryManager.free(contentPtr);
    }
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`AddAttachment\`, "End", doc.id);
    return PdfTaskHelper.resolve(true);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.removeAttachment}
   *
   * @public
   */
  removeAttachment(doc, attachment) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "deleteAttachment", doc, attachment);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteAttachment\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const count = this.pdfiumModule.FPDFDoc_GetAttachmentCount(ctx.docPtr);
    if (attachment.index < 0 || attachment.index >= count) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteAttachment\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: \`attachment index \${attachment.index} out of range\`
      });
    }
    const ok = this.pdfiumModule.FPDFDoc_DeleteAttachment(ctx.docPtr, attachment.index);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`DeleteAttachment\`, "End", doc.id);
    if (!ok) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: "failed to delete attachment"
      });
    }
    return PdfTaskHelper.resolve(true);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.readAttachmentContent}
   *
   * @public
   */
  readAttachmentContent(doc, attachment) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "readAttachmentContent", doc, attachment);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ReadAttachmentContent\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ReadAttachmentContent\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const attachmentPtr = this.pdfiumModule.FPDFDoc_GetAttachment(ctx.docPtr, attachment.index);
    const sizePtr = this.memoryManager.malloc(4);
    if (!this.pdfiumModule.FPDFAttachment_GetFile(attachmentPtr, 0, 0, sizePtr)) {
      this.memoryManager.free(sizePtr);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ReadAttachmentContent\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantReadAttachmentSize,
        message: "can not read attachment size"
      });
    }
    const size = this.pdfiumModule.pdfium.getValue(sizePtr, "i32") >>> 0;
    const contentPtr = this.memoryManager.malloc(size);
    if (!this.pdfiumModule.FPDFAttachment_GetFile(attachmentPtr, contentPtr, size, sizePtr)) {
      this.memoryManager.free(sizePtr);
      this.memoryManager.free(contentPtr);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ReadAttachmentContent\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantReadAttachmentContent,
        message: "can not read attachment content"
      });
    }
    const buffer = new ArrayBuffer(size);
    const view = new DataView(buffer);
    for (let i = 0; i < size; i++) {
      view.setInt8(i, this.pdfiumModule.pdfium.getValue(contentPtr + i, "i8"));
    }
    this.memoryManager.free(sizePtr);
    this.memoryManager.free(contentPtr);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ReadAttachmentContent\`, "End", doc.id);
    return PdfTaskHelper.resolve(buffer);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.setFormFieldValue}
   *
   * @public
   */
  setFormFieldValue(doc, page, annotation, value) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "SetFormFieldValue", doc, annotation, value);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`SetFormFieldValue\`,
      "Begin",
      \`\${doc.id}-\${annotation.id}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "SetFormFieldValue", "document is not opened");
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`SetFormFieldValue\`,
        "End",
        \`\${doc.id}-\${annotation.id}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const formFillInfoPtr = this.pdfiumModule.PDFiumExt_OpenFormFillInfo();
    const formHandle = this.pdfiumModule.PDFiumExt_InitFormFillEnvironment(
      ctx.docPtr,
      formFillInfoPtr
    );
    const pageCtx = ctx.acquirePage(page.index);
    this.pdfiumModule.FORM_OnAfterLoadPage(pageCtx.pagePtr, formHandle);
    const annotationPtr = this.getAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!annotationPtr) {
      pageCtx.release();
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "SetFormFieldValue",
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({ code: PdfErrorCode.NotFound, message: "annotation not found" });
    }
    if (!this.pdfiumModule.FORM_SetFocusedAnnot(formHandle, annotationPtr)) {
      this.logger.debug(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "SetFormFieldValue",
        "failed to set focused annotation"
      );
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`SetFormFieldValue\`,
        "End",
        \`\${doc.id}-\${annotation.id}\`
      );
      this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
      this.pdfiumModule.FORM_OnBeforeClosePage(pageCtx.pagePtr, formHandle);
      pageCtx.release();
      this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
      this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantFocusAnnot,
        message: "failed to set focused annotation"
      });
    }
    switch (value.kind) {
      case "text":
        {
          if (!this.pdfiumModule.FORM_SelectAllText(formHandle, pageCtx.pagePtr)) {
            this.logger.debug(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              "SetFormFieldValue",
              "failed to select all text"
            );
            this.logger.perf(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              \`SetFormFieldValue\`,
              "End",
              \`\${doc.id}-\${annotation.id}\`
            );
            this.pdfiumModule.FORM_ForceToKillFocus(formHandle);
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FORM_OnBeforeClosePage(pageCtx.pagePtr, formHandle);
            pageCtx.release();
            this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
            this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
            return PdfTaskHelper.reject({
              code: PdfErrorCode.CantSelectText,
              message: "failed to select all text"
            });
          }
          const length = 2 * (value.text.length + 1);
          const textPtr = this.memoryManager.malloc(length);
          this.pdfiumModule.pdfium.stringToUTF16(value.text, textPtr, length);
          this.pdfiumModule.FORM_ReplaceSelection(formHandle, pageCtx.pagePtr, textPtr);
          this.memoryManager.free(textPtr);
        }
        break;
      case "selection":
        {
          if (!this.pdfiumModule.FORM_SetIndexSelected(
            formHandle,
            pageCtx.pagePtr,
            value.index,
            value.isSelected
          )) {
            this.logger.debug(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              "SetFormFieldValue",
              "failed to set index selected"
            );
            this.logger.perf(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              \`SetFormFieldValue\`,
              "End",
              \`\${doc.id}-\${annotation.id}\`
            );
            this.pdfiumModule.FORM_ForceToKillFocus(formHandle);
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FORM_OnBeforeClosePage(pageCtx.pagePtr, formHandle);
            pageCtx.release();
            this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
            this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
            return PdfTaskHelper.reject({
              code: PdfErrorCode.CantSelectOption,
              message: "failed to set index selected"
            });
          }
        }
        break;
      case "checked":
        {
          const kReturn = 13;
          if (!this.pdfiumModule.FORM_OnChar(formHandle, pageCtx.pagePtr, kReturn, 0)) {
            this.logger.debug(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              "SetFormFieldValue",
              "failed to set field checked"
            );
            this.logger.perf(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              \`SetFormFieldValue\`,
              "End",
              \`\${doc.id}-\${annotation.id}\`
            );
            this.pdfiumModule.FORM_ForceToKillFocus(formHandle);
            this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
            this.pdfiumModule.FORM_OnBeforeClosePage(pageCtx.pagePtr, formHandle);
            pageCtx.release();
            this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
            this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
            return PdfTaskHelper.reject({
              code: PdfErrorCode.CantCheckField,
              message: "failed to set field checked"
            });
          }
        }
        break;
    }
    this.pdfiumModule.FORM_ForceToKillFocus(formHandle);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotationPtr);
    this.pdfiumModule.FORM_OnBeforeClosePage(pageCtx.pagePtr, formHandle);
    pageCtx.release();
    this.pdfiumModule.PDFiumExt_ExitFormFillEnvironment(formHandle);
    this.pdfiumModule.PDFiumExt_CloseFormFillInfo(formFillInfoPtr);
    return PdfTaskHelper.resolve(true);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.flattenPage}
   *
   * @public
   */
  flattenPage(doc, page, options) {
    const { flag = PdfPageFlattenFlag.Display } = options ?? {};
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "flattenPage", doc, page, flag);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`flattenPage\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`flattenPage\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const result = this.pdfiumModule.FPDFPage_Flatten(pageCtx.pagePtr, flag);
    pageCtx.release();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`flattenPage\`, "End", doc.id);
    return PdfTaskHelper.resolve(result);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.extractPages}
   *
   * @public
   */
  extractPages(doc, pageIndexes) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "extractPages", doc, pageIndexes);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractPages\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractPages\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const newDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!newDocPtr) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractPages\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantCreateNewDoc,
        message: "can not create new document"
      });
    }
    const pageIndexesPtr = this.memoryManager.malloc(pageIndexes.length * 4);
    for (let i = 0; i < pageIndexes.length; i++) {
      this.pdfiumModule.pdfium.setValue(pageIndexesPtr + i * 4, pageIndexes[i], "i32");
    }
    if (!this.pdfiumModule.FPDF_ImportPagesByIndex(
      newDocPtr,
      ctx.docPtr,
      pageIndexesPtr,
      pageIndexes.length,
      0
    )) {
      this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractPages\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantImportPages,
        message: "can not import pages to new document"
      });
    }
    const buffer = this.saveDocument(newDocPtr);
    this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractPages\`, "End", doc.id);
    return PdfTaskHelper.resolve(buffer);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.extractText}
   *
   * @public
   */
  extractText(doc, pageIndexes) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "extractText", doc, pageIndexes);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractText\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractText\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const strings = [];
    for (let i = 0; i < pageIndexes.length; i++) {
      const pageCtx = ctx.acquirePage(pageIndexes[i]);
      const textPagePtr = this.pdfiumModule.FPDFText_LoadPage(pageCtx.pagePtr);
      const charCount = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
      const bufferPtr = this.memoryManager.malloc((charCount + 1) * 2);
      this.pdfiumModule.FPDFText_GetText(textPagePtr, 0, charCount, bufferPtr);
      const text2 = this.pdfiumModule.pdfium.UTF16ToString(bufferPtr);
      this.memoryManager.free(bufferPtr);
      strings.push(text2);
      this.pdfiumModule.FPDFText_ClosePage(textPagePtr);
      pageCtx.release();
    }
    const text = strings.join("\\n\\n");
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`ExtractText\`, "End", doc.id);
    return PdfTaskHelper.resolve(text);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.getTextSlices}
   *
   * @public
   */
  getTextSlices(doc, slices) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getTextSlices", doc, slices);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetTextSlices", "Begin", doc.id);
    if (slices.length === 0) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetTextSlices", "End", doc.id);
      return PdfTaskHelper.resolve([]);
    }
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetTextSlices", "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    try {
      const out = new Array(slices.length);
      const byPage = /* @__PURE__ */ new Map();
      slices.forEach((s, i) => {
        (byPage.get(s.pageIndex) ?? byPage.set(s.pageIndex, []).get(s.pageIndex)).push({
          slice: s,
          pos: i
        });
      });
      for (const [pageIdx, list] of byPage) {
        const pageCtx = ctx.acquirePage(pageIdx);
        const textPagePtr = pageCtx.getTextPage();
        for (const { slice, pos } of list) {
          const bufPtr = this.memoryManager.malloc(2 * (slice.charCount + 1));
          this.pdfiumModule.FPDFText_GetText(textPagePtr, slice.charIndex, slice.charCount, bufPtr);
          out[pos] = stripPdfUnwantedMarkers(this.pdfiumModule.pdfium.UTF16ToString(bufPtr));
          this.memoryManager.free(bufPtr);
        }
        pageCtx.release();
      }
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetTextSlices", "End", doc.id);
      return PdfTaskHelper.resolve(out);
    } catch (e) {
      this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, "getTextSlices error", e);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetTextSlices", "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: String(e)
      });
    }
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.merge}
   *
   * @public
   */
  merge(files) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "merge", files);
    const fileIds = files.map((file2) => file2.id).join(".");
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Merge\`, "Begin", fileIds);
    const newDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!newDocPtr) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Merge\`, "End", fileIds);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantCreateNewDoc,
        message: "can not create new document"
      });
    }
    const ptrs = [];
    for (const file2 of files.reverse()) {
      const array = new Uint8Array(file2.content);
      const length = array.length;
      const filePtr = this.memoryManager.malloc(length);
      this.pdfiumModule.pdfium.HEAPU8.set(array, filePtr);
      const docPtr = this.pdfiumModule.FPDF_LoadMemDocument(filePtr, length, "");
      if (!docPtr) {
        const lastError = this.pdfiumModule.FPDF_GetLastError();
        this.logger.error(
          LOG_SOURCE$1,
          LOG_CATEGORY$1,
          \`FPDF_LoadMemDocument failed with \${lastError}\`
        );
        this.memoryManager.free(filePtr);
        for (const ptr of ptrs) {
          this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
          this.memoryManager.free(ptr.filePtr);
        }
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Merge\`, "End", fileIds);
        return PdfTaskHelper.reject({
          code: lastError,
          message: \`FPDF_LoadMemDocument failed\`
        });
      }
      ptrs.push({ filePtr, docPtr });
      if (!this.pdfiumModule.FPDF_ImportPages(newDocPtr, docPtr, "", 0)) {
        this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
        for (const ptr of ptrs) {
          this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
          this.memoryManager.free(ptr.filePtr);
        }
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Merge\`, "End", fileIds);
        return PdfTaskHelper.reject({
          code: PdfErrorCode.CantImportPages,
          message: "can not import pages to new document"
        });
      }
    }
    const buffer = this.saveDocument(newDocPtr);
    this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
    for (const ptr of ptrs) {
      this.pdfiumModule.FPDF_CloseDocument(ptr.docPtr);
      this.memoryManager.free(ptr.filePtr);
    }
    const file = {
      id: \`\${Math.random()}\`,
      content: buffer
    };
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`Merge\`, "End", fileIds);
    return PdfTaskHelper.resolve(file);
  }
  /**
   * Merges specific pages from multiple PDF documents in a custom order
   *
   * @param mergeConfigs Array of configurations specifying which pages to merge from which documents
   * @returns A PdfTask that resolves with the merged PDF file
   * @public
   */
  mergePages(mergeConfigs) {
    const configIds = mergeConfigs.map((config) => \`\${config.docId}:\${config.pageIndices.join(",")}\`).join("|");
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "mergePages", mergeConfigs);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`MergePages\`, "Begin", configIds);
    const newDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!newDocPtr) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`MergePages\`, "End", configIds);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantCreateNewDoc,
        message: "Cannot create new document"
      });
    }
    try {
      for (const config of [...mergeConfigs].reverse()) {
        const ctx = this.cache.getContext(config.docId);
        if (!ctx) {
          this.logger.warn(
            LOG_SOURCE$1,
            LOG_CATEGORY$1,
            \`Document \${config.docId} is not open, skipping\`
          );
          continue;
        }
        const pageCount = this.pdfiumModule.FPDF_GetPageCount(ctx.docPtr);
        const validPageIndices = config.pageIndices.filter(
          (index) => index >= 0 && index < pageCount
        );
        if (validPageIndices.length === 0) {
          continue;
        }
        const pageString = validPageIndices.map((index) => index + 1).join(",");
        try {
          if (!this.pdfiumModule.FPDF_ImportPages(
            newDocPtr,
            ctx.docPtr,
            pageString,
            0
            // Insert at the beginning
          )) {
            throw new Error(\`Failed to import pages \${pageString} from document \${config.docId}\`);
          }
        } finally {
        }
      }
      const buffer = this.saveDocument(newDocPtr);
      const file = {
        id: \`\${Math.random()}\`,
        content: buffer
      };
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`MergePages\`, "End", configIds);
      return PdfTaskHelper.resolve(file);
    } catch (error) {
      this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, "mergePages failed", error);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`MergePages\`, "End", configIds);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantImportPages,
        message: error instanceof Error ? error.message : "Failed to merge pages"
      });
    } finally {
      if (newDocPtr) {
        this.pdfiumModule.FPDF_CloseDocument(newDocPtr);
      }
    }
  }
  /**
   * Sets AES-256 encryption on a document.
   * Must be called before saveAsCopy() for encryption to take effect.
   *
   * @param doc - Document to encrypt
   * @param userPassword - Password to open document (empty = no open password)
   * @param ownerPassword - Password to change permissions (required)
   * @param allowedFlags - OR'd PdfPermissionFlag values indicating allowed actions
   * @returns true on success, false if already encrypted or invalid params
   *
   * @public
   */
  setDocumentEncryption(doc, userPassword, ownerPassword, allowedFlags) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "setDocumentEncryption", doc, allowedFlags);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const result = this.pdfiumModule.EPDF_SetEncryption(
      ctx.docPtr,
      userPassword,
      ownerPassword,
      allowedFlags
    );
    return PdfTaskHelper.resolve(result);
  }
  /**
   * Marks document for encryption removal on save.
   * When saveAsCopy is called, the document will be saved without encryption.
   *
   * @param doc - Document to remove encryption from
   * @returns true on success
   *
   * @public
   */
  removeEncryption(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "removeEncryption", doc);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const result = this.pdfiumModule.EPDF_RemoveEncryption(ctx.docPtr);
    return PdfTaskHelper.resolve(result);
  }
  /**
   * Attempts to unlock owner permissions for an already-opened encrypted document.
   *
   * @param doc - Document to unlock
   * @param ownerPassword - The owner password
   * @returns true on success, false on failure
   *
   * @public
   */
  unlockOwnerPermissions(doc, ownerPassword) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "unlockOwnerPermissions", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const success = this.pdfiumModule.EPDF_UnlockOwnerPermissions(ctx.docPtr, ownerPassword);
    return PdfTaskHelper.resolve(success);
  }
  /**
   * Check if a document is encrypted.
   *
   * @param doc - Document to check
   * @returns true if the document is encrypted
   *
   * @public
   */
  isEncrypted(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "isEncrypted", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const result = this.pdfiumModule.EPDF_IsEncrypted(ctx.docPtr);
    return PdfTaskHelper.resolve(result);
  }
  /**
   * Check if owner permissions are currently unlocked.
   *
   * @param doc - Document to check
   * @returns true if owner permissions are unlocked
   *
   * @public
   */
  isOwnerUnlocked(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "isOwnerUnlocked", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const result = this.pdfiumModule.EPDF_IsOwnerUnlocked(ctx.docPtr);
    return PdfTaskHelper.resolve(result);
  }
  getPathSegments(doc, page, query, maxCount) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const max = Math.max(0, Math.floor(maxCount));
    const bufPtr = max > 0 ? this.memoryManager.malloc(max * PATH_SEGMENT_SIZE) : 0;
    try {
      const total = this.pdfiumModule.EPDFPage_GetPathSegments(
        pageCtx.pagePtr,
        query.minX,
        query.minY,
        query.maxX,
        query.maxY,
        bufPtr,
        max
      );
      if (total < 0) {
        return PdfTaskHelper.resolve({
          count: -1,
          total: -1,
          coords: new Float32Array(0),
          meta: new Int32Array(0)
        });
      }
      const count = Math.min(total, max);
      const coords = new Float32Array(count * 4);
      const meta = new Int32Array(count * 3);
      const view = new DataView(this.pdfiumModule.pdfium.HEAPU8.buffer);
      for (let i = 0; i < count; i++) {
        const base = bufPtr + i * PATH_SEGMENT_SIZE;
        coords[i * 4] = view.getFloat32(base, true);
        coords[i * 4 + 1] = view.getFloat32(base + 4, true);
        coords[i * 4 + 2] = view.getFloat32(base + 8, true);
        coords[i * 4 + 3] = view.getFloat32(base + 12, true);
        meta[i * 3] = view.getInt32(base + 16, true);
        meta[i * 3 + 1] = view.getInt32(base + 20, true);
        meta[i * 3 + 2] = view.getInt32(base + 24, true);
      }
      return PdfTaskHelper.resolve({ count, total, coords, meta });
    } finally {
      if (bufPtr) this.memoryManager.free(bufPtr);
      pageCtx.release();
    }
  }
  getScaleAreas(doc) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      this.readUtf8Out(
        (buf, len) => this.pdfiumModule.EPDFDoc_GetViewportsJson(ctx.docPtr, buf, len)
      )
    );
  }
  setScaleArea(doc, pageIndex, index, box, name, measure) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const write = (namePtr) => this.withMeasureArgs(
      measure === "keep" ? null : measure,
      (m) => this.pdfiumModule.EPDFDoc_SetPageViewport(
        ctx.docPtr,
        pageIndex,
        index,
        box.left,
        box.bottom,
        box.right,
        box.top,
        namePtr,
        m.ratio,
        m.x,
        measure === "keep" ? -1 : m.xCount,
        m.y,
        m.yCount,
        m.d,
        m.dCount,
        m.a,
        m.aCount,
        m.cyx
      )
    );
    const written = name ? this.withWString(name, write) : write(0);
    return PdfTaskHelper.resolve(written < 0 ? null : written);
  }
  removeScaleArea(doc, pageIndex, index) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      !!this.pdfiumModule.EPDFDoc_RemovePageViewport(ctx.docPtr, pageIndex, index)
    );
  }
  moveScaleArea(doc, pageIndex, from, to) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      !!this.pdfiumModule.EPDFDoc_MovePageViewport(ctx.docPtr, pageIndex, from, to)
    );
  }
  copyScaleArea(doc, fromPage, index, toPage) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const written = this.pdfiumModule.EPDFDoc_CopyPageViewport(ctx.docPtr, fromPage, index, toPage);
    return PdfTaskHelper.resolve(written < 0 ? null : written);
  }
  getScaleAreasSyntax(doc, pageIndex) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      this.readUtf8Out(
        (buf, len) => this.pdfiumModule.EPDFDoc_GetPageViewportsSyntax(ctx.docPtr, pageIndex, buf, len)
      )
    );
  }
  setScaleAreasSyntax(doc, pageIndex, syntax) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      this.withUtf8(
        syntax,
        (ptr) => !!this.pdfiumModule.EPDFDoc_SetPageViewportsSyntax(ctx.docPtr, pageIndex, ptr)
      )
    );
  }
  mutatePages(doc, mutation) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    ctx.clearPages();
    const pdf = this.pdfiumModule;
    const docPtr = ctx.docPtr;
    const count = pdf.FPDF_GetPageCount(docPtr);
    const valid = (indices) => [...new Set(indices)].filter((i) => Number.isInteger(i) && i >= 0 && i < count);
    const withInts = (values, fn) => {
      const ptr = this.memoryManager.malloc(Math.max(1, values.length) * 4);
      try {
        values.forEach((v, i) => pdf.pdfium.setValue(ptr + i * 4, v, "i32"));
        return fn(ptr);
      } finally {
        this.memoryManager.free(ptr);
      }
    };
    let inserted = 0;
    let ok = true;
    switch (mutation.kind) {
      case "rotate": {
        mutation.indices.forEach((index, k) => {
          if (index < 0 || index >= count) return;
          const pagePtr = pdf.FPDF_LoadPage(docPtr, index);
          if (!pagePtr) return;
          pdf.FPDFPage_SetRotation(pagePtr, (mutation.rotations[k] ?? 0) & 3);
          pdf.FPDF_ClosePage(pagePtr);
        });
        break;
      }
      case "delete": {
        for (const index of valid(mutation.indices).sort((a, b) => b - a)) {
          pdf.FPDFPage_Delete(docPtr, index);
        }
        break;
      }
      case "reorder": {
        const order = mutation.order;
        const isPermutation = order.length === count && new Set(order).size === count && valid(order).length === count;
        if (isPermutation) {
          withInts(order, (ptr) => pdf.EPDFDoc_PushDownInheritedAttrs(docPtr, ptr, count));
        }
        ok = isPermutation && withInts(order, (ptr) => pdf.FPDF_MovePages(docPtr, ptr, count, 0));
        break;
      }
      case "insertBlank": {
        const n = Math.max(1, Math.floor(mutation.count ?? 1));
        const at = Math.max(0, Math.min(mutation.at, count));
        for (let i = 0; i < n; i++) {
          const pagePtr = pdf.FPDFPage_New(docPtr, at + i, mutation.width, mutation.height);
          if (!pagePtr) {
            ok = false;
            break;
          }
          pdf.FPDF_ClosePage(pagePtr);
          inserted++;
        }
        break;
      }
      case "import": {
        const bytes = new Uint8Array(mutation.source);
        const filePtr = this.memoryManager.malloc(Math.max(1, bytes.length));
        pdf.pdfium.HEAPU8.set(bytes, filePtr);
        const srcPtr = pdf.FPDF_LoadMemDocument(filePtr, bytes.length, mutation.password ?? "");
        if (!srcPtr) {
          const code = pdf.FPDF_GetLastError();
          this.memoryManager.free(filePtr);
          return PdfTaskHelper.reject({ code, message: "FPDF_LoadMemDocument failed" });
        }
        const srcCount = pdf.FPDF_GetPageCount(srcPtr);
        const indices = (mutation.pageIndices ?? Array.from({ length: srcCount }, (_, i) => i)).filter(
          (i) => Number.isInteger(i) && i >= 0 && i < srcCount
        );
        const at = Math.max(0, Math.min(mutation.at, count));
        ok = indices.length > 0 && withInts(
          indices,
          (ptr) => pdf.FPDF_ImportPagesByIndex(docPtr, srcPtr, ptr, indices.length, at)
        );
        if (ok) inserted = indices.length;
        pdf.FPDF_CloseDocument(srcPtr);
        this.memoryManager.free(filePtr);
        break;
      }
      case "duplicate": {
        const indices = mutation.indices.filter((i) => Number.isInteger(i) && i >= 0 && i < count);
        if (indices.length === 0) break;
        const scratch = pdf.FPDF_CreateNewDocument();
        if (!scratch) {
          ok = false;
          break;
        }
        const at = Math.max(0, Math.min(mutation.at, count));
        ok = withInts(
          indices,
          (ptr) => pdf.FPDF_ImportPagesByIndex(scratch, docPtr, ptr, indices.length, 0)
        ) && withInts(
          indices.map((_, i) => i),
          (ptr) => pdf.FPDF_ImportPagesByIndex(docPtr, scratch, ptr, indices.length, at)
        );
        if (ok) inserted = indices.length;
        pdf.FPDF_CloseDocument(scratch);
        break;
      }
      case "split": {
        ok = this.splitPagesInPlace(docPtr, count, valid(mutation.indices), mutation);
        if (ok) inserted = valid(mutation.indices).length;
        break;
      }
      case "resize": {
        for (const index of valid(mutation.indices)) {
          this.resizePageInPlace(docPtr, index, mutation.width, mutation.height);
        }
        break;
      }
    }
    if (!ok) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: \`page mutation \${mutation.kind} failed\`
      });
    }
    const pages = this.readDocumentPages(docPtr, ctx.normalizeRotation);
    const remapped = this.remapPageUids(ctx, mutation, count, inserted);
    ctx.pageUids = remapped.length === pages.length ? remapped : ctx.newPageUids(pages.length);
    pages.forEach((page, i) => page.uid = ctx.pageUids[i]);
    return PdfTaskHelper.resolve({
      document: { ...doc, pageCount: pages.length, pages },
      inserted
    });
  }
  remapPageUids(ctx, mutation, count, inserted) {
    const uids = ctx.pageUids.length === count ? ctx.pageUids : ctx.newPageUids(count);
    const valid = (indices) => new Set(indices.filter((i) => Number.isInteger(i) && i >= 0 && i < count));
    switch (mutation.kind) {
      case "delete": {
        const gone = valid(mutation.indices);
        return uids.filter((_, i) => !gone.has(i));
      }
      case "reorder":
        return mutation.order.map((i) => uids[i] ?? "");
      case "insertBlank":
      case "import":
      case "duplicate": {
        const at = Math.max(0, Math.min(mutation.at, count));
        return [...uids.slice(0, at), ...ctx.newPageUids(inserted), ...uids.slice(at)];
      }
      case "split": {
        const split = valid(mutation.indices);
        return uids.flatMap((uid, i) => split.has(i) ? ctx.newPageUids(2) : [uid]);
      }
      default:
        return uids;
    }
  }
  getPageLabelRules(doc) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const ptr = this.pdfiumModule.EPDFPageLabel_GetRulesJSON(ctx.docPtr);
    return PdfTaskHelper.resolve(ptr ? this.pdfiumModule.pdfium.UTF8ToString(ptr) : "[]");
  }
  setPageLabelRules(doc, json) {
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    return PdfTaskHelper.resolve(
      this.withUtf8(json, (ptr) => !!this.pdfiumModule.EPDFPageLabel_SetRulesJSON(ctx.docPtr, ptr))
    );
  }
  readDocumentPages(docPtr, normalizeRotation) {
    const pdf = this.pdfiumModule;
    const pageCount = pdf.FPDF_GetPageCount(docPtr);
    const pages = [];
    const sizePtr = this.memoryManager.malloc(8);
    try {
      for (let index = 0; index < pageCount; index++) {
        const ok = normalizeRotation ? pdf.EPDF_GetPageSizeByIndexNormalized(docPtr, index, sizePtr) : pdf.FPDF_GetPageSizeByIndexF(docPtr, index, sizePtr);
        pages.push({
          index,
          size: {
            width: ok ? pdf.pdfium.getValue(sizePtr, "float") : 0,
            height: ok ? pdf.pdfium.getValue(sizePtr + 4, "float") : 0
          },
          rotation: pdf.EPDF_GetPageRotationByIndex(docPtr, index)
        });
      }
    } finally {
      this.memoryManager.free(sizePtr);
    }
    return pages;
  }
  readPageBox(pagePtr, read2) {
    const pdf = this.pdfiumModule.pdfium;
    const ptr = this.memoryManager.malloc(16);
    try {
      if (!read2(pagePtr, ptr, ptr + 4, ptr + 8, ptr + 12)) return null;
      return {
        l: pdf.getValue(ptr, "float"),
        b: pdf.getValue(ptr + 4, "float"),
        r: pdf.getValue(ptr + 8, "float"),
        t: pdf.getValue(ptr + 12, "float")
      };
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  splitPagesInPlace(docPtr, count, indices, opts) {
    const pdf = this.pdfiumModule;
    if (indices.length === 0) return true;
    const fraction = opts.fraction > 0 && opts.fraction < 1 ? opts.fraction : 0.5;
    const isSplit = new Set(indices);
    const boxes = /* @__PURE__ */ new Map();
    for (const p of indices) {
      const pagePtr = pdf.FPDF_LoadPage(docPtr, p);
      if (!pagePtr) {
        isSplit.delete(p);
        continue;
      }
      const box = this.readPageBox(
        pagePtr,
        (pg, l, b, r, t) => pdf.FPDFPage_GetMediaBox(pg, l, b, r, t)
      ) ?? { l: 0, b: 0, r: 612, t: 792 };
      boxes.set(p, { ...box, rot: pdf.FPDFPage_GetRotation(pagePtr) });
      pdf.FPDF_ClosePage(pagePtr);
    }
    if (isSplit.size === 0) return true;
    const scratch = pdf.FPDF_CreateNewDocument();
    if (!scratch) return false;
    const all = Array.from({ length: count }, (_, i) => i);
    const allPtr = this.memoryManager.malloc(count * 4);
    all.forEach((v, i) => pdf.pdfium.setValue(allPtr + i * 4, v, "i32"));
    const cloned = pdf.FPDF_ImportPagesByIndex(scratch, docPtr, allPtr, count, 0);
    this.memoryManager.free(allPtr);
    if (!cloned) {
      pdf.FPDF_CloseDocument(scratch);
      return false;
    }
    const onePtr = this.memoryManager.malloc(4);
    for (let p = count - 1; p >= 0; p--) {
      if (!isSplit.has(p)) continue;
      pdf.pdfium.setValue(onePtr, p, "i32");
      pdf.FPDF_ImportPagesByIndex(docPtr, scratch, onePtr, 1, p + 1);
    }
    this.memoryManager.free(onePtr);
    pdf.FPDF_CloseDocument(scratch);
    const setBox = (index, l, b, r, t) => {
      const pagePtr = pdf.FPDF_LoadPage(docPtr, index);
      if (!pagePtr) return;
      pdf.FPDFPage_SetMediaBox(pagePtr, l, b, r, t);
      pdf.FPDFPage_SetCropBox(pagePtr, l, b, r, t);
      pdf.FPDF_ClosePage(pagePtr);
    };
    let j = 0;
    for (let p = 0; p < count; p++) {
      const box = boxes.get(p);
      if (!isSplit.has(p) || !box) {
        j += 1;
        continue;
      }
      const { l, b, r, t } = box;
      const w = r - l;
      const h = t - b;
      const quarter = (box.rot % 4 + 4) % 4;
      const splitX = opts.axis === 0 ? quarter === 0 || quarter === 2 : quarter === 1 || quarter === 3;
      let first = { l, b, r, t };
      let second = { l, b, r, t };
      if (splitX) {
        const cut = l + fraction * w;
        first = { l, b, r: cut, t };
        second = { l: cut, b, r, t };
      } else {
        const cut = t - fraction * h;
        first = { l, b: cut, r, t };
        second = { l, b, r, t: cut };
      }
      const [a, c] = opts.rightFirst ? [second, first] : [first, second];
      setBox(j, a.l, a.b, a.r, a.t);
      setBox(j + 1, c.l, c.b, c.r, c.t);
      j += 2;
    }
    return true;
  }
  resizePageInPlace(docPtr, index, newW, newH) {
    const pdf = this.pdfiumModule;
    if (!(newW > 0) || !(newH > 0)) return;
    const pagePtr = pdf.FPDF_LoadPage(docPtr, index);
    if (!pagePtr) return;
    try {
      const box = this.readPageBox(
        pagePtr,
        (pg, l, b, r, t) => pdf.FPDFPage_GetMediaBox(pg, l, b, r, t)
      );
      if (!box) return;
      const oldW = box.r - box.l;
      const oldH = box.t - box.b;
      if (!(oldW > 0) || !(oldH > 0)) return;
      const rot = (pdf.FPDFPage_GetRotation(pagePtr) % 4 + 4) % 4;
      const rotated = rot === 1 || rot === 3;
      const targetW = rotated ? newH : newW;
      const targetH = rotated ? newW : newH;
      const s = Math.min(targetW / oldW, targetH / oldH);
      const tx = (targetW - oldW * s) * 0.5 - box.l * s;
      const ty = (targetH - oldH * s) * 0.5 - box.b * s;
      const mPtr = this.memoryManager.malloc(24);
      const cPtr = this.memoryManager.malloc(16);
      try {
        [s, 0, 0, s, tx, ty].forEach((v, i) => pdf.pdfium.setValue(mPtr + i * 4, v, "float"));
        [0, targetH, targetW, 0].forEach((v, i) => pdf.pdfium.setValue(cPtr + i * 4, v, "float"));
        pdf.FPDFPage_TransFormWithClip(pagePtr, mPtr, cPtr);
      } finally {
        this.memoryManager.free(mPtr);
        this.memoryManager.free(cPtr);
      }
      pdf.FPDFPage_TransformAnnots(pagePtr, s, 0, 0, s, tx, ty);
      pdf.FPDFPage_SetMediaBox(pagePtr, 0, 0, targetW, targetH);
      pdf.FPDFPage_SetCropBox(pagePtr, 0, 0, targetW, targetH);
    } finally {
      pdf.FPDF_ClosePage(pagePtr);
    }
  }
  readUtf8Out(read2) {
    const need = read2(0, 0);
    if (need <= 0) return null;
    const ptr = this.memoryManager.malloc(need);
    try {
      if (read2(ptr, need) !== need) return null;
      return this.pdfiumModule.pdfium.UTF8ToString(ptr, need - 1);
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  withUtf8(value, fn) {
    const size = this.pdfiumModule.pdfium.lengthBytesUTF8(value) + 1;
    const ptr = this.memoryManager.malloc(size);
    try {
      this.pdfiumModule.pdfium.stringToUTF8(value, ptr, size);
      return fn(ptr);
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  withMeasureArgs(measure, fn) {
    const pdf = this.pdfiumModule.pdfium;
    const owned = [];
    const own = (value) => {
      const size = pdf.lengthBytesUTF8(value) + 1;
      const ptr = this.memoryManager.malloc(size);
      owned.push(ptr);
      pdf.stringToUTF8(value, ptr, size);
      return ptr;
    };
    const str = (value) => typeof value === "string" ? own(value) : 0;
    const chain = (formats) => {
      const list = Array.isArray(formats) ? formats.filter((f) => !!f && typeof f === "object") : [];
      if (list.length === 0) return { ptr: 0, count: 0 };
      const ptr = this.memoryManager.malloc(list.length * NUMBER_FORMAT_SIZE);
      owned.push(ptr);
      pdf.HEAPU8.fill(0, ptr, ptr + list.length * NUMBER_FORMAT_SIZE);
      list.forEach((f, i) => {
        const base = ptr + i * NUMBER_FORMAT_SIZE;
        pdf.setValue(base, str(f.U), "i32");
        pdf.setValue(base + 8, typeof f.C === "number" ? f.C : 0, "double");
        pdf.setValue(base + 16, (typeof f.F === "string" && f.F ? f.F : "D").charCodeAt(0), "i8");
        pdf.setValue(base + 20, typeof f.D === "number" ? f.D | 0 : 0, "i32");
        pdf.setValue(base + 24, f.FD ? 1 : 0, "i32");
        pdf.setValue(base + 28, str(f.RT), "i32");
        pdf.setValue(base + 32, str(f.RD), "i32");
        pdf.setValue(base + 36, str(f.PS), "i32");
        pdf.setValue(base + 40, str(f.SS), "i32");
        pdf.setValue(base + 44, (typeof f.O === "string" && f.O ? f.O : "S").charCodeAt(0), "i8");
      });
      return { ptr, count: list.length };
    };
    try {
      const x = chain(measure == null ? void 0 : measure.X);
      const y = chain(measure == null ? void 0 : measure.Y);
      const d = chain(measure == null ? void 0 : measure.D);
      const a = chain(measure == null ? void 0 : measure.A);
      return fn({
        ratio: measure && typeof measure.R === "string" && measure.R ? own(measure.R) : 0,
        x: x.ptr,
        xCount: x.count,
        y: y.ptr,
        yCount: y.count,
        d: d.ptr,
        dCount: d.count,
        a: a.ptr,
        aCount: a.count,
        cyx: measure && typeof measure.CYX === "number" ? measure.CYX : 1
      });
    } finally {
      for (const ptr of owned) this.memoryManager.free(ptr);
    }
  }
  writeMeasurementProperties(annotationPtr, annotation) {
    if (annotation.measure && typeof annotation.measure === "object") {
      const measure = annotation.measure;
      const ok = this.withMeasureArgs(
        measure,
        (m) => this.pdfiumModule.EPDFAnnot_SetMeasureRectilinear(
          annotationPtr,
          m.ratio,
          m.x,
          m.xCount,
          m.y,
          m.yCount,
          m.d,
          m.dCount,
          m.a,
          m.aCount,
          m.cyx
        )
      );
      if (!ok) return false;
    }
    if (typeof annotation.leaderLength === "number" && Number.isFinite(annotation.leaderLength)) {
      if (!this.pdfiumModule.EPDFAnnot_SetNumberValue(annotationPtr, "LL", annotation.leaderLength)) {
        return false;
      }
    }
    const co = annotation.captionOffset;
    if (co && Number.isFinite(co.dx) && Number.isFinite(co.dy)) {
      if (!this.pdfiumModule.EPDFAnnot_SetCaptionOffset(annotationPtr, co.dx, co.dy)) {
        return false;
      }
    }
    return true;
  }
  readMeasurementProperties(annotationPtr) {
    const intent = this.getAnnotIntent(annotationPtr);
    const measureJson = this.pdfiumModule.EPDFAnnot_HasMeasure(annotationPtr) ? this.readUtf8Out(
      (buf, len) => this.pdfiumModule.EPDFAnnot_GetMeasureJson(annotationPtr, buf, len)
    ) : null;
    const coPtr = this.memoryManager.malloc(8);
    let captionOffset;
    try {
      if (this.pdfiumModule.EPDFAnnot_GetCaptionOffset(annotationPtr, coPtr, coPtr + 4)) {
        const pdf = this.pdfiumModule.pdfium;
        captionOffset = {
          dx: pdf.getValue(coPtr, "float"),
          dy: pdf.getValue(coPtr + 4, "float")
        };
      }
    } finally {
      this.memoryManager.free(coPtr);
    }
    return {
      ...intent && { intent },
      ...measureJson && { measureJson },
      ...captionOffset && { captionOffset }
    };
  }
  readLeaderLength(annotationPtr) {
    const ptr = this.memoryManager.malloc(4);
    try {
      if (!this.pdfiumModule.FPDFAnnot_GetNumberValue(annotationPtr, "LL", ptr)) return void 0;
      const value = this.pdfiumModule.pdfium.getValue(ptr, "float");
      return Number.isFinite(value) ? value : void 0;
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.saveAsCopy}
   *
   * @public
   */
  saveAsCopy(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "saveAsCopy", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SaveAsCopy\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SaveAsCopy\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const buffer = this.saveDocument(ctx.docPtr);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SaveAsCopy\`, "End", doc.id);
    return PdfTaskHelper.resolve(buffer);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.closeDocument}
   *
   * @public
   */
  closeDocument(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "closeDocument", doc);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`CloseDocument\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) return PdfTaskHelper.resolve(true);
    ctx.dispose();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`CloseDocument\`, "End", doc.id);
    return PdfTaskHelper.resolve(true);
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.closeAllDocuments}
   *
   * @public
   */
  closeAllDocuments() {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "closeAllDocuments");
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`CloseAllDocuments\`, "Begin");
    this.cache.closeAllDocuments();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`CloseAllDocuments\`, "End");
    return PdfTaskHelper.resolve(true);
  }
  /**
   * Add text content to annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to text annotation
   * @param annotation - text annotation
   * @returns whether text content is added to annotation
   *
   * @private
   */
  addTextContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.setAnnotationIcon(annotationPtr, annotation.icon || PdfAnnotationIcon.Comment)) {
      return false;
    }
    if (annotation.state && !this.setAnnotString(annotationPtr, "State", annotation.state)) {
      return false;
    }
    if (annotation.stateModel && !this.setAnnotString(annotationPtr, "StateModel", annotation.stateModel)) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    const strokeColor = annotation.strokeColor ?? annotation.color ?? "#FFFF00";
    if (!this.setAnnotationColor(annotationPtr, strokeColor, PdfAnnotationColorType.Color)) {
      return false;
    }
    if (!annotation.flags) {
      if (!this.setAnnotationFlags(annotationPtr, ["print", "noZoom", "noRotate"])) {
        return false;
      }
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add caret content to annotation
   * @param doc - document object
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to caret annotation
   * @param annotation - caret annotation
   * @returns whether caret content is added to annotation
   *
   * @private
   */
  addCaretContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (annotation.strokeColor) {
      this.setAnnotationColor(annotationPtr, annotation.strokeColor, PdfAnnotationColorType.Color);
    }
    if (annotation.opacity !== void 0) {
      this.setAnnotationOpacity(annotationPtr, annotation.opacity);
    }
    if (annotation.intent) {
      this.setAnnotIntent(annotationPtr, annotation.intent);
    }
    this.setRectangleDifferences(annotationPtr, annotation.rectangleDifferences);
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add free text content to annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to free text annotation
   * @param annotation - free text annotation
   * @returns whether free text content is added to annotation
   *
   * @private
   */
  addFreeTextContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.setBorderStyle(
      annotationPtr,
      PdfAnnotationBorderStyle.SOLID,
      annotation.strokeWidth ?? 0
    )) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    if (!this.setAnnotationTextAlignment(annotationPtr, annotation.textAlign)) {
      return false;
    }
    if (!this.setAnnotationVerticalAlignment(annotationPtr, annotation.verticalAlign)) {
      return false;
    }
    const daColor = annotation.strokeColor ?? annotation.fontColor;
    if (!this.setAnnotationDefaultAppearance(
      annotationPtr,
      annotation.fontFamily === PdfStandardFont.Unknown ? PdfStandardFont.Helvetica : annotation.fontFamily,
      annotation.fontSize,
      daColor
    )) {
      return false;
    }
    if (annotation.strokeColor && annotation.strokeColor !== annotation.fontColor) {
      this.setAnnotationColor(
        annotationPtr,
        annotation.fontColor,
        PdfAnnotationColorType.TextColor
      );
    }
    if (annotation.intent && !this.setAnnotIntent(annotationPtr, annotation.intent)) {
      return false;
    }
    if (annotation.calloutLine && annotation.calloutLine.length >= 2 && !this.setCalloutLine(doc, page, annotationPtr, annotation.calloutLine)) {
      return false;
    }
    if (annotation.lineEnding !== void 0 && !this.setLineEndings(annotationPtr, PdfAnnotationLineEnding.None, annotation.lineEnding)) {
      return false;
    }
    const bgColor = annotation.color ?? annotation.backgroundColor;
    if (!bgColor || bgColor === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.Color)) {
        return false;
      }
    } else if (!this.setAnnotationColor(annotationPtr, bgColor ?? "#FFFFFF", PdfAnnotationColorType.Color)) {
      return false;
    }
    this.setRectangleDifferences(annotationPtr, annotation.rectangleDifferences);
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Set the rect of specified annotation
   * @param page - page info that the annotation is belonged to
   * @param pagePtr - pointer of page object
   * @param annotationPtr - pointer to annotation object
   * @param inkList - ink lists that added to the annotation
   * @returns whether the ink lists is setted
   *
   * @private
   */
  addInkStroke(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.setBorderStyle(annotationPtr, PdfAnnotationBorderStyle.SOLID, annotation.strokeWidth)) {
      return false;
    }
    if (!this.setInkList(doc, page, annotationPtr, annotation.inkList)) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    const strokeColor = annotation.strokeColor ?? annotation.color ?? "#FFFF00";
    if (!this.setAnnotationColor(annotationPtr, strokeColor, PdfAnnotationColorType.Color)) {
      return false;
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add line content to annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to line annotation
   * @param annotation - line annotation
   * @returns whether line content is added to annotation
   *
   * @private
   */
  addLineContent(doc, page, pagePtr, annotationPtr, annotation) {
    var _a, _b;
    if (!this.setLinePoints(
      doc,
      page,
      annotationPtr,
      annotation.linePoints.start,
      annotation.linePoints.end
    )) {
      return false;
    }
    if (!this.setLineEndings(
      annotationPtr,
      ((_a = annotation.lineEndings) == null ? void 0 : _a.start) ?? PdfAnnotationLineEnding.None,
      ((_b = annotation.lineEndings) == null ? void 0 : _b.end) ?? PdfAnnotationLineEnding.None
    )) {
      return false;
    }
    if (!this.setBorderStyle(annotationPtr, annotation.strokeStyle, annotation.strokeWidth)) {
      return false;
    }
    if (!this.setBorderDashPattern(annotationPtr, annotation.strokeDashArray ?? [])) {
      return false;
    }
    if (annotation.intent && !this.setAnnotIntent(annotationPtr, annotation.intent)) {
      return false;
    }
    if (!this.writeMeasurementProperties(annotationPtr, annotation)) {
      return false;
    }
    if (!annotation.color || annotation.color === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.InteriorColor)) {
        return false;
      }
    } else if (!this.setAnnotationColor(
      annotationPtr,
      annotation.color ?? "#FFFF00",
      PdfAnnotationColorType.InteriorColor
    )) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    if (!this.setAnnotationColor(
      annotationPtr,
      annotation.strokeColor ?? "#FFFF00",
      PdfAnnotationColorType.Color
    )) {
      return false;
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add polygon or polyline content to annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to polygon or polyline annotation
   * @param annotation - polygon or polyline annotation
   * @returns whether polygon or polyline content is added to annotation
   *
   * @private
   */
  addPolyContent(doc, page, pagePtr, annotationPtr, annotation) {
    var _a, _b;
    if (annotation.type === PdfAnnotationSubtype.POLYLINE && !this.setLineEndings(
      annotationPtr,
      ((_a = annotation.lineEndings) == null ? void 0 : _a.start) ?? PdfAnnotationLineEnding.None,
      ((_b = annotation.lineEndings) == null ? void 0 : _b.end) ?? PdfAnnotationLineEnding.None
    )) {
      return false;
    }
    if (!this.setPdfAnnoVertices(doc, page, annotationPtr, annotation.vertices)) {
      return false;
    }
    if (!this.setBorderStyle(annotationPtr, annotation.strokeStyle, annotation.strokeWidth)) {
      return false;
    }
    if (!this.setBorderDashPattern(annotationPtr, annotation.strokeDashArray ?? [])) {
      return false;
    }
    if (annotation.intent && !this.setAnnotIntent(annotationPtr, annotation.intent)) {
      return false;
    }
    if (!this.writeMeasurementProperties(annotationPtr, annotation)) {
      return false;
    }
    if (!annotation.color || annotation.color === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.InteriorColor)) {
        return false;
      }
    } else if (!this.setAnnotationColor(
      annotationPtr,
      annotation.color ?? "#FFFF00",
      PdfAnnotationColorType.InteriorColor
    )) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    if (!this.setAnnotationColor(
      annotationPtr,
      annotation.strokeColor ?? "#FFFF00",
      PdfAnnotationColorType.Color
    )) {
      return false;
    }
    if (annotation.type === PdfAnnotationSubtype.POLYGON) {
      const poly = annotation;
      this.setRectangleDifferences(annotationPtr, poly.rectangleDifferences);
      this.setBorderEffect(annotationPtr, poly.cloudyBorderIntensity);
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add link content (action or destination) to a link annotation
   * @param docPtr - pointer to pdf document
   * @param pagePtr - pointer to the page
   * @param annotationPtr - pointer to pdf annotation
   * @param annotation - the link annotation object
   * @returns true if successful
   *
   * @private
   */
  addLinkContent(doc, page, docPtr, pagePtr, annotationPtr, annotation) {
    const style = annotation.strokeStyle ?? PdfAnnotationBorderStyle.UNDERLINE;
    const width = annotation.strokeWidth ?? 2;
    if (!this.setBorderStyle(annotationPtr, style, width)) {
      return false;
    }
    if (annotation.strokeDashArray && !this.setBorderDashPattern(annotationPtr, annotation.strokeDashArray)) {
      return false;
    }
    if (annotation.strokeColor) {
      if (!this.setAnnotationColor(
        annotationPtr,
        annotation.strokeColor,
        PdfAnnotationColorType.Color
      )) {
        return false;
      }
    }
    if (annotation.target) {
      if (!this.applyLinkTarget(docPtr, annotationPtr, annotation.target)) {
        return false;
      }
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add shape content to annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to shape annotation
   * @param annotation - shape annotation
   * @returns whether shape content is added to annotation
   *
   * @private
   */
  addShapeContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.setBorderStyle(annotationPtr, annotation.strokeStyle, annotation.strokeWidth)) {
      return false;
    }
    if (!this.setBorderDashPattern(annotationPtr, annotation.strokeDashArray ?? [])) {
      return false;
    }
    if (!annotation.color || annotation.color === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.InteriorColor)) {
        return false;
      }
    } else if (!this.setAnnotationColor(
      annotationPtr,
      annotation.color ?? "#FFFF00",
      PdfAnnotationColorType.InteriorColor
    )) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    if (!this.setAnnotationColor(
      annotationPtr,
      annotation.strokeColor ?? "#FFFF00",
      PdfAnnotationColorType.Color
    )) {
      return false;
    }
    this.setRectangleDifferences(annotationPtr, annotation.rectangleDifferences);
    this.setBorderEffect(annotationPtr, annotation.cloudyBorderIntensity);
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add highlight content to annotation
   * @param page - page info
   * @param annotationPtr - pointer to highlight annotation
   * @param annotation - highlight annotation
   * @returns whether highlight content is added to annotation
   *
   * @private
   */
  addTextMarkupContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.syncQuadPointsAnno(doc, page, annotationPtr, annotation.segmentRects)) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    const strokeColor = annotation.strokeColor ?? annotation.color ?? "#FFFF00";
    if (!this.setAnnotationColor(annotationPtr, strokeColor, PdfAnnotationColorType.Color)) {
      return false;
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add content to redact annotation
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to redact annotation
   * @param annotation - redact annotation
   * @returns whether redact content is added to annotation
   *
   * @private
   */
  addRedactContent(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.syncQuadPointsAnno(doc, page, annotationPtr, annotation.segmentRects)) {
      return false;
    }
    if (!this.setAnnotationOpacity(annotationPtr, annotation.opacity ?? 1)) {
      return false;
    }
    if (!annotation.color || annotation.color === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.InteriorColor)) {
        return false;
      }
    } else if (!this.setAnnotationColor(
      annotationPtr,
      annotation.color,
      PdfAnnotationColorType.InteriorColor
    )) {
      return false;
    }
    if (!annotation.overlayColor || annotation.overlayColor === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.OverlayColor)) {
        return false;
      }
    } else if (!this.setAnnotationColor(
      annotationPtr,
      annotation.overlayColor,
      PdfAnnotationColorType.OverlayColor
    )) {
      return false;
    }
    if (!annotation.strokeColor || annotation.strokeColor === "transparent") {
      if (!this.pdfiumModule.EPDFAnnot_ClearColor(annotationPtr, PdfAnnotationColorType.Color)) {
        return false;
      }
    } else if (!this.setAnnotationColor(annotationPtr, annotation.strokeColor, PdfAnnotationColorType.Color)) {
      return false;
    }
    if (!this.setOverlayText(annotationPtr, annotation.overlayText)) {
      return false;
    }
    if (annotation.overlayTextRepeat !== void 0 && !this.setOverlayTextRepeat(annotationPtr, annotation.overlayTextRepeat)) {
      return false;
    }
    if (annotation.fontFamily !== void 0 || annotation.fontSize !== void 0) {
      if (!this.setAnnotationDefaultAppearance(
        annotationPtr,
        annotation.fontFamily ?? PdfStandardFont.Helvetica,
        annotation.fontSize ?? 12,
        annotation.fontColor ?? "#000000"
      )) {
        return false;
      }
    }
    if (annotation.textAlign !== void 0 && !this.setAnnotationTextAlignment(annotationPtr, annotation.textAlign)) {
      return false;
    }
    return this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation);
  }
  /**
   * Add contents to stamp annotation
   * @param doc - pdf document object
   * @param docPtr - pointer to pdf document object
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to stamp annotation
   * @param rect - rect of stamp annotation
   * @param contents - contents of stamp annotation
   * @returns whether contents is added to annotation
   *
   * @private
   */
  addStampContent(doc, docPtr, page, pagePtr, annotationPtr, annotation, imageData) {
    if (annotation.icon && !this.setAnnotationIcon(annotationPtr, annotation.icon)) {
      return false;
    }
    if (annotation.subject && !this.setAnnotString(annotationPtr, "Subj", annotation.subject)) {
      return false;
    }
    if (imageData) {
      for (let i = this.pdfiumModule.FPDFAnnot_GetObjectCount(annotationPtr) - 1; i >= 0; i--) {
        this.pdfiumModule.FPDFAnnot_RemoveObject(annotationPtr, i);
      }
      if (!this.addImageObject(doc, docPtr, page, pagePtr, annotationPtr, annotation.rect, imageData)) {
        return false;
      }
    }
    if (!this.applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation)) {
      return false;
    }
    return !!this.pdfiumModule.EPDFAnnot_UpdateAppearanceToRect(annotationPtr, PdfStampFit.Cover);
  }
  /**
   * Add image object to annotation
   * @param doc - pdf document object
   * @param docPtr - pointer to pdf document object
   * @param page - page info
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to stamp annotation
   * @param position - position of image
   * @param imageData - data of image
   * @returns whether image is added to annotation
   *
   * @private
   */
  addImageObject(doc, docPtr, page, pagePtr, annotationPtr, rect, imageData) {
    const bytesPerPixel = 4;
    const pixelCount = imageData.width * imageData.height;
    const bitmapBufferPtr = this.memoryManager.malloc(bytesPerPixel * pixelCount);
    if (!bitmapBufferPtr) {
      return false;
    }
    for (let i = 0; i < pixelCount; i++) {
      const red = imageData.data[i * bytesPerPixel];
      const green = imageData.data[i * bytesPerPixel + 1];
      const blue = imageData.data[i * bytesPerPixel + 2];
      const alpha = imageData.data[i * bytesPerPixel + 3];
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel, blue, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 1, green, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 2, red, "i8");
      this.pdfiumModule.pdfium.setValue(bitmapBufferPtr + i * bytesPerPixel + 3, alpha, "i8");
    }
    const format = 4;
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      imageData.width,
      imageData.height,
      format,
      bitmapBufferPtr,
      0
    );
    if (!bitmapPtr) {
      this.memoryManager.free(bitmapBufferPtr);
      return false;
    }
    const imageObjectPtr = this.pdfiumModule.FPDFPageObj_NewImageObj(docPtr);
    if (!imageObjectPtr) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.memoryManager.free(bitmapBufferPtr);
      return false;
    }
    if (!this.pdfiumModule.FPDFImageObj_SetBitmap(pagePtr, 0, imageObjectPtr, bitmapPtr)) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.memoryManager.free(bitmapBufferPtr);
      return false;
    }
    const matrixPtr = this.memoryManager.malloc(6 * 4);
    this.pdfiumModule.pdfium.setValue(matrixPtr, imageData.width, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 4, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 8, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 12, imageData.height, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 16, 0, "float");
    this.pdfiumModule.pdfium.setValue(matrixPtr + 20, 0, "float");
    if (!this.pdfiumModule.FPDFPageObj_SetMatrix(imageObjectPtr, matrixPtr)) {
      this.memoryManager.free(matrixPtr);
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.memoryManager.free(bitmapBufferPtr);
      return false;
    }
    this.memoryManager.free(matrixPtr);
    const pagePos = this.convertDevicePointToPagePoint(doc, page, {
      x: rect.origin.x,
      y: rect.origin.y + imageData.height
      // shift down by the image height
    });
    this.pdfiumModule.FPDFPageObj_Transform(imageObjectPtr, 1, 0, 0, 1, pagePos.x, pagePos.y);
    if (!this.pdfiumModule.FPDFAnnot_AppendObject(annotationPtr, imageObjectPtr)) {
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPageObj_Destroy(imageObjectPtr);
      this.memoryManager.free(bitmapBufferPtr);
      return false;
    }
    this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
    this.memoryManager.free(bitmapBufferPtr);
    return true;
  }
  /**
   * Save document to array buffer
   * @param docPtr - pointer to pdf document
   * @returns array buffer contains the pdf content
   *
   * @private
   */
  saveDocument(docPtr) {
    const writerPtr = this.pdfiumModule.PDFiumExt_OpenFileWriter();
    this.pdfiumModule.PDFiumExt_SaveAsCopy(docPtr, writerPtr);
    const size = this.pdfiumModule.PDFiumExt_GetFileWriterSize(writerPtr);
    const dataPtr = this.memoryManager.malloc(size);
    this.pdfiumModule.PDFiumExt_GetFileWriterData(writerPtr, dataPtr, size);
    const buffer = new ArrayBuffer(size);
    const view = new DataView(buffer);
    for (let i = 0; i < size; i++) {
      view.setInt8(i, this.pdfiumModule.pdfium.getValue(dataPtr + i, "i8"));
    }
    this.memoryManager.free(dataPtr);
    this.pdfiumModule.PDFiumExt_CloseFileWriter(writerPtr);
    return buffer;
  }
  /**
   * Read Catalog /Lang via EPDFCatalog_GetLanguage (UTF-16LE → JS string).
   * Returns:
   *   null  -> /Lang not present (getter returned 0) OR doc not open,
   *   ''    -> /Lang exists but is explicitly empty,
   *   'en', 'en-US', ... -> normal tag.
   *
   * Note: EPDFCatalog_GetLanguage lengths are BYTES (incl. trailing NUL).
   *
   * @private
   */
  readCatalogLanguage(docPtr) {
    const byteLen = this.pdfiumModule.EPDFCatalog_GetLanguage(docPtr, 0, 0) >>> 0;
    if (byteLen === 0) return null;
    if (byteLen === 2) return "";
    return readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => this.pdfiumModule.EPDFCatalog_GetLanguage(docPtr, buffer, bufferLength),
      this.pdfiumModule.pdfium.UTF16ToString,
      byteLen
    );
  }
  /**
   * Read metadata from pdf document
   * @param docPtr - pointer to pdf document
   * @param key - key of metadata field
   * @returns metadata value
   *
   * @private
   */
  getPageLabels(doc) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageLabels", doc);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const labels = [];
    for (let i = 0; i < doc.pageCount; i++) {
      labels.push(this.readPageLabel(ctx.docPtr, i));
    }
    return PdfTaskHelper.resolve(labels);
  }
  readPageLabel(docPtr, pageIndex) {
    const len = this.pdfiumModule.FPDF_GetPageLabel(docPtr, pageIndex, 0, 0);
    if (len <= 2) return "";
    const label = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => this.pdfiumModule.FPDF_GetPageLabel(docPtr, pageIndex, buffer, bufferLength),
      this.pdfiumModule.pdfium.UTF16ToString,
      len
    );
    return label ?? "";
  }
  readMetaText(docPtr, key) {
    const exists = !!this.pdfiumModule.EPDF_HasMetaText(docPtr, key);
    if (!exists) return null;
    const len = this.pdfiumModule.FPDF_GetMetaText(docPtr, key, 0, 0);
    if (len === 2) return "";
    return readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => this.pdfiumModule.FPDF_GetMetaText(docPtr, key, buffer, bufferLength),
      this.pdfiumModule.pdfium.UTF16ToString,
      len
    );
  }
  /**
   * Write metadata into the PDF's Info dictionary.
   * If \`value\` is null or empty string, the key is removed.
   * @param docPtr - pointer to pdf document
   * @param key - key of metadata field
   * @param value - value of metadata field
   * @returns whether metadata is written to the pdf document
   *
   * @private
   */
  setMetaText(docPtr, key, value) {
    if (value == null || value.length === 0) {
      const ok = this.pdfiumModule.EPDF_SetMetaText(docPtr, key, 0);
      return !!ok;
    }
    const bytes = 2 * (value.length + 1);
    const ptr = this.memoryManager.malloc(bytes);
    try {
      this.pdfiumModule.pdfium.stringToUTF16(value, ptr, bytes);
      const ok = this.pdfiumModule.EPDF_SetMetaText(docPtr, key, ptr);
      return !!ok;
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  /**
   * Read the document's trapped status via PDFium.
   * Falls back to \`Unknown\` on unexpected values.
   *
   * @private
   */
  getMetaTrapped(docPtr) {
    const raw = Number(this.pdfiumModule.EPDF_GetMetaTrapped(docPtr));
    switch (raw) {
      case PdfTrappedStatus.NotSet:
      case PdfTrappedStatus.True:
      case PdfTrappedStatus.False:
      case PdfTrappedStatus.Unknown:
        return raw;
      default:
        return PdfTrappedStatus.Unknown;
    }
  }
  /**
   * Write (or clear) the document's trapped status via PDFium.
   * Pass \`null\`/\`undefined\` to remove the \`/Trapped\` key.
   *
   * @private
   */
  setMetaTrapped(docPtr, status) {
    const toSet = status == null || status === void 0 ? PdfTrappedStatus.NotSet : status;
    const valid = toSet === PdfTrappedStatus.NotSet || toSet === PdfTrappedStatus.True || toSet === PdfTrappedStatus.False || toSet === PdfTrappedStatus.Unknown;
    if (!valid) return false;
    return !!this.pdfiumModule.EPDF_SetMetaTrapped(docPtr, toSet);
  }
  /**
   * Get the number of keys in the document's Info dictionary.
   * @param docPtr - pointer to pdf document
   * @param customOnly - if true, only count non-reserved (custom) keys; if false, count all keys.
   * @returns the number of keys (possibly 0). On error, returns 0.
   *
   * @private
   */
  getMetaKeyCount(docPtr, customOnly) {
    return Number(this.pdfiumModule.EPDF_GetMetaKeyCount(docPtr, customOnly)) | 0;
  }
  /**
   * Get the name of the Info dictionary key at |index|.
   * @param docPtr - pointer to pdf document
   * @param index - 0-based key index in the order returned by PDFium.
   * @param customOnly - if true, indexes only over non-reserved (custom) keys; if false, indexes over all keys.
   * @returns the name of the key, or null if the key is not found.
   *
   * @private
   */
  getMetaKeyName(docPtr, index, customOnly) {
    const len = this.pdfiumModule.EPDF_GetMetaKeyName(docPtr, index, customOnly, 0, 0);
    if (!len) return null;
    return readString(
      this.pdfiumModule.pdfium,
      (buffer, buflen) => this.pdfiumModule.EPDF_GetMetaKeyName(docPtr, index, customOnly, buffer, buflen),
      this.pdfiumModule.pdfium.UTF8ToString,
      len
    );
  }
  /**
   * Read all metadata from the document's Info dictionary.
   * @param docPtr - pointer to pdf document
   * @param customOnly - if true, only read non-reserved (custom) keys; if false, read all keys.
   * @returns all metadata
   *
   * @private
   */
  readAllMeta(docPtr, customOnly = true) {
    const n = this.getMetaKeyCount(docPtr, customOnly);
    const out = {};
    for (let i = 0; i < n; i++) {
      const key = this.getMetaKeyName(docPtr, i, customOnly);
      if (!key) continue;
      out[key] = this.readMetaText(docPtr, key);
    }
    return out;
  }
  /**
   * Read bookmarks in the pdf document
   * @param docPtr - pointer to pdf document
   * @param rootBookmarkPtr - pointer to root bookmark
   * @returns bookmarks in the pdf document
   *
   * @private
   */
  readPdfBookmarks(docPtr, rootBookmarkPtr = 0) {
    let bookmarkPtr = this.pdfiumModule.FPDFBookmark_GetFirstChild(docPtr, rootBookmarkPtr);
    const bookmarks = [];
    while (bookmarkPtr) {
      const bookmark = this.readPdfBookmark(docPtr, bookmarkPtr);
      bookmarks.push(bookmark);
      const nextBookmarkPtr = this.pdfiumModule.FPDFBookmark_GetNextSibling(docPtr, bookmarkPtr);
      bookmarkPtr = nextBookmarkPtr;
    }
    return bookmarks;
  }
  /**
   * Read bookmark in the pdf document
   * @param docPtr - pointer to pdf document
   * @param bookmarkPtr - pointer to bookmark object
   * @returns pdf bookmark object
   *
   * @private
   */
  readPdfBookmark(docPtr, bookmarkPtr) {
    const title = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFBookmark_GetTitle(bookmarkPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const bookmarks = this.readPdfBookmarks(docPtr, bookmarkPtr);
    const target = this.readPdfBookmarkTarget(
      docPtr,
      () => {
        return this.pdfiumModule.FPDFBookmark_GetAction(bookmarkPtr);
      },
      () => {
        return this.pdfiumModule.FPDFBookmark_GetDest(docPtr, bookmarkPtr);
      }
    );
    return {
      title,
      target,
      children: bookmarks
    };
  }
  /**
   * Read text rects in pdf page
   * @param page - pdf page info
   * @param docPtr - pointer to pdf document
   * @param pagePtr - pointer to pdf page
   * @param textPagePtr - pointer to pdf text page
   * @returns text rects in the pdf page
   *
   * @public
   */
  readPageTextRects(page, docPtr, pagePtr, textPagePtr) {
    const rectsCount = this.pdfiumModule.FPDFText_CountRects(textPagePtr, 0, -1);
    const textRects = [];
    for (let i = 0; i < rectsCount; i++) {
      const topPtr = this.memoryManager.malloc(8);
      const leftPtr = this.memoryManager.malloc(8);
      const rightPtr = this.memoryManager.malloc(8);
      const bottomPtr = this.memoryManager.malloc(8);
      const isSucceed = this.pdfiumModule.FPDFText_GetRect(
        textPagePtr,
        i,
        leftPtr,
        topPtr,
        rightPtr,
        bottomPtr
      );
      if (!isSucceed) {
        this.memoryManager.free(leftPtr);
        this.memoryManager.free(topPtr);
        this.memoryManager.free(rightPtr);
        this.memoryManager.free(bottomPtr);
        continue;
      }
      const left = this.pdfiumModule.pdfium.getValue(leftPtr, "double");
      const top = this.pdfiumModule.pdfium.getValue(topPtr, "double");
      const right = this.pdfiumModule.pdfium.getValue(rightPtr, "double");
      const bottom = this.pdfiumModule.pdfium.getValue(bottomPtr, "double");
      this.memoryManager.free(leftPtr);
      this.memoryManager.free(topPtr);
      this.memoryManager.free(rightPtr);
      this.memoryManager.free(bottomPtr);
      const deviceXPtr = this.memoryManager.malloc(4);
      const deviceYPtr = this.memoryManager.malloc(4);
      this.pdfiumModule.FPDF_PageToDevice(
        pagePtr,
        0,
        0,
        page.size.width,
        page.size.height,
        0,
        left,
        top,
        deviceXPtr,
        deviceYPtr
      );
      const x = this.pdfiumModule.pdfium.getValue(deviceXPtr, "i32");
      const y = this.pdfiumModule.pdfium.getValue(deviceYPtr, "i32");
      this.memoryManager.free(deviceXPtr);
      this.memoryManager.free(deviceYPtr);
      const rect = {
        origin: {
          x,
          y
        },
        size: {
          width: Math.ceil(Math.abs(right - left)),
          height: Math.ceil(Math.abs(top - bottom))
        }
      };
      const utf16Length = this.pdfiumModule.FPDFText_GetBoundedText(
        textPagePtr,
        left,
        top,
        right,
        bottom,
        0,
        0
      );
      const bytesCount = (utf16Length + 1) * 2;
      const textBuffer = this.memoryManager.malloc(bytesCount);
      this.pdfiumModule.FPDFText_GetBoundedText(
        textPagePtr,
        left,
        top,
        right,
        bottom,
        textBuffer,
        utf16Length
      );
      const content = this.pdfiumModule.pdfium.UTF16ToString(textBuffer);
      this.memoryManager.free(textBuffer);
      const charIndex = this.pdfiumModule.FPDFText_GetCharIndexAtPos(textPagePtr, left, top, 2, 2);
      let fontFamily = "";
      let fontSize = rect.size.height;
      if (charIndex >= 0) {
        fontSize = this.pdfiumModule.FPDFText_GetFontSize(textPagePtr, charIndex);
        const fontNameLength = this.pdfiumModule.FPDFText_GetFontInfo(
          textPagePtr,
          charIndex,
          0,
          0,
          0
        );
        const bytesCount2 = fontNameLength + 1;
        const textBufferPtr = this.memoryManager.malloc(bytesCount2);
        const flagsPtr = this.memoryManager.malloc(4);
        this.pdfiumModule.FPDFText_GetFontInfo(
          textPagePtr,
          charIndex,
          textBufferPtr,
          bytesCount2,
          flagsPtr
        );
        fontFamily = this.pdfiumModule.pdfium.UTF8ToString(textBufferPtr);
        this.memoryManager.free(textBufferPtr);
        this.memoryManager.free(flagsPtr);
      }
      const textRect = {
        content,
        rect,
        font: {
          family: fontFamily,
          size: fontSize
        }
      };
      textRects.push(textRect);
    }
    return textRects;
  }
  /**
   * Return geometric + logical text layout for one page
   * (glyph-only implementation, no FPDFText_GetRect).
   *
   * @public
   */
  getPageGeometry(doc, page) {
    const label = "getPageGeometry";
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const textPagePtr = pageCtx.getTextPage();
    const glyphCount = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
    const glyphs = [];
    for (let i = 0; i < glyphCount; i++) {
      const g = this.readGlyphInfo(page, pageCtx.pagePtr, textPagePtr, i);
      glyphs.push(g);
    }
    const runs = this.buildRunsFromGlyphs(glyphs, textPagePtr);
    pageCtx.release();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", doc.id);
    return PdfTaskHelper.resolve({ runs });
  }
  /**
   * Group consecutive glyphs that belong to the same CPDF_TextObject
   * using FPDFText_GetTextObject(), and calculate rotation from glyph positions.
   */
  buildRunsFromGlyphs(glyphs, textPagePtr) {
    const runs = [];
    let current = null;
    let curObjPtr = null;
    let bounds = null;
    for (let i = 0; i < glyphs.length; i++) {
      const g = glyphs[i];
      const objPtr = this.pdfiumModule.FPDFText_GetTextObject(textPagePtr, i);
      if (objPtr !== curObjPtr) {
        curObjPtr = objPtr;
        current = {
          rect: {
            x: g.origin.x,
            y: g.origin.y,
            width: g.size.width,
            height: g.size.height
          },
          charStart: i,
          glyphs: [],
          fontSize: this.pdfiumModule.FPDFText_GetFontSize(textPagePtr, i)
        };
        bounds = {
          minX: g.origin.x,
          minY: g.origin.y,
          maxX: g.origin.x + g.size.width,
          maxY: g.origin.y + g.size.height
        };
        runs.push(current);
      }
      current.glyphs.push({
        x: g.origin.x,
        y: g.origin.y,
        width: g.size.width,
        height: g.size.height,
        flags: g.isEmpty ? 2 : g.isSpace ? 1 : 0,
        ...g.tightOrigin && { tightX: g.tightOrigin.x, tightY: g.tightOrigin.y },
        ...g.tightSize && { tightWidth: g.tightSize.width, tightHeight: g.tightSize.height }
      });
      if (g.isEmpty) {
        continue;
      }
      const right = g.origin.x + g.size.width;
      const bottom = g.origin.y + g.size.height;
      bounds.minX = Math.min(bounds.minX, g.origin.x);
      bounds.minY = Math.min(bounds.minY, g.origin.y);
      bounds.maxX = Math.max(bounds.maxX, right);
      bounds.maxY = Math.max(bounds.maxY, bottom);
      current.rect.x = bounds.minX;
      current.rect.y = bounds.minY;
      current.rect.width = bounds.maxX - bounds.minX;
      current.rect.height = bounds.maxY - bounds.minY;
    }
    return runs;
  }
  /**
   * Rich text runs: groups consecutive characters sharing the same
   * text object, font, size, and fill color into structured segments
   * with full font metadata and bounding boxes in PDF page coordinates.
   *
   * @public
   */
  getPageTextRuns(doc, page) {
    const label = "getPageTextRuns";
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const textPagePtr = pageCtx.getTextPage();
    const charCount = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
    const runs = [];
    let runStart = 0;
    let curObjPtr = null;
    let curFont = null;
    let curFontSize = 0;
    let curColor = null;
    let bounds = null;
    const flushRun = (end) => {
      if (curObjPtr === null || curFont === null || curColor === null || bounds === null) return;
      const count = end - runStart;
      if (count <= 0) return;
      const bufPtr = this.memoryManager.malloc(2 * (count + 1));
      this.pdfiumModule.FPDFText_GetText(textPagePtr, runStart, count, bufPtr);
      const text = stripPdfUnwantedMarkers(this.pdfiumModule.pdfium.UTF16ToString(bufPtr));
      this.memoryManager.free(bufPtr);
      runs.push({
        text,
        rect: {
          origin: { x: bounds.minX, y: bounds.minY },
          size: {
            width: Math.max(1, bounds.maxX - bounds.minX),
            height: Math.max(1, bounds.maxY - bounds.minY)
          }
        },
        font: curFont,
        fontSize: curFontSize,
        color: curColor,
        charIndex: runStart,
        charCount: count
      });
    };
    const rPtr = this.memoryManager.malloc(4);
    const gPtr = this.memoryManager.malloc(4);
    const bPtr = this.memoryManager.malloc(4);
    const aPtr = this.memoryManager.malloc(4);
    const rectPtr = this.memoryManager.malloc(16);
    const dx1Ptr = this.memoryManager.malloc(4);
    const dy1Ptr = this.memoryManager.malloc(4);
    const dx2Ptr = this.memoryManager.malloc(4);
    const dy2Ptr = this.memoryManager.malloc(4);
    const italicAnglePtr = this.memoryManager.malloc(4);
    for (let i = 0; i < charCount; i++) {
      const uc = this.pdfiumModule.FPDFText_GetUnicode(textPagePtr, i);
      if (uc === 65534 || uc === 65533) continue;
      const objPtr = this.pdfiumModule.FPDFText_GetTextObject(textPagePtr, i);
      if (objPtr === 0) continue;
      const fontSize = this.pdfiumModule.FPDFText_GetFontSize(textPagePtr, i);
      this.pdfiumModule.FPDFText_GetFillColor(textPagePtr, i, rPtr, gPtr, bPtr, aPtr);
      const red = this.pdfiumModule.pdfium.getValue(rPtr, "i32") & 255;
      const green = this.pdfiumModule.pdfium.getValue(gPtr, "i32") & 255;
      const blue = this.pdfiumModule.pdfium.getValue(bPtr, "i32") & 255;
      const alpha = this.pdfiumModule.pdfium.getValue(aPtr, "i32") & 255;
      const fontInfo = this.readFontInfoFromTextObject(objPtr, italicAnglePtr);
      const needNewRun = curObjPtr === null || objPtr !== curObjPtr || fontInfo.name !== curFont.name || Math.abs(fontSize - curFontSize) > 0.01 || red !== curColor.red || green !== curColor.green || blue !== curColor.blue;
      if (needNewRun) {
        flushRun(i);
        curObjPtr = objPtr;
        curFont = fontInfo;
        curFontSize = fontSize;
        curColor = { red, green, blue, alpha };
        runStart = i;
        bounds = null;
      }
      if (this.pdfiumModule.FPDFText_GetLooseCharBox(textPagePtr, i, rectPtr)) {
        const left = this.pdfiumModule.pdfium.getValue(rectPtr, "float");
        const top = this.pdfiumModule.pdfium.getValue(rectPtr + 4, "float");
        const right = this.pdfiumModule.pdfium.getValue(rectPtr + 8, "float");
        const bottom = this.pdfiumModule.pdfium.getValue(rectPtr + 12, "float");
        if (left !== right && top !== bottom) {
          this.pdfiumModule.FPDF_PageToDevice(
            pageCtx.pagePtr,
            0,
            0,
            page.size.width,
            page.size.height,
            0,
            left,
            top,
            dx1Ptr,
            dy1Ptr
          );
          this.pdfiumModule.FPDF_PageToDevice(
            pageCtx.pagePtr,
            0,
            0,
            page.size.width,
            page.size.height,
            0,
            right,
            bottom,
            dx2Ptr,
            dy2Ptr
          );
          const x1 = this.pdfiumModule.pdfium.getValue(dx1Ptr, "i32");
          const y1 = this.pdfiumModule.pdfium.getValue(dy1Ptr, "i32");
          const x2 = this.pdfiumModule.pdfium.getValue(dx2Ptr, "i32");
          const y2 = this.pdfiumModule.pdfium.getValue(dy2Ptr, "i32");
          const cx = Math.min(x1, x2);
          const cy = Math.min(y1, y2);
          const cw = Math.abs(x2 - x1);
          const ch = Math.abs(y2 - y1);
          if (bounds === null) {
            bounds = { minX: cx, minY: cy, maxX: cx + cw, maxY: cy + ch };
          } else {
            bounds.minX = Math.min(bounds.minX, cx);
            bounds.minY = Math.min(bounds.minY, cy);
            bounds.maxX = Math.max(bounds.maxX, cx + cw);
            bounds.maxY = Math.max(bounds.maxY, cy + ch);
          }
        }
      }
    }
    flushRun(charCount);
    [rPtr, gPtr, bPtr, aPtr, rectPtr, dx1Ptr, dy1Ptr, dx2Ptr, dy2Ptr, italicAnglePtr].forEach(
      (p) => this.memoryManager.free(p)
    );
    pageCtx.release();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", doc.id);
    return PdfTaskHelper.resolve({ runs });
  }
  /**
   * Read font metadata from a text object handle via FPDFFont_* APIs.
   */
  readFontInfoFromTextObject(textObjPtr, italicAnglePtr) {
    const fontPtr = this.pdfiumModule.FPDFTextObj_GetFont(textObjPtr);
    let name = "";
    let familyName = "";
    let weight = 400;
    let italic = false;
    let monospaced = false;
    let embedded = false;
    if (fontPtr) {
      const nameLen = this.pdfiumModule.FPDFFont_GetBaseFontName(fontPtr, 0, 0);
      if (nameLen > 0) {
        const nameBuf = this.memoryManager.malloc(nameLen + 1);
        this.pdfiumModule.FPDFFont_GetBaseFontName(fontPtr, nameBuf, nameLen + 1);
        name = this.pdfiumModule.pdfium.UTF8ToString(nameBuf);
        this.memoryManager.free(nameBuf);
      }
      const famLen = this.pdfiumModule.FPDFFont_GetFamilyName(fontPtr, 0, 0);
      if (famLen > 0) {
        const famBuf = this.memoryManager.malloc(famLen + 1);
        this.pdfiumModule.FPDFFont_GetFamilyName(fontPtr, famBuf, famLen + 1);
        familyName = this.pdfiumModule.pdfium.UTF8ToString(famBuf);
        this.memoryManager.free(famBuf);
      }
      weight = this.pdfiumModule.FPDFFont_GetWeight(fontPtr);
      embedded = this.pdfiumModule.FPDFFont_GetIsEmbedded(fontPtr) !== 0;
      if (this.pdfiumModule.FPDFFont_GetItalicAngle(fontPtr, italicAnglePtr)) {
        const angle = this.pdfiumModule.pdfium.getValue(italicAnglePtr, "i32");
        italic = angle !== 0;
      }
      const flags = this.pdfiumModule.FPDFFont_GetFlags(fontPtr);
      monospaced = (flags & 1) !== 0;
    }
    return { name, familyName, weight, italic, monospaced, embedded };
  }
  /**
   * Extract glyph geometry + metadata for \`charIndex\`
   *
   * Returns device–space coordinates:
   *   x,y  → **top-left** corner (integer-pixels)
   *   w,h  → width / height (integer-pixels, ≥ 1)
   *
   * And two flags:
   *   isSpace → true if the glyph's Unicode code-point is U+0020
   */
  readGlyphInfo(page, pagePtr, textPagePtr, charIndex) {
    const dx1Ptr = this.memoryManager.malloc(4);
    const dy1Ptr = this.memoryManager.malloc(4);
    const dx2Ptr = this.memoryManager.malloc(4);
    const dy2Ptr = this.memoryManager.malloc(4);
    const rectPtr = this.memoryManager.malloc(16);
    const tLeftPtr = this.memoryManager.malloc(8);
    const tRightPtr = this.memoryManager.malloc(8);
    const tBottomPtr = this.memoryManager.malloc(8);
    const tTopPtr = this.memoryManager.malloc(8);
    const allPtrs = [
      rectPtr,
      dx1Ptr,
      dy1Ptr,
      dx2Ptr,
      dy2Ptr,
      tLeftPtr,
      tRightPtr,
      tBottomPtr,
      tTopPtr
    ];
    let x = 0, y = 0, width = 0, height = 0, isSpace = false;
    let tightOrigin;
    let tightSize;
    if (this.pdfiumModule.FPDFText_GetLooseCharBox(textPagePtr, charIndex, rectPtr)) {
      const left = this.pdfiumModule.pdfium.getValue(rectPtr, "float");
      const top = this.pdfiumModule.pdfium.getValue(rectPtr + 4, "float");
      const right = this.pdfiumModule.pdfium.getValue(rectPtr + 8, "float");
      const bottom = this.pdfiumModule.pdfium.getValue(rectPtr + 12, "float");
      if (left === right || top === bottom) {
        allPtrs.forEach((p) => this.memoryManager.free(p));
        return {
          origin: { x: 0, y: 0 },
          size: { width: 0, height: 0 },
          isEmpty: true
        };
      }
      this.pdfiumModule.FPDF_PageToDevice(
        pagePtr,
        0,
        0,
        page.size.width,
        page.size.height,
        0,
        left,
        top,
        dx1Ptr,
        dy1Ptr
      );
      this.pdfiumModule.FPDF_PageToDevice(
        pagePtr,
        0,
        0,
        page.size.width,
        page.size.height,
        0,
        right,
        bottom,
        dx2Ptr,
        dy2Ptr
      );
      const x1 = this.pdfiumModule.pdfium.getValue(dx1Ptr, "i32");
      const y1 = this.pdfiumModule.pdfium.getValue(dy1Ptr, "i32");
      const x2 = this.pdfiumModule.pdfium.getValue(dx2Ptr, "i32");
      const y2 = this.pdfiumModule.pdfium.getValue(dy2Ptr, "i32");
      x = Math.min(x1, x2);
      y = Math.min(y1, y2);
      width = Math.max(1, Math.abs(x2 - x1));
      height = Math.max(1, Math.abs(y2 - y1));
      if (this.pdfiumModule.FPDFText_GetCharBox(
        textPagePtr,
        charIndex,
        tLeftPtr,
        tRightPtr,
        tBottomPtr,
        tTopPtr
      )) {
        const tLeft = this.pdfiumModule.pdfium.getValue(tLeftPtr, "double");
        const tRight = this.pdfiumModule.pdfium.getValue(tRightPtr, "double");
        const tBottom = this.pdfiumModule.pdfium.getValue(tBottomPtr, "double");
        const tTop = this.pdfiumModule.pdfium.getValue(tTopPtr, "double");
        this.pdfiumModule.FPDF_PageToDevice(
          pagePtr,
          0,
          0,
          page.size.width,
          page.size.height,
          0,
          tLeft,
          tTop,
          dx1Ptr,
          dy1Ptr
        );
        this.pdfiumModule.FPDF_PageToDevice(
          pagePtr,
          0,
          0,
          page.size.width,
          page.size.height,
          0,
          tRight,
          tBottom,
          dx2Ptr,
          dy2Ptr
        );
        const tx1 = this.pdfiumModule.pdfium.getValue(dx1Ptr, "i32");
        const ty1 = this.pdfiumModule.pdfium.getValue(dy1Ptr, "i32");
        const tx2 = this.pdfiumModule.pdfium.getValue(dx2Ptr, "i32");
        const ty2 = this.pdfiumModule.pdfium.getValue(dy2Ptr, "i32");
        tightOrigin = { x: Math.min(tx1, tx2), y: Math.min(ty1, ty2) };
        tightSize = {
          width: Math.max(1, Math.abs(tx2 - tx1)),
          height: Math.max(1, Math.abs(ty2 - ty1))
        };
      }
      const uc = this.pdfiumModule.FPDFText_GetUnicode(textPagePtr, charIndex);
      isSpace = uc === 32;
    }
    allPtrs.forEach((p) => this.memoryManager.free(p));
    return {
      origin: { x, y },
      size: { width, height },
      ...tightOrigin && { tightOrigin },
      ...tightSize && { tightSize },
      ...isSpace && { isSpace }
    };
  }
  /**
   * Geometry-only text extraction
   * ------------------------------------------
   * Returns every glyph on the requested page
   * in the logical order delivered by PDFium.
   *
   * The promise resolves to an array of objects:
   *   {
   *     idx:     number;            // glyph index on the page (0…n-1)
   *     origin:  { x: number; y: number };
   *     size:    { width: number;  height: number };
   *     angle:   number;            // degrees, counter-clock-wise
   *     isSpace: boolean;           // true  → U+0020
   *   }
   *
   * No Unicode is included; front-end decides whether to hydrate it.
   */
  getPageGlyphs(doc, page) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageGlyphs", doc, page);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageGlyphs", "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageGlyphs", "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const textPagePtr = pageCtx.getTextPage();
    const total = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
    const glyphs = new Array(total);
    for (let i = 0; i < total; i++) {
      const g = this.readGlyphInfo(page, pageCtx.pagePtr, textPagePtr, i);
      if (g.isEmpty) {
        continue;
      }
      glyphs[i] = { ...g };
    }
    pageCtx.release();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageGlyphs", "End", doc.id);
    return PdfTaskHelper.resolve(glyphs);
  }
  readCharBox(page, pagePtr, textPagePtr, charIndex) {
    const topPtr = this.memoryManager.malloc(8);
    const leftPtr = this.memoryManager.malloc(8);
    const bottomPtr = this.memoryManager.malloc(8);
    const rightPtr = this.memoryManager.malloc(8);
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;
    if (this.pdfiumModule.FPDFText_GetCharBox(
      textPagePtr,
      charIndex,
      leftPtr,
      rightPtr,
      bottomPtr,
      topPtr
    )) {
      const top = this.pdfiumModule.pdfium.getValue(topPtr, "double");
      const left = this.pdfiumModule.pdfium.getValue(leftPtr, "double");
      const bottom = this.pdfiumModule.pdfium.getValue(bottomPtr, "double");
      const right = this.pdfiumModule.pdfium.getValue(rightPtr, "double");
      const deviceXPtr = this.memoryManager.malloc(4);
      const deviceYPtr = this.memoryManager.malloc(4);
      this.pdfiumModule.FPDF_PageToDevice(
        pagePtr,
        0,
        0,
        page.size.width,
        page.size.height,
        0,
        left,
        top,
        deviceXPtr,
        deviceYPtr
      );
      x = this.pdfiumModule.pdfium.getValue(deviceXPtr, "i32");
      y = this.pdfiumModule.pdfium.getValue(deviceYPtr, "i32");
      this.memoryManager.free(deviceXPtr);
      this.memoryManager.free(deviceYPtr);
      width = Math.ceil(Math.abs(right - left));
      height = Math.ceil(Math.abs(top - bottom));
    }
    this.memoryManager.free(topPtr);
    this.memoryManager.free(leftPtr);
    this.memoryManager.free(bottomPtr);
    this.memoryManager.free(rightPtr);
    return {
      origin: {
        x,
        y
      },
      size: {
        width,
        height
      }
    };
  }
  /**
   * Read page annotations
   *
   * @param doc - pdf document object
   * @param ctx - document context
   * @param page - page info
   * @returns annotations on the pdf page
   *
   * @private
   */
  readPageAnnotations(doc, ctx, page) {
    return ctx.borrowPage(page.index, (pageCtx) => {
      const annotationCount = this.pdfiumModule.FPDFPage_GetAnnotCount(pageCtx.pagePtr);
      const annotations = [];
      for (let i = 0; i < annotationCount; i++) {
        pageCtx.withAnnotation(i, (annotPtr) => {
          const anno = this.readPageAnnotation(doc, ctx.docPtr, page, annotPtr, pageCtx);
          if (anno) annotations.push(anno);
        });
      }
      return annotations;
    });
  }
  /**
   * Read page annotations without loading the page (raw approach)
   *
   * @param doc - pdf document object
   * @param ctx - document context
   * @param page - page info
   * @returns annotations on the pdf page
   *
   * @private
   */
  readPageAnnotationsRaw(doc, ctx, page) {
    const count = this.pdfiumModule.EPDFPage_GetAnnotCountRaw(ctx.docPtr, page.index);
    if (count <= 0) return [];
    const out = [];
    for (let i = 0; i < count; ++i) {
      const annotPtr = this.pdfiumModule.EPDFPage_GetAnnotRaw(ctx.docPtr, page.index, i);
      if (!annotPtr) continue;
      try {
        const anno = this.readPageAnnotation(doc, ctx.docPtr, page, annotPtr);
        if (anno) out.push(anno);
      } finally {
        this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
      }
    }
    return out;
  }
  /**
   * Get page annotations (public API, returns Task)
   *
   * @param doc - pdf document
   * @param page - page info
   * @returns task with annotations on the pdf page
   *
   * @public
   */
  getPageAnnotationsRaw(doc, page) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getPageAnnotationsRaw", doc, page);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageAnnotationsRaw\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const out = this.readPageAnnotationsRaw(doc, ctx, page);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`GetPageAnnotationsRaw\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    this.logger.debug(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "getPageAnnotationsRaw",
      \`\${doc.id}-\${page.index}\`,
      out
    );
    return PdfTaskHelper.resolve(out);
  }
  /**
   * Read pdf annotation from pdf document
   *
   * @param doc - pdf document object
   * @param docPtr - pointer to pdf document
   * @param page - page info
   * @param annotationPtr - pointer to pdf annotation
   * @param pageCtx - page context
   * @returns pdf annotation
   *
   * @private
   */
  readPageAnnotation(doc, docPtr, page, annotationPtr, pageCtx) {
    let index = this.getAnnotString(annotationPtr, "NM");
    if (!index || !isUuidV4(index)) {
      index = uuidV4();
      this.setAnnotString(annotationPtr, "NM", index);
    }
    const subType = this.pdfiumModule.FPDFAnnot_GetSubtype(
      annotationPtr
    );
    let annotation;
    switch (subType) {
      case PdfAnnotationSubtype.TEXT:
        {
          annotation = this.readPdfTextAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.FREETEXT:
        {
          annotation = this.readPdfFreeTextAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.LINK:
        {
          annotation = this.readPdfLinkAnno(doc, page, docPtr, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.WIDGET:
        if (pageCtx) {
          return this.readPdfWidgetAnno(doc, page, annotationPtr, pageCtx.getFormHandle(), index);
        }
      case PdfAnnotationSubtype.FILEATTACHMENT:
        {
          annotation = this.readPdfFileAttachmentAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.INK:
        {
          annotation = this.readPdfInkAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.POLYGON:
        {
          annotation = this.readPdfPolygonAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.POLYLINE:
        {
          annotation = this.readPdfPolylineAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.LINE:
        {
          annotation = this.readPdfLineAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.HIGHLIGHT:
        annotation = this.readPdfHighlightAnno(doc, page, annotationPtr, index);
        break;
      case PdfAnnotationSubtype.STAMP:
        {
          annotation = this.readPdfStampAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.SQUARE:
        {
          annotation = this.readPdfSquareAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.CIRCLE:
        {
          annotation = this.readPdfCircleAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.UNDERLINE:
        {
          annotation = this.readPdfUnderlineAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.SQUIGGLY:
        {
          annotation = this.readPdfSquigglyAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.STRIKEOUT:
        {
          annotation = this.readPdfStrikeOutAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.CARET:
        {
          annotation = this.readPdfCaretAnno(doc, page, annotationPtr, index);
        }
        break;
      case PdfAnnotationSubtype.REDACT:
        {
          annotation = this.readPdfRedactAnno(doc, page, annotationPtr, index);
        }
        break;
      default:
        {
          annotation = this.readPdfAnno(doc, page, subType, annotationPtr, index);
        }
        break;
    }
    if (annotation) {
      annotation = this.reverseRotateAnnotationOnLoad(annotation);
      const apModes = this.pdfiumModule.EPDFAnnot_GetAvailableAppearanceModes(annotationPtr);
      if (apModes) {
        annotation.appearanceModes = apModes;
      }
    }
    return annotation;
  }
  /**
   * On load, if a vertex-type annotation has rotation metadata in EPDFCustom,
   * reverse-rotate the PDF's physically rotated vertices by -rotation to recover
   * the unrotated vertices for runtime editing.
   */
  reverseRotateAnnotationOnLoad(annotation) {
    const rotation = annotation.rotation;
    const unrotatedRect = annotation.unrotatedRect;
    if (!rotation || rotation === 0 || !unrotatedRect) {
      return annotation;
    }
    const center = {
      x: unrotatedRect.origin.x + unrotatedRect.size.width / 2,
      y: unrotatedRect.origin.y + unrotatedRect.size.height / 2
    };
    switch (annotation.type) {
      case PdfAnnotationSubtype.INK: {
        const ink = annotation;
        const unrotatedInkList = ink.inkList.map((stroke) => ({
          points: stroke.points.map((p) => this.rotatePointForSave(p, center, -rotation))
        }));
        return { ...ink, inkList: unrotatedInkList };
      }
      case PdfAnnotationSubtype.LINE: {
        const line = annotation;
        return {
          ...line,
          linePoints: {
            start: this.rotatePointForSave(line.linePoints.start, center, -rotation),
            end: this.rotatePointForSave(line.linePoints.end, center, -rotation)
          }
        };
      }
      case PdfAnnotationSubtype.POLYGON: {
        const poly = annotation;
        return {
          ...poly,
          vertices: poly.vertices.map((v) => this.rotatePointForSave(v, center, -rotation))
        };
      }
      case PdfAnnotationSubtype.POLYLINE: {
        const polyline = annotation;
        return {
          ...polyline,
          vertices: polyline.vertices.map((v) => this.rotatePointForSave(v, center, -rotation))
        };
      }
      default:
        return annotation;
    }
  }
  /**
   * Return the colour stored directly in the annotation dictionary's \`/C\` entry.
   *
   * Most PDFs created by Acrobat, Microsoft Office, LaTeX, etc. include this entry.
   * When the key is absent (common in macOS Preview, Chrome, Drawboard) the call
   * fails and the function returns \`undefined\`.
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @returns An RGBA tuple (0-255 channels) or \`undefined\` if no \`/C\` entry exists
   *
   * @private
   */
  readAnnotationColor(annotationPtr, colorType = PdfAnnotationColorType.Color) {
    const rPtr = this.memoryManager.malloc(4);
    const gPtr = this.memoryManager.malloc(4);
    const bPtr = this.memoryManager.malloc(4);
    const ok = this.pdfiumModule.EPDFAnnot_GetColor(annotationPtr, colorType, rPtr, gPtr, bPtr);
    let colour;
    if (ok) {
      colour = {
        red: this.pdfiumModule.pdfium.getValue(rPtr, "i32") & 255,
        green: this.pdfiumModule.pdfium.getValue(gPtr, "i32") & 255,
        blue: this.pdfiumModule.pdfium.getValue(bPtr, "i32") & 255
      };
    }
    this.memoryManager.free(rPtr);
    this.memoryManager.free(gPtr);
    this.memoryManager.free(bPtr);
    return colour;
  }
  /**
   * Get the fill/stroke colour annotation.
   *
   * @param annotationPtr - pointer to the annotation whose colour is being set
   * @param colorType - which colour to get (0 = fill, 1 = stroke)
   * @returns WebColor with hex color
   *
   * @private
   */
  getAnnotationColor(annotationPtr, colorType = PdfAnnotationColorType.Color) {
    const annotationColor = this.readAnnotationColor(annotationPtr, colorType);
    return annotationColor ? pdfColorToWebColor(annotationColor) : void 0;
  }
  /**
   * Set the fill/stroke colour for a **Highlight / Underline / StrikeOut / Squiggly** markup annotation.
   *
   * @param annotationPtr - pointer to the annotation whose colour is being set
   * @param webAlphaColor - WebAlphaColor with hex color and opacity (0-1)
   * @param shouldClearAP - whether to clear the /AP entry
   * @param which - which colour to set (0 = fill, 1 = stroke)
   * @returns \`true\` if the operation was successful
   *
   * @private
   */
  setAnnotationColor(annotationPtr, webColor, colorType = PdfAnnotationColorType.Color) {
    const pdfColor = webColorToPdfColor(webColor);
    return this.pdfiumModule.EPDFAnnot_SetColor(
      annotationPtr,
      colorType,
      pdfColor.red & 255,
      pdfColor.green & 255,
      pdfColor.blue & 255
    );
  }
  /**
   * Get the opacity of the annotation.
   *
   * @param annotationPtr - pointer to the annotation whose opacity is being set
   * @returns opacity (0-1)
   *
   * @private
   */
  getAnnotationOpacity(annotationPtr) {
    const opacityPtr = this.memoryManager.malloc(4);
    const ok = this.pdfiumModule.EPDFAnnot_GetOpacity(annotationPtr, opacityPtr);
    const opacity = ok ? this.pdfiumModule.pdfium.getValue(opacityPtr, "i32") : 255;
    this.memoryManager.free(opacityPtr);
    return pdfAlphaToWebOpacity(opacity);
  }
  /**
   * Set the opacity of the annotation.
   *
   * @param annotationPtr - pointer to the annotation whose opacity is being set
   * @param opacity - opacity (0-1)
   * @returns true on success
   *
   * @private
   */
  setAnnotationOpacity(annotationPtr, opacity) {
    const pdfOpacity = webOpacityToPdfAlpha(opacity);
    return this.pdfiumModule.EPDFAnnot_SetOpacity(annotationPtr, pdfOpacity & 255);
  }
  /**
   * Get the rotation angle (in degrees) from the annotation's /Rotate entry.
   * Returns 0 if no rotation is set or on error.
   *
   * @param annotationPtr - pointer to the annotation
   * @returns rotation in degrees (0 if not set)
   */
  getAnnotationRotation(annotationPtr) {
    const rotationPtr = this.memoryManager.malloc(4);
    const ok = this.pdfiumModule.EPDFAnnot_GetRotate(annotationPtr, rotationPtr);
    if (!ok) {
      this.memoryManager.free(rotationPtr);
      return 0;
    }
    const rotation = this.pdfiumModule.pdfium.getValue(rotationPtr, "float");
    this.memoryManager.free(rotationPtr);
    return rotation;
  }
  /**
   * Set the rotation angle (in degrees) on the annotation's /Rotate entry.
   * A value of 0 removes the /Rotate key.
   *
   * @param annotationPtr - pointer to the annotation
   * @param rotation - rotation in degrees (clockwise)
   * @returns true on success
   */
  setAnnotationRotation(annotationPtr, rotation) {
    return !!this.pdfiumModule.EPDFAnnot_SetRotate(annotationPtr, rotation);
  }
  /**
   * Get the EmbedPDF extended rotation (in degrees) from the annotation's
   * /EPDFRotate entry. Returns 0 if not set or on error.
   *
   * @param annotationPtr - pointer to the annotation
   * @returns rotation in degrees (0 if not set)
   */
  getAnnotExtendedRotation(annotationPtr) {
    const rotationPtr = this.memoryManager.malloc(4);
    const ok = this.pdfiumModule.EPDFAnnot_GetExtendedRotation(annotationPtr, rotationPtr);
    if (!ok) {
      this.memoryManager.free(rotationPtr);
      return 0;
    }
    const rotation = this.pdfiumModule.pdfium.getValue(rotationPtr, "float");
    this.memoryManager.free(rotationPtr);
    return rotation;
  }
  /**
   * Set the EmbedPDF extended rotation (in degrees) on the annotation's
   * /EPDFRotate entry. A value of 0 removes the key.
   *
   * @param annotationPtr - pointer to the annotation
   * @param rotation - rotation in degrees
   * @returns true on success
   */
  setAnnotExtendedRotation(annotationPtr, rotation) {
    return !!this.pdfiumModule.EPDFAnnot_SetExtendedRotation(annotationPtr, rotation);
  }
  /**
   * Read the EmbedPDF unrotated rect from the annotation's /EPDFUnrotatedRect
   * entry. Returns the raw page-space rect (same format as \`readPageAnnoRect\`)
   * or null if not set.
   *
   * @param annotationPtr - pointer to the annotation
   * @returns raw \`{ left, top, right, bottom }\` in page coords, or null
   */
  readAnnotUnrotatedRect(annotationPtr) {
    const rectPtr = this.memoryManager.malloc(4 * 4);
    const ok = this.pdfiumModule.EPDFAnnot_GetUnrotatedRect(annotationPtr, rectPtr);
    if (!ok) {
      this.memoryManager.free(rectPtr);
      return null;
    }
    const left = this.pdfiumModule.pdfium.getValue(rectPtr, "float");
    const top = this.pdfiumModule.pdfium.getValue(rectPtr + 4, "float");
    const right = this.pdfiumModule.pdfium.getValue(rectPtr + 8, "float");
    const bottom = this.pdfiumModule.pdfium.getValue(rectPtr + 12, "float");
    this.memoryManager.free(rectPtr);
    if (left === 0 && top === 0 && right === 0 && bottom === 0) {
      return null;
    }
    return { left, top, right, bottom };
  }
  /**
   * Write the EmbedPDF unrotated rect (/EPDFUnrotatedRect) for an annotation.
   * Accepts a device-space \`Rect\` and converts to page coordinates internally,
   * following the same pattern as \`setPageAnnoRect\`.
   *
   * @param doc  - pdf document object
   * @param page - pdf page object
   * @param annotPtr - pointer to the annotation
   * @param rect - device-space rect to store as the unrotated rect
   * @returns true on success
   */
  setAnnotUnrotatedRect(doc, page, annotPtr, rect) {
    const x0d = Math.floor(rect.origin.x);
    const y0d = Math.floor(rect.origin.y);
    const x1d = Math.floor(rect.origin.x + rect.size.width);
    const y1d = Math.floor(rect.origin.y + rect.size.height);
    const TL = this.convertDevicePointToPagePoint(doc, page, { x: x0d, y: y0d });
    const TR = this.convertDevicePointToPagePoint(doc, page, { x: x1d, y: y0d });
    const BR = this.convertDevicePointToPagePoint(doc, page, { x: x1d, y: y1d });
    const BL = this.convertDevicePointToPagePoint(doc, page, { x: x0d, y: y1d });
    let left = Math.min(TL.x, TR.x, BR.x, BL.x);
    let right = Math.max(TL.x, TR.x, BR.x, BL.x);
    let bottom = Math.min(TL.y, TR.y, BR.y, BL.y);
    let top = Math.max(TL.y, TR.y, BR.y, BL.y);
    if (left > right) [left, right] = [right, left];
    if (bottom > top) [bottom, top] = [top, bottom];
    const ptr = this.memoryManager.malloc(16);
    const pdf = this.pdfiumModule.pdfium;
    pdf.setValue(ptr + 0, left, "float");
    pdf.setValue(ptr + 4, top, "float");
    pdf.setValue(ptr + 8, right, "float");
    pdf.setValue(ptr + 12, bottom, "float");
    const ok = this.pdfiumModule.EPDFAnnot_SetUnrotatedRect(annotPtr, ptr);
    this.memoryManager.free(ptr);
    return !!ok;
  }
  /**
   * Fetch the \`/Q\` text-alignment value from a **FreeText** annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @returns \`PdfTextAlignment\`
   */
  getAnnotationTextAlignment(annotationPtr) {
    return this.pdfiumModule.EPDFAnnot_GetTextAlignment(annotationPtr);
  }
  /**
   * Write the \`/Q\` text-alignment value into a **FreeText** annotation
   * and clear the existing appearance stream so it can be regenerated.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @param alignment     \`PdfTextAlignment\`
   * @returns \`true\` on success
   */
  setAnnotationTextAlignment(annotationPtr, alignment) {
    return !!this.pdfiumModule.EPDFAnnot_SetTextAlignment(annotationPtr, alignment);
  }
  /**
   * Fetch the \`/EPDF:VerticalAlignment\` vertical-alignment value from a **FreeText** annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @returns \`PdfVerticalAlignment\`
   */
  getAnnotationVerticalAlignment(annotationPtr) {
    return this.pdfiumModule.EPDFAnnot_GetVerticalAlignment(annotationPtr);
  }
  /**
   * Write the \`/EPDF:VerticalAlignment\` vertical-alignment value into a **FreeText** annotation
   * and clear the existing appearance stream so it can be regenerated.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @param alignment     \`PdfVerticalAlignment\`
   * @returns \`true\` on success
   */
  setAnnotationVerticalAlignment(annotationPtr, alignment) {
    return !!this.pdfiumModule.EPDFAnnot_SetVerticalAlignment(annotationPtr, alignment);
  }
  /**
   * Get the overlay text from a Redact annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @returns overlay text string or \`undefined\` if not set
   *
   * @private
   */
  getOverlayText(annotationPtr) {
    const len = this.pdfiumModule.EPDFAnnot_GetOverlayText(annotationPtr, 0, 0);
    if (len === 0) return void 0;
    const bytes = (len + 1) * 2;
    const ptr = this.memoryManager.malloc(bytes);
    this.pdfiumModule.EPDFAnnot_GetOverlayText(annotationPtr, ptr, bytes);
    const value = this.pdfiumModule.pdfium.UTF16ToString(ptr);
    this.memoryManager.free(ptr);
    return value || void 0;
  }
  /**
   * Set the overlay text on a Redact annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @param text overlay text to set, or undefined/empty to clear
   * @returns \`true\` on success
   *
   * @private
   */
  setOverlayText(annotationPtr, text) {
    if (!text) {
      return this.pdfiumModule.EPDFAnnot_SetOverlayText(annotationPtr, 0);
    }
    return this.withWString(text, (wPtr) => {
      return this.pdfiumModule.EPDFAnnot_SetOverlayText(annotationPtr, wPtr);
    });
  }
  /**
   * Get whether overlay text repeats in a Redact annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @returns \`true\` if overlay text repeats
   *
   * @private
   */
  getOverlayTextRepeat(annotationPtr) {
    return this.pdfiumModule.EPDFAnnot_GetOverlayTextRepeat(annotationPtr);
  }
  /**
   * Set whether overlay text repeats in a Redact annotation.
   *
   * @param annotationPtr pointer returned by \`FPDFPage_GetAnnot\`
   * @param repeat whether overlay text should repeat
   * @returns \`true\` on success
   *
   * @private
   */
  setOverlayTextRepeat(annotationPtr, repeat) {
    return this.pdfiumModule.EPDFAnnot_SetOverlayTextRepeat(annotationPtr, repeat);
  }
  /**
   * Return the **default appearance** (font, size, colour) declared in the
   * \`/DA\` string of a **FreeText** annotation.
   *
   * @param annotationPtr  pointer to \`FPDF_ANNOTATION\`
   * @returns \`{ font, fontSize, color }\` or \`undefined\` when PDFium returns false
   *
   * NOTE – \`font\` is the raw \`FPDF_STANDARD_FONT\` enum value that PDFium uses
   *        (same range as the C API: 0 = Courier, 12 = ZapfDingbats, …).
   */
  getAnnotationDefaultAppearance(annotationPtr) {
    const fontPtr = this.memoryManager.malloc(4);
    const sizePtr = this.memoryManager.malloc(4);
    const rPtr = this.memoryManager.malloc(4);
    const gPtr = this.memoryManager.malloc(4);
    const bPtr = this.memoryManager.malloc(4);
    const ok = !!this.pdfiumModule.EPDFAnnot_GetDefaultAppearance(
      annotationPtr,
      fontPtr,
      sizePtr,
      rPtr,
      gPtr,
      bPtr
    );
    if (!ok) {
      [fontPtr, sizePtr, rPtr, gPtr, bPtr].forEach((p) => this.memoryManager.free(p));
      return;
    }
    const pdf = this.pdfiumModule.pdfium;
    const font = pdf.getValue(fontPtr, "i32");
    const fontSize = pdf.getValue(sizePtr, "float");
    const red = pdf.getValue(rPtr, "i32") & 255;
    const green = pdf.getValue(gPtr, "i32") & 255;
    const blue = pdf.getValue(bPtr, "i32") & 255;
    [fontPtr, sizePtr, rPtr, gPtr, bPtr].forEach((p) => this.memoryManager.free(p));
    return {
      fontFamily: font,
      fontSize,
      fontColor: pdfColorToWebColor({ red, green, blue })
    };
  }
  /**
   * Write a **default appearance** (\`/DA\`) into a FreeText annotation.
   *
   * @param annotationPtr pointer to \`FPDF_ANNOTATION\`
   * @param font          \`FPDF_STANDARD_FONT\` enum value
   * @param fontSize      size in points (≥ 0)
   * @param color         CSS-style \`#rrggbb\` string (alpha ignored)
   * @returns \`true\` on success
   */
  setAnnotationDefaultAppearance(annotationPtr, font, fontSize, color) {
    const resolvedFont = font === PdfStandardFont.Unknown ? PdfStandardFont.Helvetica : font;
    const { red, green, blue } = webColorToPdfColor(color);
    return !!this.pdfiumModule.EPDFAnnot_SetDefaultAppearance(
      annotationPtr,
      resolvedFont,
      fontSize,
      red & 255,
      green & 255,
      blue & 255
    );
  }
  /**
   * Border‐style + width helper
   *
   * Tries the new PDFium helper \`EPDFAnnot_GetBorderStyle()\` (patch series
   * 9 July 2025).
   *
   * @param  annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ ok, style, width }\`
   *          • \`ok\`     – \`true\` when the call succeeded
   *          • \`style\`  – \`PdfAnnotationBorderStyle\` enum
   *          • \`width\`  – stroke-width in points (defaults to 0 pt)
   */
  getBorderStyle(annotationPtr) {
    const widthPtr = this.memoryManager.malloc(4);
    let width = 0;
    let style = PdfAnnotationBorderStyle.UNKNOWN;
    let ok = false;
    style = this.pdfiumModule.EPDFAnnot_GetBorderStyle(annotationPtr, widthPtr);
    width = this.pdfiumModule.pdfium.getValue(widthPtr, "float");
    ok = style !== PdfAnnotationBorderStyle.UNKNOWN;
    this.memoryManager.free(widthPtr);
    return { ok, style, width };
  }
  setBorderStyle(annotationPtr, style, width) {
    return this.pdfiumModule.EPDFAnnot_SetBorderStyle(annotationPtr, style, width);
  }
  /**
   * Get the icon of the annotation
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @returns \`PdfAnnotationIcon\`
   */
  getAnnotationIcon(annotationPtr) {
    const name = this.getAnnotString(annotationPtr, "Name");
    if (!name) {
      return PdfAnnotationIcon.Unknown;
    }
    const value = PdfAnnotationIcon[name];
    return typeof value === "number" && value >= 0 ? value : PdfAnnotationIcon.Unknown;
  }
  /**
   * Set the icon of the annotation
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param icon - \`PdfAnnotationIcon\`
   * @returns \`true\` on success
   */
  setAnnotationIcon(annotationPtr, icon) {
    if (icon < 0) {
      return false;
    }
    const name = PdfAnnotationIcon[icon];
    if (typeof name !== "string") {
      return false;
    }
    return this.setAnnotString(annotationPtr, "Name", name);
  }
  /**
   * Get the reply type of the annotation (RT property per ISO 32000-2)
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @returns \`PdfAnnotationReplyType\`
   */
  getReplyType(annotationPtr) {
    return this.pdfiumModule.EPDFAnnot_GetReplyType(annotationPtr);
  }
  /**
   * Set the reply type of the annotation (RT property per ISO 32000-2)
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param replyType - \`PdfAnnotationReplyType\`
   * @returns \`true\` on success
   */
  setReplyType(annotationPtr, replyType) {
    return this.pdfiumModule.EPDFAnnot_SetReplyType(
      annotationPtr,
      replyType ?? PdfAnnotationReplyType.Unknown
    );
  }
  /**
   * Border-effect (“cloudy”) helper
   *
   * Calls the new PDFium function \`EPDFAnnot_GetBorderEffect()\` (July 2025).
   *
   * @param  annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ ok, intensity }\`
   *          • \`ok\`        – \`true\` when the annotation *does* have a
   *                          valid cloudy-border effect
   *          • \`intensity\` – radius/intensity value (0 when \`ok\` is false)
   */
  getBorderEffect(annotationPtr) {
    const intensityPtr = this.memoryManager.malloc(4);
    const ok = !!this.pdfiumModule.EPDFAnnot_GetBorderEffect(annotationPtr, intensityPtr);
    const intensity = ok ? this.pdfiumModule.pdfium.getValue(intensityPtr, "float") : 0;
    this.memoryManager.free(intensityPtr);
    return { ok, intensity };
  }
  /**
   * Rectangle-differences helper ( /RD array on Square / Circle annots )
   *
   * Calls \`EPDFAnnot_GetRectangleDifferences()\` introduced in July 2025.
   *
   * @param  annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ ok, left, top, right, bottom }\`
   *          • \`ok\`     – \`true\` when the annotation *has* an /RD entry
   *          • the four floats are 0 when \`ok\` is false
   */
  getRectangleDifferences(annotationPtr) {
    const lPtr = this.memoryManager.malloc(4);
    const tPtr = this.memoryManager.malloc(4);
    const rPtr = this.memoryManager.malloc(4);
    const bPtr = this.memoryManager.malloc(4);
    const ok = !!this.pdfiumModule.EPDFAnnot_GetRectangleDifferences(
      annotationPtr,
      lPtr,
      bPtr,
      rPtr,
      tPtr
    );
    const pdf = this.pdfiumModule.pdfium;
    const left = pdf.getValue(lPtr, "float");
    const top = pdf.getValue(tPtr, "float");
    const right = pdf.getValue(rPtr, "float");
    const bottom = pdf.getValue(bPtr, "float");
    this.memoryManager.free(lPtr);
    this.memoryManager.free(tPtr);
    this.memoryManager.free(rPtr);
    this.memoryManager.free(bPtr);
    return { ok, left, top, right, bottom };
  }
  /**
   * Sets the /RD array on an annotation.
   *
   * @param annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @param rd  the four inset values, or \`undefined\` to clear
   * @returns \`true\` on success
   */
  setRectangleDifferences(annotationPtr, rd) {
    if (!rd) {
      return this.pdfiumModule.EPDFAnnot_ClearRectangleDifferences(annotationPtr);
    }
    return this.pdfiumModule.EPDFAnnot_SetRectangleDifferences(
      annotationPtr,
      rd.left,
      rd.bottom,
      rd.right,
      rd.top
    );
  }
  /**
   * Sets or clears the /BE (border effect) dictionary on an annotation.
   *
   * @param annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @param intensity  cloudy border intensity, or \`undefined\` to clear
   * @returns \`true\` on success
   */
  setBorderEffect(annotationPtr, intensity) {
    if (intensity === void 0 || intensity <= 0) {
      return this.pdfiumModule.EPDFAnnot_ClearBorderEffect(annotationPtr);
    }
    return this.pdfiumModule.EPDFAnnot_SetBorderEffect(annotationPtr, intensity);
  }
  /**
   * Get the date of the annotation
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param key - 'M' for modified date, 'CreationDate' for creation date
   * @returns \`Date\` or \`undefined\` when PDFium can't read the date
   */
  getAnnotationDate(annotationPtr, key) {
    const raw = this.getAnnotString(annotationPtr, key);
    return raw ? pdfDateToDate(raw) : void 0;
  }
  /**
   * Set the date of the annotation
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param key - 'M' for modified date, 'CreationDate' for creation date
   * @param date - \`Date\` to set
   * @returns \`true\` on success
   */
  setAnnotationDate(annotationPtr, key, date) {
    const raw = dateToPdfDate(date);
    return this.setAnnotString(annotationPtr, key, raw);
  }
  /**
   * Get the date of the attachment
   *
   * @param attachmentPtr - pointer to an \`FPDF_ATTACHMENT\`
   * @param key - 'ModDate' for modified date, 'CreationDate' for creation date
   * @returns \`Date\` or \`undefined\` when PDFium can't read the date
   */
  getAttachmentDate(attachmentPtr, key) {
    const raw = this.getAttachmentString(attachmentPtr, key);
    return raw ? pdfDateToDate(raw) : void 0;
  }
  /**
   * Set the date of the attachment
   *
   * @param attachmentPtr - pointer to an \`FPDF_ATTACHMENT\`
   * @param key - 'ModDate' for modified date, 'CreationDate' for creation date
   * @param date - \`Date\` to set
   * @returns \`true\` on success
   */
  setAttachmentDate(attachmentPtr, key, date) {
    const raw = dateToPdfDate(date);
    return this.setAttachmentString(attachmentPtr, key, raw);
  }
  /**
   * Dash-pattern helper ( /BS → /D array, dashed borders only )
   *
   * Uses the two new PDFium helpers:
   *   • \`EPDFAnnot_GetBorderDashPatternCount\`
   *   • \`EPDFAnnot_GetBorderDashPattern\`
   *
   * @param  annotationPtr  pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ ok, pattern }\`
   *          • \`ok\`       – \`true\` when the annot is dashed *and* the array
   *                          was retrieved successfully
   *          • \`pattern\`  – numeric array of dash/space lengths (empty when \`ok\` is false)
   */
  getBorderDashPattern(annotationPtr) {
    const count = this.pdfiumModule.EPDFAnnot_GetBorderDashPatternCount(annotationPtr);
    if (count === 0) {
      return { ok: false, pattern: [] };
    }
    const arrPtr = this.memoryManager.malloc(4 * count);
    const okNative = !!this.pdfiumModule.EPDFAnnot_GetBorderDashPattern(
      annotationPtr,
      arrPtr,
      count
    );
    const pattern = [];
    if (okNative) {
      const pdf = this.pdfiumModule.pdfium;
      for (let i = 0; i < count; i++) {
        pattern.push(pdf.getValue(arrPtr + 4 * i, "float"));
      }
    }
    this.memoryManager.free(arrPtr);
    return { ok: okNative, pattern };
  }
  /**
   * Write the /BS /D dash pattern array for an annotation border.
   *
   * @param annotationPtr Pointer to FPDF_ANNOTATION
   * @param pattern       Array of dash/space lengths in *points* (e.g. [3, 2])
   *                      Empty array clears the pattern (solid line).
   * @returns true on success
   *
   * @private
   */
  setBorderDashPattern(annotationPtr, pattern) {
    if (!pattern || pattern.length === 0) {
      return this.pdfiumModule.EPDFAnnot_SetBorderDashPattern(annotationPtr, 0, 0);
    }
    const clean = pattern.map((n) => Number.isFinite(n) && n > 0 ? n : 0).filter((n) => n > 0);
    if (clean.length === 0) {
      return this.pdfiumModule.EPDFAnnot_SetBorderDashPattern(annotationPtr, 0, 0);
    }
    const bytes = 4 * clean.length;
    const bufPtr = this.memoryManager.malloc(bytes);
    for (let i = 0; i < clean.length; i++) {
      this.pdfiumModule.pdfium.setValue(bufPtr + 4 * i, clean[i], "float");
    }
    const ok = !!this.pdfiumModule.EPDFAnnot_SetBorderDashPattern(
      annotationPtr,
      bufPtr,
      clean.length
    );
    this.memoryManager.free(bufPtr);
    return ok;
  }
  /**
   * Return the \`/LE\` array (start/end line-ending styles) for a LINE / POLYLINE annot.
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ start, end }\` or \`undefined\` when PDFium can't read them
   *
   * @private
   */
  getLineEndings(annotationPtr) {
    const startPtr = this.memoryManager.malloc(4);
    const endPtr = this.memoryManager.malloc(4);
    const ok = !!this.pdfiumModule.EPDFAnnot_GetLineEndings(annotationPtr, startPtr, endPtr);
    if (!ok) {
      this.memoryManager.free(startPtr);
      this.memoryManager.free(endPtr);
      return void 0;
    }
    const start = this.pdfiumModule.pdfium.getValue(startPtr, "i32");
    const end = this.pdfiumModule.pdfium.getValue(endPtr, "i32");
    this.memoryManager.free(startPtr);
    this.memoryManager.free(endPtr);
    return { start, end };
  }
  /**
   * Write the \`/LE\` array (start/end line-ending styles) for a LINE / POLYLINE annot.
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param start - start line ending style
   * @param end - end line ending style
   * @returns \`true\` on success
   */
  setLineEndings(annotationPtr, start, end) {
    return !!this.pdfiumModule.EPDFAnnot_SetLineEndings(annotationPtr, start, end);
  }
  getCalloutLine(doc, page, annotationPtr) {
    const count = this.pdfiumModule.EPDFAnnot_GetCalloutLineCount(annotationPtr);
    if (count === 0) {
      return void 0;
    }
    const FS_POINTF_SIZE = 8;
    const pointsPtr = this.memoryManager.malloc(count * FS_POINTF_SIZE);
    const result = this.pdfiumModule.EPDFAnnot_GetCalloutLine(annotationPtr, pointsPtr, count);
    if (result === 0) {
      this.memoryManager.free(pointsPtr);
      return void 0;
    }
    const points = [];
    for (let i = 0; i < count; i++) {
      const px = this.pdfiumModule.pdfium.getValue(pointsPtr + i * FS_POINTF_SIZE, "float");
      const py = this.pdfiumModule.pdfium.getValue(pointsPtr + i * FS_POINTF_SIZE + 4, "float");
      points.push(this.convertPagePointToDevicePoint(doc, page, { x: px, y: py }));
    }
    this.memoryManager.free(pointsPtr);
    return points;
  }
  setCalloutLine(doc, page, annotPtr, points) {
    const pdf = this.pdfiumModule.pdfium;
    const FS_POINTF_SIZE = 8;
    const buf = this.memoryManager.malloc(FS_POINTF_SIZE * points.length);
    points.forEach((v, i) => {
      const pagePt = this.convertDevicePointToPagePoint(doc, page, v);
      pdf.setValue(buf + i * FS_POINTF_SIZE + 0, pagePt.x, "float");
      pdf.setValue(buf + i * FS_POINTF_SIZE + 4, pagePt.y, "float");
    });
    const ok = this.pdfiumModule.EPDFAnnot_SetCalloutLine(annotPtr, buf, points.length);
    this.memoryManager.free(buf);
    return ok;
  }
  /**
   * Get the start and end points of a LINE / POLYLINE annot.
   * @param doc - pdf document object
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param page - logical page info object (\`PdfPageObject\`)
   * @returns \`{ start, end }\` or \`undefined\` when PDFium can't read them
   */
  getLinePoints(doc, page, annotationPtr) {
    const startPtr = this.memoryManager.malloc(8);
    const endPtr = this.memoryManager.malloc(8);
    const ok = this.pdfiumModule.FPDFAnnot_GetLine(annotationPtr, startPtr, endPtr);
    if (!ok) {
      this.memoryManager.free(startPtr);
      this.memoryManager.free(endPtr);
      return void 0;
    }
    const pdf = this.pdfiumModule.pdfium;
    const sx = pdf.getValue(startPtr + 0, "float");
    const sy = pdf.getValue(startPtr + 4, "float");
    const ex = pdf.getValue(endPtr + 0, "float");
    const ey = pdf.getValue(endPtr + 4, "float");
    this.memoryManager.free(startPtr);
    this.memoryManager.free(endPtr);
    const start = this.convertPagePointToDevicePoint(doc, page, { x: sx, y: sy });
    const end = this.convertPagePointToDevicePoint(doc, page, { x: ex, y: ey });
    return { start, end };
  }
  /**
   * Set the two end‑points of a **Line** annotation
   * by writing a new /L array \`[ x1 y1 x2 y2 ]\`.
   * @param doc - pdf document object
   * @param page - logical page info object (\`PdfPageObject\`)
   * @param annotPtr - pointer to the annotation whose line points are needed
   * @param start - start point
   * @param end - end point
   * @returns true on success
   */
  setLinePoints(doc, page, annotPtr, start, end) {
    const p1 = this.convertDevicePointToPagePoint(doc, page, start);
    const p2 = this.convertDevicePointToPagePoint(doc, page, end);
    if (!p1 || !p2) return false;
    const buf = this.memoryManager.malloc(16);
    const pdf = this.pdfiumModule.pdfium;
    pdf.setValue(buf + 0, p1.x, "float");
    pdf.setValue(buf + 4, p1.y, "float");
    pdf.setValue(buf + 8, p2.x, "float");
    pdf.setValue(buf + 12, p2.y, "float");
    const ok = this.pdfiumModule.EPDFAnnot_SetLine(annotPtr, buf, buf + 8);
    this.memoryManager.free(buf);
    return !!ok;
  }
  /**
   * Read \`/QuadPoints\` from any annotation and convert each quadrilateral to
   * device-space coordinates.
   *
   * The four points are returned in natural reading order:
   *   \`p1 → p2\` (top edge) and \`p4 → p3\` (bottom edge).
   * This preserves the true shape for rotated / skewed text, whereas callers
   * that only need axis-aligned boxes can collapse each quad themselves.
   *
   * @param doc           - pdf document object
   * @param page          - logical page info object (\`PdfPageObject\`)
   * @param annotationPtr - pointer to the annotation whose quads are needed
   * @returns Array of \`Rect\` objects (\`[]\` if the annotation has no quads)
   *
   * @private
   */
  getQuadPointsAnno(doc, page, annotationPtr) {
    const quadCount = this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(annotationPtr);
    if (quadCount === 0) return [];
    const FS_QUADPOINTSF_SIZE = 8 * 4;
    const quads = [];
    for (let qi = 0; qi < quadCount; qi++) {
      const quadPtr = this.memoryManager.malloc(FS_QUADPOINTSF_SIZE);
      const ok = this.pdfiumModule.FPDFAnnot_GetAttachmentPoints(annotationPtr, qi, quadPtr);
      if (ok) {
        const xs = [];
        const ys = [];
        for (let i = 0; i < 4; i++) {
          const base = quadPtr + i * 8;
          xs.push(this.pdfiumModule.pdfium.getValue(base, "float"));
          ys.push(this.pdfiumModule.pdfium.getValue(base + 4, "float"));
        }
        const p1 = this.convertPagePointToDevicePoint(doc, page, { x: xs[0], y: ys[0] });
        const p2 = this.convertPagePointToDevicePoint(doc, page, { x: xs[1], y: ys[1] });
        const p3 = this.convertPagePointToDevicePoint(doc, page, { x: xs[2], y: ys[2] });
        const p4 = this.convertPagePointToDevicePoint(doc, page, { x: xs[3], y: ys[3] });
        quads.push({ p1, p2, p3, p4 });
      }
      this.memoryManager.free(quadPtr);
    }
    return quads.map(quadToRect);
  }
  /**
   * Set the quadrilaterals for a **Highlight / Underline / StrikeOut / Squiggly** markup annotation.
   *
   * @param doc           - pdf document object
   * @param page          - logical page info object (\`PdfPageObject\`)
   * @param annotationPtr - pointer to the annotation whose quads are needed
   * @param rects         - array of \`Rect\` objects (\`[]\` if the annotation has no quads)
   * @returns \`true\` if the operation was successful
   *
   * @private
   */
  syncQuadPointsAnno(doc, page, annotPtr, rects) {
    const FS_QUADPOINTSF_SIZE = 8 * 4;
    const pdf = this.pdfiumModule.pdfium;
    const count = this.pdfiumModule.FPDFAnnot_CountAttachmentPoints(annotPtr);
    const buf = this.memoryManager.malloc(FS_QUADPOINTSF_SIZE);
    const writeQuad = (r) => {
      const q = rectToQuad(r);
      const p1 = this.convertDevicePointToPagePoint(doc, page, q.p1);
      const p2 = this.convertDevicePointToPagePoint(doc, page, q.p2);
      const p3 = this.convertDevicePointToPagePoint(doc, page, q.p3);
      const p4 = this.convertDevicePointToPagePoint(doc, page, q.p4);
      pdf.setValue(buf + 0, p1.x, "float");
      pdf.setValue(buf + 4, p1.y, "float");
      pdf.setValue(buf + 8, p2.x, "float");
      pdf.setValue(buf + 12, p2.y, "float");
      pdf.setValue(buf + 16, p4.x, "float");
      pdf.setValue(buf + 20, p4.y, "float");
      pdf.setValue(buf + 24, p3.x, "float");
      pdf.setValue(buf + 28, p3.y, "float");
    };
    const min = Math.min(count, rects.length);
    for (let i = 0; i < min; i++) {
      writeQuad(rects[i]);
      if (!this.pdfiumModule.FPDFAnnot_SetAttachmentPoints(annotPtr, i, buf)) {
        this.memoryManager.free(buf);
        return false;
      }
    }
    for (let i = count; i < rects.length; i++) {
      writeQuad(rects[i]);
      if (!this.pdfiumModule.FPDFAnnot_AppendAttachmentPoints(annotPtr, buf)) {
        this.memoryManager.free(buf);
        return false;
      }
    }
    this.memoryManager.free(buf);
    return true;
  }
  /**
   * Redact text that intersects ANY of the provided **quads** (device-space).
   * Returns \`true\` if the page changed. Always regenerates the page stream.
   */
  redactTextInRects(doc, page, rects, options) {
    const { recurseForms = true, drawBlackBoxes = false } = options ?? {};
    this.logger.debug(
      "PDFiumEngine",
      "Engine",
      "redactTextInQuads",
      doc.id,
      page.index,
      rects.length
    );
    const label = "RedactTextInQuads";
    this.logger.perf("PDFiumEngine", "Engine", label, "Begin", \`\${doc.id}-\${page.index}\`);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf("PDFiumEngine", "Engine", label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const clean = (rects ?? []).filter(
      (r) => {
        var _a, _b, _c, _d;
        return r && Number.isFinite((_a = r.origin) == null ? void 0 : _a.x) && Number.isFinite((_b = r.origin) == null ? void 0 : _b.y) && Number.isFinite((_c = r.size) == null ? void 0 : _c.width) && Number.isFinite((_d = r.size) == null ? void 0 : _d.height) && r.size.width > 0 && r.size.height > 0;
      }
    );
    if (clean.length === 0) {
      this.logger.perf("PDFiumEngine", "Engine", label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.resolve(false);
    }
    const pageCtx = ctx.acquirePage(page.index);
    const { ptr, count } = this.allocFSQuadsBufferFromRects(doc, page, clean);
    let ok = false;
    try {
      ok = !!this.pdfiumModule.EPDFText_RedactInQuads(
        pageCtx.pagePtr,
        ptr,
        count,
        recurseForms ? true : false,
        false
      );
    } finally {
      this.memoryManager.free(ptr);
    }
    if (ok) {
      ok = !!this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    }
    pageCtx.disposeImmediate();
    this.logger.perf("PDFiumEngine", "Engine", label, "End", \`\${doc.id}-\${page.index}\`);
    return PdfTaskHelper.resolve(!!ok);
  }
  /**
   * Apply a single redaction annotation, permanently removing content underneath
   * and flattening the RO (Redact Overlay) appearance stream if present.
   * The annotation is removed after successful application.
   *
   * @param doc - document object
   * @param page - page object
   * @param annotation - the redact annotation to apply
   * @returns true if successful
   */
  applyRedaction(doc, page, annotation) {
    this.logger.debug(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "applyRedaction",
      doc.id,
      page.index,
      annotation.id
    );
    const label = "ApplyRedaction";
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "Begin", \`\${doc.id}-\${page.index}\`);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const annotPtr = this.getAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!annotPtr) {
      pageCtx.release();
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.NotFound,
        message: "annotation not found"
      });
    }
    const ok = this.pdfiumModule.EPDFAnnot_ApplyRedaction(pageCtx.pagePtr, annotPtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
    if (ok) {
      this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    }
    pageCtx.disposeImmediate();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
    return PdfTaskHelper.resolve(!!ok);
  }
  /**
   * Apply all redaction annotations on a page, permanently removing content
   * underneath each one and flattening RO streams if present.
   * All redact annotations are removed after successful application.
   *
   * @param doc - document object
   * @param page - page object
   * @returns true if any redactions were applied
   */
  applyAllRedactions(doc, page) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "applyAllRedactions", doc.id, page.index);
    const label = "ApplyAllRedactions";
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "Begin", \`\${doc.id}-\${page.index}\`);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const ok = this.pdfiumModule.EPDFPage_ApplyRedactions(pageCtx.pagePtr);
    if (ok) {
      this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    }
    pageCtx.disposeImmediate();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
    return PdfTaskHelper.resolve(!!ok);
  }
  /**
   * Flatten an annotation's appearance (AP/N) to page content.
   * The annotation's visual appearance becomes part of the page itself.
   * The annotation is automatically removed after flattening.
   *
   * @param doc - document object
   * @param page - page object
   * @param annotation - the annotation to flatten
   * @returns true if successful
   */
  flattenAnnotation(doc, page, annotation) {
    this.logger.debug(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "flattenAnnotation",
      doc.id,
      page.index,
      annotation.id
    );
    const label = "FlattenAnnotation";
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "Begin", \`\${doc.id}-\${page.index}\`);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const annotPtr = this.getAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!annotPtr) {
      pageCtx.release();
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.NotFound,
        message: "annotation not found"
      });
    }
    const ok = this.pdfiumModule.EPDFAnnot_Flatten(pageCtx.pagePtr, annotPtr);
    this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
    if (ok) {
      this.pdfiumModule.FPDFPage_GenerateContent(pageCtx.pagePtr);
    }
    pageCtx.disposeImmediate();
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, label, "End", \`\${doc.id}-\${page.index}\`);
    return PdfTaskHelper.resolve(!!ok);
  }
  /** Pack device-space Rects into an FS_QUADPOINTSF[] buffer (page space). */
  allocFSQuadsBufferFromRects(doc, page, rects) {
    const STRIDE = 32;
    const count = rects.length;
    const ptr = this.memoryManager.malloc(STRIDE * count);
    const pdf = this.pdfiumModule.pdfium;
    for (let i = 0; i < count; i++) {
      const r = rects[i];
      const q = rectToQuad(r);
      const p1 = this.convertDevicePointToPagePoint(doc, page, q.p1);
      const p2 = this.convertDevicePointToPagePoint(doc, page, q.p2);
      const p3 = this.convertDevicePointToPagePoint(doc, page, q.p3);
      const p4 = this.convertDevicePointToPagePoint(doc, page, q.p4);
      const base = ptr + i * STRIDE;
      pdf.setValue(base + 0, p1.x, "float");
      pdf.setValue(base + 4, p1.y, "float");
      pdf.setValue(base + 8, p2.x, "float");
      pdf.setValue(base + 12, p2.y, "float");
      pdf.setValue(base + 16, p4.x, "float");
      pdf.setValue(base + 20, p4.y, "float");
      pdf.setValue(base + 24, p3.x, "float");
      pdf.setValue(base + 28, p3.y, "float");
    }
    return { ptr, count };
  }
  /**
   * Read ink list from annotation
   * @param doc - pdf document object
   * @param page  - logical page info object (\`PdfPageObject\`)
   * @param pagePtr - pointer to the page
   * @param annotationPtr - pointer to the annotation whose ink list is needed
   * @returns ink list
   */
  getInkList(doc, page, annotationPtr) {
    const inkList = [];
    const pathCount = this.pdfiumModule.FPDFAnnot_GetInkListCount(annotationPtr);
    if (pathCount <= 0) return inkList;
    const pdf = this.pdfiumModule.pdfium;
    const POINT_STRIDE = 8;
    for (let i = 0; i < pathCount; i++) {
      const points = [];
      const n = this.pdfiumModule.FPDFAnnot_GetInkListPath(annotationPtr, i, 0, 0);
      if (n > 0) {
        const buf = this.memoryManager.malloc(n * POINT_STRIDE);
        this.pdfiumModule.FPDFAnnot_GetInkListPath(annotationPtr, i, buf, n);
        for (let j = 0; j < n; j++) {
          const base = buf + j * POINT_STRIDE;
          const px = pdf.getValue(base + 0, "float");
          const py = pdf.getValue(base + 4, "float");
          const d = this.convertPagePointToDevicePoint(doc, page, { x: px, y: py });
          points.push({ x: d.x, y: d.y });
        }
        this.memoryManager.free(buf);
      }
      inkList.push({ points });
    }
    return inkList;
  }
  /**
   * Add ink list to annotation
   * @param doc - pdf document object
   * @param page  - logical page info object (\`PdfPageObject\`)
   * @param pagePtr - pointer to the page
   * @param annotationPtr - pointer to the annotation whose ink list is needed
   * @param inkList - ink list array of \`PdfInkListObject\`
   * @returns \`true\` if the operation was successful
   */
  setInkList(doc, page, annotationPtr, inkList) {
    const pdf = this.pdfiumModule.pdfium;
    const POINT_STRIDE = 8;
    for (const stroke of inkList) {
      const n = stroke.points.length;
      if (n === 0) continue;
      const buf = this.memoryManager.malloc(n * POINT_STRIDE);
      for (let i = 0; i < n; i++) {
        const pDev = stroke.points[i];
        const pPage = this.convertDevicePointToPagePoint(doc, page, pDev);
        pdf.setValue(buf + i * POINT_STRIDE + 0, pPage.x, "float");
        pdf.setValue(buf + i * POINT_STRIDE + 4, pPage.y, "float");
      }
      const idx = this.pdfiumModule.FPDFAnnot_AddInkStroke(annotationPtr, buf, n);
      this.memoryManager.free(buf);
      if (idx === -1) {
        return false;
      }
    }
    return true;
  }
  /**
   * Read pdf text annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf text annotation
   *
   * @private
   */
  readPdfTextAnno(doc, page, annotationPtr, index) {
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, annoRect);
    const state = this.getAnnotString(annotationPtr, "State");
    const stateModel = this.getAnnotString(annotationPtr, "StateModel");
    const color = this.getAnnotationColor(annotationPtr);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const icon = this.getAnnotationIcon(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.TEXT,
      rect,
      strokeColor: color ?? "#FFFF00",
      color: color ?? "#FFFF00",
      opacity,
      state,
      stateModel,
      icon,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf freetext annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf freetext annotation
   *
   * @private
   */
  readPdfFreeTextAnno(doc, page, annotationPtr, index) {
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, annoRect);
    const defaultStyle = this.getAnnotString(annotationPtr, "DS");
    const da = this.getAnnotationDefaultAppearance(annotationPtr);
    const bgColor = this.getAnnotationColor(annotationPtr);
    const textColor = this.getAnnotationColor(annotationPtr, PdfAnnotationColorType.TextColor);
    const borderStyle = this.getBorderStyle(annotationPtr);
    const textAlign = this.getAnnotationTextAlignment(annotationPtr);
    const verticalAlign = this.getAnnotationVerticalAlignment(annotationPtr);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const richContent = this.getAnnotRichContent(annotationPtr);
    const rd = this.getRectangleDifferences(annotationPtr);
    const intent = this.getAnnotIntent(annotationPtr);
    const calloutLine = this.getCalloutLine(doc, page, annotationPtr);
    const lineEndings = this.getLineEndings(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.FREETEXT,
      rect,
      fontFamily: (da == null ? void 0 : da.fontFamily) ?? PdfStandardFont.Unknown,
      fontSize: (da == null ? void 0 : da.fontSize) ?? 12,
      fontColor: textColor ?? (da == null ? void 0 : da.fontColor) ?? "#000000",
      verticalAlign,
      color: bgColor,
      // fill color (matches shape convention)
      backgroundColor: bgColor,
      // deprecated alias
      opacity,
      textAlign,
      defaultStyle,
      richContent,
      ...rd.ok && {
        rectangleDifferences: {
          left: rd.left,
          top: rd.top,
          right: rd.right,
          bottom: rd.bottom
        }
      },
      ...intent && { intent },
      ...calloutLine && { calloutLine },
      ...lineEndings && { lineEnding: lineEndings.end },
      ...borderStyle.width > 0 ? { strokeWidth: borderStyle.width, strokeColor: (da == null ? void 0 : da.fontColor) ?? "#000000" } : intent === "FreeTextCallout" ? { strokeWidth: 1, strokeColor: (da == null ? void 0 : da.fontColor) ?? "#000000" } : {},
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf link annotation from pdf document
   * @param page  - pdf page infor
   * @param docPtr - pointer to pdf document object
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf link annotation
   *
   * @private
   */
  readPdfLinkAnno(doc, page, docPtr, annotationPtr, index) {
    const linkPtr = this.pdfiumModule.FPDFAnnot_GetLink(annotationPtr);
    if (!linkPtr) {
      return;
    }
    const annoRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, annoRect);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr, PdfAnnotationColorType.Color);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    const target = this.readPdfLinkAnnoTarget(
      docPtr,
      () => {
        return this.pdfiumModule.FPDFLink_GetAction(linkPtr);
      },
      () => {
        return this.pdfiumModule.FPDFLink_GetDest(docPtr, linkPtr);
      }
    );
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.LINK,
      rect,
      target,
      strokeColor,
      strokeWidth,
      strokeStyle,
      strokeDashArray,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf widget annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param formHandle - form handle
   * @param index  - index of annotation in the pdf page
   * @returns pdf widget annotation
   *
   * @private
   */
  readPdfWidgetAnno(doc, page, annotationPtr, formHandle, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const field = this.readPdfWidgetAnnoField(formHandle, annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.WIDGET,
      rect,
      field,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf file attachment annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf file attachment annotation
   *
   * @private
   */
  readPdfFileAttachmentAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.FILEATTACHMENT,
      rect,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf ink annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf ink annotation
   *
   * @private
   */
  readPdfInkAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const strokeColor = this.getAnnotationColor(annotationPtr) ?? "#FF0000";
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { width: strokeWidth } = this.getBorderStyle(annotationPtr);
    const inkList = this.getInkList(doc, page, annotationPtr);
    const intent = this.getAnnotIntent(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.INK,
      rect,
      ...intent && { intent },
      strokeColor,
      color: strokeColor,
      // deprecated alias
      opacity,
      strokeWidth: strokeWidth === 0 ? 1 : strokeWidth,
      inkList,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf polygon annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf polygon annotation
   *
   * @private
   */
  readPdfPolygonAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const vertices = this.readPdfAnnoVertices(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const interiorColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.InteriorColor
    );
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    if (vertices.length > 1) {
      const first = vertices[0];
      const last = vertices[vertices.length - 1];
      if (first.x === last.x && first.y === last.y) {
        vertices.pop();
      }
    }
    const rd = this.getRectangleDifferences(annotationPtr);
    const be = this.getBorderEffect(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.POLYGON,
      rect,
      strokeColor: strokeColor ?? "#FF0000",
      color: interiorColor ?? "transparent",
      opacity,
      strokeWidth: strokeWidth === 0 ? 1 : strokeWidth,
      strokeStyle,
      strokeDashArray,
      vertices,
      ...be.ok && { cloudyBorderIntensity: be.intensity },
      ...rd.ok && {
        rectangleDifferences: {
          left: rd.left,
          top: rd.top,
          right: rd.right,
          bottom: rd.bottom
        }
      },
      ...this.readMeasurementProperties(annotationPtr),
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf polyline annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf polyline annotation
   *
   * @private
   */
  readPdfPolylineAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const vertices = this.readPdfAnnoVertices(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const interiorColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.InteriorColor
    );
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    const lineEndings = this.getLineEndings(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.POLYLINE,
      rect,
      strokeColor: strokeColor ?? "#FF0000",
      color: interiorColor ?? "transparent",
      opacity,
      strokeWidth: strokeWidth === 0 ? 1 : strokeWidth,
      strokeStyle,
      strokeDashArray,
      lineEndings,
      vertices,
      ...this.readMeasurementProperties(annotationPtr),
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf line annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf line annotation
   *
   * @private
   */
  readPdfLineAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const linePoints = this.getLinePoints(doc, page, annotationPtr);
    const lineEndings = this.getLineEndings(annotationPtr);
    const leaderLength = this.readLeaderLength(annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const interiorColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.InteriorColor
    );
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.LINE,
      rect,
      strokeWidth: strokeWidth === 0 ? 1 : strokeWidth,
      strokeStyle,
      strokeDashArray,
      strokeColor: strokeColor ?? "#FF0000",
      color: interiorColor ?? "transparent",
      opacity,
      linePoints: linePoints || { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } },
      lineEndings: lineEndings || {
        start: PdfAnnotationLineEnding.None,
        end: PdfAnnotationLineEnding.None
      },
      ...leaderLength !== void 0 && { leaderLength },
      ...this.readMeasurementProperties(annotationPtr),
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf highlight annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf highlight annotation
   *
   * @private
   */
  readPdfHighlightAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const segmentRects = this.getQuadPointsAnno(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr) ?? "#FFFF00";
    const opacity = this.getAnnotationOpacity(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.HIGHLIGHT,
      rect,
      segmentRects,
      strokeColor,
      color: strokeColor,
      // deprecated alias
      opacity,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf underline annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf underline annotation
   *
   * @private
   */
  readPdfUnderlineAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const segmentRects = this.getQuadPointsAnno(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr) ?? "#FF0000";
    const opacity = this.getAnnotationOpacity(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.UNDERLINE,
      rect,
      segmentRects,
      strokeColor,
      color: strokeColor,
      // deprecated alias
      opacity,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read strikeout annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf strikeout annotation
   *
   * @private
   */
  readPdfStrikeOutAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const segmentRects = this.getQuadPointsAnno(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr) ?? "#FF0000";
    const opacity = this.getAnnotationOpacity(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.STRIKEOUT,
      rect,
      segmentRects,
      strokeColor,
      color: strokeColor,
      // deprecated alias
      opacity,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf squiggly annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf squiggly annotation
   *
   * @private
   */
  readPdfSquigglyAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const segmentRects = this.getQuadPointsAnno(doc, page, annotationPtr);
    const strokeColor = this.getAnnotationColor(annotationPtr) ?? "#FF0000";
    const opacity = this.getAnnotationOpacity(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.SQUIGGLY,
      rect,
      segmentRects,
      strokeColor,
      color: strokeColor,
      // deprecated alias
      opacity,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf caret annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf caret annotation
   *
   * @private
   */
  readPdfCaretAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const intent = this.getAnnotIntent(annotationPtr);
    const rd = this.getRectangleDifferences(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.CARET,
      rect,
      strokeColor,
      opacity,
      intent,
      ...rd.ok && {
        rectangleDifferences: {
          left: rd.left,
          top: rd.top,
          right: rd.right,
          bottom: rd.bottom
        }
      },
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf redact annotation
   * @param page  - pdf page info
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf redact annotation
   *
   * @private
   */
  readPdfRedactAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const segmentRects = this.getQuadPointsAnno(doc, page, annotationPtr);
    const color = this.getAnnotationColor(annotationPtr, PdfAnnotationColorType.InteriorColor);
    const overlayColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.OverlayColor
    );
    const strokeColor = this.getAnnotationColor(annotationPtr, PdfAnnotationColorType.Color);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const overlayText = this.getOverlayText(annotationPtr);
    const overlayTextRepeat = this.getOverlayTextRepeat(annotationPtr);
    const da = this.getAnnotationDefaultAppearance(annotationPtr);
    const textAlign = this.getAnnotationTextAlignment(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.REDACT,
      rect,
      segmentRects,
      color,
      overlayColor,
      strokeColor,
      opacity,
      overlayText,
      overlayTextRepeat,
      fontFamily: da == null ? void 0 : da.fontFamily,
      fontSize: da == null ? void 0 : da.fontSize,
      fontColor: da == null ? void 0 : da.fontColor,
      textAlign,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf stamp annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf stamp annotation
   *
   * @private
   */
  readPdfStampAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.STAMP,
      rect,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read pdf object in pdf page
   * @param pageObjectPtr  - pointer to pdf object in page
   * @returns pdf object in page
   *
   * @private
   */
  readPdfPageObject(pageObjectPtr) {
    const type = this.pdfiumModule.FPDFPageObj_GetType(pageObjectPtr);
    switch (type) {
      case PdfPageObjectType.PATH:
        return this.readPathObject(pageObjectPtr);
      case PdfPageObjectType.IMAGE:
        return this.readImageObject(pageObjectPtr);
      case PdfPageObjectType.FORM:
        return this.readFormObject(pageObjectPtr);
    }
  }
  /**
   * Read pdf path object
   * @param pathObjectPtr  - pointer to pdf path object in page
   * @returns pdf path object
   *
   * @private
   */
  readPathObject(pathObjectPtr) {
    const segmentCount = this.pdfiumModule.FPDFPath_CountSegments(pathObjectPtr);
    const leftPtr = this.memoryManager.malloc(4);
    const bottomPtr = this.memoryManager.malloc(4);
    const rightPtr = this.memoryManager.malloc(4);
    const topPtr = this.memoryManager.malloc(4);
    this.pdfiumModule.FPDFPageObj_GetBounds(pathObjectPtr, leftPtr, bottomPtr, rightPtr, topPtr);
    const left = this.pdfiumModule.pdfium.getValue(leftPtr, "float");
    const bottom = this.pdfiumModule.pdfium.getValue(bottomPtr, "float");
    const right = this.pdfiumModule.pdfium.getValue(rightPtr, "float");
    const top = this.pdfiumModule.pdfium.getValue(topPtr, "float");
    const bounds = { left, bottom, right, top };
    this.memoryManager.free(leftPtr);
    this.memoryManager.free(bottomPtr);
    this.memoryManager.free(rightPtr);
    this.memoryManager.free(topPtr);
    const segments = [];
    for (let i = 0; i < segmentCount; i++) {
      const segment = this.readPdfSegment(pathObjectPtr, i);
      segments.push(segment);
    }
    const matrix = this.readPdfPageObjectTransformMatrix(pathObjectPtr);
    return {
      type: PdfPageObjectType.PATH,
      bounds,
      segments,
      matrix
    };
  }
  /**
   * Read segment of pdf path object
   * @param annotationObjectPtr - pointer to pdf path object
   * @param segmentIndex - index of segment
   * @returns pdf segment in pdf path
   *
   * @private
   */
  readPdfSegment(annotationObjectPtr, segmentIndex) {
    const segmentPtr = this.pdfiumModule.FPDFPath_GetPathSegment(annotationObjectPtr, segmentIndex);
    const segmentType = this.pdfiumModule.FPDFPathSegment_GetType(segmentPtr);
    const isClosed = this.pdfiumModule.FPDFPathSegment_GetClose(segmentPtr);
    const pointXPtr = this.memoryManager.malloc(4);
    const pointYPtr = this.memoryManager.malloc(4);
    this.pdfiumModule.FPDFPathSegment_GetPoint(segmentPtr, pointXPtr, pointYPtr);
    const pointX = this.pdfiumModule.pdfium.getValue(pointXPtr, "float");
    const pointY = this.pdfiumModule.pdfium.getValue(pointYPtr, "float");
    this.memoryManager.free(pointXPtr);
    this.memoryManager.free(pointYPtr);
    return {
      type: segmentType,
      point: { x: pointX, y: pointY },
      isClosed
    };
  }
  /**
   * Read pdf image object from pdf document
   * @param pageObjectPtr  - pointer to pdf image object in page
   * @returns pdf image object
   *
   * @private
   */
  readImageObject(imageObjectPtr) {
    const bitmapPtr = this.pdfiumModule.FPDFImageObj_GetBitmap(imageObjectPtr);
    const bitmapBufferPtr = this.pdfiumModule.FPDFBitmap_GetBuffer(bitmapPtr);
    const bitmapWidth = this.pdfiumModule.FPDFBitmap_GetWidth(bitmapPtr);
    const bitmapHeight = this.pdfiumModule.FPDFBitmap_GetHeight(bitmapPtr);
    const format = this.pdfiumModule.FPDFBitmap_GetFormat(bitmapPtr);
    const pixelCount = bitmapWidth * bitmapHeight;
    const bytesPerPixel = 4;
    const array = new Uint8ClampedArray(pixelCount * bytesPerPixel);
    for (let i = 0; i < pixelCount; i++) {
      switch (format) {
        case 2:
          {
            const blue = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3, "i8");
            const green = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3 + 1, "i8");
            const red = this.pdfiumModule.pdfium.getValue(bitmapBufferPtr + i * 3 + 2, "i8");
            array[i * bytesPerPixel] = red;
            array[i * bytesPerPixel + 1] = green;
            array[i * bytesPerPixel + 2] = blue;
            array[i * bytesPerPixel + 3] = 100;
          }
          break;
      }
    }
    const imageDataLike = {
      data: array,
      width: bitmapWidth,
      height: bitmapHeight
    };
    const matrix = this.readPdfPageObjectTransformMatrix(imageObjectPtr);
    return {
      type: PdfPageObjectType.IMAGE,
      imageData: imageDataLike,
      matrix
    };
  }
  /**
   * Read form object from pdf document
   * @param formObjectPtr  - pointer to pdf form object in page
   * @returns pdf form object
   *
   * @private
   */
  readFormObject(formObjectPtr) {
    const objectCount = this.pdfiumModule.FPDFFormObj_CountObjects(formObjectPtr);
    const objects = [];
    for (let i = 0; i < objectCount; i++) {
      const pageObjectPtr = this.pdfiumModule.FPDFFormObj_GetObject(formObjectPtr, i);
      const pageObj = this.readPdfPageObject(pageObjectPtr);
      if (pageObj) {
        objects.push(pageObj);
      }
    }
    const matrix = this.readPdfPageObjectTransformMatrix(formObjectPtr);
    return {
      type: PdfPageObjectType.FORM,
      objects,
      matrix
    };
  }
  /**
   * Read pdf object in pdf page
   * @param pageObjectPtr  - pointer to pdf object in page
   * @returns pdf object in page
   *
   * @private
   */
  readPdfPageObjectTransformMatrix(pageObjectPtr) {
    const matrixPtr = this.memoryManager.malloc(4 * 6);
    if (this.pdfiumModule.FPDFPageObj_GetMatrix(pageObjectPtr, matrixPtr)) {
      const a = this.pdfiumModule.pdfium.getValue(matrixPtr, "float");
      const b = this.pdfiumModule.pdfium.getValue(matrixPtr + 4, "float");
      const c = this.pdfiumModule.pdfium.getValue(matrixPtr + 8, "float");
      const d = this.pdfiumModule.pdfium.getValue(matrixPtr + 12, "float");
      const e = this.pdfiumModule.pdfium.getValue(matrixPtr + 16, "float");
      const f = this.pdfiumModule.pdfium.getValue(matrixPtr + 20, "float");
      this.memoryManager.free(matrixPtr);
      return { a, b, c, d, e, f };
    }
    this.memoryManager.free(matrixPtr);
    return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
  }
  /**
   * Read contents of a stamp annotation
   * @param annotationPtr - pointer to pdf annotation
   * @returns contents of the stamp annotation
   *
   * @private
   */
  readStampAnnotationContents(annotationPtr) {
    const contents = [];
    const objectCount = this.pdfiumModule.FPDFAnnot_GetObjectCount(annotationPtr);
    for (let i = 0; i < objectCount; i++) {
      const annotationObjectPtr = this.pdfiumModule.FPDFAnnot_GetObject(annotationPtr, i);
      const pageObj = this.readPdfPageObject(annotationObjectPtr);
      if (pageObj) {
        contents.push(pageObj);
      }
    }
    return contents;
  }
  /**
   * Return the stroke-width declared in the annotation’s /Border or /BS entry.
   * Falls back to 1 pt when nothing is defined.
   *
   * @param annotationPtr - pointer to pdf annotation
   * @returns stroke-width
   *
   * @private
   */
  getStrokeWidth(annotationPtr) {
    const hPtr = this.memoryManager.malloc(4);
    const vPtr = this.memoryManager.malloc(4);
    const wPtr = this.memoryManager.malloc(4);
    const ok = this.pdfiumModule.FPDFAnnot_GetBorder(annotationPtr, hPtr, vPtr, wPtr);
    const width = ok ? this.pdfiumModule.pdfium.getValue(wPtr, "float") : 1;
    this.memoryManager.free(hPtr);
    this.memoryManager.free(vPtr);
    this.memoryManager.free(wPtr);
    return width;
  }
  /**
   * Fetches the \`/F\` flag bit-field from an annotation.
   *
   * @param annotationPtr pointer to an \`FPDF_ANNOTATION\`
   * @returns \`{ raw, flags }\`
   *          • \`raw\`   – the 32-bit integer returned by PDFium
   *          • \`flags\` – object with individual booleans
   */
  getAnnotationFlags(annotationPtr) {
    const rawFlags = this.pdfiumModule.FPDFAnnot_GetFlags(annotationPtr);
    return flagsToNames(rawFlags);
  }
  setAnnotationFlags(annotationPtr, flags) {
    const rawFlags = namesToFlags(flags);
    return this.pdfiumModule.FPDFAnnot_SetFlags(annotationPtr, rawFlags);
  }
  /**
   * Read circle annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf circle annotation
   *
   * @private
   */
  readPdfCircleAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const interiorColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.InteriorColor
    );
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    const rd = this.getRectangleDifferences(annotationPtr);
    const be = this.getBorderEffect(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.CIRCLE,
      rect,
      color: interiorColor ?? "transparent",
      opacity,
      strokeWidth,
      strokeColor: strokeColor ?? "#FF0000",
      strokeStyle,
      ...strokeDashArray !== void 0 && { strokeDashArray },
      ...be.ok && { cloudyBorderIntensity: be.intensity },
      ...rd.ok && {
        rectangleDifferences: {
          left: rd.left,
          top: rd.top,
          right: rd.right,
          bottom: rd.bottom
        }
      },
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read square annotation
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf square annotation
   *
   * @private
   */
  readPdfSquareAnno(doc, page, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const interiorColor = this.getAnnotationColor(
      annotationPtr,
      PdfAnnotationColorType.InteriorColor
    );
    const strokeColor = this.getAnnotationColor(annotationPtr);
    const opacity = this.getAnnotationOpacity(annotationPtr);
    const { style: strokeStyle, width: strokeWidth } = this.getBorderStyle(annotationPtr);
    let strokeDashArray;
    if (strokeStyle === PdfAnnotationBorderStyle.DASHED) {
      const { ok, pattern } = this.getBorderDashPattern(annotationPtr);
      if (ok) {
        strokeDashArray = pattern;
      }
    }
    const rd = this.getRectangleDifferences(annotationPtr);
    const be = this.getBorderEffect(annotationPtr);
    return {
      pageIndex: page.index,
      id: index,
      type: PdfAnnotationSubtype.SQUARE,
      rect,
      color: interiorColor ?? "transparent",
      opacity,
      strokeColor: strokeColor ?? "#FF0000",
      strokeWidth,
      strokeStyle,
      ...strokeDashArray !== void 0 && { strokeDashArray },
      ...be.ok && { cloudyBorderIntensity: be.intensity },
      ...rd.ok && {
        rectangleDifferences: {
          left: rd.left,
          top: rd.top,
          right: rd.right,
          bottom: rd.bottom
        }
      },
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Read basic info of unsupported pdf annotation
   * @param page  - pdf page infor
   * @param type - type of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param index  - index of annotation in the pdf page
   * @returns pdf annotation
   *
   * @private
   */
  readPdfAnno(doc, page, type, annotationPtr, index) {
    const pageRect = this.readPageAnnoRect(annotationPtr);
    const rect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    return {
      pageIndex: page.index,
      id: index,
      type,
      rect,
      ...this.readBaseAnnotationProperties(doc, page, annotationPtr)
    };
  }
  /**
   * Resolve \`/IRT\` → parent-annotation index on the same page.
   *
   * @param pagePtr        - pointer to FPDF_PAGE
   * @param annotationPtr  - pointer to FPDF_ANNOTATION
   * @returns index (\`0…count-1\`) or \`undefined\` when the annotation is *not* a reply
   *
   * @private
   */
  getInReplyToId(annotationPtr) {
    const parentPtr = this.pdfiumModule.FPDFAnnot_GetLinkedAnnot(annotationPtr, "IRT");
    if (!parentPtr) return;
    let nm = this.getAnnotString(parentPtr, "NM");
    if (!nm || !isUuidV4(nm)) {
      nm = uuidV4();
      this.setAnnotString(parentPtr, "NM", nm);
    }
    this.pdfiumModule.FPDFPage_CloseAnnot(parentPtr);
    return nm;
  }
  /**
   * Set the in reply to id of the annotation
   *
   * @param annotationPtr - pointer to an \`FPDF_ANNOTATION\`
   * @param id - the id of the parent annotation
   * @returns \`true\` on success
   */
  setInReplyToId(pagePtr, annotationPtr, id) {
    if (!id) {
      return this.pdfiumModule.EPDFAnnot_SetLinkedAnnot(annotationPtr, "IRT", 0);
    }
    const parentPtr = this.getAnnotationByName(pagePtr, id);
    if (!parentPtr) return false;
    return this.pdfiumModule.EPDFAnnot_SetLinkedAnnot(annotationPtr, "IRT", parentPtr);
  }
  /**
   * Rotate a point around a center by the given angle in degrees.
   * Used to rotate vertices for PDF storage.
   */
  rotatePointForSave(point, center, angleDegrees) {
    const rad = angleDegrees * Math.PI / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const dx = point.x - center.x;
    const dy = point.y - center.y;
    return {
      x: center.x + dx * cos - dy * sin,
      y: center.y + dx * sin + dy * cos
    };
  }
  /**
   * Prepare an annotation for saving to PDF.
   * For vertex types (ink, line, polygon, polyline) with rotation,
   * physically rotates the vertices by +rotation so that other PDF viewers
   * see the correct visual result. Our viewer reverse-rotates on load.
   */
  prepareAnnotationForSave(annotation) {
    const rotation = annotation.rotation;
    const unrotatedRect = annotation.unrotatedRect;
    if (!rotation || rotation === 0 || !unrotatedRect) {
      return annotation;
    }
    const center = {
      x: unrotatedRect.origin.x + unrotatedRect.size.width / 2,
      y: unrotatedRect.origin.y + unrotatedRect.size.height / 2
    };
    switch (annotation.type) {
      case PdfAnnotationSubtype.INK: {
        const ink = annotation;
        const rotatedInkList = ink.inkList.map((stroke) => ({
          points: stroke.points.map((p) => this.rotatePointForSave(p, center, rotation))
        }));
        return { ...ink, inkList: rotatedInkList };
      }
      case PdfAnnotationSubtype.LINE: {
        const line = annotation;
        return {
          ...line,
          linePoints: {
            start: this.rotatePointForSave(line.linePoints.start, center, rotation),
            end: this.rotatePointForSave(line.linePoints.end, center, rotation)
          }
        };
      }
      case PdfAnnotationSubtype.POLYGON: {
        const poly = annotation;
        return {
          ...poly,
          vertices: poly.vertices.map((v) => this.rotatePointForSave(v, center, rotation))
        };
      }
      case PdfAnnotationSubtype.POLYLINE: {
        const polyline = annotation;
        return {
          ...polyline,
          vertices: polyline.vertices.map((v) => this.rotatePointForSave(v, center, rotation))
        };
      }
      default:
        return annotation;
    }
  }
  /**
   * Apply all base annotation properties from PdfAnnotationObjectBase.
   * The setInReplyToId and setReplyType functions handle clearing when undefined.
   *
   * @param pagePtr - pointer to page object
   * @param annotationPtr - pointer to annotation object
   * @param annotation - the annotation object containing properties to apply
   * @returns \`true\` on success
   */
  applyBaseAnnotationProperties(doc, page, pagePtr, annotationPtr, annotation) {
    if (!this.setAnnotString(annotationPtr, "T", annotation.author || "")) {
      return false;
    }
    if (!this.setAnnotString(annotationPtr, "Contents", annotation.contents ?? "")) {
      return false;
    }
    if (annotation.modified) {
      if (!this.setAnnotationDate(annotationPtr, "M", annotation.modified)) {
        return false;
      }
    }
    if (annotation.created) {
      if (!this.setAnnotationDate(annotationPtr, "CreationDate", annotation.created)) {
        return false;
      }
    }
    if (annotation.flags) {
      if (!this.setAnnotationFlags(annotationPtr, annotation.flags)) {
        return false;
      }
    }
    const existingCustom = this.getAnnotCustom(annotationPtr) ?? {};
    const customData = {
      ...existingCustom,
      ...annotation.custom ?? {}
    };
    delete customData.unrotatedRect;
    delete customData.rotation;
    const hasCustomData = Object.keys(customData).length > 0;
    if (hasCustomData) {
      if (!this.setAnnotCustom(annotationPtr, customData)) {
        return false;
      }
    } else if (Object.keys(existingCustom).length > 0) {
      if (!this.setAnnotCustom(annotationPtr, null)) {
        return false;
      }
    }
    if (annotation.rotation !== void 0) {
      const pdfRotation = annotation.rotation ? (360 - annotation.rotation) % 360 : 0;
      this.setAnnotExtendedRotation(annotationPtr, pdfRotation);
    }
    if (annotation.unrotatedRect) {
      this.setAnnotUnrotatedRect(doc, page, annotationPtr, annotation.unrotatedRect);
    } else if (annotation.rotation && annotation.rotation !== 0) {
      this.setAnnotUnrotatedRect(doc, page, annotationPtr, annotation.rect);
    }
    if (!this.setInReplyToId(pagePtr, annotationPtr, annotation.inReplyToId)) {
      return false;
    }
    if (!this.setReplyType(annotationPtr, annotation.replyType)) {
      return false;
    }
    return true;
  }
  /**
   * Read all base annotation properties from PdfAnnotationObjectBase.
   * Returns an object that can be spread into the annotation return value.
   *
   * @param doc - pdf document object
   * @param page - pdf page object
   * @param annotationPtr - pointer to annotation object
   * @returns object with base annotation properties
   */
  readBaseAnnotationProperties(doc, page, annotationPtr) {
    const author = this.getAnnotString(annotationPtr, "T");
    const contents = this.getAnnotString(annotationPtr, "Contents") || "";
    const modified = this.getAnnotationDate(annotationPtr, "M");
    const created = this.getAnnotationDate(annotationPtr, "CreationDate");
    const flags = this.getAnnotationFlags(annotationPtr);
    const custom = this.getAnnotCustom(annotationPtr);
    const inReplyToId = this.getInReplyToId(annotationPtr);
    const replyType = this.getReplyType(annotationPtr);
    const blendMode = this.pdfiumModule.EPDFAnnot_GetBlendMode(annotationPtr);
    const pdfRotation = this.getAnnotExtendedRotation(annotationPtr);
    const rotation = pdfRotation !== 0 ? (360 - pdfRotation) % 360 : 0;
    const rawUnrotatedRect = this.readAnnotUnrotatedRect(annotationPtr);
    const unrotatedRect = rawUnrotatedRect ? this.convertPageRectToDeviceRect(doc, page, rawUnrotatedRect) : void 0;
    return {
      author,
      contents,
      modified,
      created,
      flags,
      custom,
      blendMode,
      // Only include IRT if present
      ...inReplyToId && { inReplyToId },
      // Only include RT if present and not the default (Reply)
      ...replyType && replyType !== PdfAnnotationReplyType.Reply && { replyType },
      ...rotation !== 0 && { rotation },
      ...unrotatedRect !== void 0 && { unrotatedRect }
    };
  }
  /**
   * Fetch a string value (\`/T\`, \`/M\`, \`/State\`, …) from an annotation.
   *
   * @returns decoded UTF-8 string or \`undefined\` when the key is absent
   *
   * @private
   */
  getAnnotString(annotationPtr, key) {
    const len = this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, key, 0, 0);
    if (len === 0) return;
    const bytes = (len + 1) * 2;
    const ptr = this.memoryManager.malloc(bytes);
    this.pdfiumModule.FPDFAnnot_GetStringValue(annotationPtr, key, ptr, bytes);
    const value = this.pdfiumModule.pdfium.UTF16ToString(ptr);
    this.memoryManager.free(ptr);
    return value || void 0;
  }
  /**
   * Get a string value (\`/T\`, \`/M\`, \`/State\`, …) from an attachment.
   *
   * @returns decoded UTF-8 string or \`undefined\` when the key is absent
   *
   * @private
   */
  getAttachmentString(attachmentPtr, key) {
    const len = this.pdfiumModule.FPDFAttachment_GetStringValue(attachmentPtr, key, 0, 0);
    if (len === 0) return;
    const bytes = (len + 1) * 2;
    const ptr = this.memoryManager.malloc(bytes);
    this.pdfiumModule.FPDFAttachment_GetStringValue(attachmentPtr, key, ptr, bytes);
    const value = this.pdfiumModule.pdfium.UTF16ToString(ptr);
    this.memoryManager.free(ptr);
    return value || void 0;
  }
  /**
   * Get a number value (\`/Size\`) from an attachment.
   *
   * @returns number or \`null\` when the key is absent
   *
   * @private
   */
  getAttachmentNumber(attachmentPtr, key) {
    const outPtr = this.memoryManager.malloc(4);
    try {
      const ok = this.pdfiumModule.EPDFAttachment_GetIntegerValue(
        attachmentPtr,
        key,
        // FPDF_BYTESTRING → ASCII JS string is fine in your glue
        outPtr
      );
      if (!ok) return void 0;
      return this.pdfiumModule.pdfium.getValue(outPtr, "i32") >>> 0;
    } finally {
      this.memoryManager.free(outPtr);
    }
  }
  /**
   * Get custom data of the annotation
   * @param annotationPtr - pointer to pdf annotation
   * @returns custom data of the annotation
   *
   * @private
   */
  getAnnotCustom(annotationPtr) {
    const custom = this.getAnnotString(annotationPtr, "EPDFCustom");
    if (!custom) return;
    try {
      return JSON.parse(custom);
    } catch (error) {
      console.warn("Failed to parse annotation custom data as JSON:", error);
      console.warn("Invalid JSON string:", custom);
      return void 0;
    }
  }
  /**
   * Sets custom data for an annotation by safely stringifying and storing JSON
   * @private
   */
  setAnnotCustom(annotationPtr, data) {
    if (data === void 0 || data === null) {
      return this.setAnnotString(annotationPtr, "EPDFCustom", "");
    }
    try {
      const jsonString = JSON.stringify(data);
      return this.setAnnotString(annotationPtr, "EPDFCustom", jsonString);
    } catch (error) {
      console.warn("Failed to stringify annotation custom data as JSON:", error);
      console.warn("Invalid data object:", data);
      return false;
    }
  }
  /**
   * Fetches the /IT (Intent) name from an annotation as a UTF-8 JS string.
   *
   * Mirrors getAnnotString(): calls EPDFAnnot_GetIntent twice (length probe + copy).
   * Returns \`undefined\` if no intent present.
   */
  getAnnotIntent(annotationPtr) {
    const len = this.pdfiumModule.EPDFAnnot_GetIntent(annotationPtr, 0, 0);
    if (len === 0) return;
    const codeUnits = len + 1;
    const bytes = codeUnits * 2;
    const ptr = this.memoryManager.malloc(bytes);
    this.pdfiumModule.EPDFAnnot_GetIntent(annotationPtr, ptr, bytes);
    const value = this.pdfiumModule.pdfium.UTF16ToString(ptr);
    this.memoryManager.free(ptr);
    return value && value !== "undefined" ? value : void 0;
  }
  /**
   * Write the \`/IT\` (Intent) name into an annotation dictionary.
   *
   * Mirrors EPDFAnnot_SetIntent in PDFium (expects a UTF‑8 FPDF_BYTESTRING).
   *
   * @param annotationPtr Pointer returned by FPDFPage_GetAnnot
   * @param intent        Name without leading slash, e.g. \`"PolygonCloud"\`
   *                      A leading “/” will be stripped for convenience.
   * @returns             true on success, false otherwise
   */
  setAnnotIntent(annotationPtr, intent) {
    return this.pdfiumModule.EPDFAnnot_SetIntent(annotationPtr, intent);
  }
  /**
   * Returns the rich‑content string stored in the annotation’s \`/RC\` entry.
   *
   * Works like \`getAnnotIntent()\`: first probe for length, then copy.
   * \`undefined\` when the annotation has no rich content.
   */
  getAnnotRichContent(annotationPtr) {
    const len = this.pdfiumModule.EPDFAnnot_GetRichContent(annotationPtr, 0, 0);
    if (len === 0) return;
    const codeUnits = len + 1;
    const bytes = codeUnits * 2;
    const ptr = this.memoryManager.malloc(bytes);
    this.pdfiumModule.EPDFAnnot_GetRichContent(annotationPtr, ptr, bytes);
    const value = this.pdfiumModule.pdfium.UTF16ToString(ptr);
    this.memoryManager.free(ptr);
    return value || void 0;
  }
  /**
   * Get annotation by name
   * @param pagePtr - pointer to pdf page object
   * @param name - name of annotation
   * @returns pointer to pdf annotation
   *
   * @private
   */
  getAnnotationByName(pagePtr, name) {
    return this.withWString(name, (wNamePtr) => {
      return this.pdfiumModule.EPDFPage_GetAnnotByName(pagePtr, wNamePtr);
    });
  }
  /**
   * Remove annotation by name
   * @param pagePtr - pointer to pdf page object
   * @param name - name of annotation
   * @returns true on success
   *
   * @private
   */
  removeAnnotationByName(pagePtr, name) {
    return this.withWString(name, (wNamePtr) => {
      return this.pdfiumModule.EPDFPage_RemoveAnnotByName(pagePtr, wNamePtr);
    });
  }
  /**
   * Set a string value (\`/T\`, \`/M\`, \`/State\`, …) to an annotation.
   *
   * @returns \`true\` if the operation was successful
   *
   * @private
   */
  setAnnotString(annotationPtr, key, value) {
    return this.withWString(value, (wValPtr) => {
      return this.pdfiumModule.FPDFAnnot_SetStringValue(annotationPtr, key, wValPtr);
    });
  }
  /**
   * Set a string value (\`/T\`, \`/M\`, \`/State\`, …) to an attachment.
   *
   * @returns \`true\` if the operation was successful
   *
   * @private
   */
  setAttachmentString(attachmentPtr, key, value) {
    return this.withWString(value, (wValPtr) => {
      return this.pdfiumModule.FPDFAttachment_SetStringValue(attachmentPtr, key, wValPtr);
    });
  }
  /**
   * Read vertices of pdf annotation
   * @param doc - pdf document object
   * @param page  - pdf page infor
   * @param annotationPtr - pointer to pdf annotation
   * @returns vertices of pdf annotation
   *
   * @private
   */
  readPdfAnnoVertices(doc, page, annotationPtr) {
    const vertices = [];
    const count = this.pdfiumModule.FPDFAnnot_GetVertices(annotationPtr, 0, 0);
    const pointMemorySize = 8;
    const pointsPtr = this.memoryManager.malloc(count * pointMemorySize);
    this.pdfiumModule.FPDFAnnot_GetVertices(annotationPtr, pointsPtr, count);
    for (let i = 0; i < count; i++) {
      const pointX = this.pdfiumModule.pdfium.getValue(pointsPtr + i * pointMemorySize, "float");
      const pointY = this.pdfiumModule.pdfium.getValue(
        pointsPtr + i * pointMemorySize + 4,
        "float"
      );
      const { x, y } = this.convertPagePointToDevicePoint(doc, page, {
        x: pointX,
        y: pointY
      });
      const last = vertices[vertices.length - 1];
      if (!last || last.x !== x || last.y !== y) {
        vertices.push({ x, y });
      }
    }
    this.memoryManager.free(pointsPtr);
    return vertices;
  }
  /**
   * Sync the vertices of a polygon or polyline annotation.
   *
   * @param doc - pdf document object
   * @param page  - pdf page infor
   * @param annotPtr - pointer to pdf annotation
   * @param vertices - the vertices to be set
   * @returns true on success
   *
   * @private
   */
  setPdfAnnoVertices(doc, page, annotPtr, vertices) {
    const pdf = this.pdfiumModule.pdfium;
    const FS_POINTF_SIZE = 8;
    const buf = this.memoryManager.malloc(FS_POINTF_SIZE * vertices.length);
    vertices.forEach((v, i) => {
      const pagePt = this.convertDevicePointToPagePoint(doc, page, v);
      pdf.setValue(buf + i * FS_POINTF_SIZE + 0, pagePt.x, "float");
      pdf.setValue(buf + i * FS_POINTF_SIZE + 4, pagePt.y, "float");
    });
    const ok = this.pdfiumModule.EPDFAnnot_SetVertices(annotPtr, buf, vertices.length);
    this.memoryManager.free(buf);
    return ok;
  }
  /**
   * Read the target of pdf bookmark
   * @param docPtr - pointer to pdf document object
   * @param getActionPtr - callback function to retrive the pointer of action
   * @param getDestinationPtr - callback function to retrive the pointer of destination
   * @returns target of pdf bookmark
   *
   * @private
   */
  readPdfBookmarkTarget(docPtr, getActionPtr, getDestinationPtr) {
    const actionPtr = getActionPtr();
    if (actionPtr) {
      const action = this.readPdfAction(docPtr, actionPtr);
      return {
        type: "action",
        action
      };
    } else {
      const destinationPtr = getDestinationPtr();
      if (destinationPtr) {
        const destination = this.readPdfDestination(docPtr, destinationPtr);
        return {
          type: "destination",
          destination
        };
      }
    }
  }
  /**
   * Read field of pdf widget annotation
   * @param formHandle - form handle
   * @param annotationPtr - pointer to pdf annotation
   * @returns field of pdf widget annotation
   *
   * @private
   */
  readPdfWidgetAnnoField(formHandle, annotationPtr) {
    const flag = this.pdfiumModule.FPDFAnnot_GetFormFieldFlags(
      formHandle,
      annotationPtr
    );
    const type = this.pdfiumModule.FPDFAnnot_GetFormFieldType(
      formHandle,
      annotationPtr
    );
    const name = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldName(
          formHandle,
          annotationPtr,
          buffer,
          bufferLength
        );
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const alternateName = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldAlternateName(
          formHandle,
          annotationPtr,
          buffer,
          bufferLength
        );
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const value = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAnnot_GetFormFieldValue(
          formHandle,
          annotationPtr,
          buffer,
          bufferLength
        );
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const options = [];
    if (type === PDF_FORM_FIELD_TYPE.COMBOBOX || type === PDF_FORM_FIELD_TYPE.LISTBOX) {
      const count = this.pdfiumModule.FPDFAnnot_GetOptionCount(formHandle, annotationPtr);
      for (let i = 0; i < count; i++) {
        const label = readString(
          this.pdfiumModule.pdfium,
          (buffer, bufferLength) => {
            return this.pdfiumModule.FPDFAnnot_GetOptionLabel(
              formHandle,
              annotationPtr,
              i,
              buffer,
              bufferLength
            );
          },
          this.pdfiumModule.pdfium.UTF16ToString
        );
        const isSelected = this.pdfiumModule.FPDFAnnot_IsOptionSelected(
          formHandle,
          annotationPtr,
          i
        );
        options.push({
          label,
          isSelected
        });
      }
    }
    let isChecked = false;
    if (type === PDF_FORM_FIELD_TYPE.CHECKBOX || type === PDF_FORM_FIELD_TYPE.RADIOBUTTON) {
      isChecked = this.pdfiumModule.FPDFAnnot_IsChecked(formHandle, annotationPtr);
    }
    return {
      flag,
      type,
      name,
      alternateName,
      value,
      isChecked,
      options
    };
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.renderAnnotation}
   *
   * @public
   */
  renderPageAnnotationRaw(doc, page, annotation, options) {
    const {
      scaleFactor = 1,
      rotation = Rotation.Degree0,
      dpr = 1,
      mode = AppearanceMode.Normal
    } = options ?? {};
    this.logger.debug(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "renderPageAnnotation",
      doc,
      page,
      annotation,
      options
    );
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderPageAnnotation\`,
      "Begin",
      \`\${doc.id}-\${page.index}-\${annotation.id}\`
    );
    const task = new Task();
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`RenderPageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}-\${annotation.id}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const annotPtr = this.getAnnotationByName(pageCtx.pagePtr, annotation.id);
    if (!annotPtr) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`RenderPageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}-\${annotation.id}\`
      );
      pageCtx.release();
      return PdfTaskHelper.reject({ code: PdfErrorCode.NotFound, message: "annotation not found" });
    }
    const finalScale = Math.max(0.01, scaleFactor * dpr);
    const unrotated = !!(options == null ? void 0 : options.unrotated) && !!annotation.unrotatedRect;
    const renderRect = unrotated ? annotation.unrotatedRect : annotation.rect;
    const rect = toIntRect(renderRect);
    const devRect = toIntRect(transformRect(page.size, rect, rotation, finalScale));
    const wDev = Math.max(1, devRect.size.width);
    const hDev = Math.max(1, devRect.size.height);
    const stride = wDev * 4;
    const bytes = stride * hDev;
    const heapPtr = this.memoryManager.malloc(bytes);
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      wDev,
      hDev,
      4,
      heapPtr,
      stride
    );
    this.pdfiumModule.FPDFBitmap_FillRect(bitmapPtr, 0, 0, wDev, hDev, 0);
    const M = buildUserToDeviceMatrix(
      rect,
      // {origin:{L,B}, size:{W,H}}
      rotation,
      wDev,
      hDev
    );
    const mPtr = this.memoryManager.malloc(6 * 4);
    const mView = new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer, mPtr, 6);
    mView.set([M.a, M.b, M.c, M.d, M.e, M.f]);
    const FLAGS = 16;
    let ok = false;
    try {
      if (unrotated) {
        ok = !!this.pdfiumModule.EPDF_RenderAnnotBitmapUnrotated(
          bitmapPtr,
          pageCtx.pagePtr,
          annotPtr,
          mode,
          mPtr,
          FLAGS
        );
      } else {
        ok = !!this.pdfiumModule.EPDF_RenderAnnotBitmap(
          bitmapPtr,
          pageCtx.pagePtr,
          annotPtr,
          mode,
          mPtr,
          FLAGS
        );
      }
    } finally {
      this.memoryManager.free(mPtr);
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
      this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
      pageCtx.release();
    }
    if (!ok) {
      this.memoryManager.free(heapPtr);
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`RenderPageAnnotation\`,
        "End",
        \`\${doc.id}-\${page.index}-\${annotation.id}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: "EPDF_RenderAnnotBitmap failed"
      });
    }
    const data = this.pdfiumModule.pdfium.HEAPU8.subarray(heapPtr, heapPtr + bytes);
    const imageDataLike = {
      data: new Uint8ClampedArray(data),
      width: wDev,
      height: hDev
    };
    task.resolve(imageDataLike);
    this.memoryManager.free(heapPtr);
    return task;
  }
  /**
   * Batch-render all annotation appearance streams for a page in one call.
   * Returns a map of annotation ID -> rendered appearances (Normal/Rollover/Down).
   * Skips annotations that have rotation + unrotatedRect (EmbedPDF-rotated)
   * and annotations without any appearance stream.
   *
   * @public
   */
  renderPageAnnotationsRaw(doc, page, options) {
    const { scaleFactor = 1, rotation = Rotation.Degree0, dpr = 1 } = options ?? {};
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "renderPageAnnotationsRaw", doc, page, options);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "RenderPageAnnotationsRaw",
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        "RenderPageAnnotationsRaw",
        "End",
        \`\${doc.id}-\${page.index}\`
      );
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const pageCtx = ctx.acquirePage(page.index);
    const result = {};
    const finalScale = Math.max(0.01, scaleFactor * dpr);
    const annotCount = this.pdfiumModule.FPDFPage_GetAnnotCount(pageCtx.pagePtr);
    for (let i = 0; i < annotCount; i++) {
      const annotPtr = this.pdfiumModule.FPDFPage_GetAnnot(pageCtx.pagePtr, i);
      if (!annotPtr) continue;
      try {
        const nm = this.getAnnotString(annotPtr, "NM");
        if (!nm) continue;
        const extRotation = this.getAnnotExtendedRotation(annotPtr);
        if (extRotation !== 0) {
          const unrotatedRaw = this.readAnnotUnrotatedRect(annotPtr);
          if (unrotatedRaw) continue;
        }
        const apModes = this.pdfiumModule.EPDFAnnot_GetAvailableAppearanceModes(annotPtr);
        if (!apModes) continue;
        const appearances = {};
        const modesToRender = [
          { bit: AP_MODE_NORMAL, mode: AppearanceMode.Normal, key: "normal" },
          { bit: AP_MODE_ROLLOVER, mode: AppearanceMode.Rollover, key: "rollover" },
          { bit: AP_MODE_DOWN, mode: AppearanceMode.Down, key: "down" }
        ];
        for (const { bit, mode, key } of modesToRender) {
          if (!(apModes & bit)) continue;
          const rendered = this.renderSingleAnnotAppearance(
            doc,
            page,
            pageCtx,
            annotPtr,
            mode,
            rotation,
            finalScale
          );
          if (rendered) {
            appearances[key] = rendered;
          }
        }
        if (appearances.normal || appearances.rollover || appearances.down) {
          result[nm] = appearances;
        }
      } finally {
        this.pdfiumModule.FPDFPage_CloseAnnot(annotPtr);
      }
    }
    pageCtx.release();
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      "RenderPageAnnotationsRaw",
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    const task = new Task();
    task.resolve(result);
    return task;
  }
  /**
   * Render a single annotation's appearance for a given mode.
   * Returns the image data and rect, or null on failure.
   * @private
   */
  renderSingleAnnotAppearance(doc, page, pageCtx, annotPtr, mode, rotation, finalScale) {
    const pageRect = this.readPageAnnoRect(annotPtr);
    const annotRect = this.convertPageRectToDeviceRect(doc, page, pageRect);
    const rect = toIntRect(annotRect);
    const devRect = toIntRect(transformRect(page.size, rect, rotation, finalScale));
    const wDev = Math.max(1, devRect.size.width);
    const hDev = Math.max(1, devRect.size.height);
    const stride = wDev * 4;
    const bytes = stride * hDev;
    const heapPtr = this.memoryManager.malloc(bytes);
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      wDev,
      hDev,
      4,
      heapPtr,
      stride
    );
    this.pdfiumModule.FPDFBitmap_FillRect(bitmapPtr, 0, 0, wDev, hDev, 0);
    const M = buildUserToDeviceMatrix(rect, rotation, wDev, hDev);
    const mPtr = this.memoryManager.malloc(6 * 4);
    const mView = new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer, mPtr, 6);
    mView.set([M.a, M.b, M.c, M.d, M.e, M.f]);
    const FLAGS = 16;
    let ok = false;
    try {
      ok = !!this.pdfiumModule.EPDF_RenderAnnotBitmap(
        bitmapPtr,
        pageCtx.pagePtr,
        annotPtr,
        mode,
        mPtr,
        FLAGS
      );
    } finally {
      this.memoryManager.free(mPtr);
      this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
    }
    if (!ok) {
      this.memoryManager.free(heapPtr);
      return null;
    }
    const data = this.pdfiumModule.pdfium.HEAPU8.subarray(heapPtr, heapPtr + bytes);
    const imageData = {
      data: new Uint8ClampedArray(data),
      width: wDev,
      height: hDev
    };
    this.memoryManager.free(heapPtr);
    return { data: imageData, rect: annotRect };
  }
  renderRectEncoded(doc, page, rect, options) {
    const task = new Task();
    const rotation = (options == null ? void 0 : options.rotation) ?? Rotation.Degree0;
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "document does not open"
      });
    }
    const scale = Math.max(0.01, (options == null ? void 0 : options.scaleFactor) ?? 1);
    const dpr = Math.max(1, (options == null ? void 0 : options.dpr) ?? 1);
    const finalScale = scale * dpr;
    const baseW = rect.size.width;
    const baseH = rect.size.height;
    const swap2 = (rotation & 1) === 1;
    const wDev = Math.max(1, Math.round((swap2 ? baseH : baseW) * finalScale));
    const hDev = Math.max(1, Math.round((swap2 ? baseW : baseH) * finalScale));
    const stride = wDev * 4;
    const bytes = stride * hDev;
    const pageCtx = ctx.acquirePage(page.index);
    const shouldRenderForms = (options == null ? void 0 : options.withForms) ?? false;
    const formHandle = shouldRenderForms ? pageCtx.getFormHandle() : void 0;
    const heapPtr = this.memoryManager.malloc(bytes);
    const bitmapPtr = this.pdfiumModule.FPDFBitmap_CreateEx(
      wDev,
      hDev,
      4,
      heapPtr,
      stride
    );
    this.pdfiumModule.FPDFBitmap_FillRect(bitmapPtr, 0, 0, wDev, hDev, 4294967295);
    const M = buildUserToDeviceMatrix(rect, rotation, wDev, hDev);
    const mPtr = this.memoryManager.malloc(6 * 4);
    const mView = new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer, mPtr, 6);
    mView.set([M.a, M.b, M.c, M.d, M.e, M.f]);
    const clipPtr = this.memoryManager.malloc(4 * 4);
    const clipView = new Float32Array(this.pdfiumModule.pdfium.HEAPF32.buffer, clipPtr, 4);
    clipView.set([0, 0, wDev, hDev]);
    let flags = 16;
    if ((options == null ? void 0 : options.withAnnotations) ?? false) flags |= 1;
    try {
      this.pdfiumModule.FPDF_RenderPageBitmapWithMatrix(
        bitmapPtr,
        pageCtx.pagePtr,
        mPtr,
        clipPtr,
        flags
      );
      if (formHandle !== void 0) {
        const formParams = computeFormDrawParams(M, rect, page.size, rotation);
        const { startX, startY, formsWidth, formsHeight, scaleX, scaleY } = formParams;
        this.pdfiumModule.FPDF_FFLDraw(
          formHandle,
          bitmapPtr,
          pageCtx.pagePtr,
          startX,
          startY,
          formsWidth,
          formsHeight,
          rotation,
          flags
        );
      }
    } finally {
      pageCtx.release();
      this.memoryManager.free(mPtr);
      this.memoryManager.free(clipPtr);
    }
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderRectEncodedData\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const data = this.pdfiumModule.pdfium.HEAPU8.subarray(heapPtr, heapPtr + bytes);
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderRectEncodedData\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderRectEncodedImageData\`,
      "Begin",
      \`\${doc.id}-\${page.index}\`
    );
    const imageDataLike = {
      data: new Uint8ClampedArray(data),
      width: wDev,
      height: hDev
    };
    this.logger.perf(
      LOG_SOURCE$1,
      LOG_CATEGORY$1,
      \`RenderRectEncodedImageData\`,
      "End",
      \`\${doc.id}-\${page.index}\`
    );
    task.resolve(imageDataLike);
    this.pdfiumModule.FPDFBitmap_Destroy(bitmapPtr);
    this.memoryManager.free(heapPtr);
    return task;
  }
  /**
   * Read the target of pdf link annotation
   * @param docPtr - pointer to pdf document object
   * @param getActionPtr - callback function to retrive the pointer of action
   * @param getDestinationPtr - callback function to retrive the pointer of destination
   * @returns target of link
   *
   * @private
   */
  readPdfLinkAnnoTarget(docPtr, getActionPtr, getDestinationPtr) {
    const destinationPtr = getDestinationPtr();
    if (destinationPtr) {
      const destination = this.readPdfDestination(docPtr, destinationPtr);
      return {
        type: "destination",
        destination
      };
    } else {
      const actionPtr = getActionPtr();
      if (actionPtr) {
        const action = this.readPdfAction(docPtr, actionPtr);
        return {
          type: "action",
          action
        };
      }
    }
  }
  createLocalDestPtr(docPtr, dest) {
    var _a, _b;
    const pagePtr = this.pdfiumModule.FPDF_LoadPage(docPtr, dest.pageIndex);
    if (!pagePtr) return 0;
    try {
      if (dest.zoom.mode === PdfZoomMode.XYZ) {
        const { x, y, zoom } = dest.zoom.params;
        return this.pdfiumModule.EPDFDest_CreateXYZ(
          pagePtr,
          /*has_left*/
          true,
          x,
          /*has_top*/
          true,
          y,
          /*has_zoom*/
          true,
          zoom
        );
      }
      let viewEnum;
      let params = [];
      switch (dest.zoom.mode) {
        case PdfZoomMode.FitPage:
          viewEnum = PdfZoomMode.FitPage;
          break;
        case PdfZoomMode.FitHorizontal:
          viewEnum = PdfZoomMode.FitHorizontal;
          params = [((_a = dest.view) == null ? void 0 : _a[0]) ?? 0];
          break;
        case PdfZoomMode.FitVertical:
          viewEnum = PdfZoomMode.FitVertical;
          params = [((_b = dest.view) == null ? void 0 : _b[0]) ?? 0];
          break;
        case PdfZoomMode.FitRectangle:
          {
            const v = dest.view ?? [];
            params = [v[0] ?? 0, v[1] ?? 0, v[2] ?? 0, v[3] ?? 0];
            viewEnum = PdfZoomMode.FitRectangle;
          }
          break;
        case PdfZoomMode.Unknown:
        default:
          return 0;
      }
      return this.withFloatArray(
        params,
        (ptr, count) => this.pdfiumModule.EPDFDest_CreateView(pagePtr, viewEnum, ptr, count)
      );
    } finally {
      this.pdfiumModule.FPDF_ClosePage(pagePtr);
    }
  }
  applyBookmarkTarget(docPtr, bmPtr, target) {
    if (target.type === "destination") {
      const destPtr = this.createLocalDestPtr(docPtr, target.destination);
      if (!destPtr) return false;
      const ok = this.pdfiumModule.EPDFBookmark_SetDest(docPtr, bmPtr, destPtr);
      return !!ok;
    }
    const action = target.action;
    switch (action.type) {
      case PdfActionType.Goto: {
        const destPtr = this.createLocalDestPtr(docPtr, action.destination);
        if (!destPtr) return false;
        const actPtr = this.pdfiumModule.EPDFAction_CreateGoTo(docPtr, destPtr);
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFBookmark_SetAction(docPtr, bmPtr, actPtr);
      }
      case PdfActionType.URI: {
        const actPtr = this.pdfiumModule.EPDFAction_CreateURI(docPtr, action.uri);
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFBookmark_SetAction(docPtr, bmPtr, actPtr);
      }
      case PdfActionType.LaunchAppOrOpenFile: {
        const actPtr = this.withWString(
          action.path,
          (wptr) => this.pdfiumModule.EPDFAction_CreateLaunch(docPtr, wptr)
        );
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFBookmark_SetAction(docPtr, bmPtr, actPtr);
      }
      case PdfActionType.RemoteGoto:
        return false;
      case PdfActionType.Unsupported:
      default:
        return false;
    }
  }
  /**
   * Apply a link target (action or destination) to a link annotation
   * @param docPtr - pointer to pdf document
   * @param annotationPtr - pointer to the link annotation
   * @param target - the link target to apply
   * @returns true if successful
   *
   * @private
   */
  applyLinkTarget(docPtr, annotationPtr, target) {
    if (target.type === "destination") {
      const destPtr = this.createLocalDestPtr(docPtr, target.destination);
      if (!destPtr) return false;
      const actPtr = this.pdfiumModule.EPDFAction_CreateGoTo(docPtr, destPtr);
      if (!actPtr) return false;
      return !!this.pdfiumModule.EPDFAnnot_SetAction(annotationPtr, actPtr);
    }
    const action = target.action;
    switch (action.type) {
      case PdfActionType.Goto: {
        const destPtr = this.createLocalDestPtr(docPtr, action.destination);
        if (!destPtr) return false;
        const actPtr = this.pdfiumModule.EPDFAction_CreateGoTo(docPtr, destPtr);
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFAnnot_SetAction(annotationPtr, actPtr);
      }
      case PdfActionType.URI: {
        const actPtr = this.pdfiumModule.EPDFAction_CreateURI(docPtr, action.uri);
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFAnnot_SetAction(annotationPtr, actPtr);
      }
      case PdfActionType.LaunchAppOrOpenFile: {
        const actPtr = this.withWString(
          action.path,
          (wptr) => this.pdfiumModule.EPDFAction_CreateLaunch(docPtr, wptr)
        );
        if (!actPtr) return false;
        return !!this.pdfiumModule.EPDFAnnot_SetAction(annotationPtr, actPtr);
      }
      case PdfActionType.RemoteGoto:
      case PdfActionType.Unsupported:
      default:
        return false;
    }
  }
  /**
   * Read pdf action from pdf document
   * @param docPtr - pointer to pdf document object
   * @param actionPtr - pointer to pdf action object
   * @returns pdf action object
   *
   * @private
   */
  readPdfAction(docPtr, actionPtr) {
    const actionType = this.pdfiumModule.FPDFAction_GetType(actionPtr);
    let action;
    switch (actionType) {
      case PdfActionType.Unsupported:
        action = {
          type: PdfActionType.Unsupported
        };
        break;
      case PdfActionType.Goto:
        {
          const destinationPtr = this.pdfiumModule.FPDFAction_GetDest(docPtr, actionPtr);
          if (destinationPtr) {
            const destination = this.readPdfDestination(docPtr, destinationPtr);
            action = {
              type: PdfActionType.Goto,
              destination
            };
          } else {
            action = {
              type: PdfActionType.Unsupported
            };
          }
        }
        break;
      case PdfActionType.RemoteGoto:
        {
          action = {
            type: PdfActionType.Unsupported
          };
        }
        break;
      case PdfActionType.URI:
        {
          const uri = readString(
            this.pdfiumModule.pdfium,
            (buffer, bufferLength) => {
              return this.pdfiumModule.FPDFAction_GetURIPath(
                docPtr,
                actionPtr,
                buffer,
                bufferLength
              );
            },
            this.pdfiumModule.pdfium.UTF8ToString
          );
          action = {
            type: PdfActionType.URI,
            uri
          };
        }
        break;
      case PdfActionType.LaunchAppOrOpenFile:
        {
          const path = readString(
            this.pdfiumModule.pdfium,
            (buffer, bufferLength) => {
              return this.pdfiumModule.FPDFAction_GetFilePath(actionPtr, buffer, bufferLength);
            },
            this.pdfiumModule.pdfium.UTF8ToString
          );
          action = {
            type: PdfActionType.LaunchAppOrOpenFile,
            path
          };
        }
        break;
    }
    return action;
  }
  /**
   * Read pdf destination object
   * @param docPtr - pointer to pdf document object
   * @param destinationPtr - pointer to pdf destination
   * @returns pdf destination object
   *
   * @private
   */
  readPdfDestination(docPtr, destinationPtr) {
    const pageIndex = this.pdfiumModule.FPDFDest_GetDestPageIndex(docPtr, destinationPtr);
    const maxParmamsCount = 4;
    const paramsCountPtr = this.memoryManager.malloc(maxParmamsCount);
    const paramsPtr = this.memoryManager.malloc(maxParmamsCount * 4);
    const zoomMode = this.pdfiumModule.FPDFDest_GetView(
      destinationPtr,
      paramsCountPtr,
      paramsPtr
    );
    const paramsCount = this.pdfiumModule.pdfium.getValue(paramsCountPtr, "i32");
    const view = [];
    for (let i = 0; i < paramsCount; i++) {
      const paramPtr = paramsPtr + i * 4;
      view.push(this.pdfiumModule.pdfium.getValue(paramPtr, "float"));
    }
    this.memoryManager.free(paramsCountPtr);
    this.memoryManager.free(paramsPtr);
    if (zoomMode === PdfZoomMode.XYZ) {
      const hasXPtr = this.memoryManager.malloc(1);
      const hasYPtr = this.memoryManager.malloc(1);
      const hasZPtr = this.memoryManager.malloc(1);
      const xPtr = this.memoryManager.malloc(4);
      const yPtr = this.memoryManager.malloc(4);
      const zPtr = this.memoryManager.malloc(4);
      const isSucceed = this.pdfiumModule.FPDFDest_GetLocationInPage(
        destinationPtr,
        hasXPtr,
        hasYPtr,
        hasZPtr,
        xPtr,
        yPtr,
        zPtr
      );
      if (isSucceed) {
        const hasX = this.pdfiumModule.pdfium.getValue(hasXPtr, "i8");
        const hasY = this.pdfiumModule.pdfium.getValue(hasYPtr, "i8");
        const hasZ = this.pdfiumModule.pdfium.getValue(hasZPtr, "i8");
        const x = hasX ? this.pdfiumModule.pdfium.getValue(xPtr, "float") : 0;
        const y = hasY ? this.pdfiumModule.pdfium.getValue(yPtr, "float") : 0;
        const zoom = hasZ ? this.pdfiumModule.pdfium.getValue(zPtr, "float") : 0;
        this.memoryManager.free(hasXPtr);
        this.memoryManager.free(hasYPtr);
        this.memoryManager.free(hasZPtr);
        this.memoryManager.free(xPtr);
        this.memoryManager.free(yPtr);
        this.memoryManager.free(zPtr);
        return {
          pageIndex,
          zoom: {
            mode: zoomMode,
            params: {
              x,
              y,
              zoom
            }
          },
          view
        };
      }
      this.memoryManager.free(hasXPtr);
      this.memoryManager.free(hasYPtr);
      this.memoryManager.free(hasZPtr);
      this.memoryManager.free(xPtr);
      this.memoryManager.free(yPtr);
      this.memoryManager.free(zPtr);
      return {
        pageIndex,
        zoom: {
          mode: zoomMode,
          params: {
            x: 0,
            y: 0,
            zoom: 0
          }
        },
        view
      };
    }
    return {
      pageIndex,
      zoom: {
        mode: zoomMode
      },
      view
    };
  }
  /**
   * Read attachmet from pdf document
   * @param docPtr - pointer to pdf document object
   * @param index - index of attachment
   * @returns attachment content
   *
   * @private
   */
  readPdfAttachment(docPtr, index) {
    const attachmentPtr = this.pdfiumModule.FPDFDoc_GetAttachment(docPtr, index);
    const name = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetName(attachmentPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const description = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.EPDFAttachment_GetDescription(attachmentPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const mimeType = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetSubtype(attachmentPtr, buffer, bufferLength);
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const creationDate = this.getAttachmentDate(attachmentPtr, "CreationDate");
    const checksum = readString(
      this.pdfiumModule.pdfium,
      (buffer, bufferLength) => {
        return this.pdfiumModule.FPDFAttachment_GetStringValue(
          attachmentPtr,
          "Checksum",
          buffer,
          bufferLength
        );
      },
      this.pdfiumModule.pdfium.UTF16ToString
    );
    const size = this.getAttachmentNumber(attachmentPtr, "Size");
    return {
      index,
      name,
      description,
      mimeType,
      size,
      creationDate,
      checksum
    };
  }
  /**
   * Convert coordinate of point from device coordinate to page coordinate
   * @param doc - pdf document object
   * @param page  - pdf page infor
   * @param position - position of point
   * @returns converted position
   *
   * @private
   */
  convertDevicePointToPagePoint(doc, page, position) {
    const DW = page.size.width;
    const DH = page.size.height;
    const r = doc.normalizedRotation ? 0 : page.rotation & 3;
    if (r === 0) {
      return { x: position.x, y: DH - position.y };
    }
    if (r === 1) {
      return { x: position.y, y: position.x };
    }
    if (r === 2) {
      return { x: DW - position.x, y: position.y };
    }
    {
      return { x: DH - position.y, y: DW - position.x };
    }
  }
  /**
   * Convert coordinate of point from page coordinate to device coordinate
   * @param doc - pdf document object
   * @param page  - pdf page infor
   * @param position - position of point
   * @returns converted position
   *
   * @private
   */
  convertPagePointToDevicePoint(doc, page, position) {
    const DW = page.size.width;
    const DH = page.size.height;
    const r = doc.normalizedRotation ? 0 : page.rotation & 3;
    if (r === 0) {
      return { x: position.x, y: DH - position.y };
    }
    if (r === 1) {
      return { x: position.y, y: position.x };
    }
    if (r === 2) {
      return { x: DW - position.x, y: position.y };
    }
    {
      return { x: DW - position.y, y: DH - position.x };
    }
  }
  /**
   * Convert coordinate of rectangle from page coordinate to device coordinate
   * @param doc - pdf document object
   * @param page  - pdf page infor
   * @param pagePtr - pointer to pdf page object
   * @param pageRect - rectangle that needs to be converted
   * @returns converted rectangle
   *
   * @private
   */
  convertPageRectToDeviceRect(doc, page, pageRect) {
    const { x, y } = this.convertPagePointToDevicePoint(doc, page, {
      x: pageRect.left,
      y: pageRect.top
    });
    const rect = {
      origin: {
        x,
        y
      },
      size: {
        width: Math.abs(pageRect.right - pageRect.left),
        height: Math.abs(pageRect.top - pageRect.bottom)
      }
    };
    return rect;
  }
  /**
   * Read the appearance stream of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param mode - appearance mode
   * @returns appearance stream
   *
   * @private
   */
  readPageAnnoAppearanceStreams(annotationPtr) {
    return {
      normal: this.readPageAnnoAppearanceStream(annotationPtr, AppearanceMode.Normal),
      rollover: this.readPageAnnoAppearanceStream(annotationPtr, AppearanceMode.Rollover),
      down: this.readPageAnnoAppearanceStream(annotationPtr, AppearanceMode.Down)
    };
  }
  /**
   * Read the appearance stream of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param mode - appearance mode
   * @returns appearance stream
   *
   * @private
   */
  readPageAnnoAppearanceStream(annotationPtr, mode = AppearanceMode.Normal) {
    const utf16Length = this.pdfiumModule.FPDFAnnot_GetAP(annotationPtr, mode, 0, 0);
    const bytesCount = (utf16Length + 1) * 2;
    const bufferPtr = this.memoryManager.malloc(bytesCount);
    this.pdfiumModule.FPDFAnnot_GetAP(annotationPtr, mode, bufferPtr, bytesCount);
    const ap = this.pdfiumModule.pdfium.UTF16ToString(bufferPtr);
    this.memoryManager.free(bufferPtr);
    return ap;
  }
  /**
   * Set the appearance stream of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @param mode - appearance mode
   * @param apContent - appearance stream content (null to remove)
   * @returns whether the appearance stream was set successfully
   *
   * @private
   */
  setPageAnnoAppearanceStream(annotationPtr, mode = AppearanceMode.Normal, apContent) {
    const bytes = 2 * (apContent.length + 1);
    const ptr = this.memoryManager.malloc(bytes);
    try {
      this.pdfiumModule.pdfium.stringToUTF16(apContent, ptr, bytes);
      const ok = this.pdfiumModule.FPDFAnnot_SetAP(annotationPtr, mode, ptr);
      return !!ok;
    } finally {
      this.memoryManager.free(ptr);
    }
  }
  /**
   * Set the rect of specified annotation
   * @param doc - pdf document object
   * @param page - page info that the annotation is belonged to
   * @param annotationPtr - pointer to annotation object
   * @param rect - target rectangle
   * @returns whether the rect is setted
   *
   * @private
   */
  setPageAnnoRect(doc, page, annotPtr, rect) {
    const x0d = Math.floor(rect.origin.x);
    const y0d = Math.floor(rect.origin.y);
    const x1d = Math.floor(rect.origin.x + rect.size.width);
    const y1d = Math.floor(rect.origin.y + rect.size.height);
    const TL = this.convertDevicePointToPagePoint(doc, page, { x: x0d, y: y0d });
    const TR = this.convertDevicePointToPagePoint(doc, page, { x: x1d, y: y0d });
    const BR = this.convertDevicePointToPagePoint(doc, page, { x: x1d, y: y1d });
    const BL = this.convertDevicePointToPagePoint(doc, page, { x: x0d, y: y1d });
    let left = Math.min(TL.x, TR.x, BR.x, BL.x);
    let right = Math.max(TL.x, TR.x, BR.x, BL.x);
    let bottom = Math.min(TL.y, TR.y, BR.y, BL.y);
    let top = Math.max(TL.y, TR.y, BR.y, BL.y);
    if (left > right) [left, right] = [right, left];
    if (bottom > top) [bottom, top] = [top, bottom];
    const ptr = this.memoryManager.malloc(16);
    const pdf = this.pdfiumModule.pdfium;
    pdf.setValue(ptr + 0, left, "float");
    pdf.setValue(ptr + 4, top, "float");
    pdf.setValue(ptr + 8, right, "float");
    pdf.setValue(ptr + 12, bottom, "float");
    const ok = this.pdfiumModule.FPDFAnnot_SetRect(annotPtr, ptr);
    this.memoryManager.free(ptr);
    return !!ok;
  }
  /**
   * Read the rectangle of annotation
   * @param annotationPtr - pointer to pdf annotation
   * @returns rectangle of annotation
   *
   * @private
   */
  readPageAnnoRect(annotationPtr) {
    const pageRectPtr = this.memoryManager.malloc(4 * 4);
    const pageRect = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    if (this.pdfiumModule.EPDFAnnot_GetRect(annotationPtr, pageRectPtr)) {
      pageRect.left = this.pdfiumModule.pdfium.getValue(pageRectPtr, "float");
      pageRect.top = this.pdfiumModule.pdfium.getValue(pageRectPtr + 4, "float");
      pageRect.right = this.pdfiumModule.pdfium.getValue(pageRectPtr + 8, "float");
      pageRect.bottom = this.pdfiumModule.pdfium.getValue(pageRectPtr + 12, "float");
    }
    this.memoryManager.free(pageRectPtr);
    return pageRect;
  }
  /**
   * Get highlight rects for a specific character range (for search highlighting)
   * @param doc - pdf document object
   * @param page - pdf page info
   * @param pagePtr - pointer to pdf page
   * @param textPagePtr - pointer to pdf text page
   * @param startIndex - starting character index
   * @param charCount - number of characters in the range
   * @returns array of rectangles for highlighting the specified character range
   *
   * @private
   */
  getHighlightRects(doc, page, textPagePtr, startIndex, charCount) {
    const rectsCount = this.pdfiumModule.FPDFText_CountRects(textPagePtr, startIndex, charCount);
    const highlightRects = [];
    const l = this.memoryManager.malloc(8);
    const t = this.memoryManager.malloc(8);
    const r = this.memoryManager.malloc(8);
    const b = this.memoryManager.malloc(8);
    for (let i = 0; i < rectsCount; i++) {
      const ok = this.pdfiumModule.FPDFText_GetRect(textPagePtr, i, l, t, r, b);
      if (!ok) continue;
      const left = this.pdfiumModule.pdfium.getValue(l, "double");
      const top = this.pdfiumModule.pdfium.getValue(t, "double");
      const right = this.pdfiumModule.pdfium.getValue(r, "double");
      const bottom = this.pdfiumModule.pdfium.getValue(b, "double");
      const p1 = this.convertPagePointToDevicePoint(doc, page, { x: left, y: top });
      const p2 = this.convertPagePointToDevicePoint(doc, page, { x: right, y: top });
      const p3 = this.convertPagePointToDevicePoint(doc, page, { x: right, y: bottom });
      const p4 = this.convertPagePointToDevicePoint(doc, page, { x: left, y: bottom });
      const xs = [p1.x, p2.x, p3.x, p4.x];
      const ys = [p1.y, p2.y, p3.y, p4.y];
      const x = Math.min(...xs);
      const y = Math.min(...ys);
      const width = Math.max(...xs) - x;
      const height = Math.max(...ys) - y;
      highlightRects.push({
        origin: { x, y },
        size: { width: Math.ceil(width), height: Math.ceil(height) }
      });
    }
    this.memoryManager.free(l);
    this.memoryManager.free(t);
    this.memoryManager.free(r);
    this.memoryManager.free(b);
    return highlightRects;
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.searchAllPages}
   *
   * Runs inside the worker.
   * Emits per-page progress: { page, results }
   *
   * @public
   */
  searchInPage(doc, page, keyword, flags) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "searchInPage", doc, page, keyword, flags);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`SearchInPage\`, "Begin", \`\${doc.id}-\${page.index}\`);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "Document is not open"
      });
    }
    const length = 2 * (keyword.length + 1);
    const keywordPtr = this.memoryManager.malloc(length);
    this.pdfiumModule.pdfium.stringToUTF16(keyword, keywordPtr, length);
    try {
      const results = this.searchAllInPage(doc, ctx, page, keywordPtr, flags);
      return PdfTaskHelper.resolve(results);
    } finally {
      this.memoryManager.free(keywordPtr);
    }
  }
  /**
   * Get annotations for multiple pages in a single batch.
   * Emits progress per page for streaming updates.
   *
   * @param doc - PDF document
   * @param pages - Array of pages to process
   * @returns Task with results keyed by page index, with per-page progress
   *
   * @public
   */
  getAnnotationsBatch(doc, pages) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "getAnnotationsBatch", doc.id, pages.length);
    const task = new Task();
    queueMicrotask(() => {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetAnnotationsBatch", "Begin", doc.id);
      const ctx = this.cache.getContext(doc.id);
      if (!ctx) {
        task.reject({ code: PdfErrorCode.DocNotOpen, message: "Document is not open" });
        return;
      }
      const results = {};
      const total = pages.length;
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const annotations = this.readPageAnnotationsRaw(doc, ctx, page);
        results[page.index] = annotations;
        task.progress({
          pageIndex: page.index,
          result: annotations,
          completed: i + 1,
          total
        });
      }
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "GetAnnotationsBatch", "End", doc.id);
      task.resolve(results);
    });
    return task;
  }
  /**
   * Search across multiple pages in a single batch.
   * Emits progress per page for streaming updates.
   *
   * @param doc - PDF document
   * @param pages - Array of pages to search
   * @param keyword - Search keyword
   * @param flags - Search flags
   * @returns Task with results keyed by page index, with per-page progress
   *
   * @public
   */
  searchBatch(doc, pages, keyword, flags) {
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "searchBatch", doc.id, pages.length, keyword);
    const task = new Task();
    queueMicrotask(() => {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "SearchBatch", "Begin", doc.id);
      const ctx = this.cache.getContext(doc.id);
      if (!ctx) {
        task.reject({ code: PdfErrorCode.DocNotOpen, message: "Document is not open" });
        return;
      }
      const length = 2 * (keyword.length + 1);
      const keywordPtr = this.memoryManager.malloc(length);
      this.pdfiumModule.pdfium.stringToUTF16(keyword, keywordPtr, length);
      try {
        const results = {};
        const total = pages.length;
        for (let i = 0; i < pages.length; i++) {
          const page = pages[i];
          const pageResults = this.searchAllInPage(doc, ctx, page, keywordPtr, flags);
          results[page.index] = pageResults;
          task.progress({
            pageIndex: page.index,
            result: pageResults,
            completed: i + 1,
            total
          });
        }
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, "SearchBatch", "End", doc.id);
        task.resolve(results);
      } finally {
        this.memoryManager.free(keywordPtr);
      }
    });
    return task;
  }
  /**
   * Extract word-aligned context for a search hit.
   *
   * @param fullText      full UTF-16 page text (fetch this once per page!)
   * @param start         index of 1st char that matched
   * @param count         number of chars in the match
   * @param windowChars   minimum context chars to keep left & right
   */
  buildContext(fullText, start, count, windowChars = 30) {
    const WORD_BREAK = /[\\s\\u00A0.,;:!?()\\[\\]{}<>/\\\\\\-"'\`"”\\u2013\\u2014]/;
    const findWordStart = (index) => {
      while (index > 0 && !WORD_BREAK.test(fullText[index - 1])) index--;
      return index;
    };
    const findWordEnd = (index) => {
      while (index < fullText.length && !WORD_BREAK.test(fullText[index])) index++;
      return index;
    };
    let left = start;
    while (left > 0 && WORD_BREAK.test(fullText[left - 1])) left--;
    let collected = 0;
    while (left > 0 && collected < windowChars) {
      left--;
      if (!WORD_BREAK.test(fullText[left])) collected++;
    }
    left = findWordStart(left);
    let right = start + count;
    while (right < fullText.length && WORD_BREAK.test(fullText[right])) right++;
    collected = 0;
    while (right < fullText.length && collected < windowChars) {
      if (!WORD_BREAK.test(fullText[right])) collected++;
      right++;
    }
    right = findWordEnd(right);
    const before = fullText.slice(left, start).replace(/\\s+/g, " ").trimStart();
    const match = fullText.slice(start, start + count);
    const after = fullText.slice(start + count, right).replace(/\\s+/g, " ").trimEnd();
    return {
      before: this.tidy(before),
      match: this.tidy(match),
      after: this.tidy(after),
      truncatedLeft: left > 0,
      truncatedRight: right < fullText.length
    };
  }
  /**
   * Tidy the text to remove any non-printable characters and whitespace
   * @param s - text to tidy
   * @returns tidied text
   *
   * @private
   */
  tidy(s) {
    return s.replace(/-\\uFFFE\\s*/g, "").replace(/[\\uFFFE\\u00AD\\u200B\\u2060\\uFEFF]/g, "").replace(/\\s+/g, " ");
  }
  /**
   * Search for all occurrences of a keyword on a single page
   * This method efficiently loads the page only once and finds all matches
   *
   * @param docPtr - pointer to pdf document
   * @param page - pdf page object
   * @param pageIndex - index of the page
   * @param keywordPtr - pointer to the search keyword
   * @param flag - search flags
   * @returns array of search results on this page
   *
   * @private
   */
  searchAllInPage(doc, ctx, page, keywordPtr, flag) {
    return ctx.borrowPage(page.index, (pageCtx) => {
      const textPagePtr = pageCtx.getTextPage();
      const total = this.pdfiumModule.FPDFText_CountChars(textPagePtr);
      const bufPtr = this.memoryManager.malloc(2 * (total + 1));
      this.pdfiumModule.FPDFText_GetText(textPagePtr, 0, total, bufPtr);
      const fullText = this.pdfiumModule.pdfium.UTF16ToString(bufPtr);
      this.memoryManager.free(bufPtr);
      const pageResults = [];
      const searchHandle = this.pdfiumModule.FPDFText_FindStart(
        textPagePtr,
        keywordPtr,
        flag,
        0
        // Start from the beginning of the page
      );
      while (this.pdfiumModule.FPDFText_FindNext(searchHandle)) {
        const charIndex = this.pdfiumModule.FPDFText_GetSchResultIndex(searchHandle);
        const charCount = this.pdfiumModule.FPDFText_GetSchCount(searchHandle);
        const rects = this.getHighlightRects(doc, page, textPagePtr, charIndex, charCount);
        const context = this.buildContext(fullText, charIndex, charCount);
        pageResults.push({
          pageIndex: page.index,
          charIndex,
          charCount,
          rects,
          context
        });
      }
      this.pdfiumModule.FPDFText_FindClose(searchHandle);
      return pageResults;
    });
  }
  /**
   * {@inheritDoc @embedpdf/models!PdfEngine.preparePrintDocument}
   *
   * Prepares a PDF document for printing with specified options.
   * Creates a new document with selected pages and optionally removes annotations
   * for optimal printing performance.
   *
   * @public
   */
  preparePrintDocument(doc, options) {
    const { includeAnnotations = true, pageRange = null } = options ?? {};
    this.logger.debug(LOG_SOURCE$1, LOG_CATEGORY$1, "preparePrintDocument", doc, options);
    this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "Begin", doc.id);
    const ctx = this.cache.getContext(doc.id);
    if (!ctx) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.DocNotOpen,
        message: "Document is not open"
      });
    }
    const printDocPtr = this.pdfiumModule.FPDF_CreateNewDocument();
    if (!printDocPtr) {
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.CantCreateNewDoc,
        message: "Cannot create print document"
      });
    }
    try {
      const sanitizedPageRange = this.sanitizePageRange(pageRange, doc.pageCount);
      if (!this.pdfiumModule.FPDF_ImportPages(
        printDocPtr,
        ctx.docPtr,
        sanitizedPageRange ?? "",
        0
        // Insert at beginning
      )) {
        this.pdfiumModule.FPDF_CloseDocument(printDocPtr);
        this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, "Failed to import pages for printing");
        this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
        return PdfTaskHelper.reject({
          code: PdfErrorCode.CantImportPages,
          message: "Failed to import pages for printing"
        });
      }
      if (!includeAnnotations) {
        const removalResult = this.removeAnnotationsFromPrintDocument(printDocPtr);
        if (!removalResult.success) {
          this.pdfiumModule.FPDF_CloseDocument(printDocPtr);
          this.logger.error(
            LOG_SOURCE$1,
            LOG_CATEGORY$1,
            \`Failed to remove annotations: \${removalResult.error}\`
          );
          this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
          return PdfTaskHelper.reject({
            code: PdfErrorCode.Unknown,
            message: \`Failed to prepare print document: \${removalResult.error}\`
          });
        }
        this.logger.debug(
          LOG_SOURCE$1,
          LOG_CATEGORY$1,
          \`Removed \${removalResult.annotationsRemoved} annotations from \${removalResult.pagesProcessed} pages\`
        );
      }
      const buffer = this.saveDocument(printDocPtr);
      this.pdfiumModule.FPDF_CloseDocument(printDocPtr);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
      return PdfTaskHelper.resolve(buffer);
    } catch (error) {
      if (printDocPtr) {
        this.pdfiumModule.FPDF_CloseDocument(printDocPtr);
      }
      this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, "preparePrintDocument failed", error);
      this.logger.perf(LOG_SOURCE$1, LOG_CATEGORY$1, \`PreparePrintDocument\`, "End", doc.id);
      return PdfTaskHelper.reject({
        code: PdfErrorCode.Unknown,
        message: error instanceof Error ? error.message : "Failed to prepare print document"
      });
    }
  }
  /**
   * Removes all annotations from a print document using fast raw annotation functions.
   * This method is optimized for performance by avoiding full page loading.
   *
   * @param printDocPtr - Pointer to the print document
   * @returns Result object with success status and statistics
   *
   * @private
   */
  removeAnnotationsFromPrintDocument(printDocPtr) {
    let totalAnnotationsRemoved = 0;
    let pagesProcessed = 0;
    try {
      const pageCount = this.pdfiumModule.FPDF_GetPageCount(printDocPtr);
      for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
        const annotCount = this.pdfiumModule.EPDFPage_GetAnnotCountRaw(printDocPtr, pageIndex);
        if (annotCount <= 0) {
          pagesProcessed++;
          continue;
        }
        let annotationsRemovedFromPage = 0;
        for (let annotIndex = annotCount - 1; annotIndex >= 0; annotIndex--) {
          const removed = this.pdfiumModule.EPDFPage_RemoveAnnotRaw(
            printDocPtr,
            pageIndex,
            annotIndex
          );
          if (removed) {
            annotationsRemovedFromPage++;
            totalAnnotationsRemoved++;
          } else {
            this.logger.warn(
              LOG_SOURCE$1,
              LOG_CATEGORY$1,
              \`Failed to remove annotation \${annotIndex} from page \${pageIndex}\`
            );
          }
        }
        if (annotationsRemovedFromPage > 0) {
          const pagePtr = this.pdfiumModule.FPDF_LoadPage(printDocPtr, pageIndex);
          if (pagePtr) {
            this.pdfiumModule.FPDFPage_GenerateContent(pagePtr);
            this.pdfiumModule.FPDF_ClosePage(pagePtr);
          }
        }
        pagesProcessed++;
      }
      return {
        success: true,
        annotationsRemoved: totalAnnotationsRemoved,
        pagesProcessed
      };
    } catch (error) {
      return {
        success: false,
        annotationsRemoved: totalAnnotationsRemoved,
        pagesProcessed,
        error: error instanceof Error ? error.message : "Unknown error during annotation removal"
      };
    }
  }
  /**
   * Sanitizes and validates a page range string.
   * Ensures page numbers are within valid bounds and properly formatted.
   *
   * @param pageRange - Page range string (e.g., "1,3,5-7") or null for all pages
   * @param totalPages - Total number of pages in the document
   * @returns Sanitized page range string or null for all pages
   *
   * @private
   */
  sanitizePageRange(pageRange, totalPages) {
    if (!pageRange || pageRange.trim() === "") {
      return null;
    }
    try {
      const sanitized = [];
      const parts = pageRange.split(",");
      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes("-")) {
          const [startStr, endStr] = trimmed.split("-").map((s) => s.trim());
          const start = parseInt(startStr, 10);
          const end = parseInt(endStr, 10);
          if (isNaN(start) || isNaN(end)) {
            this.logger.warn(LOG_SOURCE$1, LOG_CATEGORY$1, \`Invalid range: \${trimmed}\`);
            continue;
          }
          const validStart = Math.max(1, Math.min(start, totalPages));
          const validEnd = Math.max(1, Math.min(end, totalPages));
          for (let i = validStart; i <= validEnd; i++) {
            if (!sanitized.includes(i)) {
              sanitized.push(i);
            }
          }
        } else {
          const pageNum = parseInt(trimmed, 10);
          if (isNaN(pageNum)) {
            this.logger.warn(LOG_SOURCE$1, LOG_CATEGORY$1, \`Invalid page number: \${trimmed}\`);
            continue;
          }
          const validPageNum = Math.max(1, Math.min(pageNum, totalPages));
          if (!sanitized.includes(validPageNum)) {
            sanitized.push(validPageNum);
          }
        }
      }
      if (sanitized.length === 0) {
        this.logger.warn(LOG_SOURCE$1, LOG_CATEGORY$1, "No valid pages in range, using all pages");
        return null;
      }
      sanitized.sort((a, b) => a - b);
      const optimized = [];
      let rangeStart = sanitized[0];
      let rangeEnd = sanitized[0];
      for (let i = 1; i < sanitized.length; i++) {
        if (sanitized[i] === rangeEnd + 1) {
          rangeEnd = sanitized[i];
        } else {
          if (rangeStart === rangeEnd) {
            optimized.push(rangeStart.toString());
          } else if (rangeEnd - rangeStart === 1) {
            optimized.push(rangeStart.toString());
            optimized.push(rangeEnd.toString());
          } else {
            optimized.push(\`\${rangeStart}-\${rangeEnd}\`);
          }
          rangeStart = sanitized[i];
          rangeEnd = sanitized[i];
        }
      }
      if (rangeStart === rangeEnd) {
        optimized.push(rangeStart.toString());
      } else if (rangeEnd - rangeStart === 1) {
        optimized.push(rangeStart.toString());
        optimized.push(rangeEnd.toString());
      } else {
        optimized.push(\`\${rangeStart}-\${rangeEnd}\`);
      }
      const result = optimized.join(",");
      this.logger.debug(
        LOG_SOURCE$1,
        LOG_CATEGORY$1,
        \`Sanitized page range: "\${pageRange}" -> "\${result}"\`
      );
      return result;
    } catch (error) {
      this.logger.error(LOG_SOURCE$1, LOG_CATEGORY$1, \`Error sanitizing page range: \${error}\`);
      return null;
    }
  }
}
const LOG_SOURCE = "PdfiumNativeRunner";
const LOG_CATEGORY = "Worker";
class PdfiumNativeRunner {
  constructor(logger) {
    this.native = null;
    this.activeTasks = /* @__PURE__ */ new Map();
    this.logger = logger ?? new NoopLogger();
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "PdfiumNativeRunner created");
  }
  /**
   * Initialize PDFium with WASM binary
   */
  async prepare(wasmBinary, logger) {
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "Preparing PDFium...");
    try {
      const module = await init({ wasmBinary });
      this.native = new PdfiumNative(module, { logger: logger ?? this.logger });
      this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "PDFium initialized successfully");
    } catch (error) {
      this.logger.error(LOG_SOURCE, LOG_CATEGORY, "Failed to initialize PDFium:", error);
      throw error;
    }
  }
  /**
   * Start listening for messages
   */
  listen() {
    self.onmessage = (evt) => {
      this.handle(evt);
    };
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "Listening for messages");
  }
  /**
   * Handle incoming messages
   */
  handle(evt) {
    const request = evt.data;
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "Received message:", request.type);
    try {
      switch (request.type) {
        case "init":
          this.handleInit(request);
          break;
        case "execute":
          this.handleExecute(request);
          break;
        default:
          this.logger.warn(LOG_SOURCE, LOG_CATEGORY, "Unknown message type:", request.type);
      }
    } catch (error) {
      this.logger.error(LOG_SOURCE, LOG_CATEGORY, "Error handling message:", error);
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.Unknown, message: String(error) }
        }
      });
    }
  }
  /**
   * Handle initialization request
   */
  async handleInit(request) {
    if (!request.wasmUrl) {
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.Unknown, message: "Missing wasmUrl" }
        }
      });
      return;
    }
    try {
      const response = await fetch(request.wasmUrl);
      const wasmBinary = await response.arrayBuffer();
      await this.prepare(wasmBinary);
      this.respond({
        id: request.id,
        type: "ready"
      });
    } catch (error) {
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.Unknown, message: String(error) }
        }
      });
    }
  }
  /**
   * Handle method execution request
   */
  async handleExecute(request) {
    if (!this.native) {
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.NotReady, message: "PDFium not initialized" }
        }
      });
      return;
    }
    if (!request.method) {
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.Unknown, message: "Missing method name" }
        }
      });
      return;
    }
    const method = request.method;
    const args = request.args ?? [];
    if (!(method in this.native) || typeof this.native[method] !== "function") {
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.NotSupport, message: \`Method \${method} not supported\` }
        }
      });
      return;
    }
    try {
      this.logger.debug(LOG_SOURCE, LOG_CATEGORY, \`Executing method: \${method}\`);
      const result = this.native[method](...args);
      if (result && typeof result === "object" && "wait" in result) {
        const task = result;
        this.activeTasks.set(request.id, task);
        task.onProgress((progress) => {
          this.respond({
            id: request.id,
            type: "progress",
            progress
          });
        });
        task.wait(
          (data) => {
            this.logger.debug(LOG_SOURCE, LOG_CATEGORY, \`Method \${method} resolved\`);
            this.respond({
              id: request.id,
              type: "result",
              data
            });
            this.activeTasks.delete(request.id);
          },
          (error) => {
            this.logger.debug(LOG_SOURCE, LOG_CATEGORY, \`Method \${method} failed:\`, error);
            this.respond({
              id: request.id,
              type: "error",
              error
            });
            this.activeTasks.delete(request.id);
          }
        );
      } else {
        this.respond({
          id: request.id,
          type: "result",
          data: result
        });
      }
    } catch (error) {
      this.logger.error(LOG_SOURCE, LOG_CATEGORY, \`Error executing \${method}:\`, error);
      this.respond({
        id: request.id,
        type: "error",
        error: {
          type: "reject",
          reason: { code: PdfErrorCode.Unknown, message: String(error) }
        }
      });
    }
  }
  /**
   * Send response back to main thread
   */
  respond(response) {
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "Sending response:", response.type);
    self.postMessage(response);
  }
  /**
   * Ready notification
   */
  ready() {
    this.listen();
    this.respond({
      id: "0",
      type: "ready"
    });
    this.logger.debug(LOG_SOURCE, LOG_CATEGORY, "Runner is ready");
  }
}
class PdfiumEngineRunner extends PdfiumNativeRunner {
  /**
   * Create an instance of PdfiumEngineRunner
   * @param wasmBinary - wasm binary that contains the pdfium wasm file
   * @param logger - optional logger instance
   * @param fontFallback - optional font fallback configuration
   */
  constructor(wasmBinary, logger, fontFallback) {
    super(logger);
    this.wasmBinary = wasmBinary;
    this.fontFallback = fontFallback;
  }
  /**
   * Initialize runner
   */
  async prepare() {
    const wasmBinary = this.wasmBinary;
    const wasmModule = await init({ wasmBinary });
    this.native = new PdfiumNative(wasmModule, {
      logger: this.logger,
      fontFallback: this.fontFallback
    });
    this.ready();
  }
}
const fonts$6 = [
  { file: "NotoSansJP-Thin.otf", weight: 100 },
  { file: "NotoSansJP-Light.otf", weight: 300 },
  { file: "NotoSansJP-DemiLight.otf", weight: 350 },
  { file: "NotoSansJP-Regular.otf", weight: 400 },
  { file: "NotoSansJP-Medium.otf", weight: 500 },
  { file: "NotoSansJP-Bold.otf", weight: 700 },
  { file: "NotoSansJP-Black.otf", weight: 900 }
];
const fonts$5 = [
  { file: "NotoSansKR-Thin.otf", weight: 100 },
  { file: "NotoSansKR-Light.otf", weight: 300 },
  { file: "NotoSansKR-DemiLight.otf", weight: 350 },
  { file: "NotoSansKR-Regular.otf", weight: 400 },
  { file: "NotoSansKR-Medium.otf", weight: 500 },
  { file: "NotoSansKR-Bold.otf", weight: 700 },
  { file: "NotoSansKR-Black.otf", weight: 900 }
];
const fonts$4 = [
  { file: "NotoSansHans-Light.otf", weight: 300 },
  { file: "NotoSansHans-DemiLight.otf", weight: 350 },
  { file: "NotoSansHans-Regular.otf", weight: 400 },
  { file: "NotoSansHans-Medium.otf", weight: 500 },
  { file: "NotoSansHans-Bold.otf", weight: 700 }
];
const fonts$3 = [
  { file: "NotoSansHant-Thin.otf", weight: 100 },
  { file: "NotoSansHant-Light.otf", weight: 300 },
  { file: "NotoSansHant-DemiLight.otf", weight: 350 },
  { file: "NotoSansHant-Regular.otf", weight: 400 },
  { file: "NotoSansHant-Medium.otf", weight: 500 },
  { file: "NotoSansHant-Bold.otf", weight: 700 },
  { file: "NotoSansHant-Black.otf", weight: 900 }
];
const fonts$2 = [
  { file: "NotoNaskhArabic-Regular.ttf", weight: 400 },
  { file: "NotoNaskhArabic-Bold.ttf", weight: 700 }
];
const fonts$1 = [
  { file: "NotoSansHebrew-Regular.ttf", weight: 400 },
  { file: "NotoSansHebrew-Bold.ttf", weight: 700 }
];
const fonts = [
  // Thin (100)
  { file: "NotoSans-Thin.ttf", weight: 100 },
  { file: "NotoSans-ThinItalic.ttf", weight: 100, italic: true },
  // ExtraLight (200)
  { file: "NotoSans-ExtraLight.ttf", weight: 200 },
  { file: "NotoSans-ExtraLightItalic.ttf", weight: 200, italic: true },
  // Light (300)
  { file: "NotoSans-Light.ttf", weight: 300 },
  { file: "NotoSans-LightItalic.ttf", weight: 300, italic: true },
  // Regular (400)
  { file: "NotoSans-Regular.ttf", weight: 400 },
  { file: "NotoSans-Italic.ttf", weight: 400, italic: true },
  // Medium (500)
  { file: "NotoSans-Medium.ttf", weight: 500 },
  { file: "NotoSans-MediumItalic.ttf", weight: 500, italic: true },
  // SemiBold (600)
  { file: "NotoSans-SemiBold.ttf", weight: 600 },
  { file: "NotoSans-SemiBoldItalic.ttf", weight: 600, italic: true },
  // Bold (700)
  { file: "NotoSans-Bold.ttf", weight: 700 },
  { file: "NotoSans-BoldItalic.ttf", weight: 700, italic: true },
  // ExtraBold (800)
  { file: "NotoSans-ExtraBold.ttf", weight: 800 },
  { file: "NotoSans-ExtraBoldItalic.ttf", weight: 800, italic: true },
  // Black (900)
  { file: "NotoSans-Black.ttf", weight: 900 },
  { file: "NotoSans-BlackItalic.ttf", weight: 900, italic: true }
];
function buildCdnUrls(version = "latest") {
  return {
    jp: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-jp@\${version}/fonts\`,
    kr: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-kr@\${version}/fonts\`,
    sc: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-sc@\${version}/fonts\`,
    tc: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-tc@\${version}/fonts\`,
    arabic: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-arabic@\${version}/fonts\`,
    hebrew: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-hebrew@\${version}/fonts\`,
    latin: \`https://cdn.jsdelivr.net/npm/@embedpdf/fonts-latin@\${version}/fonts\`
  };
}
function toFontVariants(fonts2, baseUrl) {
  return fonts2.map((f) => ({
    url: \`\${baseUrl}/\${f.file}\`,
    weight: f.weight,
    italic: f.italic
  }));
}
function buildCdnFontConfig(urls) {
  return {
    fonts: {
      [FontCharset.SHIFTJIS]: toFontVariants(fonts$6, urls.jp),
      [FontCharset.HANGEUL]: toFontVariants(fonts$5, urls.kr),
      [FontCharset.GB2312]: toFontVariants(fonts$4, urls.sc),
      [FontCharset.CHINESEBIG5]: toFontVariants(fonts$3, urls.tc),
      [FontCharset.ARABIC]: toFontVariants(fonts$2, urls.arabic),
      [FontCharset.HEBREW]: toFontVariants(fonts$1, urls.hebrew),
      [FontCharset.CYRILLIC]: toFontVariants(fonts, urls.latin),
      [FontCharset.GREEK]: toFontVariants(fonts, urls.latin),
      [FontCharset.VIETNAMESE]: toFontVariants(fonts, urls.latin)
    }
  };
}
const FONT_CDN_URLS = buildCdnUrls("latest");
const cdnFontConfig = buildCdnFontConfig(FONT_CDN_URLS);
let runner = null;
self.onmessage = async (event) => {
  const { type, wasmUrl, logger: serializedLogger, fontFallback } = event.data;
  if (type === "wasmInit" && wasmUrl && !runner) {
    try {
      const response = await fetch(wasmUrl);
      const wasmBinary = await response.arrayBuffer();
      const logger = serializedLogger ? deserializeLogger(serializedLogger) : void 0;
      const effectiveFontFallback = fontFallback === null ? void 0 : fontFallback ?? cdnFontConfig;
      runner = new PdfiumEngineRunner(wasmBinary, logger, effectiveFontFallback);
      await runner.prepare();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      self.postMessage({ type: "wasmError", error: message });
    }
  }
};
`],{type:`application/javascript`})),{type:`module`}),{wasmUrl:n,logger:i,fontFallback:o}),c=URL.createObjectURL(new Blob([`async function encodeImage(imageData, imageType, quality) {
  if (typeof OffscreenCanvas === "undefined") {
    throw new Error("OffscreenCanvas is not available in this worker environment");
  }
  const { data, width, height } = imageData;
  const imgData = new ImageData(new Uint8ClampedArray(data), width, height);
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context from OffscreenCanvas");
  }
  ctx.putImageData(imgData, 0, 0);
  return canvas.convertToBlob({ type: imageType, quality });
}
self.onmessage = async (event) => {
  const request = event.data;
  if (request.type !== "encode") {
    return;
  }
  try {
    const { imageData, imageType, quality } = request.data;
    const blob = await encodeImage(imageData, imageType, quality);
    const response = {
      id: request.id,
      type: "result",
      data: blob
    };
    self.postMessage(response);
  } catch (error) {
    const response = {
      id: request.id,
      type: "error",
      data: {
        message: error instanceof Error ? error.message : String(error)
      }
    };
    self.postMessage(response);
  }
};
`],{type:`application/javascript`})),u=new f(a??2,c,i);return new t(s,{imageConverter:e(u),logger:i})}export{p as createPdfiumEngine};