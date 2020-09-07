'use strict';

let testArr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

const reverseArray = (arr) => {

    let ln = arr.length - 1;

    for (let i = 0; i < ln; i++) {
        let changeNum = arr[i];
        arr[i] = arr[ln];
        arr[ln] = changeNum;
        ln--;
    }
    console.log(arr)
    return arr
};


reverseArray(testArr);

//Strech goals
// function reverseArray(arr) {
//     if (arr[arr.length - 1]) {
//         revarsedArray.push(arr[arr.length - 1]);
//         arr.pop();
//         return reverseArray(arr);
//     };
// };
// reverseArray(arr);
// console.log(revarsedArray);
