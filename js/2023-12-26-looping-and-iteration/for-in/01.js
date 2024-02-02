/* for...in yapısını objenizin key'lerinde gezmek için kullanabilirsiniz...  */

const myObj = { a: 1, b: 2, c: 3 };

for (let key in myObj) {
  console.log(key, myObj[key]);
}

/*
const myArr = ["x", "d", "f", "o"];


for(let key in myArr){
  console.log(key, typeof key);
}
*/
