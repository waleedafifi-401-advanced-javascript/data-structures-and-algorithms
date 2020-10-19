'use strict';

// function repeatedWord take a string as a variable
const repeatedWord = (str) => {
  // split the words by space return it to array
  let splitedWord = str.toLowerCase().split(' ');
  // counter to count the number of repeated word
  let counter;

  // for loop over the word array 
  for (let i = 0; i < splitedWord.length; i++) {
    // increase the counter to 1
    counter = 1;

    // for loop over splited array with new length var called j and start the j with i + 1
    for (let j = i + 1; j < splitedWord.length; j++) {
      // Check if word array of i is equal word array fo j
      if (splitedWord[i] === splitedWord[j]) {
        // increase the counter by 1
        counter++;
        // set word array of j to '0'
        splitedWord[j] = '0';
      }
    }

    // Check if counter greater than 1 and word array of i not equal to '0'
    if (counter > 1 && splitedWord[i] !== '0') {
      // return the word array oof i
      return splitedWord[i];
    } else {
      return 'All words are unique ^_^';
    }
  }
};

let str = 'It was the';
let word = repeatedWord(str);
console.log(word);

module.exports = repeatedWord;