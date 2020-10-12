'use strict';

function mergeSort(arr) {

  const arrLength = arr.length;

  if (arrLength === 1) {
    return arr;
  }

  if (arrLength > 1) {

    const mid = Math.floor(arrLength / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arrLength);

    mergeSort(left);

    mergeSort(right);

    merge(left, right, arr);

    return arr;
  }

}


function merge(left, right, arr) {

  let index = 0;

  while (left.length && right.length) {

    if (right[0] <= left[0]) {
      arr[index++] = right.shift();
    } else {
      arr[index++] = left.shift();
    }

  }

  while (left.length) {

    arr[index++] = left.shift();

  }

  while (right.length) {

    arr[index++] = right.shift();
  }
}

let arr = [8, 4, 23, 42, 16, 15];
console.log(mergeSort(arr));

module.exports = mergeSort;
