//object creation - oject literal syntax
const myObj = { color: "red", count: 18, kdv18: "0.18" }; //curly brace

const myObj2 = { ["deneme" + 18]: "abc" }; //dynamic object keys with []

// --- accessing ---
const myObjColor = myObj["color"]; //square bracket notation;

const myObjKdv18 = myObj["kdv" + 18];

const myObjCount = myObj.count; //dot notation

const myCar = {
  color: "kırmızı",
  maxSpeed: "230km/h",
  doorCount: 5,
  //method
  stop: function () {
    console.log(this.color + " arabam durdu.");
  },
  //method
  accelarate: function () {
    console.log(this.color + " arabam hızlanıyor...");
  },
};

myCar.accelarate(); //accesing methods of an object
myCar.stop(); //accesing methods of an object

// assigning values

const user = { email: "asd@asd.com", id: 0, status: "offline" };

user.status = "online";

user["status"] = "busy";

console.log(user.status);

// *** object destructuring ***

const product = { title: "hp laptop", price: 75000, color: "Black" };

/*
const pTitle = product.title;
const pPrice = product.price;
const pColor = product.color;
*/

const { price, title, color } = product;

console.log(title, price, color);

// default values while destructuring
const movie = {
  mTitle: "The shining",
  director: "Stanley Kubrick",
  duration: "3h",
};

const { mTitle, director, producer = "Netflix" } = movie;


const book = {bTitle:"Knulp", author:"Herman Hesse"};

const { bTitle:bookTitle , author:bookAuthor} = book;

console.log(bookTitle, bookAuthor );



// global settings
const globalSettings = { theme: "dark", zoomLevel: 1.0, baseFontSize: "16px" };

const userSettings = globalSettings;

userSettings.theme = "light";

console.log(globalSettings);
