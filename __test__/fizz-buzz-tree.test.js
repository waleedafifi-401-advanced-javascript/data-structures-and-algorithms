'use strict';

const fizzBuzzTree = require('../challenges/fizzBuzzTree/fizz-buzz-tree');
const Tree = require('../Data-Structures/tree/tree');
const Node = require('../Data-Structures/tree/node');

describe('fizz-buzz-tree challenge', () => {
  let tree = null;
  
  beforeAll(() => {
    let one = new Node(12);
    let two = new Node(9);
    let three = new Node(16);
    let four = new Node(14);
    let five = new Node(17);
    let six = new Node(4);
    let seven = new Node(6);
    let eight = new Node(5);
    let nine = new Node(15);
  
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
  
  
  it('instance test ', () => {
    let testtree = new Tree.BinaryTree(tree);
    expect(testtree instanceof Tree.BinaryTree).toBeTruthy();
  });
  
  it('fizz-buzz-tree test ', () => {
      console.log(fizzBuzzTree(tree).preOrder());
    expect(fizzBuzzTree(tree).preOrder()).toEqual(['Fizz', 'Fizz', '4', 'Fizz', 'Buzz', 'FizzBuzz', '16', '14', '17']);
  
  });
});
  
  