'use-strict';

const Node = require('../../Data-Structures/tree/node');
const Tree = require('../../Data-Structures/tree/tree');

const tree_intersection = (tree1, tree2) => {
  let BT1 = tree1.preOrder();
  let BT2 = tree2.preOrder();

  let arr = [];

  let index = 0;

  while(index < BT1.length) {
    for(let i = 0; i < BT2.length; i++) {
      if (BT1[index] === BT2[i]) {
        arr.push(BT2[i]);
      }
    }
    index++;
  }

  return arr;
};

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

console.log('####tree1=======', tree1.preOrder());
console.log('####tree2=======', tree2.preOrder());

console.log('tree_intersection(tree1,tree2)=======', tree_intersection(tree1,tree2));



module.exports = tree_intersection;