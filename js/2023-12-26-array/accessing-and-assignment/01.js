let myArr = [1, 2, 3]; //square bracket notation- array literal expression

// *** accessing via index number
let myArrLength = myArr.length;

let firstItem = myArr[0];

let secondItem = myArr[1];

let lastItem = myArr[myArrLength - 1];

console.log(firstItem, secondItem, lastItem);

// *** adding new items to an array ( Bir diziye yeni eleman eklemek ) - dizi öğesinin değerini değiştirmek ( mutation )
let myArr2 = ["a", "b", 5, "deneme"];

myArr2[0] = "x";

console.log(myArr2); // ["x", "b", 5, "deneme"];

myArr2[4] = "test";

console.log(myArr2); // ["x", "b", 5, "deneme", "test"];


myArr2[12] = "Burak";

console.log( myArr2, myArr2[9], "****"  );




// ***  !!! Array destructuring !!! ***
let myArr3 = ["s", 23, "deneme", "345"];

/*
let a = myArr3[0];
let b = myArr3[1];
let c = myArr3[2];
let d = myArr3[3];
*/

let [a,b,c,d] = myArr3;

console.log(a,b,c,d, "----");



let myArr4 = ["apple", "orange", "lemon"];
let [f1, ,f3] = myArr4; //skipping items


let myArr5 = ["x", "o", "n"];

let [n0, n1, n2, n3=2] = myArr5; //default value

console.log( n3 );




console.log(f1, f3);












//- case
let globalSettingsArr = ["red", 123, "dark"];


let userSettings = globalSettingsArr;



userSettings[0] = "pink"; //globalSettings dizisini de değiştirmiş oluyorsun çünkü diziler referan ile kaydedilir... ( stack - heap - pointer )

console.log( globalSettingsArr ); //["pink", 123, "dark"] 

