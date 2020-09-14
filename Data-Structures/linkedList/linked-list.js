'usr strict';

const Node = require('./node');

class LinkedList {

    constructor() {
        this.head = null;
    }

    insert(value) {
        if (!value) {
            console.log('insert: Value can not be empty');
            return;
        }

        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    include(value) {
        if (!value) {
            console.log('include: Value can not be empty');
            return;
        }

        let current = this.head;

        if (current.name === value) {
            return true;
        }

        while (current.next) {
            if (current.next.name === value) {
                return true;
            } else {
                current = current.next;
                return false;
            }
        }
    }

    toString() {
        let allNodes = [];

        let current = this.head;

        while (current.next) {
            allNodes.push(current.name);
            current = current.next;
        }

        allNodes.push(current.name);

        allNodes.push('null');

        let arrowNext = allNodes.join(' -> ');

        return arrowNext;
    }

    append(value) {

        if (!value) {
            console.log('append: Value can not be empty');
            return;
        }

        let node = new Node(value);

        if (!this.head) {
            this.head = node;
            return this;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        return this;
    }

    insertBefore(value, newVal) {
        if (!value && !newVal) {
            console.log('insertBefore: Value can not be empty');
            return;
        }

        let newNode = new Node(newVal);
        let currentNode = this.head;
        let previouseNode = null;

        while (currentNode) {

            if (currentNode.name == value) {

                if (previouseNode == null) {
                    this.head = newNode;

                } else {
                    previouseNode.next = newNode;
                }
                newNode.next = currentNode;
                break;
            }
            previouseNode = currentNode;
            currentNode = currentNode.next;
        }
    }

    insertAfter(value, newVal) {
        if (!value && !newVal) {
            console.log('insertAfter: Value can not be empty');
            return;
        }

        let newNode = new Node(newVal);
        let currentNode = this.head;
        let nextValue = null;

        while (currentNode) {

            if (currentNode.name === value) {
                nextValue = currentNode.next;

                currentNode.next = newNode;

                newNode.next = nextValue;
            }

            currentNode = currentNode.next;
        }
    }

    kthFromEnd(k) {
        if (typeof k != 'number') { throw Error('K must be a number'); }

        if (k < 0) {
            throw Error('Value can not be less than 0');
        }

        let count = 0;
        let current = this.head;
        
        while (current) {
            count++;
            current = current.next;
        }
        
        if (k > count - 1) {
            throw Error('The value you have entered out of the linked list range');
        }
        
        current = this.head;
        let index = (count - k) - 1;
        
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.name;
    }


}

let list = new LinkedList();

list.append('Cat 1');
list.append('Cat 2');
// list.insertBefore('Cat 4', 'Cat 2')
list.insertAfter('Cat 2', 'ss');
let test = list.kthFromEnd('0');
console.log('test: ', test);
console.log(list.toString());

module.exports = LinkedList;