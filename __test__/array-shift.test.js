'use strict';

const insertShiftArray = require('../challenges/arrayShift/array-shift');

describe('Array Shift ', () => {
  it('pass an even array, num and reseve new array with the number in the middle', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
  });

  it('pass an odd array, num and reseve new array with the number in the middle', () => {
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});