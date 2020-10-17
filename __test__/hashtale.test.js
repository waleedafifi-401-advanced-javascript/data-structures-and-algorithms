'use strict';

const Hashtable = require('../Data-Structures/hashtable/hashtable');


it('should add in correct spot', () => {
  const table = new Hashtable();
  table.add('tree', 'beech');
  const index = table.hash('tree');
  const value = table.buckets[index];
  expect(value[0][1]).toBe('beech');

  let key = 'tree';
  const contents = table.get(key);
  expect(contents).toBe('beech');

});



it('should correctly hash a key to an in-range value', () => {
  const table = new Hashtable();
  const index = table.hash('this is a thing to HASH');
  expect(index < 1024 && index >= 0 );

  const table2 = new Hashtable(256);
  const index2 = table2.hash('tia');
  expect(index2 < 256 && index2 >= 0);
});



it('should retreive the correct value stored, based on a key', () => {
  const table = new Hashtable();
  table.add('tree', 'alder');
  const value = table.get('tree');
  expect(value).toBe('alder');
});


it('should successfully return null for a key that doesn\'t exist in hashtable', () => {
  const table = new Hashtable();
  table.add('tree', 'alder');
  const value = table.get('plant');
  expect(value).toBe(null);
});


it('should successfully handle a collision within the hashtable', () => {

  const table = new Hashtable();
  table.add('tree', 'cedar');
  expect(table.contains('tree')).toBe(true);

  table.add('eert', 'alder');
  expect(table.contains('eert')).toBe(true);

  table.add('eret', 'maple');
  expect(table.contains('eret')).toBe(true);

});


it('should retrieve a value from a bucket in the table that has a collision', () => {
  const table = new Hashtable();
  table.add('tree', 'cedar');
  expect(table.contains('tree')).toBe(true);

  table.add('eert', 'alder');
  expect(table.contains('eert')).toBe(true);

  let oneItemInBucket = table.get('tree');
  expect(oneItemInBucket).toBe('cedar');

  let anotherItemInBucket = table.get('eert');
  expect(anotherItemInBucket).toBe('alder');

});