const class_Scroll= (query) => {
    
  const boxes = document.querySelectorAll(query.select)

  query.inClass = query.inClass == undefined ? "_animated" : query.inClass
  query.forward = query.forward == undefined ? true : query.forward
  query.options            = query.options == undefined ? {} : query.options
  query.options.root       = query.options.root == undefined ? null : query.options.root
  query.options.rootMargin = query.options.rootMargin == undefined ? "-50% 0px" : query.options.rootMargin
  query.options.threshold  = query.options.threshold == undefined ? 0 : query.options.threshold

  if(boxes != null) {
    const observer = new IntersectionObserver(doWhenIntersect, query.options);

    boxes.forEach(box => {
      observer.observe(box);
    });

    function doWhenIntersect(entries) {
      // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateIndex(entry.target);
        }
        else {
          removeIndex(entry.target);
        }
      });
    }

    function activateIndex(element) {
      if(element.classList.contains(query.inClass) == false) {
        element.classList.add(query.inClass)
      }
    }

    function removeIndex(element) {
      if(query.forward == true) {
        element.classList.remove(query.inClass)
      }
      else {
        return false
      }
    }
  }
}

export { class_Scroll }