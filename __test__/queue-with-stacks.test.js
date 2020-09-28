'use strict';
const PseudoQueue = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Queue Tests', () => {
  it('Can instantiate an empty Queue', () => {
    const queue = new PseudoQueue();
    expect(queue).toBeDefined();
  });

  it('Can enqueue a new value', () => {
    const queue = new PseudoQueue();
    let eqd = queue.enqueue('Moon Cactus');
    expect(eqd[0]).toBe('Moon Cactus');
  });
    
  it('Can enqueue many values', () => {
    const queue = bigQueue();
    let eqd = queue.enqueue('Medusita');
    console.log(eqd);
    expect(eqd[0]).toBe('Medusita');
  });

  it('Can dequeue the front value', () => {
    const queue = new PseudoQueue();
    queue.enqueue('Ariocarpus Iloydii');
    let dqd = queue.dequeue();
    expect(dqd).toBe('Ariocarpus Iloydii');
  });
    
  it('Can dequeue the correct value', () => {
    const queue = bigQueue();
    let blizzard = queue.dequeue();
    expect(blizzard).toBe('Moon Cactus');
  });
    
  it('Can throw an error when dequeueing an empty queue', () => {
    const queue = new PseudoQueue();
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue');
  });
    
  it('Can empty a queue after several dequeues', () => {
    const queue = bigQueue();
    for (let i = 0; i < 4; i++) {
      queue.dequeue();
    }
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue');
  });

});

const bigQueue = () => {
  const queue = new PseudoQueue();
  queue.enqueue('Moon Cactus');
  queue.enqueue('Acanthocalycium');
  queue.enqueue('Aloe Vera');
  queue.enqueue('Armatocereus Godingianus');
  return queue;
};
