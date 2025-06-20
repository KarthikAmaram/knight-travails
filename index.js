const knightMoves = [
  [2, 1], [2, -1], [-2, 1], [-2, -1],
  [1, 2], [1, -2], [-1, 2], [-1, -2]
];




function knightTravalis(start, end) {
    let queue = [];
    let visitedPositions = new Set();
    queue.push({position: start, path: [start]});
    while (queue.length > 0) {
        let current = queue.shift();
        let [x, y] = current.position;
        visitedPositions.add(`${x},${y}`);
        if (x === end[0] && y === end[1]) {
            return current.path;
        } else {
            for (let move of knightMoves) {
                let [dx, dy] = move;
                let newX = x + dx;
                let newY = y + dy;
                if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
                    if (!visitedPositions.has(`${newX},${newY}`)) {
                        visitedPositions.add(`${newX},${newY}`);
                        queue.push({position: [newX, newY], path: [...current.path, [newX, newY]]});
                    }
                }
            }
        }
    }
}

console.log(knightTravalis([3,3],[4,3]));