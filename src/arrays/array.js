class SArray {
  constructor(val) {
    this.data = {};
    this.length = 0;
    this.#getlength();
  }
  #getlength() {
    for (let i = 0; i < this.data[i]; i++) {
      this.length += 1;
      data;
    }
  }
  push(data) {
    this.data[this.length] = data;
    this.length++;
    return this.data;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  shift(data) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = data;
    this.length++;
  }
  unshift() {
    let i = 0;
    while (i < this.length) {
      this.data[i] = this.data[i + 1];
      i++;
    }
    delete this.data[i - 1];
    this.length--;
  }
  getByIndex(index) {
    return this.data[index];
  }
  insert(afterIndex, data) {
    if (afterIndex > this.length - 1) return null;
    let mainIndex = afterIndex;
    let newobj = {};
    for (let i = 0; i < this.length; i++) {
      if (i === afterIndex) {
        if (!this.data[afterIndex + 1]) break;
        newobj[afterIndex + 2] = this.data[afterIndex + 1];
        afterIndex++;
      }
    }
    this.data[mainIndex + 1] = data;
    this.length++;
    this.data = { ...this.data, ...newobj };
    return this.data;
  }
  clear() {
    this.data = {};
    this.length = 0;
    return this.data;
  }
  map(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this.data[i], i, this.data);
    }
  }
}
const a = new SArray();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
// [1,2,3]
// 0,1,2

a.map(function (d, i) {
  console.log(d, i);
});
