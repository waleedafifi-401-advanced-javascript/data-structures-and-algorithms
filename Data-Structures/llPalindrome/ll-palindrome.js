"use strict";

/**
 * LinkedList reqiure linked list class from CC 7
 * @constant
 */
const LinkedList = require("../linkedList/linked-list");


function llPalindrome(list) {

  let arr =[];

  let currentNode = list.head;

  if(currentNode) {
    arr.push(currentNode.name);
  }

  while(currentNode.next) {
    currentNode = currentNode.next;
    arr.push(currentNode.name);
  }

  // now we have an array with all the names in the linked list
  for(let i = 0; i < arr.length/2; i++) {

    // console.log(arr);
    if(arr[i] !== arr[arr.length - ( i + 1 ) ] ){

      return false;
    }
    return true;
  }
}

let list = new LinkedList();
let list1 = new LinkedList();
let list2 = new LinkedList();

list.append("t");
list.append("a");
list.append("c");
list.append("o");
list.append("c");
list.append("c");
list.append("t");

list1.append("m");
list1.append("o");
list1.append("o");
list1.append("m");

list2.append("a");
list2.append("b");
list2.append("c");
list2.append("d");
list2.append("c");
list2.append("a");

console.log(list.toString());
let llpd = llPalindrome(list);
console.log(llpd);

console.log(list1.toString());
let llpd1 = llPalindrome(list1);
console.log(llpd1);

console.log(list2.toString());
let llpd2 = llPalindrome(list2);
console.log(llpd2);



module.exports = llPalindrome;