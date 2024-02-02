//function are first class citizens in js



/* --- function declaration statement ---*/
function myFunc(/* parameters */) {
  //statement1
  //statement2
}

//invoking ( calling ) a function
myFunc(/* arguments */);

function addTwoNums(num1, num2) {
  return num1 + num2;
}

function addTwoNums2(num1, num2) {
  const sum = num1 + num2;

  return sum;
}

//argument 1:14, argument 2: 15
addTwoNums(14, 15); //29

addTwoNums2(14, 16); //30

console.log(addTwoNums(23, 45));

function test() {
  //implicitly return undefined
  //return undefined; explicitly return undefined
}

let testResult = test();

console.log(test(), testResult);

//js functionları mutlaka bir değer döndürür, siz açık bir şekilde değer döndürmediğinizde, kapalı (implicitly) bir şekilde undefined döndürülür...



