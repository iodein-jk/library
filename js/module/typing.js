const typing = function(node) {
  this.node = node
  this.element = document.querySelectorAll(node)
  this.width   = []
  this.height  = []
  this.element.forEach((element, index) => {
    this.width[index]  = element.parentElement.clientWidth
    this.height[index] = element.parentElement.clientHeight
  })
}

typing.prototype.init = function() {
  this.element.forEach((e,i) => {
    let text = e.innerHTML
    let textBox = ""
    e.parentElement.style.width = this.width[i]+"px"
    e.parentElement.style.height = this.height[i]+"px"

    text.split("").forEach((s) => {
      if (s !== " ") {
        textBox += `<span style="display:none">` + s + `</span>`;
      } else {
        textBox += s;
      }
      e.innerHTML = textBox
    })
  })
}

typing.prototype.visible = function(target) {
  let textNode = document.querySelectorAll(target)
  let thisChild = ''
  setTimeout(function() {
    textNode.forEach((c) => {
      thisChild = c.childElementCount
      var selects = Array.prototype.slice.call(c.children);
      
      selects.forEach((cc, i) => {
        var time = 70;
        setTimeout(function() {
          cc.style.display = "inline"
        }, time*i)
      })
    })
  }, 200)
}

typing.prototype.hidden = function(target) {
  let textNode = document.querySelectorAll(target)
  let thisChild = ''
  textNode.forEach((c) => {
    thisChild = c.childElementCount
    var selects = Array.prototype.slice.call(c.children);
    selects.forEach((cc) => {
      cc.style.display = "none"
    })
  })
}

export { typing }