const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft < 1) {
    completionCallback(sum);
    reader.close();
  } else {
    reader.question('Choose a number:', function (answer) {
      const ans = parseInt(answer);
      sum = sum + ans;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  };
  
};


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
