// PSEUDOCODE OF BREADTH-FIRST SEARCH

// 1 - Create a queue (this can be array) and a data array to store the values of nodes visited.
// 2 - Place the root node in the queue.
// 3 - Loop as long as there is anything in the queue.
//     a - Dequeue a node from the queue and push the value of the node into the varaible that stores the nodes.
//     b - If there is a left property on the node dequeue, add it to the queue.
//     c - If there is a right property on the node dequeue, add it to the queue.
// 4 - Return the data array that stores the values.

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	find(value) {
		if (this.root === null) return false;

		let current = this.root;
		let found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}

		return current ? current : false;
	}

	bfs() {
		// Breadth-first search
		let node = this.root,
			data = [],
			queue = [];
		queue.push(node);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	// Following is the code of Andrei Neagoi
	bfsRecursive(queue, data) {
		if (!queue.length) {
			return data;
		}
		const node = queue.shift();
		data.push(node.value);

		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);

		return this.bfsRecursive(queue, data);
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

tree.bfs();
tree.bfsRecursive([tree.root], []);
