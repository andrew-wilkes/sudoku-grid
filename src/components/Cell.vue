<script setup>

import { numbers, config } from '../state'

defineProps({
})

const showBigNum = true;
const showNumPair = false;
const showNumGrid = false;
const showSum = false;
const showSolNum = false;
</script>

<template>
  <div class="cell">
    <div class="sol-num" v-if="showSolNum">8</div>
    <div class="big-num" v-if="showBigNum">8</div>
    <div class="num-pair" v-if="showNumPair">8 9</div>
    <div class="num-grid" v-if="showNumGrid">
      <div class="grid-num" v-for="n in 9">{{ n }}</div>
    </div>
    <div class="sum" v-if="showSum">14</div>
  </div>
</template>

<style scoped>
.cell {
  width: 50px;
  height: 50px;
  box-sizing: content-box; /* This prevents the addition of borders shrinking the content box size */
  display: grid;
  position: relative; /* This is to allow the absolute positioning of child divs to work: but it doesn't seem to be required */
  justify-content: center;
  align-content: center;
  background-color: bisque;
}
.big-num {
  font-weight: bold;
  font-size: 20pt;
}
.num-grid {
  display: flex;
  flex-wrap: wrap;
  font-size: 8pt;
}
.grid-num {
  width: 16px;
  text-align: center;
}
.sum {
  position: absolute;
}
</style>
