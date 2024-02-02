let isRainy = true;

//if expression value is truthy code-block will be executed
if (true) {
  console.log("Hello");
}

//if expression value is falsy code-block will not be executed
if (false) {
  console.log("Hello2");
}

if (isRainy) {
  console.log("Hello rainy day");
}

console.log(isRainy == true, (x = 2));

if (isRainy == true) {
  console.log("Hello rainy day");
}

//if expression value is truthy code-block will be executed
if ((x = 2)) {
  console.log("Merhaba merhaba");
}

if (0) {
  console.log("huuh");
}

// *** falsy values in js *** //

// empty string
// null
// undefined
// 0
// false
// NaN

let myNum = 2;
let myNumStr = "2";

// == comparison operator

if (myNum == 2) {
  console.log("myNum = 2 ****");
}

// comparison operator - type coersion
if (myNum == myNumStr) {
  console.log("equal"); //bu kod çalışır
}

// === strict equality check
if (myNum === myNumStr) {
  console.log("xxxx"); //bu kod çalışmaz
}

// if else else if
let today = "monday";

if (today === "monday") {
  console.log("such a rainy day");
} else if (today === "tuesday") {
  console.log("such a purple day");
} else if (today === "wednesday") {
  console.log("such a yellow day");
} else {
  console.log("such a lovely day");
}
