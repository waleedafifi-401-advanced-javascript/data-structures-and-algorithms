# Zip Two Linked Lists

## Challenge

Write a function called `zipLists` which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Input/Output Examples

`zipLists(list1, list2)`

| Arg: list1                     | Arg: list2                     | Output                                              |
| ------------------------------ | ------------------------------ | --------------------------------------------------- |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X |
| head -> [1] -> [3] -> X        | head -> [5] -> [9] -> [4] -> X | head -> [1] -> [5] -> [3] -> [9] -> [4] -> X        |
| head -> [1] -> [3] -> [2] -> X | head -> [5] -> [9] -> X        | head -> [1] -> [5] -> [3] -> [9] -> [2] -> X        |


## Approach & Efficiency
1. create a method that accepts 2 singly linkedLists
2. make a reference of the first linkedList
3. make a reference of the second linkedList
4. create a 3rd instance containing the combined linkedLists
5. return the reference to the new head

### Big O Time:

O(n)

### Big O Space:

O(1)

## Diagrams & Solutions

### Whiteboard

![Whiteboard](../../assets/llZip.jpg)