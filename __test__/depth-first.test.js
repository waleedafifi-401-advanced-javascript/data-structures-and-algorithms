'use strict';

const depthFirst = require('../challenges/depthFirst/depth-first');


class Graph {

  constructor() {
    this.adjacenyList = new Set();
    this.edges = [];
  }

  addNode(value) {
    let newNode = new Vertex(value);
    this.adjacenyList.add(newNode);
    // this.neighbors[value] = {}
    return newNode;
  }

  addEdge(node1, node2, weight = null) {
    if(!node1 || !node2) {
      throw Error('One or more nodes is empty');
    }
    node1.addEdge(node2, weight);
    node2.addEdge(node1, weight);
    const edge = new Edge(node1, node2, weight);
    const reverseEdge = new Edge(node2, node1, weight);
    this.edges.push(edge);
    this.edges.push(reverseEdge);

  }

  getNodes() {
    return this.adjacenyList.size
      ? this.adjacenyList
      : null;
  }
  getEdges() {
    return this.edges.length
      ? this.edges
      : null;
  }

  size() {
    return this.adjacenyList.size
      ? this.adjacenyList.size
      : null;
  }

}

class Vertex {
  constructor(value){
    this.value = value;
    this.neighbors = [];
  }
  addEdge(node){
    this.neighbors.push(node);
  }
  getNeighbors() {
    return this.neighbors;
  }

}

class Edge {
  constructor(node1, node2, weight) {
    this.node1 = node1;
    this.node2 = node2;
    this.weight = weight;
  }

}



const graph = new Graph();
let A = graph.addNode('A');
let B = graph.addNode('B');
let C = graph.addNode('C');
let D = graph.addNode('D');
let E = graph.addNode('E');
let F = graph.addNode('F');
let G = graph.addNode('G');
let H = graph.addNode('H');

graph.addEdge(A, B);
graph.addEdge(A, D);
graph.addEdge(B, C);
graph.addEdge(B, D);
graph.addEdge(C, G);
graph.addEdge(D, E);
graph.addEdge(D, H);
graph.addEdge(D, F);
graph.addEdge(H, F);


describe('depth first test', () => {
  it('should traverse a graph depth first', () => {
    expect(depthFirst(A)).toEqual([A,B,C,G,D,E,H,F]);
  });
  it('should traverse from a different root', () => {
    expect(depthFirst(G)).toEqual([G,C,B,A,D,E,H,F]);
  });
  it('should traverse a graph of 1', () => {
    const graphOfOne = new Graph();
    const I = graphOfOne.addNode('I');
    expect(depthFirst(I)).toEqual([I]);

  });
});

module.exports = Vertex;
