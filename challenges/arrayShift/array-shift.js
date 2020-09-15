'use strict';

const insertShiftArray = (arr, num) => {
  let ln = Math.ceil(arr.length / 2);
  let copy = [];
  for (let i = 0; i < arr.length + 1; i++) {
    if (i === ln) {
      copy[i] = num;
    } else if (i > ln) {
      copy[i] = arr[i - 1];
    } else {
      copy[i] = arr[i];
    }
  }
  return copy;
};

console.log(insertShiftArray([4,8,15,23,42],16));
console.log(insertShiftArray([2,4,6,8], 5));

module.exports =insertShiftArray;
