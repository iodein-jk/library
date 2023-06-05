import { viewport } from "./module/viewport.js"
let option = {
  mediaMaxWidth: 1200,
  minimum: 'width=device-width,initial-scale=1.0,viewport-fit=cover',
  width: 1500, 
}

viewport(option)

window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('media').textContent = viewport(option).media
  document.getElementById('content').textContent = viewport(option).content
})