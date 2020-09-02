'use strict'

let arr = [89, 2354, 3546, 23, 10, -923, 823, -12];
let revarsedArray = [];

function reverseArray(arr) {
    arr.forEach((element, i) => {
        revarsedArray.push(arr[arr.length - 1 - i]);
        return revarsedArray;
    });
};
reverseArray(arr)
console.log(revarsedArray);



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