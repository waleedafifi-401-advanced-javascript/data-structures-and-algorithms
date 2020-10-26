'use strict';

module.exports = (graph, cityArray) => {
  let totalCost = 0;

  console.log('Graph from here ',graph);

  for (let i = 0; i < cityArray.length - 1; i++) {

    let object = graph.getEdges().filter(edge => {
      return !!(edge.node1 === cityArray[i] && edge.node2 === cityArray[i + 1]);
    });

    if (object.length === 0) {
      return 'False, $0';
    }
    else {
      totalCost += object[0].weight;
    }
  }

  return `True, $${totalCost}`;
};