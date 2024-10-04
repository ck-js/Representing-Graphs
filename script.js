// directed graph represented as an edge list
const edgeList = [
 [1,3],
   [3,4],
   [3,5],
  [4,6],
  [5,6],
  [2,4],  
];
// directed graph represented as an adjacency matrix
// get unique vetices from edge list
let vertices = []
edgeList.forEach(edge => {
    edge.forEach(vertex => {
        if (!vertices.includes(vertex)) {
        vertices.push(vertex);
        }
    });
    })
vertices.sort((a, b) => a - b);

// create adjacency matrix
let adjacencyMatrix = []
for (let i = 0; i < vertices.length; i++) {
    adjacencyMatrix.push(new Array(vertices.length).fill(0));
}
console.log(adjacencyMatrix);


