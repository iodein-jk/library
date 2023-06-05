var app = new Vue({
  el: '#app',

  /* == data == リアクティブなデータを登録 */
  data(){
    return{
    };
  },
  /* ==== components ==== */
  // -- 単一ファイルコンポーネントの登録
  components: {
    'my-aside': httpVueLoader('./components/aside.vue'),
    'my-footer': httpVueLoader('./components/footer.vue'),
    'my-toc': httpVueLoader('./components/toc.vue'),
    'my-template': httpVueLoader('./components/template.vue'),
  },
  mounted() {
  }
});