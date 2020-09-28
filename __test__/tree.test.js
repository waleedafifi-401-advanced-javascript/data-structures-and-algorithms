'use strict';

const Node = require('../Data-Structures/tree/node');
const Tree = require('../Data-Structures/tree/tree');

describe('Binary Tree', () => {

  let tree = null;

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new Tree.BinaryTree(one);
  });

  it('preOrder()', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });

  it('inOrder()', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expected);
  });

  it('postOrder()', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expected);
  });

});

describe('Binary Aearch Tree', () => {

  let terr2 = null;
  beforeEach(() => {
    terr2 = new Tree.BinarySearchTree();
  });

  it('it add() can be add a new value to the tree', () => {
    terr2.add(10);
    terr2.add(2);
    let terr2Tree = terr2.add(12);
    //         console.log(terr2Tree)
    expect(terr2Tree.left.value).toEqual(2);
    expect(terr2Tree.right.value).toEqual(12);
  });


  it('it contain() Can check if tree contain certain value ', () => {

    terr2.add(17);
    terr2.add(16);
    terr2.add(23);
    terr2.add(20);
    terr2.add(50);

    expect(terr2.contain(23)).toBeTruthy();
    expect(terr2.contain(54)).toBeFalsy();
  });

});

describe('Maximum binary tree tests', () => {
  it('can find the maximum value stored in the tree', () => {
    const five = new Node(5);
    const two = new Node(2);
    const seven = new Node(7);
    const twentytwo = new Node(22);
    const tree = new Tree.BinaryTree(five);
    tree.root.left = two;
    tree.root.right = seven;
    tree.root.right.right = twentytwo;
    const res = tree.findMaximumValue();
    expect(res).toStrictEqual(22);
  });
  it('will not try finding the maximum of an empty tree', () => {
    const tree = new Tree.BinaryTree();
    expect(() => tree.findMaximumValue()).toThrow(Error);
  });
});

describe('Breadth First tests', () => {
  it('can output the correct array', () => {
    const tree = makeTree();
    expect(tree.breadthFirst()).toEqual([1,15,6,35,8]);
  });
  it('will throw an error on an empty tree', () => {
    const tree = new Tree.BinaryTree();
    expect(()=> tree.breadthFirst()).toThrowError();
  });
  it('Will work with a one Node tree', () => {
    const tree = new Tree.BinaryTree(new Node(3));
    expect(tree.breadthFirst()).toEqual([3]);
  });
});

const makeTree = () => {
  const one = new Node(1);
  const fifteen = new Node (15);
  const six = new Node(6);
  fifteen.right = new Node(35);
  six.left = new Node(8);
  one.left = fifteen;
  one.right = six;
  const tree = new Tree.BinaryTree(one);
  return tree;
};
