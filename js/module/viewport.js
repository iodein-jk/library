const viewport = (content) => {
  
  let getText = { 
    media : content.mediaMaxWidth+'px',
    content: ""
  }

  content.mediaMaxWidth = content.mediaMaxWidth == undefined ? 1000 : content.mediaMaxWidth
  content.minimum       = content.minimum       == undefined ? 'width=device-width,initial-scale=1.0' : content.minimum
  content.width         = content.width         == undefined ? 1280 : content.width
  console.log(content)

  let mediaContent = () => {
    if (window.matchMedia && window.matchMedia('(max-device-width: '+content.mediaMaxWidth+'px)').matches) {
      // 1. スマホ端末でのTitel表示
      document.querySelector("meta[name='viewport']").setAttribute("content", content.minimum);
    } else {
      // 2. PC・タブレット端末でのTitelサイズ
      document.querySelector("meta[name='viewport']").setAttribute("content", "width="+content.width+"");
    }
  }

  if (window.matchMedia && window.matchMedia('(max-device-width: '+content.mediaMaxWidth+'px)').matches) {
    getText.content = content.minimum
  } else {
    getText.content = "width="+content.width
  }

  window.addEventListener('load', mediaContent)
  window.addEventListener("resize", mediaContent)
  window.addEventListener("orientationchange", mediaContent)

  return getText
}

export { viewport }