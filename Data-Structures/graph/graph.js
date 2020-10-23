'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(vertex) {
    this.list.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight) {
    if (!this.list.has(startVertex) || !this.list.has(endVertex)) {
      return 'Vertex not found !!!';
    } else {
      const adjacencies = this.list.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
      return Edge;
    }
  }

  getNeighbours(vertex) {
    if (!this.list.has(vertex)) {
      return 'vertex does not exist';
    } else {
      return this.list.get(vertex);
    }
  }

  getNodes() {
    return this.list.entries();
  }

  getSize() {
    return this.list.size;
  }
}

module.exports = {
  Vertex,
  Edge,
  Graph,
};
