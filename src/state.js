import { reactive } from 'vue'

export const numbers = reactive({
    grid: [],
    candidates: [],
    solution: []
})

const selected = {
    idx: -1,
    bid: -1,
    cid: -1,
    peers: []
  }

export const config = reactive({
    selected: selected,
    groups: [],
    colors: [0xd0b1fc, 0xf7c5dd, 0xfaedc7, 0x98e2f7, 0xcaeebe, 0xff0000, 0x00ff00, 0x0000ff],
    showSolution: false,
    showWrong: false,
    remove: true,
    same: true,
    invalid: true,
    remaining: true,
    selected: true,
    peers: true
})

export const resetNumbers = () => {
    numbers.grid = Array(81).fill(0)
    numbers.candidates = Array(81).fill('')
    numbers.solution = []
    numbers.showSolution = false
    numbers.showWrong = false
}

resetNumbers()