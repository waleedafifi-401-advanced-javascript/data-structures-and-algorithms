'use strict';

const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues').stack;

module.exports = (root) => {
  const stack = new Stack();
  const outputArr = [];
  const visited = new Set();
  outputArr.push(root);
  visited.add(root);
  stack.push(root);

  while(!stack.isEmpty()) {
    let currentNode = stack.peek();
    let hasUnvisited = false;
    for (let i = 0; i < currentNode.getNeighbors().length; i ++) {
      let neighbor = currentNode.getNeighbors()[i];
      if(!visited.has(neighbor)){
        hasUnvisited = true;
        visited.add(neighbor);
        stack.push(neighbor);
        outputArr.push(neighbor);
        break;
      }
    }
    if (!hasUnvisited) {
      stack.pop();
    }
  }
  return outputArr;
};

