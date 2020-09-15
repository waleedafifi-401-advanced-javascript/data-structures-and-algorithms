'use-strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');
const zipList = require('../Data-Structures/llZip/ll-zip');

describe('Zip List', () => {
  it('will zip two lists of the same length', () => {
    const linkedList2 = makeList();
    const linkedList = makeList2();
    expect(zipList(linkedList2, linkedList).toString()).toBe('1 -> 5 -> 2 -> 6 -> 3 -> 7 -> 4 -> 8 -> null');
  });

  it('will zip when the first list is longer', () => {
    const linkedList2 = makeList();
    linkedList2.append('-_-');
    linkedList2.append('OoO');
    const linkedList = makeList2();
    expect(zipList(linkedList2, linkedList).toString()).toBe('1 -> 5 -> 2 -> 6 -> 3 -> 7 -> 4 -> 8 -> -_- -> OoO -> null');
  });

  it('will zip when the second list is longer', () => {
    const linkedList2 = makeList();
    const linkedList = makeList2();
    linkedList.append('^_^');
    linkedList.append('#_#');
    expect(zipList(linkedList2, linkedList).toString()).toBe('1 -> 5 -> 2 -> 6 -> 3 -> 7 -> 4 -> 8 -> ^_^ -> #_# -> null');
  });
});

const makeList = () => {
  const linkedList = new LinkedList();
  linkedList.insert('1');
  linkedList.insert('2');
  linkedList.insert('3');
  linkedList.insert('4');
  return linkedList;
};

const makeList2 = () => {
  const linkedList = new LinkedList();
  linkedList.insert('5');
  linkedList.insert('6');
  linkedList.insert('7');
  linkedList.insert('8');
  return linkedList;
};
