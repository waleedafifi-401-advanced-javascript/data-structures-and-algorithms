# multi Bracket Validation

create a function that takes a string as an argument it will return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
- Round Brackets : ()
- Square Brackets : []
- Curly Brackets : {}

## Challenge
- create function takes a string as an argument.
- this function will check the brackets
- return true if the brackets balanced and false if it is not

## Approach & Efficiency
- using a `forEach` to  iterate the string and check for the brackets, 
- if statements to test Regex with character
- if statement true push character to stack

## BigO:
the big O for space and time it **O(n)** : because of using `for loop` to iterate the string. 

![whiteboard](../../assets/multi-bracket-validation.jpg)

