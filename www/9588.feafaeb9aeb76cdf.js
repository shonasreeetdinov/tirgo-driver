"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9588],{9588:(g,f,a)=>{a.r(f),a.d(f,{ion_spinner:()=>d});var o=a(2145),u=a(4459),p=a(5129),m=a(2217);const d=class{constructor(e){(0,o.r)(this,e),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const e=this.name||p.c.get("spinner"),r=(0,p.b)(this);return e||("ios"===r?"lines":"circular")}render(){var e;const r=this,l=(0,p.b)(r),i=r.getName(),n=null!==(e=m.S[i])&&void 0!==e?e:m.S.lines,k="number"==typeof r.duration&&r.duration>10?r.duration:n.dur,y=[];if(void 0!==n.circles)for(let c=0;c<n.circles;c++)y.push(t(n,k,c,n.circles));else if(void 0!==n.lines)for(let c=0;c<n.lines;c++)y.push(s(n,k,c,n.lines));return(0,o.h)(o.f,{key:"50cbaed55eeab15292447d106a80b93db4cb40de",class:(0,u.c)(r.color,{[l]:!0,[`spinner-${i}`]:!0,"spinner-paused":r.paused||p.c.getBoolean("_testing")}),role:"progressbar",style:n.elmDuration?{animationDuration:k+"ms"}:{}},y)}},t=(e,r,l,i)=>{const n=e.fn(r,l,i);return n.style["animation-duration"]=r+"ms",(0,o.h)("svg",{viewBox:n.viewBox||"0 0 64 64",style:n.style},(0,o.h)("circle",{transform:n.transform||"translate(32,32)",cx:n.cx,cy:n.cy,r:n.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},s=(e,r,l,i)=>{const n=e.fn(r,l,i);return n.style["animation-duration"]=r+"ms",(0,o.h)("svg",{viewBox:n.viewBox||"0 0 64 64",style:n.style},(0,o.h)("line",{transform:"translate(32,32)",y1:n.y1,y2:n.y2}))};d.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},4459:(g,f,a)=>{a.d(f,{c:()=>p,g:()=>b,h:()=>u,o:()=>d});var o=a(5861);const u=(t,s)=>null!==s.closest(t),p=(t,s)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},s):s,b=t=>{const s={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(t).forEach(e=>s[e]=!0),s},h=/^[a-z][a-z0-9+\-.]*:/,d=function(){var t=(0,o.Z)(function*(s,e,r,l){if(null!=s&&"#"!==s[0]&&!h.test(s)){const i=document.querySelector("ion-router");if(i)return e?.preventDefault(),i.push(s,r,l)}return!1});return function(e,r,l,i){return t.apply(this,arguments)}}()}}]);