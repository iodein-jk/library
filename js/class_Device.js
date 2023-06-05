import { class_Device } from "./module/class_Device.js"
window.addEventListener('DOMContentLoaded', function(){
  document.getElementById('device').textContent = class_Device.device
  document.getElementById('browser').textContent = class_Device.browser
  document.getElementById('orientation').textContent = class_Device.orientation
})