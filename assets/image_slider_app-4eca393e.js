import"./modulepreload-polyfill-3cfb730f.js";const r=document.querySelector("#left"),s=document.querySelector("#right"),l=document.querySelector("section");window.addEventListener("resize",n);n();function n(){const t=l.clientWidth;let e=0,o=0;l.scrollTo(0,0),t>=750?o=t:t>=500?o=t*2:t>=250&&(o=t*5),r.addEventListener("click",()=>{e=Math.max(e-t,0),l.scrollTo(e,0)}),s.addEventListener("click",()=>{e=Math.min(e+t,o),l.scrollTo(e,0)}),l.addEventListener("wheel",i=>{const c=i.deltaY;c>0?(e=Math.min(e+c,o),l.scrollTo(e,0)):(e=Math.max(e+c,0),l.scrollTo(e,0))})}
