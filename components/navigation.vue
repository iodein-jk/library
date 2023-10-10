<template>
  <ul class="sideNavUlist">
    <li class="sideNavUlist-item">
      <a class="sideNavUlist-parent" href="./">Index</a>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Components
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="template.html">Template</a></li>
          <li><a class="sideNavChild-anchor" href="mouseStoker.html">MouseStoker</a></li>
          <li><a class="sideNavChild-anchor" href="modal.html">Modal</a></li>
          <li><a class="sideNavChild-anchor" href="tabNav.html">TabNav</a></li>
          <li><a class="sideNavChild-anchor" href="accordion.html">Accordion </a></li>
          <li><a class="sideNavChild-anchor" href="megamenu.html">Megamenu </a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Images
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="fadeSlider.html">FadeSlider</a></li>
          <li><a class="sideNavChild-anchor" href="skeleton.html">Skeleton</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Text
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="typing.html">Typing</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Animation
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="fade.html">FadeIn / Out</a></li>
          <li><a class="sideNavChild-anchor" href="slide.html">SlideDown / Up </a></li>
          <li><a class="sideNavChild-anchor" href="hashLink.html">HashLink </a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        SVG
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="pathTracking.html">pathTracking</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Helper
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="viewport.html">Viewport</a></li>
          <li><a class="sideNavChild-anchor" href="cookie.html">Cookie</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Class
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="class_OddEven.html">OddEven</a></li>
          <li><a class="sideNavChild-anchor" href="class_Device.html">Device</a></li>
          <li><a class="sideNavChild-anchor" href="class_Scroll.html">Scroll</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Composite
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="firstTimeOnly.html">FirstTimeOnly</a></li>
        </ul>
      </div>
    </li>
    <li class="sideNavUlist-item">
      <button class="sideNavUlist-parent">
        Package
      </button>

      <div class="collapse">
        <ul class="sideNavChild">
          <li><a class="sideNavChild-anchor" href="textAnime.html">[ gsap ] textAnime</a></li>
          <!-- <li><a class="sideNavChild-anchor" href="swiperTab.html">[ swiper ] Tab</a></li>
          <li><a class="sideNavChild-anchor" href="swiperScroll.html">[ swiper ] Scroll</a></li> -->
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
module.exports = {
  data() {
    return {
    };
  },
  /* == props == テンプレートタグの属性を登録 */
  props: ["classStyle"],
  methods: {
  },
  mounted() {
  }
};
</script>

<!-- <style scoped>
</style> -->
