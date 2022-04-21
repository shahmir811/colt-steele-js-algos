// Remember DIJKSTRA'S ALGORITHM only works with weighted graphs

// PSEUDOCODE of DIJKSTRA'S ALGORITHM using MIN BINARY HEAP
// ************************************************* //
// 1 - This function should accept a starting and ending vertex
// 2 - Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a
//     value of infinity, except for the starting vertex which should have a value of 0.
// 3 - After setting a value in the distances object, add each vertex with a priority of Infinity to the priority
//     queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
// 4 - Create another object called previous and set each key to be every vertex in the adjacency list with a value of
//     null
// 5 - Start looping as long as there is anything in the priority queue
//   A - dequeue a vertex from the priority queue
//   B - If that vertex is the same as the ending vertex - we are done!
//   C - Otherwise loop through each value in the adjacency list at that vertex
//     i) - Calculate the distance to that vertex from the starting vertex
//     ii) - if the distance is less than what is currently stored in our distances object
//         a - update the distances object with new lower distance
//         b - update the previous object to contain that vertex
//         c - enqueue the vertex with the total distance from the start node
