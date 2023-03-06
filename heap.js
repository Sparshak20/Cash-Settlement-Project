class binaryheap {
  constructor() {
    //constructor of binary heap class
    // here we initialise an empty array
    this.heap = [];
  }
  size() {
    // we need to create some auxiliary functions that will be called during the implementation
    return this.heap.length; // here we are returning the length of the heap array
  }
  empty() {
    return this.size() === 0; //if length is 0 it will return true else return false
  }
  //when we need to enter an element into the heap what will happen EXPLAINED IN NOTEs
  insertelement(value) {
    this.heap.push(value);
    this.bubbleup();
  }
  bubbleup() {
    let index = this.size() - 1;
    while (index > 0) {
      let element = this.heap(index);
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap(parentIndex);

      if (parent[0] > element[0]) {
        break;
      } else {
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index=parentIndex
      }
    }
  }
}
