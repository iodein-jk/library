import { slideDown, slideUp, slideToggle } from "./module/slide.js"
window.addEventListener("DOMContentLoaded", function(){

  document.getElementById('btn-slideDown').style.opacity = 0.5
  document.getElementById('btn-slideDown').style.pointerEvents = 'none'
  
  document.getElementById('btn-slideDown').addEventListener('click', function(){
    slideDown(document.querySelector('.slide'), 1000)
    document.getElementById('btn-slideDown').style.opacity = 0.5
    document.getElementById('btn-slideDown').style.pointerEvents = 'none'
    document.getElementById('btn-slideUp').style.opacity = 1
    document.getElementById('btn-slideUp').style.pointerEvents = 'auto'
  })

  document.getElementById('btn-slideUp').addEventListener('click', function(){
    slideUp(document.querySelector('.slide'), 1000)
    document.getElementById('btn-slideDown').style.opacity = 1
    document.getElementById('btn-slideDown').style.pointerEvents = 'auto'
    document.getElementById('btn-slideUp').style.opacity = 0.5
    document.getElementById('btn-slideUp').style.pointerEvents = 'none'
  })

  document.getElementById('btn-slideToggle').addEventListener('click', function(){
    slideToggle(document.querySelector('.slideToggle'), 1000)
  })
})