import{n as e,t}from"./lucide-CALlRNjy.js";import{A as n,T as r,b as i}from"./ui-HoGl2MNN.js";import{d as a,f as o}from"./i18n-BwIqBb1X.js";import{t as s}from"./pdf-decrypt-CMdJrx52.js";var c=null,l=null;function u(e){return document.getElementById(e)}function d(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function f(){let e=u(`password-modal`);return e||(e=document.createElement(`div`),e.id=`password-modal`,e.className=`fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] hidden items-center justify-center p-4`,e.innerHTML=`
    <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl max-w-md w-full overflow-hidden">
      <div class="p-6">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/10 flex-shrink-0">
            <i data-lucide="lock" class="w-6 h-6 text-indigo-400"></i>
          </div>
          <div class="flex-1">
            <h3 id="password-modal-title" class="text-xl font-bold text-white mb-1">${a(`Password Required`)}</h3>
            <p id="password-modal-subtitle" class="text-gray-400 text-sm truncate"></p>
          </div>
        </div>
        <div class="mt-4">
          <div class="relative">
            <input type="password" id="password-modal-input"
              class="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="${a(`Enter password`)}" autocomplete="off" />
            <button id="password-modal-toggle" type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </button>
          </div>
          <p id="password-modal-error" class="text-xs text-red-400 mt-2 hidden"></p>
          <p id="password-modal-progress" class="text-xs text-gray-400 mt-2 hidden"></p>
        </div>
      </div>
      <div class="flex gap-3 p-4 border-t border-gray-700">
        <button id="password-modal-cancel"
          class="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors">
          ${a(`Skip`)}
        </button>
        <button id="password-modal-submit"
          class="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
          ${a(`Unlock`)}
        </button>
      </div>
    </div>`,document.body.appendChild(e),e)}function p(){let e=u(`password-batch-modal`);return e||(e=document.createElement(`div`),e.id=`password-batch-modal`,e.className=`fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] hidden items-center justify-center p-4`,e.innerHTML=`
    <div class="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden">
      <div class="p-6 overflow-y-auto flex-1 min-h-0">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/10 flex-shrink-0">
            <i data-lucide="lock" class="w-6 h-6 text-indigo-400"></i>
          </div>
          <div class="flex-1">
            <h3 id="batch-modal-title" class="text-xl font-bold text-white mb-1"></h3>
            <p class="text-gray-400 text-sm">${a(`Enter passwords for each encrypted file`)}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-3 mb-3">
          <input type="checkbox" id="batch-modal-same-pw" checked
            class="w-4 h-4 rounded bg-gray-700 border-gray-600 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer" />
          <label for="batch-modal-same-pw" class="text-sm text-gray-300 cursor-pointer select-none">${a(`Use same password for all files`)}</label>
        </div>
        <div id="batch-modal-shared" class="mb-3">
          <div class="relative">
            <input type="password" id="batch-modal-shared-input"
              class="w-full bg-gray-700 border border-gray-600 text-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="${a(`Password for all files`)}" autocomplete="off" />
            <button id="batch-modal-shared-toggle" type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
        <div id="batch-modal-filelist" class="space-y-2 hidden"></div>
        <p id="batch-modal-error" class="text-xs text-red-400 mt-2 hidden"></p>
        <p id="batch-modal-progress" class="text-xs text-gray-400 mt-2 hidden"></p>
      </div>
      <div class="flex gap-3 p-4 border-t border-gray-700 flex-shrink-0">
        <button id="batch-modal-cancel"
          class="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors">
          ${a(`Skip All`)}
        </button>
        <button id="batch-modal-submit"
          class="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
          ${a(`Unlock All`)}
        </button>
      </div>
    </div>`,document.body.appendChild(e),e)}function m(e,t){return new Promise(r=>{let a=!1,o=i({data:e.slice(0),password:t});o.onPassword=(e,t)=>{a||(a=!0,r(t!==n.INCORRECT_PASSWORD),o.destroy().catch(()=>{}))},o.promise.then(e=>{e.destroy(),a||(a=!0,r(!0))}).catch(()=>{a||(a=!0,r(!1))})})}async function h(e){let t=await r(e);return new Promise(e=>{let n=!1,r=i({data:t.slice(0)});r.onPassword=()=>{n||(n=!0,e(!0),r.destroy().catch(()=>{}))},r.promise.then(t=>{t.destroy(),n||(n=!0,e(!1))}).catch(()=>{n||(n=!0,e(!1))})})}async function g(e,t){let n=await r(e),i=new Uint8Array(n),a=await s(i,t);return new File([new Uint8Array(a.bytes)],e.name,{type:`application/pdf`})}async function _(n){l&&await l;let i=await r(n);if(c){if(await m(i,c))try{return await g(n,c)}catch{c=null}else c=null}let a=f(),s=u(`password-modal-input`),d=u(`password-modal-title`),p=u(`password-modal-subtitle`),h=u(`password-modal-error`),_=u(`password-modal-progress`),v=u(`password-modal-submit`),y=u(`password-modal-cancel`),b=u(`password-modal-toggle`);if(!s||!v||!y)return null;d&&(d.textContent=o(`Password Required`)),p&&(p.textContent=n.name),h&&(h.textContent=``,h.classList.add(`hidden`)),_&&(_.textContent=``,_.classList.add(`hidden`)),s.value=``,s.type=`password`,v.disabled=!1,v.textContent=o(`Unlock`),v.dataset.originalText=o(`Unlock`),y.disabled=!1,y.textContent=o(`Skip`),a.classList.remove(`hidden`),a.classList.add(`flex`),t({icons:e}),setTimeout(()=>s.focus(),100);let x=new Promise(r=>{let l=!1,u=!1;function d(){a.classList.add(`hidden`),a.classList.remove(`flex`),v.removeEventListener(`click`,p),y.removeEventListener(`click`,x),s.removeEventListener(`keydown`,S),b&&b.removeEventListener(`click`,C)}function f(e){l||(l=!0,d(),r(e))}async function p(){if(u)return;let e=s.value;if(!e)h&&(h.textContent=o(`Please enter a password`),h.classList.remove(`hidden`));else if(h&&h.classList.add(`hidden`),u=!0,v.disabled=!0,y.disabled=!0,_&&(_.textContent=o(`Validating...`),_.classList.remove(`hidden`)),!await m(i,e))u=!1,v.disabled=!1,y.disabled=!1,_&&_.classList.add(`hidden`),s.value=``,s.focus(),h&&(h.textContent=o(`Incorrect password. Please try again.`),h.classList.remove(`hidden`));else{_&&(_.textContent=o(`Decrypting...`));try{let t=await g(n,e);c=e,_&&_.classList.add(`hidden`),f(t)}catch{u=!1,v.disabled=!1,y.disabled=!1,_&&_.classList.add(`hidden`),h&&(h.textContent=o(`Failed to decrypt. Try the Decrypt tool instead.`),h.classList.remove(`hidden`))}}}function x(){u||f(null)}function S(e){e.key===`Enter`?(e.preventDefault(),p()):e.key===`Escape`&&(e.preventDefault(),x())}function C(){let n=s.type===`password`;s.type=n?`text`:`password`;let r=b?.querySelector(`i[data-lucide]`);r&&r.setAttribute(`data-lucide`,n?`eye-off`:`eye`),t({icons:e})}v.addEventListener(`click`,p),y.addEventListener(`click`,x),s.addEventListener(`keydown`,S),b&&b.addEventListener(`click`,C)});return l=x,x.finally(()=>{l===x&&(l=null)}),x}async function v(n,i){l&&await l;let s=new Map;if(i.length===0)return s;if(i.length===1){let e=i[0],t=await _(n[e]);return t&&s.set(e,t),s}if(c){let e=!0;for(let t of i)if(!await m(await r(n[t]),c)){e=!1,c=null;break}if(e&&c){let e=new Map,t=!0;for(let r of i)try{e.set(r,await g(n[r],c))}catch{c=null,t=!1;break}if(t&&e.size===i.length){for(let[t,n]of e)s.set(t,n);return s}}}let f=i.map(e=>n[e].name),h=p(),v=u(`batch-modal-title`),y=u(`batch-modal-same-pw`),b=u(`batch-modal-shared`),x=u(`batch-modal-shared-input`),S=u(`batch-modal-shared-toggle`),C=u(`batch-modal-filelist`),w=u(`batch-modal-error`),T=u(`batch-modal-progress`),E=u(`batch-modal-submit`),D=u(`batch-modal-cancel`);if(!E||!D||!y||!x||!C)return s;v&&(v.textContent=o(`{{length}} Files Need a Password`,{length:f.length})),y.checked=!0,x.value=``,x.type=`password`,b&&b.classList.remove(`hidden`),C.classList.add(`hidden`),C.innerHTML=f.map((e,t)=>`<div class="flex items-center gap-2 p-2 bg-gray-700/50 rounded-lg transition-all" data-file-idx="${t}">
          <i data-lucide="file-lock" class="w-4 h-4 text-indigo-400 flex-shrink-0" data-icon-idx="${t}"></i>
          <span class="text-sm text-gray-300 truncate flex-1" title="${d(e)}">${d(e)}</span>
          <div class="flex items-center gap-1.5 flex-shrink-0">
            <input type="password" data-pw-idx="${t}" placeholder="${a(`Password`)}"
              class="w-32 bg-gray-600 border border-gray-500 text-gray-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-indigo-500 focus:border-transparent" autocomplete="off" />
            <button type="button" data-skip-idx="${t}" title="${a(`Skip this file`)}"
              class="p-1 rounded text-gray-400 hover:text-red-400 hover:bg-gray-600 transition-colors">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>`).join(``),w&&(w.textContent=``,w.classList.add(`hidden`)),T&&(T.textContent=``,T.classList.add(`hidden`)),E.disabled=!1,E.textContent=o(`Unlock All`),E.dataset.originalText=o(`Unlock All`),D.disabled=!1,h.classList.remove(`hidden`),h.classList.add(`flex`),t({icons:e}),setTimeout(()=>x.focus(),100);let O=new Promise(a=>{let l=!1,u=!1,d=new Set,p=new Set;function _(){let e=0;for(let t=0;t<f.length;t++)!d.has(t)&&!p.has(t)&&e++;return e}function v(e=!1){let t=p.size>0;D.textContent=o(t?`Skip Remaining`:`Skip All`);let n=_();e&&n===0?N(s):t&&(E.textContent=o(`Unlock Remaining ({{remaining}})`,{remaining:n}),E.dataset.originalText=E.textContent)}function O(){let e=y.checked;if(b&&b.classList.toggle(`hidden`,!e),C.classList.toggle(`hidden`,e),e)setTimeout(()=>x.focus(),50);else{let e=C.querySelector(`input[data-pw-idx]:not(:disabled)`);e&&setTimeout(()=>e.focus(),50)}}function k(n){p.add(n);let r=C.querySelector(`[data-file-idx="${n}"]`);if(!r)return;r.classList.remove(`border`,`border-red-500/50`),r.classList.add(`opacity-50`,`border`,`border-green-500/50`);let i=r.querySelector(`input[data-pw-idx]`);i&&(i.disabled=!0);let a=r.querySelector(`[data-skip-idx]`);a&&a.classList.add(`hidden`);let o=r.querySelector(`[data-icon-idx="${n}"]`);o&&(o.setAttribute(`data-lucide`,`check-circle`),o.classList.remove(`text-indigo-400`),o.classList.add(`text-green-400`)),t({icons:e})}function A(e){let t=C.querySelector(`[data-file-idx="${e}"]`);if(!t)return;t.classList.remove(`border-green-500/50`),t.classList.add(`border`,`border-red-500/50`);let n=t.querySelector(`input[data-pw-idx]`);n&&(n.value=``,n.focus(),n.classList.add(`border-red-500`),setTimeout(()=>n.classList.remove(`border-red-500`),2e3))}function j(e){if(u)return;let t=e.target.closest(`[data-skip-idx]`);if(!t||t.dataset.skipIdx===void 0)return;let n=parseInt(t.dataset.skipIdx,10);if(isNaN(n)||p.has(n))return;let r=C.querySelector(`[data-file-idx="${n}"]`);if(r){if(d.has(n)){d.delete(n),r.classList.remove(`opacity-40`);let e=r.querySelector(`input[data-pw-idx]`);e&&(e.disabled=!1),t.title=o(`Skip this file`)}else{d.add(n),r.classList.add(`opacity-40`),r.classList.remove(`border`,`border-red-500/50`);let e=r.querySelector(`input[data-pw-idx]`);e&&(e.disabled=!0),t.title=o(`Include this file`)}v(!0)}}function M(){h.classList.add(`hidden`),h.classList.remove(`flex`),E.removeEventListener(`click`,P),D.removeEventListener(`click`,F),y.removeEventListener(`change`,O),C.removeEventListener(`click`,j),S&&S.removeEventListener(`click`,L),x.removeEventListener(`keydown`,I)}function N(e){l||(l=!0,M(),a(e))}async function P(){if(u)return;let e=y.checked,t=[];for(let n=0;n<f.length;n++){if(d.has(n)||p.has(n))continue;let r;if(r=e?x.value:C.querySelector(`input[data-pw-idx="${n}"]`)?.value||``,!r){if(w){let t=e?o(`Please enter a password`):o(`Please enter a password for {{i}} or skip it`,{i:f[n]});w.textContent=t,w.classList.remove(`hidden`)}return}t.push({localIdx:n,password:r})}if(t.length===0){N(s);return}w&&w.classList.add(`hidden`),u=!0,E.disabled=!0,D.disabled=!0;let a=[];for(let e=0;e<t.length;e++){let{localIdx:c,password:l}=t[e],u=i[c];if(T&&(T.textContent=o(`Validating {{n}} of {{length}}: {{name}}`,{n:e+1,length:t.length,name:n[u].name}),T.classList.remove(`hidden`)),!await m(await r(n[u]),l))a.push(n[u].name),A(c);else{T&&(T.textContent=o(`Decrypting {{n}} of {{length}}: {{name}}`,{n:e+1,length:t.length,name:n[u].name}));try{let e=await g(n[u],l);s.set(u,e),k(c)}catch{a.push(n[u].name),A(c)}}}if(T&&T.classList.add(`hidden`),u=!1,E.disabled=!1,D.disabled=!1,a.length>0){if(w&&(w.textContent=o(`Wrong password for: {{join}}`,{join:a.join(`, `)}),w.classList.remove(`hidden`)),y.checked)x.value=``,x.focus();else{let e=C.querySelector(`input[data-pw-idx]:not(:disabled)`);e&&e.focus()}v(),E.textContent=o(`Retry Failed`)}else e&&t.length>0&&(c=t[0].password),v(),l||N(s)}function F(){u||N(s)}function I(e){e.key===`Enter`?(e.preventDefault(),P()):e.key===`Escape`&&(e.preventDefault(),F())}function L(){let n=x.type===`password`;x.type=n?`text`:`password`;let r=S?.querySelector(`i[data-lucide]`);r&&r.setAttribute(`data-lucide`,n?`eye-off`:`eye`),t({icons:e})}y.addEventListener(`change`,O),E.addEventListener(`click`,P),D.addEventListener(`click`,F),C.addEventListener(`click`,j),x.addEventListener(`keydown`,I),S&&S.addEventListener(`click`,L)});return l=O,O.finally(()=>{l===O&&(l=null)}),O}async function y(e,t,n){let a=await r(e),o=e;try{return{pdf:await i(a.slice(0)).promise,bytes:a,file:o}}catch(e){if(e&&typeof e==`object`&&`name`in e&&e.name===`PasswordException`){let e=await _(o);return e?(o=e,t&&n!==void 0&&(t[n]=e),a=await r(e),{pdf:await i(a.slice(0)).promise,bytes:a,file:o}):null}throw e}}async function b(e){let t=[];for(let n=0;n<e.length;n++)await h(e[n])&&t.push(n);if(t.length===0)return[...e];let n=await v(e,t),r=new Set(t.filter(e=>!n.has(e))),i=[];for(let t=0;t<e.length;t++)r.has(t)||i.push(n.get(t)??e[t]);return i}export{y as n,b as t};