
function leftJoin(hashtable1, hashtable2) {

  const resultArr = [];

  hashtable1.buckets.forEach(outerBucket => {

    outerBucket.forEach(innerBucket => {

      if (innerBucket) {
        resultArr.push([innerBucket[0], innerBucket[1]]);
      } else {
        return;
      }

    });


  });

  for (let i = 0; i < resultArr.length; i++) {

    let keyToCheck = resultArr[i][0];

    if (hashtable2.get(keyToCheck)) {

      const secondValToAddOntoResultsArr = hashtable2.get(keyToCheck);

      resultArr[i].push(secondValToAddOntoResultsArr);

    } else {

      resultArr[i].push(null);

    }

  }

  return resultArr;


}

module.exports = leftJoin;
