import { mouseStoker } from "./module/mouseStoker.js"
window.addEventListener("DOMContentLoaded", function(){
  let btn = new mouseStoker('.mouseStoker')
  btn.following('.btn-lg')
})