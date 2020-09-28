'use strict';

const AnimalShelter = require('../challenges/fifoAnimalShelter/fifo-animal-shelter');

describe('Animal Shelter Tests', () => {
  it('throws an error when trying to make something that is not a cat or dog', () => {
    const badShelter = new AnimalShelter();
    expect(() => badShelter.enqueue({
      type: 'fish',
    })).toThrowError();
  });

  it('can enqueue a dog', () => {
    const dogShelter = new AnimalShelter();
    dogShelter.enqueue({
      type: 'dog',
    });
    expect(dogShelter.stackOne.peek().type).toBe('dog');
  });
    
  it('can dequeue the correct first animal', () => {
    const shelter = fillTheShelter();
    let spot = shelter.dequeue('dog');
    expect(spot.type).toBe('dog');
    expect(spot.name).toBe('spot');
  });
    
  it('can dequeue correctly from later in the queue', () => {
    const shelter = fillTheShelter();
    let kitty = shelter.dequeue('cat');
    expect(kitty.type).toBe('cat');
    expect(kitty.name).toBe('kitty');
  });

  it('can return null if you try to dequeue something other than dog or cat', () => {
    const shelter = fillTheShelter();
    let wrongAnimal = shelter.dequeue('fish');
    expect(wrongAnimal).toBe(null);
  });

  it('can dequeue an entire list', () => {
    const shelter = fillTheShelter();
    expect(shelter.dequeue('cat').type).toBe('cat');
    expect(shelter.dequeue('cat').type).toBe('cat');
    expect(shelter.dequeue('dog').type).toBe('dog');
    expect(shelter.dequeue('dog').type).toBe('dog');
    expect(() => shelter.dequeue('dog')).toThrowError();
  });
});

const fillTheShelter = () => {
  const bigShelter = new AnimalShelter();
  bigShelter.enqueue({
    type: 'dog',
    name: 'spot',
  });
  bigShelter.enqueue({
    type: 'cat',
    name: 'kitty',
  });
  bigShelter.enqueue({
    type: 'cat',
    name: 'mewtwo',
  });
  bigShelter.enqueue({
    type: 'dog',
    name: 'maya',
  });
  return bigShelter;
};
