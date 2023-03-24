<template>
  <div class="timer">
    <div
      class="time"
      :class="isTimerOn && 'timer-on-text-color-modifier'"
    >
      {{ timeDisplay }}
    </div>
    <div
      class="line"
      :class="isTimerOn && 'timer-on-background-modifier'"
    ></div>
    <div class="buttons">
      <div
        class="btn start-pause-btn"
        @click="startPauseButtonHandler"
      >
        <img v-show="!isTimerOn" src="../assets/icons/triangle.svg" class="start" >
        <div v-show="isTimerOn" class="pause"></div>
      </div>
      <div
        class="btn stop-btn"
        :class="isTimerOn && 'timer-on-background-modifier'"
        @click="stopButtonHandler"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { timeFormatingHelper } from '@/helpers/timeFormatingHelper'

export default {
  setup () {
    const isTimerOn = ref(false)
    const timeDisplay = ref('0')
    let timerId = null
    let time = 0

    function addTime() {
      time++
      timeDisplay.value = timeFormatingHelper(time)
      startTimer()
    }

    function startTimer() {
      timerId = setTimeout(addTime, 1000)
    }

    function startPauseButtonHandler() {
      !isTimerOn.value ? startTimer() : clearTimeout(timerId)
      isTimerOn.value = !isTimerOn.value
    }

    function stopButtonHandler() {
      time = 0
      timeDisplay.value = '0'
      clearTimeout(timerId)
      isTimerOn.value = false
    }

    return {
      isTimerOn,
      timeDisplay,
      startPauseButtonHandler,
      stopButtonHandler
    }
  }
}
</script>

<style scoped>
.timer {
  width: 225px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #696969;
  font-family: GottamPro;
  font-size: 22px;
  line-height: 21px;
}
.time {
  width: fit-content;
  height: 18px;
  position: absolute;
  top: 22px;
  color: #9E9E9E;
}
.line {
  width: 225px;
  height: 1px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #9E9E9E;
}
.buttons {
  width: 85px;
  height: 20px;
  position: absolute;
  bottom: 20px;
}
.btn {
  width: 20px;
  height: 20px;
  position: absolute;
}
.start-pause-btn {
  left: 0;
}
.start {
  position: absolute;
}
.pause {
  position: absolute;
  width: 3px;
  height: 20px;
  background: white;
  left: 5px;
}
.pause::after {
  content: '';
  position: absolute;
  width: 3px;
  height: 20px;
  background: white;
  left: 7px;
}
.stop-btn {
  right: 0;
  background: #9E9E9E;
}
.timer-on-background-modifier {
  background: white;
}
.timer-on-text-color-modifier {
  color: white;
}
</style>