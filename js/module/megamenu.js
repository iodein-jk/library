const megamenu = (() => {

  function megaMenu_focus() {
    const item = document.querySelectorAll(".megamenu-item");
    const focus = "_focus";
    item.forEach((element) => {
      element.addEventListener("mousemove", function () {
        let domAdd = function(target) {
          target.querySelector(".megamenu-children").style.visibility = "visible";
          target.querySelector(".megamenu-anchor").classList.add(focus);
          target.querySelector(".megamenu-backspace").classList.add(focus);
          target.querySelector(".megamenu-children").classList.add(focus);
        }

        if(this.querySelector(".megamenu-children") != null) setTimeout(domAdd(this), 400);
      });

      element.addEventListener("mouseout", function () {
        let domRemove = function(target) {
          target.querySelector(".megamenu-children").style.visibility = "hidden";
        }

        if(this.querySelector(".megamenu-children") != null) {
          this.querySelector(".megamenu-anchor").classList.remove(focus);
          this.querySelector(".megamenu-backspace").classList.remove(focus);
          this.querySelector(".megamenu-children").classList.remove(focus);
          
          setTimeout(domRemove(this), 400);
        } 
      });
    });
  }

  document.addEventListener('DOMContentLoaded', megaMenu_focus)
})()

export { megamenu }