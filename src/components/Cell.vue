<script setup>

import { numbers, config } from '../state'
import { computed } from 'vue'

const props = defineProps({
  idx: Number
})

const showSum = false;

function candidate(n) {
  return numbers.candidates[props.idx].indexOf('' + n) > -1 ? n : ''
}

const isSelected = computed(() => {
  return config.selected && config.selectedCell.idx == props.idx
})

const isPeer = computed(() => {
  return config.peers && config.selectedCell.peers.indexOf(props.idx + '') > -1
})

const isClue = computed(() => {
  return numbers.grid[props.idx] > 10
})

const gridValue = computed(() => {
    let n = numbers.grid[props.idx]
    if (n == 0) return ""
    if (n > 10) return n - 10
    return n
})

</script>

<template>
  <div class="cell" :class="{ selected: isSelected, highlighted: isPeer }">
    <div class="sum" v-if="showSum">14</div>
    <div class="sol-num" v-if="config.showSolution" :class="{ clue: isClue }">{{ numbers.solution[idx] }}</div>
    <div class="big-num" v-else-if="numbers.grid[idx] > 0" :class="{ clue: isClue }">{{ gridValue }}</div>
    <div class="num-pair" v-else-if="numbers.candidates[idx].length < 3">
      <span v-for="n in numbers.candidates[idx]">{{ n }}</span>
    </div>
    <div class="num-grid" v-else>
      <div class="grid-num" v-for="n in 9">{{ candidate(n) }}</div>
    </div>
  </div>
</template>

<style scoped>
.cell {
  display: grid;
  position: relative; /* This is to allow the absolute positioning of child divs to work: but it doesn't seem to be required */
  justify-content: center;
  align-content: center;
}
.num-grid {
  display: flex;
  flex-wrap: wrap;
}
.grid-num {
  text-align: center;
}
.sum {
  position: absolute;
}
</style>
