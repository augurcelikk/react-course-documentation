{
  /* code-block  */
  var userId = 22;
  /*  var rezerve kelimesi ile deklare edilmiş idetifier block scope sayılmaz. */
}

console.log(userId);

{
  let userColor = "red";
  console.log(userColor, "Ben bloğun  içinden sesleniyorum");
}

//console.log(userColor); //userColor is not defined

if (true) {
  let test = 3;
}

//console.log(test); //userColor is not defined

{
  const pi = 3.14;
}

console.log(pi); //userColor is not defined

//global scope

function test() {
  //local scope
}

if (true) {
  //block scope
}
