'use strict';

const leftJoin = require('../challenges/leftJoin/left-join.js');
const Hashtable = require('../data-structures/hashtable/hashtable.js');

describe('Left Join two Hashtables', () => {

  it('should properly left join two full hashtables', () => {

    const table3 = new Hashtable(5);
    table3.add('fond', 'enamored');
    table3.add('wrath', 'anger');
    table3.add('diligent', 'employed');
    table3.add('outfit', 'garb');
    table3.add('guide', 'usher');

    const table4 = new Hashtable(5);
    table4.add('fond', 'averse');
    table4.add('wrath', 'delight');
    table4.add('diligent', 'idle');
    table4.add('outfit', 'no fit');
    table4.add('guide', 'follow');

    const resultsArr = [
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', 'no fit'],
      ['guide', 'usher', 'follow'],
    ];

    expect(leftJoin(table3, table4)).toEqual(resultsArr);

  });



  it('should properly left join two hashtables, left is incomplete', () => {

    const table5 = new Hashtable(5);
    table5.add('fond', 'enamored');
    table5.add('wrath', 'anger');
    table5.add('diligent', 'employed');
    table5.add('outfit', 'garb');

    const table6 = new Hashtable(5);
    table6.add('fond', 'averse');
    table6.add('wrath', 'delight');
    table6.add('diligent', 'idle');
    table6.add('guide', 'follow');
    table6.add('flow', 'jam');

    const resultsArr = [
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
    ];

    expect(leftJoin(table5, table6)).toEqual(resultsArr);
  });



  it('should properly left join two hashtables, right is incomplete', () => {

    const table1 = new Hashtable(5);
    table1.add('fond', 'enamored');
    table1.add('wrath', 'anger');
    table1.add('diligent', 'employed');
    table1.add('outfit', 'garb');
    table1.add('guide', 'usher');

    const table2 = new Hashtable(5);
    table2.add('fond', 'averse');
    table2.add('wrath', 'delight');
    table2.add('diligent', 'idle');
    table2.add('guide', 'follow');
    table2.add('flow', 'jam');

    const resultsArr = [
      ['wrath', 'anger', 'delight'],
      ['fond', 'enamored', 'averse'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow'],
    ];

    expect(leftJoin(table1, table2)).toEqual(resultsArr);

  });



  it('should properly left join two hashtables, left is empty', () => {

    const table7 = new Hashtable();

    const table8 = new Hashtable(5);
    table8.add('fond', 'averse');
    table8.add('wrath', 'delight');
    table8.add('diligent', 'idle');
    table8.add('outfit', 'no fit');
    table8.add('guide', 'follow');

    const resultsArr = [];

    expect(leftJoin(table7, table8)).toEqual(resultsArr);
  });



  it('should properly left join two hashtables, right is empty', () => {

    const table9 = new Hashtable(5);
    table9.add('fond', 'averse');
    table9.add('wrath', 'delight');
    table9.add('diligent', 'idle');
    table9.add('outfit', 'no fit');
    table9.add('guide', 'follow');
    
    const table10 = new Hashtable();

    const resultsArr = [
      ['wrath', 'delight', null],
      ['fond', 'averse', null],
      ['diligent', 'idle', null],
      ['outfit', 'no fit', null],
      ['guide', 'follow', null],
    ];

    expect(leftJoin(table9, table10)).toEqual(resultsArr);

  });


});
