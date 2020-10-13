'use strict';

function quickSort(arr, left, right) {


  const pivotIndex = partition(arr, left, right);
  //when pivot comes back, it is saying that everything to the left is smaller and everything to the right of that index is larger, not necessarily sorted yet

  // *divide and conquer!*
  // sort the left, moving pivot to the left each time

  if(left < pivotIndex -1){
    quickSort(arr, left, pivotIndex -1);
  }

  // sort the right, moving the pivot to the right each time

  if(right > pivotIndex){
    quickSort(arr, pivotIndex, right);
  }

  return arr;


}


function partition(arr, left, right) {

  let pivot = Math.floor((left + right) / 2);

  while (left < right) {

    while(arr[left] < arr[pivot]){
      left++;
    }

    while(arr[right] > arr[pivot]) {
      right--;
    }

    if( left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;

}


function swap (arr, left, right) {

  let temp = arr[left];

  arr[left] = arr[right];

  arr[right] = temp;

}


module.exports = quickSort;
