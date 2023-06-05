const tabNav = (() => {
  let button,
      button_length
  document.querySelectorAll('[class*="tabNav"][role="tablist"]').forEach((tablist) => {
    button = tablist.children
    button_length = button.length

    for(var i = 0; i<button_length; i++) {
      button[i].addEventListener('click', function(){
        nav_hidden(this.parentNode)
        nav_visible(this)
        content_hidden(this.parentNode.nextElementSibling.children)

        if(this.getAttribute('aria-controls') !== undefined) {
          content_visible(this.getAttribute('aria-controls'))
        }

        // console.log(this.getAttribute('aria-controls'))
      })
    }
  })

  function nav_hidden(object_tablist){
    for(var i = 0; i<object_tablist.children.length; i++) {
      if(object_tablist.children[i].getAttribute('aria-selected') !== undefined) {
        object_tablist.children[i].setAttribute('aria-selected', 'false')
      }
    }
  }

  function nav_visible(object_button){
    if(object_button.getAttribute('aria-selected') !== undefined) {
      object_button.setAttribute('aria-selected', 'true')
    } 
  }

  function content_hidden(object_content){
    for(var i = 0; i<object_content.length; i++) {
      if(object_content[i].getAttribute('aria-hidden') !== undefined) {
        object_content[i].setAttribute('aria-hidden', 'true')
        object_content[i].classList.remove('_active','_show')
      }
    }
  }

  function content_visible(object_content){
    if(document.getElementById(object_content).getAttribute('aria-hidden') !== undefined) {
      document.getElementById(object_content).setAttribute('aria-hidden', "false")
      document.getElementById(object_content).classList.add('_active')

      setTimeout(function(){
        document.getElementById(object_content).classList.add('_show')
      },10)
    }
  }
})()

export { tabNav }