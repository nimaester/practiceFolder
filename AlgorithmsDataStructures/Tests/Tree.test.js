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
