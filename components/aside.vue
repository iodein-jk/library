<template>
  <aside class="docSidebar">
    <my-navigation></my-navigation>
  </aside>
</template>

<script>
module.exports = {
  data() {
    return {
    };
  },
  components: {
    'my-navigation': httpVueLoader('./navigation.vue')
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<!-- <style scoped>
</style> -->
