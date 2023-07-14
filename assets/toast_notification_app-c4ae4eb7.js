import"./modulepreload-polyfill-3cfb730f.js";document.querySelector("#success").addEventListener("click",t);document.querySelector("#error").addEventListener("click",a);document.querySelector("#invalid").addEventListener("click",i);const s=document.querySelector(".toast-container");function t(){const e=document.createElement("div");e.classList.add("toast","success-toast"),e.innerHTML=`
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    check
                </span>
            </div>
            <p>Successfully submitted</p>
        </div>
        <div class="progress-bar"></div>
    </div>`,s.append(e),setInterval(()=>{s.removeChild(e)},3500)}function a(){const e=document.createElement("div");e.classList.add("toast","error-toast"),e.innerHTML=`
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    clear
                </span>
            </div>
            <p>Please fix the error!</p>
        </div>
        <div class="progress-bar"></div>
    </div>`,s.append(e),setInterval(()=>{s.removeChild(e)},3500)}function i(){const e=document.createElement("div");e.classList.add("toast","success-toast"),e.innerHTML=`
    <div class="wrapper">
        <div class="tile">
            <div class="icon">
                <span class="material-icons">
                    priority_high
                </span>
            </div>
            <p>Invalid input, check again</p>
        </div>
        <div class="progress-bar"></div>
    </div>`,s.append(e),setInterval(()=>{s.removeChild(e)},3500)}
