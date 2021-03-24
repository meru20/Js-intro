/*
====== Coding Challenge: Javascript Arrays 3.24.21 ======
1. Create a function that creates a new array with a given value
  a. The function should take two parameters: the size of the array and the item to pass in
  b. const someArrayFunc = (arraySize, valueToPass) => {'Code for function'}
  c. expected result someArrayFunction(3, 'apples') = ['apples', 'apples', 'apples']
2. Reverse: Write a function that reverses the order of the items in the array
  a. [1,2,3] = [3,2,1]
3. Create a function that removes all unnecessary elements from an array
  a. use this array: let dirtyArray = [1, 'apple', false, null, 'bananas', 45, '', 'alkali', undefined];
  b. remove the falsy values so that the function returns: [1, 'apple', 'bananas', 45, 'alkali'];
4. Create a function that returns a duplicate free array
  a. let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1]
  b. the function should return [1, 4, 9, 100, 30]
  */

  // #1 Fill an Array
  const fillArray = (arrLength, arrValue) => {
    let filledArray = [];
    for (let i = 0; i < arrLength; i++) {
      filledArray.push(arrValue);
    }
    return filledArray;
  };
  console.log(fillArray(10, 'cat'));
  // #2 - Reverse the order of items in an array
  let orderedArr = [1, 2, 3, 4, 5];
  const reverseArray = arr => {
    let newArr = arr.reverse();
    return newArr;
  };
  const reverse2 = arr2 => {
    // create an empty array
    let reversedArr = [];
    // loop through our current array backwards
    for (let i = arr2.length - 1; i >= 0; i--) {
      console.log(arr2[i]);
      reversedArr.push(arr2[i]);
    }
    return reversedArr;
    // push items from our current array into new array
    // return the new array
  };
  // console.log(reverseArray(orderedArr));
  console.log(reverse2(orderedArr));
  // #3
  let dirtyArray = [
    1,
    'apple',
    false,
    null,
    'bananas',
    45,
    '',
    'alkali',
    undefined,
  ];
  const cleanArr = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === false) {
        arr.splice(i, 2);
      }
      if (arr[i] === '') {
        arr.splice(i, 1);
      }
      if (arr[i] === undefined) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };
  const cleanUp = (oldArr, newArr) => {
    newArr = oldArr.filter(item => item);
    return newArr;
  };
  const implicitCleanUp = arr => arr.filter(item => item);
  const cleanUpTwo = arr => {
    let cleanArr = [];
    arr.forEach(item => {
      if (item) cleanArr.push(item);
    });
    return cleanArr;
  };
  // console.log(cleanArr(dirtyArray));
  console.log(cleanUp(dirtyArray, []));
  // console.log(implicitCleanUp(dirtyArray));
  // console.log(cleanUpTwo(dirtyArray));
  // #4
  let duplicateArray = [1, 4, 9, 4, 100, 4, 30, 1];
  const uniqueArray = arr => {
    return arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  };
  const unique2 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
  let shortSet = [...new Set(duplicateArray)];
  console.log(shortSet);
  console.log(unique2(duplicateArray));