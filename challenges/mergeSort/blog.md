# Merge Sort Method

## Pseudo Code

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Code
```javaScript
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
```

## Test
```javaScript
'use strict';

const mergeSort = require('../challenges/mergeSort/mergeSort');


describe ('We are testing out a merge sort function', () => {

  test('it should be able to sort out the following array', () => {

    let arr = [1, 5, 2, 4, 8, 6];

    expect(mergeSort(arr)).toStrictEqual([1, 2, 4, 5, 6, 8]);
  });

  test('it should be able to sort out the following array', () => {

    let arr = [1, 5, 2, 8, 6];

    expect(mergeSort(arr)).toStrictEqual([1, 2, 5, 6, 8]);
  });

  test('it should be able to sort out the following array', () => {

    let arr = [1, 6];

    expect(mergeSort(arr)).toStrictEqual([1, 6]);
  });

});
```


## Example implementation

![](https://miro.medium.com/max/2560/1*61Mf0zjVfd1s3_SzUNGxPA.png)