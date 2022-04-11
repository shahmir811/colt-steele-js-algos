// *************************************************** //
// ********** CREATING A STACK WITH AN ARRAY ********* //
// *************************************************** //

// Using push and pop on an array, creates a stack

let stack = [];
stack.push('Google');
stack.push('Youtube');
stack.push('Facebook');
stack.push('Instagram');
stack.push('Amazon');

stack.pop(); // Amazon
stack.pop(); // Instagram

// *************************************************** //
// ****** CREATING A STACK WITH A LINKED LIST ******** //
// *************************************************** //

// POINT TO REMEMBER:
// The push and pop methods inside Stacks are similar to unshift and shift methods in SinglyLinkedList.
// You can use same push and pop methods of SinglyLinkedList but the problem is that the pop method(in SinglyLinkedList)
// has the time complexity of O(n). We need to have same constant time complexity O(1) for both push and pop methods
// inside Stacks.

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldFirst = this.first;
			this.first = newNode;
			this.first.next = oldFirst;
		}

		this.size++;
		return this.size;
	}

	pop() {
		if (this.size === 0) return null;

		const temp = this.first;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = temp.next;
			temp.next = null;
		}

		this.size--;
		return temp.val;
	}
}

let st = new Stack();
