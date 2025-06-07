// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown() {
  
  // write your code here
}

const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());


SOLUTION
// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

 Start
/*
function countdown() {
  
  // write your code here
  let count = 10;
  return function(){
    count -= 1;
    return count;
  }
}



const countingDown = countdown();

console.log(countingDown());
console.log(countingDown());
console.log(countingDown()); */


function countdown(count, step){
let count = count + step;
  return function(){
    count -= step;
    return count;
  }
}
const countingDown1 = countdown(10, 2);

console.log(countingDown1());
console.log(countingDown1());
console.log(countingDown1());
