// PSEUDOCODE OF THE INSERT METHOD IN MAXBINARYHEAP
// 1 - Push the value in the values array in the MaxBinaryHeap.
// 2 - Bubble the value up to its correct spot.
//   a - Create a variable called index which is equal to values.length - 1
//   b - Create a variable called parentIndex which is equal to Math.floor((index-1) / 2)
//   c - Keep looping as long as the values element at the parentIndex is less than the values element
//       at the child index
//     i) Swap the value of the values element at the parentIndex with the value of the element property
//        at the child index
//     ii) Set the index to be the parentIndex, and start over!

// PSEUDOCODE OF THE REMOVE (EXTRACTMAX) METHOD IN MAXBINARYHEAP
// 1 - Swap the first value in the values property with the last one
// 2 - Pop from the values property, so you can return the value at the end.
// 3 - Have the new root "sink down" to the correct spot...
//   a - Your parent index starts at 0 (the root)
//   b - Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
//   c - Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
//   d - If the left or right child is greater than the element...swap. If both left and right children are larger,
//       swap with the largest child.
//   e - The child index you swapped to now becomes the new parent index.
//   f - Keep looping and swapping until neither child is larger than the element.
//   g - Return the old root!

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			const parent = this.values[parentIndex];

			if (element <= parent) break;

			this.values[index] = parent;
			this.values[parentIndex] = element;

			index = parentIndex;
		}
	}

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swapIdx = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swapIdx = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				const condition = (swapIdx === null && rightChild > element) || (swapIdx !== null && rightChild > leftChild);
				if (condition) {
					swapIdx = rightChildIdx;
				}
			}

			if (swapIdx === null) break;
			this.values[idx] = this.values[swapIdx];
			this.values[swapIdx] = element;
			idx = swapIdx;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
