<template>
  <div id="app">
    <div class="timers-wrapper">
      <timers />
    </div>
  </div>
</template>

<script>
import Timers from './modules/Timers.vue';
export default {
  components: {
    Timers
  }
}
</script>

<style scoped>
#app {
  background: #353638;
  width: 100%;
  min-height: 100vh;
  padding: 72px 0;
}
.timers-wrapper {
  margin: 0 auto;
  width: fit-content;
}
</style>