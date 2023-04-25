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
    return (this.size() === 0); //if length is 0 it will return true else return false
  }
  //when we need to enter an element into the heap what will happen EXPLAINED IN NOTEs
  insertelement(value) {
    this.heap.push(value);
    this.bubbleup();
  }
  bubbleup() {
    let index = this.size() - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent[0] > element[0]) {
        break;
      } else {
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index=parentIndex
      }
    }
  }
  extractmax()
  {
    const mx=this.heap[0]; // Here we are taking the maximum element of the heap
    const tmp=this.heap.pop(); //then we will take last element from the heap
  if (!this.empty())  // checking heap is not empty
  {
    this.heap[0]=tmp; // we will set popped element from heap as root or top of heap
    this.sinkdown(0); // To restore/ balance the heap of binary heap and then return max value
  }
  return mx; 
  }
  sinkdown(index)
  {
    let left=2*index+1;
    let right=2*index+2;
    let largest=index;
    let length=this.size()-1;
    if(left<length && this.heap[left][0]>this.heap[largest][0])
    {
      largest=left;
    }
    if(right<length && this.heap[right][0]>this.heap[largest][0])
    {
      largest=right;
    }
    if(largest!==index)
    {
      let tmp=this.heap[largest];
      this.heap[largest]=this.heap[index];
      this.heap[index]=tmp;
      this.sinkdown((largest));
    }

  }
}
// let mxheap=new binaryheap();
// mxheap.insertelement([4,1]);
// mxheap.insertelement([3,1]);
// mxheap.insertelement([6,1]);
// mxheap.insertelement([1,1]);
// while(!mxheap.empty())
// {
//   let mx=mxheap.extractmax();
//   console.log(mx);
// }
