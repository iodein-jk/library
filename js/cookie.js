import { cookie } from "./module/cookie.js"
let counter = cookie(1)

window.addEventListener("DOMContentLoaded", function(){
  document.getElementById('cookieText').textContent = counter
})