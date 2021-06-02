// hash is objects in javascript. stores strings as keys instead of indices unlike arrays
// handle collisions by saving a key/pair value in an array
// hash tables need a hashing function to change string keys into indices

class HashTable {
  constructor(size = 7) {
    this.table = new Array(size);
  }

  _hashing(key) {
    // this will give an index in the size of the table
    let total = 0;
    let prime = 29;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * prime + val) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    // keys need to be unique so if a duplicate key is entered, swap values
    let idx = this._hashing(key);
    if (this.table[idx] === undefined) {
      this.table[idx] = [];
    }

    for (let i = 0; i < this.table[idx].length; i++) {
      if (this.table[idx][i][0] === key) {
        this.table[idx][i] = [key, value];
        return;
      }
    }
    this.table[idx].push([key, value]);
  }

  get(key) {
    let idx = this._hashing(key);
    if (this.table[idx]) {
      for (let i = 0; i < this.table[idx].length; i++) {
        if (this.table[idx][i][0] === key) {
          return this.table[idx][i][1];
        }
      }
    }
  }

  keys() {
    let arrayOfKeys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        this.table[i].forEach((pair) => arrayOfKeys.push(pair[0]));
      }
    }
    return arrayOfKeys;
  }

  values() {
    let arrayOfValues = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        this.table[i].forEach((pair) => arrayOfValues.push(pair[1]));
      }
    }
    return arrayOfValues;
  }
}

module.exports = HashTable;
