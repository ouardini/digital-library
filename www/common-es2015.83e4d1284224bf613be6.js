(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(n,t,e)=>{const r=`${n*t/e-n}ms`,o=2*Math.PI*t/e;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(n,t,e)=>{const r=t/e,o=`${n*r-n}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,t)=>({r:6,style:{left:`${9-9*t}px`,"animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,t,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${n*t/e-n}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(n,t,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":`${n*t/e-n}ms`}})}}},KwJk:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return c}));const r=(n,t)=>null!==t.closest(n),o=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,i=n=>{const t={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>t[n]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,c=async(n,t,e)=>{if(null!=n&&"#"!==n[0]&&!s.test(n)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(n,e)}return!1}},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));const r=async(n,t,e,r,o)=>{if(n)return n.attachViewToDom(t,e,o,r);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e;return r&&r.forEach(n=>i.classList.add(n)),o&&Object.assign(i,o),t.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},fzvj:function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return s})),e.d(t,"d",(function(){return r}));const r=()=>{const n=window.TapticEngine;n&&n.selection()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},s=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}}}]);