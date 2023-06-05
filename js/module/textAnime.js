const textAnime = (element) => {
  let node =  document.querySelectorAll(element)
  node.forEach((e) => {
    let text = e.innerHTML
    let textBox = ""
    text.split('').forEach((s) => {
      if (s !== " ") {
        textBox += `<div class="textAnime-slice" style="display: inline-block">` + s + `</div>`;
      } else {
        textBox += `<div class="textAnime-slice" style="display: inline-block">&nbsp;</div>`;
      }
      e.innerHTML = textBox
    })
  })

  document.querySelectorAll(element+" .textAnime-slice").forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      scale: 0,
      yPercent: 150,
      ease: "back",
      duration: 0.5,
      delay: i * 0.05
    });
  });
}

export { textAnime }