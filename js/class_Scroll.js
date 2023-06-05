import { class_Scroll } from "./module/class_Scroll.js"
window.addEventListener('DOMContentLoaded', function(){
  class_Scroll({
    select : ".animate",
    options: {
      rootMargin: "0px",
    }
  })
})