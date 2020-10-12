'use strict';

let insertionSort = require('../challenges/insertionSort/insertionSort');

describe('Sort array', () => {
  it('can sort the array', () => {
    let arr = [2, 4, 7, 1];
    expect(insertionSort(arr)).toStrictEqual([ 1, 2, 4, 7 ]);
  });

  it('can sort the array', () => {
    let arr = [5,12,7,5,5,7];
    expect(insertionSort(arr)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });

  it('can sort the array', () => {
    let arr = [20,18,12,8,5,-2];
    expect(insertionSort(arr)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });
});