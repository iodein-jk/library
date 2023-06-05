const skeleton = function(arg) {
  const $element = document.getElementById(arg.id);
  const itemContent = $element.querySelectorAll('.skeleton-image');
  const itemContentNode = Array.prototype.slice.call(itemContent, 0);
  const mouseStalker = $element.querySelector('.skeleton-back')

  let rect = ""
  let scrollLeft = ""
  let offsetTop = ""
  let offsetLeft = ""
  let loupeScale = 0
  let stalker = {
    x: 0,
    y: 0
  }
  let mouse = {
    x: 0,
    y: 0
  }
  
  document.addEventListener('mousemove', mousemove)

  function mousemove(e) {
    rect = $element.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    offsetTop = rect.top;
    offsetLeft = rect.left + scrollLeft;

    mouse.x = e.clientX - offsetLeft
    mouse.y = e.clientY - offsetTop
  }

  (function update() {
    stalker.x += (mouse.x - stalker.x) * 0.1
    stalker.y += (mouse.y - stalker.y) * 0.1

    var x = Math.round(stalker.x * 10) / 10
    var y = Math.round(stalker.y * 10) / 10

    mouseStalker.style.setProperty('--itemContainer-loupeX',x + 'px')
    mouseStalker.style.setProperty('--itemContainer-loupeY',y + 'px')

    requestAnimationFrame(update)
  }())

  itemContentNode.forEach(function(element) {
    element.addEventListener('mousemove',popupIn)
    element.addEventListener('mouseout',popupOut)
  })

  function popupIn() {
    const scaleAnimationIn = () => {
      if(loupeScale < arg.clip) {
        loupeScale += 4
        mouseStalker.style.setProperty('--itemContainer-loupeScale',loupeScale + 'px')
        requestAnimationFrame(scaleAnimationIn)
      }
      else {
        cancelAnimationFrame(scaleAnimationIn)
      }
    }
    scaleAnimationIn()
  }

  function popupOut() {
    const scaleAnimationOut = () => {
      if(loupeScale > 0) {
        loupeScale -= 4
        mouseStalker.style.setProperty('--itemContainer-loupeScale',loupeScale + 'px')
        requestAnimationFrame(scaleAnimationOut)
      }
      else {
        cancelAnimationFrame(scaleAnimationOut)
      }
    }
    scaleAnimationOut()
  }
}

export {skeleton}
