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

// function to get all possible moves for a knight
const knightMoves = (start) => {
    const [u,v] = start;
chessBoard[u][v] = 1;
const moves = getMoves(start);

moves.forEach(move => {
    const [u,v] = move;
    chessBoard[u][v] = 1;
})

}
// helper function to calculate all possible moves for a knight
const getMoves = (start) => {
    const [u,v] = start;
    const moves = [];
moves.push([u-2,v-1])    
moves.push([u-2,v+1])    

return moves;
}
knightMoves([3,3])



console.log(chessBoard[1][3]);



