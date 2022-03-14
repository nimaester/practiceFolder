class HashTable {
  constructor(size = 2) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let prime = 31;
    let total = key.split("").reduce((acc, val) => {
      let value = val.charCodeAt(0) - 96;
      return (acc += value);
    }, 0);
    return (total * prime) % this.keyMap.length;
  }

  set(key, val) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, val]);
    return key;
  }

  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx].length) {
      return this.keyMap[idx].find((k) => k[0] === key)[1];
    }
    return undefined;
  }

  keys() {
    let hashKeys = [];
    if (!this.keyMap.length) return hashKeys;
  }

  get() {}
}

let h = new HashTable();
h.set("apple", "red");
h.set("kiwi", "green");
h.set("banana", "yellow");
h.set("banann", "green");
