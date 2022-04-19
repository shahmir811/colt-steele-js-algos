// We are using Adjacency List for Graphs.
// We are building an undirected Graph.

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
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addVertex('Los Angeles');

g.addEdge('Tokyo', 'Dallas');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Aspen', 'Los Angeles');
g.addEdge('Dallas', 'Los Angeles');
g.addEdge('Aspen', 'Tokyo');
