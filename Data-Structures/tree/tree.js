"use strict";

const Node = require("./node");

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let treeResults = [];
        let _walk = (node) => {
            treeResults.push(node.value);
            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
        };
        _walk(this.root);
        return treeResults;
    }
    postOrder() {
        let treeResults = [];
        let _walk = (node) => {

            if (node.left) _walk(node.left);
            if (node.right) _walk(node.right);
            treeResults.push(node.value);
        };
        _walk(this.root);
        return treeResults;
    }
    inOrder() {
        let treeResults = [];
        let _walk = (node) => {

            if (node.left) _walk(node.left);
            treeResults.push(node.value);
            if (node.right) _walk(node.right);
        };
        _walk(this.root);
        return treeResults;
    }
}

class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(value) {
        let treeValue = new Ne(value);
        if (this.root === null) {
            this.root = treeValue;
            return this.root;
        }
        let _walk = (node) => {
            if (node.value > value) {
                if (node.left) {
                    _walk(node.left);
                } else {
                    node.left = treeValue;
                }
            } else if (node.value < value) {
                if (node.right) {
                    _walk(node.right);
                } else {
                    node.right = treeValue;
                }
            }
        };
        _walk(this.root);
        return this.root;
    }
    contain(val) {
        let treeResults = [];
        let _walk = (node) => {
            if (node.value === val) return treeResults.push(val);
            if (node.value > val) {
                if (node.left) {
                    _walk(node.left);
                }
            } else if (node.value < val) {
                if (node.right) {
                    _walk(node.right);
                }
            }
        };
        _walk(this.root);

        if (treeResults[0]) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = {
    BinaryTree,
    BinarySearchTree
};
