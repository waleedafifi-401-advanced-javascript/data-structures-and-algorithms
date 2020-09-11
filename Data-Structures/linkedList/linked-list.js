'usr strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insert(value) {
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
        let current = this.head;
      
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
}

let list = new LinkedList();

module.exports = LinkedList;