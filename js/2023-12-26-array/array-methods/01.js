// push()
let arr1 = ["a", "b", "c"];

let a11NewLength = arr1.push("f", "x", "d");

console.log(a11NewLength, arr1);

//pop()
let arr2 = ["a", "b", "c"];

let removedEl = arr2.pop();

console.log(removedEl, arr2);

//shift()
let arr3 = ["x", "o", "f"];

let removedFirstEl = arr3.shift();

console.log(removedFirstEl, arr3);

//unshift()
let arr4 = ["x", "o", "f"];

let newArr4Length = arr4.unshift("h", "m");

console.log(newArr4Length, arr4);

//concat()
let arr5 = [12, 14, 15];
let arr6 = ["x", "d"];

let combined = arr5.concat(arr6);

console.log(combined, arr5, arr6);

combined.push("a", "f", "c", "d");

console.log(arr5, arr6);

//includes()
let arr7 = ["b", "c", "apple", "orange", "orange", "lemon"];

let hasOrangeStr = arr7.includes("orange"); //true

let hasBananaStr = arr7.includes("banana"); //false

console.log(hasOrangeStr);

//indexOf()
console.log(arr7.indexOf("orange"));

//lasIndexOf()
console.log(arr7.lastIndexOf("orange"));

//reverse()
let arr8 = [1, 2, 3];

let reversed = arr8.reverse();

console.log(arr8, reversed, arr8 === reversed);

//slice()
let arr9 = ["lemon", "orange", "apple", "pear"];

let slice1 = arr9.slice(0, 2); //lemon, orange
let slice2 = arr9.slice(0, 2);
console.log(slice1, slice2, arr9, slice1 === slice2);

let slice3 = arr9.slice(2); //["apple", "pear"];

let slice4 = arr9.slice();

let slice5 = arr9.slice(-3); //last three items

let slice6 = arr9.slice(-4, -1); //["lemon", "orange", "apple"]

console.log(slice4, arr9, slice4 === arr9);

//splice()

let arr10 = ["İstanbul", "Ankara", "İzmir", "Kocaeli", "Antalya"];

let test = arr10.splice(0, 2); //ilk iki elemanı sil, sildiği elemanları dizi olarak döndürdü. Orjinal diziyi modifiye etti (mutasyona uğrattı);

console.log(test, arr10); //arr10 -> ["İzmir", "Kocaeli", "Antalya"];

let test2 = arr10.splice(0, 1, "Kayseri", "Adana");

console.log(test2, arr10); //arr10 -> [ "Kayseri", "Adana", "Kocaeli", "Antalya"]

//join()
let fruitsArr = ["apple", "orange", "pear", "watermelon"];

let fruitsStr = fruitsArr.join("***");

console.log(fruitsStr);

//palindrome testi yapabilecek bir fonksiyon yazınız -> plandrome ise true değilse false döndürmeli    Örn: Daad (true), daad(true), Ütü (true), ütü (true),
//"Daad, * ?"


//arrow
//anonymous function
//function declaration


//Arrow anonymous function expression
const isPalindrome = (word) => {
  const lowerCaseWord = word.toLocaleLowerCase("tr");

  const reversedWord = lowerCaseWord.split("").reverse().join("");

  if (reversedWord === lowerCaseWord) {
    return true;
  }
  return false;
};


// anonymous function expression
const isPalindrome2 = function (word) {
  const lowerCaseWord = word.toLocaleLowerCase("tr");

  const reversedWord = lowerCaseWord.split("").reverse().join("");

  if (reversedWord === lowerCaseWord) {
    return true;
  }
  return false;
};

// function declaration statement  
function isPalindrome3(word) {
  const lowerCaseWord = word.toLocaleLowerCase("tr");

  const reversedWord = lowerCaseWord.split("").reverse().join("");

  if (reversedWord === lowerCaseWord) {
    return true;
  }
  return false;
}
