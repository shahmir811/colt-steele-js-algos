// We are using Adjacency List for Graphs.
// We are building an undirected Graph.

// Following is PSEUDOCODE of DEPTH-FIRST RECURSIVE SOLUTION in GRAPHs
// 1 - The function should accept a starting node
// 2 - Create a list to store the end result, to be returned at the very end
// 3 - Create an object to store visited vertices
// 4 - Create a helper function which accepts a vertex
//   a - The helper function should return early if the vertex is empty
//   b - The helper function should place the vertex it accepts into the visited object and push that vertex into the
//       result array.
//   c - Loop over all of the values in the adjacencyList for that vertex
//   d - If any of those values have not been visited, recursively invoke the helper function with that vertex
// 5 - Invoke the helper function with the starting vertex
// 6 - Return the result array

// Following is PSEUDOCODE of DEPTH-FIRST ITERATIVE SOLUTION in GRAPHs
// 1 - The function should accept a starting node
// 2 - Create a stack to help use keep track of vertices (use a list/array)
// 3 - Create a list to store the end result, to be returned at the very end
// 4 - Create an object to store visited vertices
// 5 - Add the starting vertex to the stack, and mark it visited
// 6 - While the stack has something in it:
//   a - Pop the next vertex from the stack
//   b - If that vertex hasn't been visited yet:
// ​     i) Mark it as visited
//      ii) Add it to the result list
//      iii) Push all of its neighbors into the stack
// 7 - Return the result array

// Following is PSEUDOCODE of BREADTH-FIRST SOLUTION in GRAPHs
// 1 - This function should accept a starting vertex
// 2 - Create a queue (you can use an array) and place the starting vertex in it
// 3 - Create an array to store the nodes visited
// 4 - Create an object to store nodes visited
// 5 - Mark the starting vertex as visited
// 6 - Loop as long as there is anything in the queue
// 7 - Remove the first vertex from the queue and push it into the array that stores nodes visited
// 8 - Loop over each vertex in the adjacency list for the vertex you are visiting.
// 9 - If it is not inside the object that stores nodes visited, mark it as visited and enqueue(push) that vertex
// 10 - Once you have finished looping, return the array of visited nodes

class Graph {
	constructor() {
		this.adjancyList = {};
	}

	addVertex(newVertex) {
		if (!this.adjancyList[newVertex]) {
			this.adjancyList[newVertex] = [];
		}
	}

	addEdge(vertex1, vertex2) {
		this.adjancyList[vertex1].push(vertex2);
		this.adjancyList[vertex2].push(vertex1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(v => v !== vertex2);
		this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(v => v !== vertex1);
	}

	removeVertex(v) {
		const vertices = this.adjancyList[v];

		for (const vertex of vertices) {
			this.removeEdge(vertex, v);
		}

		delete this.adjancyList[v];
	}

	depthFirstRecursive(start) {
		const result = [];
		const visited = {};

		const dfs = vertex => {
			if (!vertex) return null;

			visited[vertex] = true;
			result.push(vertex);

			for (const v of this.adjancyList[vertex]) {
				if (!visited[v]) {
					dfs(v);
				}
			}
		};

		dfs(start);

		return result;
	}

	depthFirstIterative(start) {
		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex;

		visited[start] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjancyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

	breadthFirst(start) {
		const queue = [start];
		const result = [];
		const visited = {};
		visited[start] = true;
		let currentVertex;

		while (queue.length) {
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjancyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true;
					queue.push(neighbor);
				}
			});
		}
		return result;
	}
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
