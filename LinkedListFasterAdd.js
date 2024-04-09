/*

1. Linked List with a tail
2. Comparison to linked list without a tail
3. Example

              A. 1 > 2 > 3 > 4 > 5
                             |
                             cur 
                 |
                 head
              
              B. 6 > 7 > 8 > 9 > 10
                 |               |
                 head            tail 
*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Complexity analysis: time O(1) and space O(1)
  add(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
      return;
    }

    this.tail.next = new Node(data);
    this.tail = this.tail.next;
    return;
  }

  display() {
    const result = [];
    let cur = this.head;
    while (cur) {
      result.push(cur.data);
      cur = cur.next;
    }
    return result;
  }
}

const list = new LinkedList;
const input = [1, 2, 3, 4];
input.forEach(element => list.add(element));
console.log(list.display());