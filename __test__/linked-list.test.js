'usr strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');

describe('Linked List Module', () => {

    it('test empty Linked List', () => {
        let linked = new LinkedList();
        expect(linked.head).toBeNull();
    });

    it('if head will  point to fiest node in the Linked List', () => {
        const linkedList = cactusList();
        expect(linkedList.head.name).toEqual('Moon cactus');
    });

    it('insert() will insert more than one node to the linked list', () => {
        const linkedList = cactusList();
        expect(linkedList.head.next.next.name).toEqual('Ball Cactus');
    });

    it('include() will search if the.name exists in the Linked list', () => {
        const linkedList = cactusList();

        expect(linkedList.include('Moon cactus')).toBeTruthy();
        expect(linkedList.include('Euphoribia Milii')).toBeFalsy();
    });

    it('toString() will provide the Linked List as it is', () => {
        const linkedList = cactusList();

        expect(linkedList.toString()).toEqual('Moon cactus -> Aloe Vera -> Ball Cactus -> Flaming Katy -> null');
    });

    it('Will insert before something in the middle', () => {
        const linkedList = cactusList();
        linkedList.insertBefore('Aloe Vera', 'Bunny Cactus');
        // console.log(linkedList.head.next.next.name);
        expect(linkedList.head.next.name).toBe('Bunny Cactus');
    })

    it('Will insert before something at the beginning', () => {
        const linkedList = cactusList();
        linkedList.insertBefore('Flaming Katy', 'Please');
        expect(linkedList.head.next.next.next.name).toBe('Please');
    })
    
    it('Will insert after something in the middle', () => {
        const linkedList = cactusList();
        linkedList.insertAfter('Ball Cactus', 'Bunny Cactus');
        expect(linkedList.head.next.next.next.name).toBe('Bunny Cactus');
    })
    
    it('Will insert after something at the end', () => {
        const linkedList = cactusList();
        linkedList.insertAfter('Flaming Katy', 'Tiger Tooth Aloe');
        expect(linkedList.head.next.next.next.next.name).toBe('Tiger Tooth Aloe');
    })
    
    it('Will append to the end of the list', () => {
        const linkedList = cactusList();
        linkedList.append('Tiger Tooth Aloe');
        expect(linkedList.head.next.next.next.next.name).toBe('Tiger Tooth Aloe');
    })
    
    it('Will apend multiple items to the end of the list', () => {
        const linkedList = cactusList();
        linkedList.append('Ariocarpus Iloydii');
        linkedList.append('Medusita');
        expect(linkedList.include('Ariocarpus Iloydii')).toBeTruthy;
        expect(linkedList.include('Medusita')).toBeTruthy;
        expect(linkedList.head.next.next.next.next.name).toEqual('Ariocarpus Iloydii');
        expect(linkedList.head.next.next.next.next.next.name).toEqual('Medusita');
      })
});

const cactusList = () => {
    const linkedList = new LinkedList();
    linkedList.insert('Moon cactus');
    linkedList.insert('Aloe Vera');
    linkedList.insert('Ball Cactus');
    linkedList.insert('Flaming Katy');
    return linkedList;
}