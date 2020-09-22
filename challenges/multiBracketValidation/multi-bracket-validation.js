"use strict";

let Stack = require("../../Data-Structures/stacksAndQueues/stacks-and-queues").stack;

const multiBracketValidation = (str) => {
    const stack = new Stack();
    let bool = true;
    const arrayOfBrackets = str.match(/[()[\]{}]/g);
    const openingBracket = /[([{]/;
    arrayOfBrackets.forEach(character => {
        if (openingBracket.test(character)) {
            stack.push(character);
        } else {
            switch (stack.pop()) {
                case "(":
                    bool = character !== ")" ? false : bool;
                    break;
                case "[":
                    bool = character !== "]" ? false : bool;
                    break;
                case "{":
                    bool = character !== "}" ? false : bool;
                    break;
            }
        }
    });
    return stack.isEmpty() && bool;
};

module.exports = multiBracketValidation;
