import { typing } from "./module/typing.js"
window.addEventListener("DOMContentLoaded", function(){
  let text = new typing('.Typing-text')
  text.init()
  text.visible('.Typing-text')

  document.getElementById('btn-visible').style.opacity = 0.5
  document.getElementById('btn-visible').style.pointerEvents = 'none'

  document.getElementById('btn-hidden').addEventListener('click', function(){
    text.hidden('#typing-switching')
    document.getElementById('btn-hidden').style.opacity = 0.5
    document.getElementById('btn-hidden').style.pointerEvents = 'none'
    document.getElementById('btn-visible').style.opacity = 1
    document.getElementById('btn-visible').style.pointerEvents = 'auto'
  })

  document.getElementById('btn-visible').addEventListener('click', function(){
    text.visible('#typing-switching')
    document.getElementById('btn-hidden').style.opacity = 1
    document.getElementById('btn-hidden').style.pointerEvents = 'auto'
    document.getElementById('btn-visible').style.opacity = 0.5
    document.getElementById('btn-visible').style.pointerEvents = 'none'
  })
})