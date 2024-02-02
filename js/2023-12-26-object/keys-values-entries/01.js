const myObj = {
  color: "red",
  shape: "circle",
  weight: "24kg",
  move: function () {
    console.log(`${this.shape} is moving`);
  },
};


//Objenin keylerine bakabilmek 1

for ( let item in myObj ){

  console.log(item);
}


//Objenin keylerine bakabilmek 2 Object.keys()
const keysOfMyObj = Object.keys(myObj); //Array of keys

console.log(keysOfMyObj);

for (key of keysOfMyObj) {
  console.log(key);
}


//Objenin key'lerinin value'larına bakabilmek 1

const valuesOfMyObj = Object.values(myObj);

console.log(valuesOfMyObj); // ["red", "circle", "24kg", function] (4)



//Objenin key'lerini ve  value'larını dizi olarak almak
const entriesOfMyObj = Object.entries(myObj);

console.log(entriesOfMyObj ); //[["color", "red"], ["shape", "circle"], ["weight", "24kg"], Array] (4)

for ( let [ key, value ] of entriesOfMyObj){
    console.log(key, value);
}