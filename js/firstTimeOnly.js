import { cookie } from "./module/cookie.js"
import { modal } from "./module/modal.js"
let counter = cookie(120)

window.addEventListener("DOMContentLoaded", function(){
  document.getElementById('cookieText').textContent = counter
  if(counter == 1) {
    document.getElementById('button_sample').click()
  }
})