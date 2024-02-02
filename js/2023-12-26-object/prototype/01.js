const myObj = {
  color: "red",
  shape: "rectangle",
};

console.log(myObj.toString());

// bir objenin prototipine bakmak

const protoOfMyObj = Object.getPrototypeOf(myObj);

console.log(protoOfMyObj);

const protoOfprotoOfMyObj = Object.getPrototypeOf(protoOfMyObj);

console.log(protoOfprotoOfMyObj);

// prototype chain null -> Object -> myObj

const myStr = "Burak";

console.log(myStr.__proto__); //String

console.log(myStr.__proto__.__proto__); //Object

console.log(myStr.__proto__.__proto__.__proto__); //null

const myObj2 = {
  id: 12,
  title: "test",
  test: function () {
    console.log(this.id);
  },
};


console.log(myObj2.hasOwnProperty("title"));
console.log(myObj2.hasOwnProperty("toString"));
