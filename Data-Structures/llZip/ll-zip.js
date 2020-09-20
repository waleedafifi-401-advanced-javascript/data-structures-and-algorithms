/**
 * Zip linked list module
 */
"use strict";

/**
 * LinkedList reqiure linked list class from CC 7
 * @constant
 */
const LinkedList = require("../linkedList/linked-list");

/**
 * 
 * @param {*} list1 Linked list
 * @param {*} list2 Linked list
 */
function zipLists(list1, list2) {

  let zippedList = new LinkedList();
  
  zippedList.insert(list1.head.name);
  zippedList.append(list2.head.name);
  
  let current = list1.head.next;
  let current2 = list2.head.next;

  while (current || current2) {
    if (current) {
      zippedList.append(current.name);
      current = current.next;
    }

    if (current2) {
      zippedList.append(current2.name);
      current2 = current2.next;
    }
  }
  return zippedList;
}

let list = new LinkedList();

list.append("1");
list.append("3");

let list2 = new LinkedList();

list2.append("5");
list2.append("9");
list2.append("4");

let zip = zipLists(list,list2);
console.log(zip.toString());

module.exports = zipLists;
