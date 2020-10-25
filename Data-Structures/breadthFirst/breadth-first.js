'use strict';

const Graph = require('../graph/graph').Graph;

class BreadthFirst extends Graph {

  bfs(startNode) {
    const queue = [];  
    const vistedNodes = new Set(); 

    queue.push(startNode);
    vistedNodes.add(startNode);

    while (queue.length) {
      const currentNode = queue.shift();

      const neighbors = this.getNeighbors(currentNode);
            
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }

    }
        
    return vistedNodes;
  }

}

module.exports=BreadthFirst;