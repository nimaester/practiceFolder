const Bst = require("../DataStructures/Tree");

describe("#insert", () => {
  test("insert to the root of the tree if the tree is empty", () => {
    const tree = new Bst();
    tree.insert(5);
    expect(tree.root.val).toBe(5);
  });

  describe("handle where to place a value less than the root's value", () => {
    test("insert new value to the left of the parent ", () => {
      const tree = new Bst();
      tree.insert(5);
      tree.insert(4);
      expect(tree.root.left.val).toBe(4);
      expect(tree.root.right).toBeNull();
      expect(tree.root.val).toBe(5);
    });
  });

  describe("handle where to place a value more than the root's value", () => {
    test("insert new value to the right of the parent ", () => {
      const tree = new Bst();
      tree.insert(5);
      tree.insert(1001);
      expect(tree.root.left).toBeNull();
      expect(tree.root.right.val).toBe(1001);
      expect(tree.root.val).toBe(5);
    });
  });

  describe("handle where to place a value in a nested tree", () => {
    test("insert new value to the left or right of the parent ", () => {
      const tree = new Bst();
      tree.insert(5);
      tree.insert(4);
      tree.insert(3);
      tree.insert(8);
      tree.insert(11);
      expect(tree.root.left.left.val).toBe(3);
      expect(tree.root.right.right.val).toBe(11);
    });
  });
});

describe("#find", () => {
  test("returns true or false if a value is found in the tree", () => {
    const tree = new Bst();
    tree.insert(4);
    tree.insert(3);
    tree.insert(6);
    tree.insert(7);
    expect(tree.find(3)).toBe(true);
    expect(tree.find(6)).toBe(true);
    expect(tree.find(2)).toBe(false);
    expect(tree.find(8)).toBe(false);
    expect(tree.find(100)).toBe(false);
  });

  describe("finds a value in an empty tree", () => {
    test("returns false if when used on an empty tree", () => {
      const tree = new Bst();
      expect(tree.find(1)).toBe(false);
    });
  });
});

describe("#bfs", () => {
  test("returns an array corresponding the tree's depth values", () => {
    const tree = new Bst();
    tree.insert(4);
    tree.insert(3);
    tree.insert(6);
    tree.insert(7);
    tree.insert(2);
    expect(tree.bfs()).toEqual([4, 3, 6, 2, 7]);
  });
});

describe("#dfsPreOrder", () => {
  test("returns an array corresponding the tree's depth values", () => {
    const tree = new Bst();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(tree.dfsPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);
  });
});

describe("#dfsPostOrder", () => {
  test("returns an array corresponding the tree's depth values", () => {
    const tree = new Bst();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(tree.dfsPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });
});

describe("#dfsInOrder", () => {
  test("returns a sorted array corresponding the tree's values", () => {
    const tree = new Bst();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    tree.insert(3);
    tree.insert(8);
    tree.insert(20);
    expect(tree.dfsInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});
