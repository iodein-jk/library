import { cookie } from "./module/cookie.js"
let counter = cookie(120)

window.addEventListener("DOMContentLoaded", function(){
  document.getElementById('cookieText').textContent = counter
})