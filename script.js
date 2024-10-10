

// // directed graph represented as an edge list
// const edgeList = [
//  [1,3],
//    [3,4],
//    [3,5],
//   [4,6],
//   [5,6],
//   [2,4],  
// ];
// // directed graph represented as an adjacency matrix
// // get unique vetices from edge list
// let vertices = []
// edgeList.forEach(edge => {
//     edge.forEach(vertex => {
//         if (!vertices.includes(vertex)) {
//         vertices.push(vertex);
//         }
//     });
//     })
// vertices.sort((a, b) => a - b);

// // create adjacency matrix
// let adjacencyMatrix = []
// for (let i = 0; i < vertices.length; i++) {
//     adjacencyMatrix.push(new Array(vertices.length).fill(0));
// }
// // console.log(adjacencyMatrix);
// // fill adjacency matrix with edge list connections
// edgeList.forEach(edge => {
//     const [u,v] = edge;
//     console.log(u,v);
//     adjacencyMatrix[u -1][v -1] = 1
// })
// console.log(adjacencyMatrix);


// // create an adjacency list
// let adjacencyList = {};
// edgeList.forEach(edge => {
// const [u,v] = edge;
// if (!adjacencyList[u]) {
//     adjacencyList[u] = [];
// }
// adjacencyList[u].push(v);
// })

// console.log(adjacencyList[3]);



// knights travails 
// adjacency matrix to represent chess board
const chessBoard = [];
const chessBoardSize = 8;
for (let i = 0; i < chessBoardSize; i++) {
    chessBoard.push(new Array(chessBoardSize).fill(0));
}
const filterMoves = (movesList) => {
    const filteredMoves = [];
movesList.forEach(move => {
const [u,v] = move;
if (u >= 0 && u < chessBoardSize && v >= 0 && v < chessBoardSize) {
    filteredMoves.push(move);
}
})
return filteredMoves;
}
// helper function to calculate all possible moves for a knight
const getMoves = (start) => {
    const [u,v] = start;
    const moves = [];
moves.push([u-2,v-1])    
moves.push([u-2,v+1])    
moves.push([u+2,v-1])    
moves.push([u+2,v+1])    

moves.push([u-1,v-2])
moves.push([u-1,v+2])
moves.push([u+1,v-2])
moves.push([u+1,v+2])

return moves
}
// function to get all possible moves using bfs
const getAllMoves = (start, end) => {
    const queue = [start,[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
const current = queue.shift();
const path = queue.shift();


if (current.toString() === end.toString()) {
    return path;
    }

const possibleMoves = getMoves(current);
const filteredMoves = filterMoves(possibleMoves);
filteredMoves.forEach(move => {
    const moveStr = move.toString();

if (!visited.has(moveStr)) {
    visited.add(moveStr)
    queue.push(move, [...path, move]);
    
}
})

    }

// const allMoves = Array.from(visited).map(move => move.split(',').map(Number));
return null
}


// function to get all possible moves for a knight
const knightMoves = (start, end) => {
    const [u,v] = start;
    const [x,y] = end;

    // console.log(end);
chessBoard[u][v] = 1;
chessBoard[x][y] = 1;

const shortestMovesList = Array.from(getAllMoves(start, end));
// console.log(shortestMovesList);

shortestMovesList.forEach(move => {
    const [u,v] = move;
    chessBoard[u][v] = 1;
})

const pathLength = shortestMovesList.length - 1;
// console.log(`You made it in ${pathLength} moves! Heres your path 
//     ${shortestMovesList}`);
    return `You made it in ${pathLength} moves! Heres your path ${shortestMovesList}`;


}

console.log(knightMoves([3,3],[4,3]));
console.log(chessBoard);
