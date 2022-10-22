
console.log('-------------------------------------Problem 1---------------------------------------')
function makeMultiFilter(array) {
  // What we track
  var originalArray = array;
  var currentArray = originalArray;
  return function arrayFilterer(filterCriteria, callback) {
    // If filter not a function return current Array
    if (typeof filterCriteria !== "function") return currentArray;
    // Filter out things
    currentArray = currentArray.filter(filterCriteria);

    // If callback is a function, execute callback
    if (typeof callback === "function")
      callback.call(originalArray, currentArray);
    return arrayFilterer;
  };
}

var arrayFilterer = makeMultiFilter([1, 2, 3]);

// call arrayFilterer to filter out all the numbers not equal to 2
arrayFilterer(
  function (elem) {
    return elem != 2; // check if element is not equal to 2
  },
  function (currentArray) {
    console.log(this); // prints [1,2 3]
    console.log(currentArray); // prints [1,3]
  }
); // prints [1, 3]`

arrayFilterer(function (elem) {
  return elem !== 3; // check if element is not equal to 3
});

var currentArray = arrayFilterer();
console.log('currentArray', currentArray); // prints [1] since we filtered out 2 and 3

function filterTwos(elem) { return elem !== 2; }
function filterThrees(elem) { return elem !== 3; }
var arrayFilterer2 = makeMultiFilter([1, 2, 3]);
var currentArray2 = arrayFilterer2(filterTwos)(filterThrees)();
console.log('currentArray2', currentArray2); // prints [1] since we filtered out 2 and 3

var arrayFilterer3 = makeMultiFilter([1, 2, 3]);
var arrayFilterer4 = makeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)()); // prints [1, 3]
console.log(arrayFilterer4(filterThrees)()); // prints [4, 5, 6]



