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

function getCandidateStyle(n) {
  let hue = config.candidateColorMap[props.idx][n]
  let style = isNaN(hue) ? {} : { backgroundColor: 'hsl(' + hue + ',' + config.sl + ')' }
  return style
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
      <span v-for="n in numbers.candidates[idx]" :style="getCandidateStyle(n)">{{ n }}</span>
    </div>
    <div class="num-grid" v-else>
      <div v-for="n in 9" :style="getCandidateStyle(n)">{{ candidate(n) }}</div>
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
.num-grid * {
  display: grid;
  align-content: center;
  justify-content: center;
  border: 1px;
  border-radius: 3px;
}
.num-pair * {
  margin: 0 2px;
  padding: 2px 4px;
  border: 1px;
  border-radius: 3px;
}
.sum {
  position: absolute;
}
</style>
