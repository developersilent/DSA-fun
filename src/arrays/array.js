class SArray {
  constructor(val) {
    this.data = { ...val };
    this.length = 0;
    this.#getlength();
  }
  #getlength() {
    for (let i = 0; i < this.data[i]; i++) {
      this.length += 1;
    }
  }
  push(data) {
    let i = 0;
    while (i < this.length) i++;
    this.data[i] = data;
    this.length++;
    return this.data;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

const a = new SArray([1, 2]);
a.push(3);
a.pop();
a.push(4);
console.log(a.data);
