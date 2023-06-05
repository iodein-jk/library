const pathTracking = function(arg) {
  if(arg.path === undefined || arg.pointer === undefined) {
    return false
  }

  this.node = { 
    path : document.querySelector(arg.path) ,
    pointer : document.querySelector(arg.pointer),
  }

  if(arg.custom === undefined || arg.custom.area === undefined) {
    this.node.area = document.body
  }
  else {
    this.node.area = document.querySelector(arg.custom.area)
  }

  if(arg.custom === undefined || arg.custom.root === undefined) {
    this.node.root = 0
  }
  else {
    this.node.root = window.innerHeight + (window.innerHeight * (parseInt(arg.custom.root) * 0.01))
  }

  if(arg.custom === undefined || arg.custom.delay === undefined) {
    this.node.delay = 0
  }
  else {
    this.node.delay = arg.custom.delay
  }

  this.anime = {
    //pathを取得
    targetPath : this.node.path,
    //動かしたいsvg要素を取得
    movePointer : this.node.pointer,
    //動かす値を取得
    counter : 0,
    //再生方向反転用フラグ
    state : true,
    //pathの長さを取得
    leng : this.node.path.getTotalLength(),
  }

  this.pageDrag = {
    //setTimeoutフラグ
    execution : null,
    //Timeout時間
    interval : this.node.delay,
    //スクロール量の割合
    progress :  0,
    //スクロールTOP位置
    top : 0,
    //スクロールの上下判定
    result : 1,
    //スクロールエリア上判定
    offsetTop : (window.pageYOffset + this.node.area.getBoundingClientRect().top) - this.node.root,
    //スクロールエリア下判定
    offsetBottom : this.node.area.getBoundingClientRect().height
  }

  //console.log(this.pageDrag.offsetBottom)
}

pathTracking.prototype.animation = function() {
  if(this.node.path === undefined || this.node.pointer === undefined) {
    return false
  }

  let set_anime = this.anime
  let set_pageDrag = this.pageDrag
  
  function movePointer(moving, scroll){
    var courent = set_anime.counter
    var courentPointer = set_anime.movePointer.getAttribute('data-move')
    var animationSet = courentPointer <= moving ? true : false

    function animations() {
      if(courentPointer <= moving) {
        set_anime.counter += 0.0025;
      }
      else if(courentPointer >= moving) {
        set_anime.counter -= 0.0025;
      }
      
      //アニメーション用のanime.counter
      if(animationSet == true && set_anime.counter <= moving || animationSet == false && set_anime.counter >= moving) {
        //現在の座標位置を取得
        var point = set_anime.targetPath.getPointAtLength(set_anime.counter * set_anime.leng);
        
        //動かしたいSVG要素のtranslateを変更
        set_anime.movePointer.setAttribute( 'cx', point.x );
        set_anime.movePointer.setAttribute( 'cy', point.y );
        
        //再帰
        window.requestAnimationFrame(animations);
      } else {
        set_anime.movePointer.setAttribute( 'data-move', moving );
        //再帰
        window.cancelAnimationFrame(animations);

        courent = set_anime.counter
        return courent
      }
    }

    animations()
  }

  function onScroll() {
    let scroll = window.scrollY
    let active = false
    let conditions_1 = scroll > set_pageDrag.offsetTop ? true : false
    let conditions_2 = scroll < (set_pageDrag.offsetBottom + set_pageDrag.offsetTop) ? true : false
    //console.log(scroll)

    if(conditions_1 === true && conditions_2 === true) {
      set_pageDrag.progress = ((scroll - set_pageDrag.offsetTop) / set_pageDrag.offsetBottom)
      active = true
    }
    else if(conditions_1 === true && conditions_2 === false) {
      set_pageDrag.progress = 1
      active = true
    }
    else if(conditions_1 === false && conditions_2 === true || conditions_1 === true && scroll == 0) {
      set_pageDrag.progress = 0
      active = true
    }
    else {
      active = false
    }

    if(active === true) {
      if(set_pageDrag.progress <= 0.1) {
        set_pageDrag.progress = 0
      }
      else if(set_pageDrag.progress >= 0.96) {
        set_pageDrag.progress = 1
      }

      if(set_pageDrag.top < document.documentElement.scrollTop) {
        set_pageDrag.result =  1
      }
      else {
        set_pageDrag.result = -1
      }
      
      movePointer(set_pageDrag.progress, set_pageDrag.result)
      set_pageDrag.top = document.documentElement.scrollTop
    }

    set_pageDrag.execution = null
  }

  window.addEventListener('scroll', function(){
    clearTimeout(set_pageDrag.execution)
    set_pageDrag.execution = setTimeout(onScroll, set_pageDrag.interval)
  })

  movePointer(set_pageDrag.progress, set_pageDrag.result)
}

export { pathTracking }