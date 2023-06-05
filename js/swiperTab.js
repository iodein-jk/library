window.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper("._slide_1", {
    spaceBetween: 10,
    slidesPerView: 4
  });

  const swiper2 = new Swiper("._slide_2", {
    thumbs: {
      swiper: swiper
    },
    loop: true,
    autoplay: {
        delay: 4500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        reverseDirection: false
    }
  });
})