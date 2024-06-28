"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4463:(y,h,i)=>{i.d(h,{c:()=>r});var g=i(2145),l=i(9075),a=i(1981);const r=(e,o)=>{let t,n;const u=(c,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,w);E&&o(E)&&!E.disabled?E!==t&&(s(),d(E,p)):s()},d=(c,w)=>{t=c,n||(n=t);const p=t;(0,g.w)(()=>p.classList.add("ion-activated")),w()},s=(c=!1)=>{if(!t)return;const w=t;(0,g.w)(()=>w.classList.remove("ion-activated")),c&&n!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>u(c.currentX,c.currentY,l.a),onMove:c=>u(c.currentX,c.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),n=void 0}})}},1836:(y,h,i)=>{i.d(h,{g:()=>l});var g=i(1848);const l=()=>{if(void 0!==g.w)return g.w.Capacitor}},983:(y,h,i)=>{i.d(h,{c:()=>g,i:()=>l});const g=(a,r,e)=>"function"==typeof e?e(a,r):"string"==typeof e?a[e]===r[e]:Array.isArray(r)?r.includes(a):a===r,l=(a,r,e)=>void 0!==a&&(Array.isArray(a)?a.some(o=>g(o,r,e)):g(a,r,e))},4510:(y,h,i)=>{i.d(h,{g:()=>g});const g=(o,t,n,u,d)=>a(o[1],t[1],n[1],u[1],d).map(s=>l(o[0],t[0],n[0],u[0],s)),l=(o,t,n,u,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*n*d+3*n+u*d))-o*Math.pow(d-1,3),a=(o,t,n,u,d)=>e((u-=d)-3*(n-=d)+3*(t-=d)-(o-=d),3*n-6*t+3*o,3*t-3*o,o).filter(c=>c>=0&&c<=1),e=(o,t,n,u)=>{if(0===o)return((o,t,n)=>{const u=t*t-4*o*n;return u<0?[]:[(-t+Math.sqrt(u))/(2*o),(-t-Math.sqrt(u))/(2*o)]})(t,n,u);const d=(3*(n/=o)-(t/=o)*t)/3,s=(2*t*t*t-9*t*n+27*(u/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const c=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===c)return[Math.pow(s/2,.5)-t/3];if(c>0)return[Math.pow(-s/2+Math.sqrt(c),1/3)-Math.pow(s/2+Math.sqrt(c),1/3)-t/3];const w=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},4162:(y,h,i)=>{i.d(h,{i:()=>g});const g=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},8434:(y,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>r});const g="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let o=[],t=!0;const n=e?e.shadowRoot:document,u=e||document.body,d=M=>{o.forEach(f=>f.classList.remove(g)),M.forEach(f=>f.classList.add(g)),o=M},s=()=>{t=!1,d([])},c=M=>{t=a.includes(M.key),t||d([])},w=M=>{if(t&&void 0!==M.composedPath){const f=M.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(f)}},p=()=>{n.activeElement===u&&d([])};return n.addEventListener("keydown",c),n.addEventListener("focusin",w),n.addEventListener("focusout",p),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",c),n.removeEventListener("focusin",w),n.removeEventListener("focusout",p),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:d}}},9075:(y,h,i)=>{i.d(h,{I:()=>l,a:()=>t,b:()=>n,c:()=>o,d:()=>d,h:()=>u});var g=i(1836),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=(0,g.g)();if(s?.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const c=(0,g.g)();return"web"!==c?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const c=this.getEngine();c&&c.impact({style:s.style})},notification(s){const c=this.getEngine();c&&c.notification({type:s.type})},selection(){this.impact({style:l.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},e=()=>r.available(),o=()=>{e()&&r.selection()},t=()=>{e()&&r.selectionStart()},n=()=>{e()&&r.selectionChanged()},u=()=>{e()&&r.selectionEnd()},d=s=>{e()&&r.impact(s)}},2818:(y,h,i)=>{i.d(h,{I:()=>o,a:()=>d,b:()=>e,c:()=>w,d:()=>E,f:()=>s,g:()=>u,i:()=>n,p:()=>p,r:()=>M,s:()=>c});var g=i(5861),l=i(4298),a=i(2400);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,n=f=>"ION-CONTENT"===f.tagName,u=function(){var f=(0,g.Z)(function*(_){return n(_)?(yield new Promise(m=>(0,l.c)(_,m)),_.getScrollElement()):_});return function(m){return f.apply(this,arguments)}}(),d=f=>f.querySelector(o)||f.querySelector(t),s=f=>f.closest(t),c=(f,_)=>n(f)?f.scrollToTop(_):Promise.resolve(f.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),w=(f,_,m,O)=>n(f)?f.scrollByPoint(_,m,O):Promise.resolve(f.scrollBy({top:m,left:_,behavior:O>0?"smooth":"auto"})),p=f=>(0,a.b)(f,e),E=f=>{if(n(f)){const m=f.scrollY;return f.scrollY=!1,m}return f.style.setProperty("overflow","hidden"),!0},M=(f,_)=>{n(f)?f.scrollY=_:f.style.removeProperty("overflow")}},8240:(y,h,i)=>{i.d(h,{a:()=>g,b:()=>w,c:()=>t,d:()=>p,e:()=>L,f:()=>o,g:()=>E,h:()=>a,i:()=>l,j:()=>v,k:()=>C,l:()=>n,m:()=>s,n:()=>M,o:()=>d,p:()=>e,q:()=>r,r:()=>D,s:()=>P,t:()=>c,u:()=>m,v:()=>O,w:()=>u,x:()=>f,y:()=>_});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},772:(y,h,i)=>{i.d(h,{c:()=>r,g:()=>e});var g=i(1848),l=i(4298),a=i(2400);const r=(t,n,u)=>{let d,s;if(void 0!==g.w&&"MutationObserver"in g.w){const E=Array.isArray(n)?n:[n];d=new MutationObserver(M=>{for(const f of M)for(const _ of f.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&E.includes(_.slot))return u(),void(0,l.r)(()=>c(_))}),d.observe(t,{childList:!0,subtree:!0})}const c=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(f=>{u();for(const _ of f)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&p()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),p()}}},e=(t,n,u)=>{const d=null==t?0:t.toString().length,s=o(d,n);if(void 0===u)return s;try{return u(d,n)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),s}},o=(t,n)=>`${t} / ${n}`},6591:(y,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>D,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var g=i(3920);i(1836),i(1848);const r="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},u=!1;const d=()=>{t={},n={},u=!1},s=v=>{if(g.K.getEngine())c(v);else{if(!v.visualViewport)return;n=D(v.visualViewport),v.visualViewport.onresize=()=>{O(v),E()||M(v)?w(v):f(v)&&p(v)}}},c=v=>{v.addEventListener("keyboardDidShow",C=>w(v,C)),v.addEventListener("keyboardDidHide",()=>p(v))},w=(v,C)=>{_(v,C),u=!0},p=v=>{m(v),u=!1},E=()=>!u&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=v=>u&&!f(v),f=v=>u&&n.height===v.innerHeight,_=(v,C)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:C?C.keyboardHeight:v.innerHeight-n.height}});v.dispatchEvent(L)},m=v=>{const C=new CustomEvent(e);v.dispatchEvent(C)},O=v=>{t=Object.assign({},n),n=D(v.visualViewport)},D=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},3920:(y,h,i)=>{i.d(h,{K:()=>r,a:()=>a});var g=i(1836),l=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(l||{}),a=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(a||{});const r={getEngine(){const e=(0,g.g)();if(e?.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return e?.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},9252:(y,h,i)=>{i.d(h,{c:()=>o});var g=i(5861),l=i(1848),a=i(3920);const r=t=>void 0===l.d||t===a.a.None||void 0===t?null:l.d.querySelector("ion-app")??l.d.body,e=t=>{const n=r(t);return null===n?0:n.clientHeight},o=function(){var t=(0,g.Z)(function*(n){let u,d,s,c;const w=function(){var _=(0,g.Z)(function*(){const m=yield a.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===c&&(c=e(O)),s=!0,p(s,O)},d=()=>{s=!1,p(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),p=(_,m)=>{n&&n(_,E(m))},E=_=>{if(0===c||c===e(_))return;const m=r(_);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===c&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return t.apply(this,arguments)}}()},9229:(y,h,i)=>{i.d(h,{c:()=>l});var g=i(5861);const l=()=>{let a;return{lock:function(){var e=(0,g.Z)(function*(){const o=a;let t;return a=new Promise(n=>t=n),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},9765:(y,h,i)=>{i.d(h,{c:()=>a});var g=i(1848),l=i(4298);const a=(r,e,o)=>{let t;const n=()=>!(void 0===e()||void 0!==r.label||null===o()),d=()=>{const c=e();if(void 0===c)return;if(!n())return void c.style.removeProperty("width");const w=o().scrollWidth;if(0===w&&null===c.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),p.disconnect(),t=void 0)},{threshold:.01,root:r});p.observe(c)}else c.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{n()&&(0,l.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},2217:(y,h,i)=>{i.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(a,r,e)=>{const o=a*r/e-a+"ms",t=2*Math.PI*r/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(a,r,e)=>{const o=r/e,t=a*o-a+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,r,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":a*r/e-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*r+(r<e/2?180:-180)}deg)`,"animation-delay":a*r/e-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,r,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/e-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,r,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/e-a+"ms"}})}}},7372:(y,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>e});var g=i(4298),l=i(4162),a=i(1981);i(4089);const e=(o,t,n,u,d)=>{const s=o.ownerDocument.defaultView;let c=(0,l.i)(o);const p=m=>c?-m.deltaX:m.deltaX;return(0,a.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,l.i)(o),(m=>{const{startX:D}=m;return c?D>=s.innerWidth-50:D<=50})(m)&&t()),onStart:n,onMove:m=>{const D=p(m)/s.innerWidth;u(D)},onEnd:m=>{const O=p(m),D=s.innerWidth,v=O/D,C=(m=>c?-m.velocityX:m.velocityX)(m),L=C>=0&&(C>.2||O>D/2),x=(L?1-v:v)*D;let b=0;if(x>5){const B=x/Math.abs(C);b=Math.min(B,540)}d(L,v<=0?.01:(0,g.j)(0,v,.9999),b)}})}},6806:(y,h,i)=>{i.d(h,{w:()=>g});const g=(r,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{o(l(n,e))});return t.observe(r,{childList:!0,subtree:!0}),t},l=(r,e)=>{let o;return r.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)o=a(t.addedNodes[n],e)||o}),o},a=(r,e)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(n=>n.value===o.value)}},2319:(y,h,i)=>{i.d(h,{h:()=>a});var g=i(6814),l=i(2029);let a=(()=>{class r{static#t=this.\u0275fac=function(t){return new(t||r)};static#e=this.\u0275mod=l.oAB({type:r});static#n=this.\u0275inj=l.cJS({imports:[g.ez]})}return r})()},2270:(y,h,i)=>{i.d(h,{p:()=>l});var g=i(2029);let l=(()=>{class a{transform(e){return String(e).replace(/,/g,"").replace(/\B(?=(\d{3})+(?!\d))/g," ")}static#t=this.\u0275fac=function(o){return new(o||a)};static#e=this.\u0275pipe=g.Yjl({name:"numberFormat",type:a,pure:!0})}return a})()}}]);