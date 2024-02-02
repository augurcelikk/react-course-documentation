// *** logical and operator ***

console.log(true && false);

console.log(false && true);

console.log(true && true);

let message = "Hello user";

let isUserAllowed = true;

console.log(isUserAllowed && message); //eğer logical and ile işleme giren iki taraf truthy value ise sağ taraf dödürülür...

let userAge = 19;
let isUserRegistered = true;

if (userAge > 18 && isUserRegistered) {
  //welcome message
}

// *** logical or operator ***

console.log(true || false);
console.log(false || true);
console.log(true || true);

console.log(false || false);

let a = 3;

let b = 4;

console.log(a || b);


// *** not operator ***

console.log( !true );

console.log( !false );

console.log(!""); // !falsyValue

console.log(!0);// !falsyValue

console.log(!null);// !falsyValue


console.log(!"Burak");


let isUserLoggedIn = false;


if(!isUserLoggedIn){
    console.log("lütfen giriş yapın");
}




let x = 3;
let y = 4;

if( !(x + y > 8) ) {
    console.log("testing");
}









