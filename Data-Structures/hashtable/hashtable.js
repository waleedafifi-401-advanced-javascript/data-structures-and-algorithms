'use strict';

class Hashtable {

  constructor(size = 1024) {
    this.buckets = new Array(size);
  }

  add(key, value) {

    const index = this.hash(key);
    const contentsOfBucket = this.buckets[index];

    if (contentsOfBucket === undefined) {
      this.buckets[index] = [
        [key, value],
      ];
    } else {
      this.buckets[index].push([key, value]);
    }

  }


  get(key) {

    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if (itemsInBucket) {

      for (let item of itemsInBucket) {

        if (item[0] === key) {
          return item[1];
        }

      }

    } else {

      return null;

    }

  }



  contains(key) {

    const index = this.hash(key);

    if (this.buckets[index] !== undefined) {
      return true;
    } else {
      return false;
    }

  }


  hash(key) {

    let keyHash = 0;

    for (let i = 0; i < key.length; i++) {

      keyHash += (key.charCodeAt(i) * 599);

    }

    const index = Math.floor(keyHash % this.buckets.length);

    return index;

  }

}

module.exports = Hashtable;
