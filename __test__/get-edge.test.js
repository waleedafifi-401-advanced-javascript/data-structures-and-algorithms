'use strict';

const Graph = require('../Data-Structures/graph/graph').Graph;
const getEdge = require('../Data-Structures/getEdge/get-edge');

const graph = new Graph();
let Pandora = graph.addNode('Pandora');
let Metroville = graph.addNode('Metroville');
let Narnia = graph.addNode('Narnia');
let Arendelle = graph.addNode('Arendelle');
let Naboo = graph.addNode('Naboo');
let Monstropolis = graph.addNode('Monstropolis');

graph.addEdge(Pandora, Arendelle, 150);
graph.addEdge(Pandora, Metroville, 82);
graph.addEdge(Metroville, Arendelle, 99);
graph.addEdge(Narnia, Metroville, 37);
graph.addEdge(Metroville, Naboo, 26);
graph.addEdge(Narnia, Naboo, 250);
graph.addEdge(Metroville, Monstropolis, 105);
graph.addEdge(Monstropolis, Naboo, 73);
graph.addEdge(Monstropolis, Arendelle, 42);

const graph2 = new Graph();
const Herbalife = graph2.addNode('Herbalife');


describe('get edge tests', () => {
  it('should work for happy path inputs', () => {
    expect(getEdge(graph, [Metroville, Pandora])).toBe('True, $82')
    expect(getEdge(graph, [Arendelle, Monstropolis, Naboo])).toBe('True, $115')
  });
  it('should retrun false for bad paths', () => {
    expect(getEdge(graph, [Naboo, Pandora])).toBe('False, $0');
    expect(getEdge(graph, [Narnia, Arendelle, Naboo])).toBe('False, $0');
  });
  it('should return false for nodes that don\'t exist in the graph', () => {
    expect(getEdge(graph, [Naboo, Herbalife])).toBe('False, $0');
  })
});

