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
    }
  }
};

// let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.';
// let word = repeatedWord(str);
// console.log(word);

module.exports = repeatedWord;