const class_OddEven = function(arg) {
  arg.select = arg.select == undefined ? null : Array.prototype.slice.call(document.querySelectorAll(arg.select))
  arg.type = arg.type == undefined ? 0 : arg.type

  if(arg.select != null) {
    length = arg.select.length
    for(var i = 0; i<length; i++) {
      if(i % 2 == arg.type) {
        if(arg.type === 0) {
          arg.select[i].classList.add('_even')
        }
        else {
          arg.select[i].classList.add('_odd')
        }
      }
    }
  }
}

export {class_OddEven}
