<template>
  Grid

  <div class="grid">
  <div class="box" v-for="box in 9">
    <Cell v-for="cell in 9" @click="cellClicked(getIndex(box-1, cell-1))" :idx="getIndex(box-1, cell-1)"/>
  </div>
  </div>

</template>

<script setup>
import Cell from './Cell.vue'
import { config } from '../state'
import { getPeers } from '../utils'

function getIndex(box, cell) {
  return 3 * (box % 3) + 27 * Math.floor(box / 3) + cell % 3 + 9 * Math.floor(cell / 3)
}

function cellClicked(idx) {
  let csl = config.selectedCell
  if (csl.idx == idx) {
    csl.clickCount++
  } else {
    csl.idx = idx
    csl.peers = getPeers(idx)
    csl.clickCount = 1
  }
}
</script>

<style scoped>
  .box, .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: min-content;
  }
</style>
