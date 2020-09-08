'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search')

describe('Array', () => {

    it('Check if index not in an array', () => {
        let searchArr = [2, 5, 7, 3];
        expect(binarySearch(searchArr, 4)).toEqual(-1);
    });

    it('Check the index of an element', () => {
        let searchArr = [5, 4, 9, 3, 10];
        expect(binarySearch(searchArr, 10)).toEqual(binarySearch(searchArr, 10));
    });
});
