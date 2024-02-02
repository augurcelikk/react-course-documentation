const myObj = {
  color: "red",
  id: 12,
  shape: "circle",
};

const myObj2 = {
  color: "blue",
  id: 12,
  shape: "circle",
};

// blueprint obj via constructor function

function Shape(color, id, shape) {
  this.shape = color;
  this.id = id;
  this.shape = shape;
}

const myShape = new Shape("red", 12, "circle");

console.log(myShape.__proto__);

console.log(myShape.__proto__.__proto__);

console.log(myShape.__proto__.__proto__.__proto__);

// blueprint obj via constructor function

function User(userName, userId) {
  this.userName = userName;
  this.userId = userId;
  this.sayHi = function () {
    console.log(`${this.userName}`);
  };
}

const myUser = new User("Burak", 12);

const myUser2 = new User("Deneme", 14);

myUser.sayHi();

function Hero(alias, strength = 75) {
  this.alias = alias;
  this.strength = strength;
}

Hero.prototype.run = function () {
  console.log(`${this.alias} is running`);
};

const darkKnight = new Hero("darkKnight", 100);
const spiderMan = new Hero("spider man", 90);

darkKnight.run();

spiderMan.run();


console.log( spiderMan.hasOwnProperty("run"));

console.log(  spiderMan.__proto__.hasOwnProperty("run") );


console.log(  spiderMan.hasOwnProperty("alias") );