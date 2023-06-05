import { pathTracking } from "./module/pathTracking.js"
window.addEventListener('DOMContentLoaded', function(){
  let svgPathAnime = new pathTracking(
    {
      path: '#path', 
      pointer: '#pointer', 
      custom: {
        area: '#demo_1',
        root: '-50%',
        delay: 0
      }
    }
  )
  svgPathAnime.animation()

  let svgPathAnime_2 = new pathTracking(
    {
      path: '#path_2', 
      pointer: '#pointer_2', 
      custom: {
        area: '#demo_2',
        root: '-50%',
        delay: 400
      }
    }
  )
  svgPathAnime_2.animation()
})