// Return a list of indexes of peer cells
export const getPeers = (idx) => {
    let peers = [];
    let grid = Array(81).fill(false);
    let x = idx % 9;
    let y = Math.floor(idx / 9) * 9;
    let bx = Math.floor(x / 3) * 3;
    let by = Math.floor(idx / 27) * 27;
    for (let j = 0; j < 9; j++) {
        if (x != idx) grid[x] = true;
        if (y != idx) grid[y] = true;
        y += 1;
        x += 9;
    }
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            if (bx + by + k != idx) grid[bx + by + k] = true;
        }
        by += 9;
    }
    for (let i in grid) {
        if (grid[i]) peers.push(i);
    }
    return peers;
}