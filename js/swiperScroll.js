window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".swiper", {
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        reverseDirection: false
    }
  });
  swiper.autoplay.stop()

  const options = {
    root: null, // 今回はビューポートをルート要素とする
    rootMargin: "-50% 0px", // ビューポートの中心を判定基準にする
    threshold: 0 // 閾値は0
  };

  const observer = new IntersectionObserver(doWhenIntersect, options);
  observer.observe(document.querySelector('.swiper'))

  function doWhenIntersect(entries) {
    // 交差検知をしたもののなかで、isIntersectingがtrueのDOMを色を変える関数に渡す
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        swiper.autoplay.start()
      }
      else {
        swiper.autoplay.stop()
      }
    });
  }
})