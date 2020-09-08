'use strict';

function binarySearch(arr, value) {
    if (arr !== [] && value) {
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;
    } else {
        throw new Error('Please check you arrguments');
    }
}

console.log(binarySearch([4, 8, 15, 16, 23, 42], 23));

module.exports = binarySearch;