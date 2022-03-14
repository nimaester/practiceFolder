class HashTable {
  constructor(size = 59) {
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
    for (const key of this.keyMap) {
      if (key) hashKeys.push(key[0]);
    }
    return hashKeys;
  }

  values() {
    const values = [];
    for (const subArr of this.keyMap) {
      if (subArr) {
        for (const valid of subArr) {
          if (!values.includes(valid[1])) values.push(valid[1]);
        }
      }
    }
    return values;
  }
}

let h = new HashTable();
h.set("apple", "red");
h.set("kiwi", "orange");
h.set("banana", "yellow");
h.set("orange", "orange");
console.log(h.values());
