const class_Device = (() => {
  let text = {
    device: '',
    browser: '',
    orientation: ''
  }

  /*
   * デバイス判定
  */
  if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
    // スマートフォン向けの記述
    text.device = 'smartphon'
    document.body.classList.add('smartphon')
    document.body.classList.remove('tablet')
    document.body.classList.remove('pc')
  } else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    // タブレット向けの記述
    text.device = 'tablet'
    document.body.classList.remove('smartphon')
    document.body.classList.add('tablet')
    document.body.classList.remove('pc')
  } else {
    // PC向けの記述
    text.device = 'pc'
    document.body.classList.remove('smartphon')
    document.body.classList.remove('tablet')
    document.body.classList.add('pc')
  }

  /*
   * 画面の縦横判定
  */
  if(window.matchMedia("(orientation: portrait)").matches){
    // 縦の時の処理
    text.orientation = '縦向き'
    document.body.classList.remove('landscape')
    document.body.classList.add('portrait')
  }
  else{
    // 横の時の処理
    text.orientation = '横向き'
    document.body.classList.add('landscape')
    document.body.classList.remove('portrait')
  }

  /*
   * ブラウザ判定
  */
  const agent = window.navigator.userAgent.toLowerCase()
  if (agent.indexOf("msie") != -1 || agent.indexOf("trident") != -1) {
    text.browser = 'InternetExplorer'
    document.body.classList.add('InternetExplorer')
  } else if (agent.indexOf("edg") != -1 || agent.indexOf("edge") != -1) {
    text.browser = 'Edge'
    document.body.classList.add('Edge')
  } else if (agent.indexOf("opr") != -1 || agent.indexOf("opera") != -1) {
    text.browser = 'Opera'
    document.body.classList.add('Opera')
  } else if (agent.indexOf("chrome") != -1) {
    text.browser = 'Chrome'
    document.body.classList.add('Chrome')
  } else if (agent.indexOf("safari") != -1) {
    text.browser = 'Safari'
    document.body.classList.add('Safari')
  } else if (agent.indexOf("firefox") != -1) {
    text.browser = 'FireFox'
    document.body.classList.add('FireFox')
  } else if (agent.indexOf("opr") != -1 || agent.indexOf("opera") != -1) {
    text.browser = 'Opera'
    document.body.classList.add('Opera')
  }

  return text
})()

export { class_Device }