class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    if (!data) {
      this.length = 0;
    }
    const newNode = new Node(data);
    this.head = newNode;
    this.length = 1;
  }
  length = this.length;
  push(data) {
    const newNode = new Node(data);
    this.head.next = newNode;
    this.length++;
    return this;
  }
  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.length--;
    return this;
  }
  shift(data) {
    let current = this.head;
    const newNode = new Node(data);
    this.head = newNode;
    this.length++;
    this.head.next = current;
    return this;
  }
  unshift() {
    let current = this.head.next;
    this.head = current;
    this.length--;
    return this;
  }
  getByIndex(index) {
    if (index >= this.length) return null;
    let current = this.head;
    let i = 0;
    while (current.next) {
      if (i === index) {
        current = current;
        break;
      }
      current = current.next;
      i++;
    }
    return current;
  }
  insert(afterIndex, data) {
    let mainNode = this.getByIndex(afterIndex);
    let afterIndexVal = mainNode.next;
    const newNode = new Node(data);
    newNode.next = afterIndexVal;
    mainNode.next = newNode;
    this.length++;
    return this;
  }
}

const LL = new LinkedList(1);
LL.push(2);
LL.shift(0);
LL.insert(1, 100);
console.log(JSON.stringify(LL.head, null, 2));
