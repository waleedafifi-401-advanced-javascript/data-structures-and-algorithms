'usr strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');

describe('Linked List Module', () => {

    it('test empty Linked List', () => {
        let linked = new LinkedList();
        expect(linked.head).toBeNull(); 
    });

    it('if head will  point to fiest node in the Linked List', () => {
        let linked = new LinkedList();
        linked.insert('Waleed');
        expect(linked.head.name).toEqual('Waleed');
    });
    
    it('insert() will insert more than one node to the linked list', () => {
        let linked = new LinkedList();
        linked.insert('Waleed');
        linked.insert('abed');
        linked.insert('Afifi');

        expect(linked.head.next.next.name).toEqual('Afifi');
    });
    
    it('include() will search if the value exists in the Linked list', () => {
        let linked = new LinkedList();
        linked.insert('Waleed');
        linked.insert('abed');
        linked.insert('Afifi');

        expect(linked.include('abed')).toBeTruthy();
        expect(linked.include('mohammed')).toBeFalsy();
    });
    
    it('toString() will provide the Linked List as it is', () => {
        let linked = new LinkedList();
        linked.insert('Waleed');
        linked.insert('abed');
        linked.insert('Afifi');

        expect(linked.toString()).toEqual('Waleed -> abed -> Afifi -> null');
    });

});
