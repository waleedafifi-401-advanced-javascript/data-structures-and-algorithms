'use strict';

function BinarySearch(arr, value) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(BinarySearch([4,8,15,16,23,42], 23));

module.exports = BinarySearch;