/* *** Referenced Types *** */

/*  !!!referenced types are mutable  */

/* collection */
let seasons = ["winter", "summer", "fall", "spring"]; //array - indexed collection   ( type object )

console.log(typeof seasons);

let product = { title: "Hp laptop", price: 45000 }; // object - key-value collection   ( type object )

console.log(typeof product);


let nums1 = [1,2,3];

let nums2 = nums1;

nums1[0] = "x";

console.log( nums2 );
