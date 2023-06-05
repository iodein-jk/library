import { fadeIn, fadeOut } from "./module/fade.js"
window.addEventListener("DOMContentLoaded", function(){

  document.getElementById('btn-fadeIn').style.opacity = 0.5
  document.getElementById('btn-fadeIn').style.pointerEvents = 'none'

  document.getElementById('btn-fadeIn').addEventListener('click', function(){
    fadeIn(document.querySelector('.fade'), 1000)
    document.getElementById('btn-fadeIn').style.opacity = 0.5
    document.getElementById('btn-fadeIn').style.pointerEvents = 'none'
    document.getElementById('btn-fadeOut').style.opacity = 1
    document.getElementById('btn-fadeOut').style.pointerEvents = 'auto'
  })

  document.getElementById('btn-fadeOut').addEventListener('click', function(){
    fadeOut(document.querySelector('.fade'), 1000)
    document.getElementById('btn-fadeIn').style.opacity = 1
    document.getElementById('btn-fadeIn').style.pointerEvents = 'auto'
    document.getElementById('btn-fadeOut').style.opacity = 0.5
    document.getElementById('btn-fadeOut').style.pointerEvents = 'none'
  })
})