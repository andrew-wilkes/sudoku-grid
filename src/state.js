import { reactive } from 'vue'

export const numbers = reactive({
    grid: [],
    candidates: [],
    solution: []
})

export const config = reactive({
    selectedCell: { idx: -1, peers: [] },
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
    config.showSolution = false
    config.showWrong = false
    numbers.candidates[1] = "2789"
}

resetNumbers()