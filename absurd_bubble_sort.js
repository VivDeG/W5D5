const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function(answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    };
  })
}

// askIfGreaterThan(10, 5, el => {console.log(el)});

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        madeAnySwaps = true;
        let temp_val = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp_val;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } else if (i === (arr.length-1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

// innerBubbleSortLoop([3, 5, 1], 0, false, console.log('In Outer Bubble Sort'));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1, 7, 3, 5, 0, 2, 8], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});