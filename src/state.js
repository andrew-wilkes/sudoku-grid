import { reactive } from 'vue'

export const numbers = reactive({
    grid: [],
    candidates: [],
    solution: []
})

export const config = reactive({
    selectedCell: { idx: -1, peers: [] },
    candidateColorMap: [],
    groups: [],
    sl: '80%,70%',
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
    config.selectedCell = { idx: -1, peers: [] }
    config.candidateColorMap = Array(81).fill({})
    config.groups = []
    config.showSolution = false
    config.showWrong = false
    test()
}

resetNumbers()

function test() {
    numbers.candidates[1] = "19"
    numbers.candidates[2] = "123456789"
    config.candidateColorMap[2] = {2: 60, 6: 240}
    numbers.candidates[3] = "8"
    numbers.grid[0] = 18
    numbers.grid[9] = 8
}