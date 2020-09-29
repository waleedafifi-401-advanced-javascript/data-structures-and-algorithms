# data-structures-and-algorithms

# FizzBuzzTree:
create a **FizzBuzzTree** function that takes tree as an argument and determine its value if are divisible by **3**, **5** or both.

## Challenge
Create  a function called **FizzBuzzTree** which takes a tree as an argument, determine whether or not the value of each node is divisible by **3**, **5** or both.

## Approach & Efficiency
- Create  a function called **FizzBuzzTree** will take argument tree.
- it will walk throw the tree values using preorder trivals.
- if the `value % 3 === 0` change it to '**Fizz**'
- if the `value % 5 === 0` change it to '**Buzz**'
- if the value is divisible by 3 and 5 change it to '**FizzBuzz**'
- if the value is not divisible by 3 or 5 change its type to string.
- return the new tree

#### FizzBuzzTree:
- **Big O** for time: **O(n)**
- **Big O** for space: **o(h)**


## Solution
![](../../assets/fizz-buzz-tree.jpg)


