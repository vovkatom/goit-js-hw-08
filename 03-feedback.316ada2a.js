const e=document.querySelector(".feedback-form"),a=e.querySelector('[name="email"]'),t=e.querySelector('[name="message"]'),l=()=>{let e={email:a.value,message:t.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))};a.addEventListener("input",l),t.addEventListener("input",l),window.addEventListener("load",()=>{let e=JSON.parse(localStorage.getItem("feedback-form-state"))||{};a.value=e.email||"",t.value=e.message||""}),e.addEventListener("submit",e=>{e.preventDefault();let l={email:a.value,message:t.value};console.log(l),a.value="",t.value="",localStorage.removeItem("feedback-form-state")});//# sourceMappingURL=03-feedback.316ada2a.js.map

//# sourceMappingURL=03-feedback.316ada2a.js.map