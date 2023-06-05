let fadeSlider = function(dataIndex, dataParent) {
  this.index = Number(dataIndex)
  this.parent = Number(dataParent)

  this.current = "_current" 
  this.hidden = "_hidden"

  this.nodeParent = ".fadeSlider[data-parent='"+this.parent+"']"
  this.nodeImages = this.nodeParent+" .fadeSlider-row"
  this.nodeShift = this.nodeParent+" .fadeSlider-shiftButton"
  this.nodeThumnail = ".fadeSlider-thumbnail[data-parent='"+this.parent+"']"
  this.nodeAnchor = this.nodeThumnail+" .fadeSlider-thumbnail-anchor"
}

fadeSlider.prototype.thumnail = function(index){
  this.index = Number(index)
  if(document.querySelector(this.nodeThumnail) != undefined) {
    document.querySelectorAll(this.nodeAnchor).forEach(element => {
      element.classList.remove(this.current)
      element.style.pointerEvents = 'auto'
    })
    document.querySelector(this.nodeAnchor+'[data-index="'+this.index+'"]').classList.add(this.current)
    document.querySelector(this.nodeAnchor+'[data-index="'+this.index+'"]').style.pointerEvents = 'none'
  }
  else {
    return false
  }
}

fadeSlider.prototype.Image = function(index){
  this.index = Number(index)

  fadeOut(document.querySelector(this.nodeImages+'.'+this.current), 500)
  document.querySelectorAll(this.nodeImages).forEach(element => {
    element.classList.remove(this.current)
  })

  document.querySelector(this.nodeImages+'[data-index="'+this.index+'"]').classList.add(this.current)
  fadeIn(document.querySelector(this.nodeImages+'[data-index="'+this.index+'"]'), 500)

  const ImageMax = document.querySelectorAll(this.nodeImages).length
  const shiftPrev = this.index - 1
  const shiftNext = this.index + 1
  if(this.index == 0) {
    document.querySelector(this.nodeShift+'._left').classList.add(this.hidden)
    document.querySelector(this.nodeShift+'._left').removeAttribute('data-index')
  }
  else {
    document.querySelector(this.nodeShift+'._left').classList.remove(this.hidden)
    document.querySelector(this.nodeShift+'._left').setAttribute('data-index', shiftPrev)
  }

  if(this.index >= 0 && this.index == (ImageMax - 1)) {
    document.querySelector(this.nodeShift+'._right').classList.add(this.hidden)
    document.querySelector(this.nodeShift+'._right').removeAttribute('data-index')
  }
  else {
    document.querySelector(this.nodeShift+'._right').classList.remove(this.hidden)
    document.querySelector(this.nodeShift+'._right').setAttribute('data-index', shiftNext)
  }

  function fadeIn(query, duration, opacity = 1) {
    // display: noneでないときは何もしない
    if (getComputedStyle(query).display !== "none") return;
  
    // style属性にdisplay: noneが設定されていたとき
    if (query.style.display === "none") {
      query.style.display = "block";
    } else {
      query.style.display = "block";
    }
    query.style.opacity = 0;
  
    var start = performance.now();
  
    requestAnimationFrame(function tick(timestamp) {
      // イージング計算式（linear）
      var easing = (timestamp - start) / duration;
  
      // opacityが1を超えないように
      query.style.opacity = Math.min(easing, 1);
  
      // opacityが1より小さいとき
      if (easing < opacity) {
        requestAnimationFrame(tick);
      } else {
        query.style.opacity = "";
      }
    });
  }
  
  function fadeOut(query, duration, opacity = 1) {
    query.style.opacity = opacity;
  
    var start = performance.now();
  
    requestAnimationFrame(function tick(timestamp) {
      // イージング計算式（linear）
      var easing = (timestamp - start) / duration;
  
      // opacityが0より小さくならないように
      query.style.opacity = Math.max(opacity - easing, 0);
  
      // イージング計算式の値が1より小さいとき
      if (easing < opacity) {
        requestAnimationFrame(tick);
      } else {
        query.style.opacity = "";
        query.style.display = "none";
      }
    });
  }
}

export { fadeSlider }