'use strict';

let Tree = require('../Data-Structures/tree/tree');
let Node = require('../Data-Structures/tree/node');
let tree_intersection = require('../challenges/treeIntersection/tree-intersection');

describe('tree-intersection Module', () => {

  it('tree_intersection Feunction', () => {
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

    let tree1 = new Tree.BinaryTree(one);
    let tree2 = new Tree.BinaryTree(six);

    let expected = [6, 7, 8, 9];
    let treeIntersection = tree_intersection(tree1, tree2);
    
    expect(treeIntersection).toEqual(expected);
  });

});
