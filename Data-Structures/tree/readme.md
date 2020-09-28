# Tree

### Challenge
- Write a binary tree class with `preOrder()`, `inOrder()`, and `postOrder()` methods. 
- Write a binary search tree class with `add()` and `contains()` methods.
- Write an instance method called `findMaximumValue()`. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.
- Write a new method called `breadthFirst()`, will take a binaryTree as input and return a list of the values from the tree in thee order they were encountered

### Approach and Efficiency
- `preOrder()` - Takes no arguments. Makes and returns an array of the tree items in the order center, left, right.
- `inOrder()` - Takes no arguments. Makes and returns an array of the tree items in the order left, center, right
- `postOrder()` - Takes no arguments. Makes and returns an array of the tree items in the order left, right, center
- `add()` - Takes one value as an argument. Adds that value at the correct node in a binary search tree
- `contains()` - Takes one value as an argument. Returns true if the value is in the tree, and false if not.

- `findMaximumValue()` - Get the Max value from a binary tree

- `breadthFirst()` - breadth first traversal method which takes a Binary Tree as its unique input, and return a list of the values in the tree in the order they were encountered

**binarytree**
- **Big O** for time is *O(n)* becuse it depend on the number of the nodes
- **Big O** for space is *O(h)* becuse it depend on the height of tree

**binarysearchtree**
- **Big O** for time is *O(log(n))* becuse it depend on the number of the nodes
- **Big O** for space is *O(h)* becuse it depend on the height of tree

**breadthFirst**
- **Big O** for time is *O(n)*
- **Big O** for space is *O(n)*


![](../../assets/binaryTree.jpg)

***

![](../../assets/binarySearchTree.jpg)

***

![](../../assets/find-maximum-value.jpg)

***

![](../../assets/breadth-first.jpg)
