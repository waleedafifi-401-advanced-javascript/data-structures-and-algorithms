'use strict';

module.exports = function fizzBuzzTree(tree) {
  let _buzzFizzFunc = (node) => {
    let str = '';
    if (node.value % 3 === 0) str += 'Fizz';
    if (node.value % 5 === 0) str += 'Buzz';
    if (!str) str = node.value.toString();
    node.value = str;
    if (node.left) _buzzFizzFunc(node.left);
    if (node.right) _buzzFizzFunc(node.right);
  };
    
  _buzzFizzFunc(tree.root);
  return tree;
};