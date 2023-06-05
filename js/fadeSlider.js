import { fadeSlider } from "./module/fadeSlider.js"
window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.fadeSlider-shiftButton').forEach(element => {
    var dataset = new fadeSlider(element.getAttribute("data-index"),element.getAttribute("data-parent"));
    element.addEventListener("click", function(event){
      event.preventDefault()
      dataset.thumnail(this.getAttribute("data-index"))
      dataset.Image(this.getAttribute("data-index"))
    })
  });

  document.querySelectorAll('.fadeSlider-thumbnail-anchor').forEach(element => {
    var dataset = new fadeSlider(element.getAttribute("data-index"),element.getAttribute("data-parent"));
    element.addEventListener("click", function(event){
      event.preventDefault()
      dataset.thumnail(this.getAttribute("data-index"))
      dataset.Image(this.getAttribute("data-index"))
    })
  });
})