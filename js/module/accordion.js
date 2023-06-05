const accordion = (function() {
  const container = document.querySelectorAll('.accordion')
  const item = document.querySelectorAll('.accordion-item')
  const team = document.querySelectorAll('.accordion-team')
  const description = document.querySelectorAll('.accordion-description')
  const open = '_open'
  let teamIs,descriptionIs,toggle, toggleGroup, length
  
  if(container != null) {
    item.forEach((element, index) => {
      teamIs = team[index] != null ? true : false
      descriptionIs = description[index] ? true : false
      // console.log('teamIs:'+teamIs+' teamIs:'+descriptionIs)
      // console.log(toggle)
      
      if(teamIs === true && descriptionIs === true) {
        team[index].addEventListener('click', function(){
          toggle = this.getAttribute('data-toggle')

          if(this.classList.contains(open) === false) {
            if(toggle != null) {
              toggleGroup = document.querySelectorAll('.accordion-team[data-toggle="'+toggle+'"]')
              length = toggleGroup.length
              for(var i=0; i<length; i++) {
                if(toggleGroup[i].classList.contains(open) === true) {
                  for(var ii=0; ii<toggleGroup[i].parentNode.children.length; ii++) {
                    toggleGroup[i].parentNode.children[ii].classList.remove(open)
                  }
                }
              }
            }

            this.classList.add(open)
            description[index].classList.add(open)
          }
          else {
            this.classList.remove(open)
            description[index].classList.remove(open)
          }
        })
      }
      // if() {

      // }
    })
  }
})();

export { accordion }