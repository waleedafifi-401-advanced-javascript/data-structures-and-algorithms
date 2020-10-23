'use strict';

let Graph = require('../Data-Structures/graph/graph').Graph;
let Vertex = require('../Data-Structures/graph/graph').Vertex;
let Edge = require('../Data-Structures/graph/graph').Edge;

describe('create a new graph', () => {
  const graph = new Graph();

  const two = new Vertex(2);
  const three = new Vertex(3);
  const six = new Vertex(6);
  graph.addVertex(two);
  graph.addVertex(three);


  it('call method addNode()', () => {
    expect(graph.addVertex(two).value).toBe(2);
  });


  it('call method addEdge()', () => {
    expect(graph.addEdge(two, six)).toBe('Vertex not found !!!');
    expect(graph.addEdge(two, three)).toBe(Edge);
  });


  it('call method getNeighbours()', () => {
    expect(graph.getNeighbours(six)).toBe('vertex does not exist');
    let result = graph.getNeighbours(two);
    expect(result).toBeDefined();
    expect(result[0].vertex).toBe(three);

  });

  it('call method getsize()', () => {
    let result = graph.getSize();
    expect(result).toBeDefined();
    expect(result).toEqual(2);

  });

  it('call method getVertexs()', () => {
    let result = graph.getNodes();
    expect(result).toBeDefined();
  });

});
