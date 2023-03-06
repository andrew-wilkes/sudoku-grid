<template>
  Grid

  <div class="grid">
  <div class="box" v-for="n in 9">
    <Cell v-for="m in 9" />
  </div>
  </div>

</template>

<script setup>
import Cell from './Cell.vue'

</script>

<style scoped>
  .box, .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: min-content;
    background-color: black;
    gap: 1px;
  }

  .grid {
    gap: 2px;
    border: 2px solid black;
  }
</style>
