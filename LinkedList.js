class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  add(data) {
      if (!this.head) {
          return this.head = new Node(data);
      }

      let cur = this.head;
      while (cur.next) {
          cur = cur.next;
      }

      cur.next = new Node(data);
      return cur.next;
  }

  remove(data) {
      if (!this.head) {
          return null;
      }

      if (this.head.data === data) {
          return this.head = this.head.next;
      }

      let cur = this.head;
      let prev = null;
      while (cur && cur.data !== data) {
          prev = cur;
          cur = cur.next;
      }

      if (!cur) {
          return null;
      }
      
      return prev.next = cur.next;
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

const input = [1, 2, 3, 4];
const list = new LinkedList;
input.forEach(element => list.add(element));
console.log(list.display());
list.remove(3);
console.log(list.display());