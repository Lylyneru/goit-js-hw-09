import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div");e.classList.add("form-container");const o=document.querySelector(".feedback-form");o.classList.add("feedback-form"),e.appendChild(o),document.body.appendChild(e)});const t={email:"",message:""},a="feedback-form-state";function n(){const e=localStorage.getItem(a);e&&(t=JSON.parse(e),form.email.value=t.email||"",form.message.value=t.message||"")}function r(e){t[e.target.name]=e.target.value,localStorage.setItem(a,JSON.stringify(t))}function m(e){if(e.preventDefault(),!t.email||!t.message){alert("Fill please all fields");return}console.log("Submitted data:",t),localStorage.removeItem(a),form.reset()}form.addEventListener("input",r);form.addEventListener("submit",m);n();
//# sourceMappingURL=2-form.js.map