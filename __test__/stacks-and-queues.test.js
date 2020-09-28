'use strict';

const Stack = require('../Data-Structures/stacksAndQueues/stacks-and-queues').stack;
const Queue = require('../Data-Structures/stacksAndQueues/stacks-and-queues').queue;

describe('Stack Tests', () => {
  it('Can instatiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('Can check if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can peek the top value', () => {
    const stack = new Stack();
    stack.push('Armatocereus');
    stack.push('Ariocarpus');
    expect(stack.peek()).toBe('Ariocarpus');
  });
  
  it('Can push an item to the stack', () => {
    const stack = new Stack();
    stack.push('Armatocereus');
    expect(stack.isEmpty()).toBeFalsy();
  });
  
  it('Can push multiple items to a stack', () => {
    const stack = stackItem();
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toBe('Blue Barrel');
  });
  
  it('Can pop an item from the stack', () => {
    const stack = stackItem();
    let popped = stack.pop();
    expect(popped).toBe('Blue Barrel');
    expect(stack.peek()).toBe('Medusita');
  });
  
  it('Can empty a stack by popping multiple items', () => {
    const stack = stackItem();
    for(let i = 0; i < 4; i++) {stack.pop();}
    expect(stack.isEmpty()).toBeTruthy();
  });
  
  it('Can throw an error when popping from an empty stack', ()=> {
    const stack = new Stack();
    expect(()=>stack.pop()).toThrowError('Cannot pop from an empty stack');
  });
  
  it('Can throw an error when peeking from an empty stack', ()=> {
    const stack = new Stack();
    expect(()=>stack.peek()).toThrowError('Cannot peek an empty stack');
  });
});

describe('Queue Tests', () => {
  it('Can instantiate an empty Queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
  });
  
  it('Can enqueue a new value', () => {
    const queue = new Queue();
    queue.enqueue('Aylostera');
    expect(queue.isEmpty()).toBeFalsy();
  });
  
  it('Can peek a value', () => {
    const queue = new Queue();
    queue.enqueue('Aylostera');
    expect(queue.peek()).toBe('Aylostera');
  });

  it('Can enqueue many values', () => {
    const queue = queueItem();
    expect(queue.peek()).toBe('Aylostera');
  });

  it('Can throw an error when peeking an empty queue', () => {
    const queue = new Queue();
    expect(()=> queue.peek()).toThrowError('Cannot peek an empty queue');
  });
  
  it('Can dequeue the front value', () => {
    const queue = new Queue();
    queue.enqueue('Aylostera');
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });
  
  it('Can dequeue the correct value', () => {
    const queue = queueItem();
    let blizzard = queue.dequeue();
    expect(blizzard).toBe('Aylostera');
  });
  
  it('Can throw an error when dequeueing an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrowError('Cannot dequeue an empty queue');
  });
  
  it('Can empty a queue after several dequeues', () => {
    const queue = queueItem();
    for(let i = 0; i < 4; i++) { queue.dequeue(); }
    expect(queue.isEmpty()).toBeTruthy();
  });

});

const stackItem = () => {
  const stack = new Stack();
  stack.push('Armatocereus');
  stack.push('Ariocarpus');
  stack.push('Medusita');
  stack.push('Blue Barrel');
  return stack;
};
const queueItem = () => {
  const queue = new Queue();
  queue.enqueue('Aylostera');
  queue.enqueue('Ball Cactus');
  queue.enqueue('Beaver Tail');
  queue.enqueue('Nipple Cactus');
  return queue;
};