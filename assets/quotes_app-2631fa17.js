import"./modulepreload-polyfill-3cfb730f.js";function s(t){return document.querySelector(t)}const o=s("#quote"),d=s("#author"),i=s("#new-quote"),a=s("#share-tweet");window.addEventListener("load",r);i.addEventListener("click",r);a.addEventListener("click",w);async function r(){l();const e=(await(await fetch("https://api.api-ninjas.com/v1/quotes",{headers:{"X-Api-Key":"3A4ZXkR9XQBprt8eFpkBJg==VRAtii1CrLeI0MbP"}})).json())[0],n=e.quote,u=e.author;o.textContent=n,d.textContent=u,h()}function l(){o.textContent="Loading...",d.textContent="loading",i.toggleAttribute("disabled"),a.toggleAttribute("disabled")}function h(){i.toggleAttribute("disabled"),a.toggleAttribute("disabled")}function w(){const t=o.textContent,c="by "+o.textContent,e="https://twitter.com/intent/tweet?text="+encodeURIComponent(t)+"&text="+encodeURIComponent(c),n=window.open(e,"Tweet","width=600,height=400");n&&n.focus()}