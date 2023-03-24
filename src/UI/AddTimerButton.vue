<template>
  <div class="add-timer-button">
    <div class="line horizontal"></div>
    <div class="line vertical"></div>
  </div>
</template>

<style scoped>
.add-timer-button {
  width: 225px;
  height: 120px;
  background: #696969;
  display: flex;
  align-items: center;
  justify-content: center;
}
.line {
  position: absolute;
  background: #9E9E9E;
}
.horizontal {
  width: 20px;
  height: 3px;
}
.vertical {
  width: 3px;
  height: 20px;
}
</style>