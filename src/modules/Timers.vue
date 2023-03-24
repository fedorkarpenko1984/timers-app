<template>
  <div class="timers">
    <timer v-for="(timer, index) in timers" :key="index" />
    <add-timer-button @click="timers.push('timer')" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Timer from '@/components/Timer.vue'
import AddTimerButton from '@/UI/AddTimerButton.vue'
export default {
  components: {
    Timer,
    AddTimerButton
  },
  setup () {
    const timers = ref(['timer'])
    return { timers }
  }
}
</script>

<style scoped>
.timers {
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(3, 225px);
  grid-column-gap: 50px;
  grid-row-gap: 45px;
}

@media screen and (max-width: 1024px) {
  .timers {
    grid-template-columns: repeat(2, 225px);
  }
}
@media screen and (max-width: 768px) {
  .timers {
    grid-template-columns: 225px;
  }
}
  

</style>