/* *** !!! primitive values are immutable. Primitif değerler mutasyona uğratılamaz.  *** */


let season = "Summer";  /* primitive string type */ 

/*  typeof */


console.log( typeof season  );


let id = 14 /* primitive number type */;

let myNum = 14.2;

console.log( typeof myNum, typeof id  );


let isAllowed = true; //false  /* primitive boolean type */

console.log( typeof isAllowed  );


let userSettings; // undefined type  (absence of value, değerin yokluğu )

console.log( typeof userSettings, userSettings );


let user = null; //null type ( empty value, boş değer )

console.log( typeof user );




let num1 = 3;

let num2 = num1;

num1 = 4;

console.log( num2 );

