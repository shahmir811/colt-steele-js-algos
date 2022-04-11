// *************************************************** //
// ********** CREATING A QUEUE WITH AN ARRAY ********* //
// *************************************************** //

// 1st way
// Using push and shift on an array, creates a queue

let q1 = [];
q1.push('First');
q1.push('Second');
q1.push('Third');

q1.shift(); // First
q1.shift(); // Second

// 2nd way
// Using unshift and pop on an array, creates a queue

let q2 = [];
q2.unshift('First');
q2.unshift('Second');
q2.unshift('Third');

q2.pop(); // First
q2.pop(); // Second

// *************************************************** //
// ****** CREATING A QUEUE WITH A LINKED LIST ******** //
// *************************************************** //

// The enqueue and dequeue methods in Queues are similar to push and shift methods of SinglyLinkedList

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);

		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this.size;
	}

	dequeue() {
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

let q3 = new Queue();
