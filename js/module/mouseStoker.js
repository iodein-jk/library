const mouseStoker = function(cursor) {
  this.cursor = document.querySelector(cursor);
}

mouseStoker.prototype.following = function(button) {
  let cursor = this.cursor
  button = document.querySelectorAll(button)

  document.body.addEventListener('mousemove', function(e){
    // マウスカーソルの位置を監視
    let cursorPosX = e.clientX;
    let cursorPosY = e.clientY;

    // アニメーションに使用する要素の位置調整用1
    let cursorWidth = cursor.clientWidth;
    let cursorHeight = cursor.clientHeight;

    cursor.style.left = (cursorPosX) - (cursorWidth / 2) + "px"
    cursor.style.top = (cursorPosY) - (cursorHeight /2) + "px"
  })

  button.forEach((element) => {
    element.addEventListener('mouseenter', function(){
      cursor.classList.add('_active')
    })

    element.addEventListener('mouseleave', function(){
      cursor.classList.remove('_active')
    })
  })
}

export { mouseStoker }