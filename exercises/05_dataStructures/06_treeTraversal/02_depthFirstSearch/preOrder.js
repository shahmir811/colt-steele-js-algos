// PSEUDOCODE OF DEPTH-FIRST PRE-ORDER SEARCH
// Remeber: It is easy to recreate a BST with pre-order search result.

// 1 - Create a data array to store the values of nodes visited.
// 2 - Store the root of the BST in a variable called current.
// 3 - Write a helper function which accepts a node:
//     a - Push the value of the node the data array.
//     b - If the node has a left property, call the helper function with the left property on the node.
//     c - If the node has a right property, call the helper function with the right property on the node.
// 4 - Invoke the helper function with the current varaible
// 5 - Return the data array

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

	dfs() {
		// pre-order search
		const data = [];
		let current = this.root;

		const traverse = node => {
			data.push(node.value);

			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};

		traverse(current);

		return data;
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
