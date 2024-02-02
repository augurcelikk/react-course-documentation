// Array ( iterable ) : for of döngü yapısını iterable'lar ile kullanabilirsiniz. iterable'lar prototip objelerinde symbol.iterate methodu taşırlar. Bu sayede for of ile kullanılabilirler.
const arr1 = [1, 2, 3, 45, 67];

console.log(typeof arr1);
console.log(arr1);

for (let num of arr1) {
  console.log(num);
}

const myObj = "abcdef";

for (let item of myObj) {
  console.log(item);
}

const coordinates = [
  [3.455, 5.4545],
  [8.455, 5.4545],
  [9.455, 6.4545],
  [3.455, 2.4545],
  [1.455, 0.4545],
  [23.455, 15.4545],
];

for (const [lat, long] of coordinates) {
  console.log(lat, long);
}

for (let coordinate of coordinates) {
  const [lat, long] = coordinate;
  console.log(lat, long);
}

for (let coordinate of coordinates) {
  console.log(coordinate[0], coordinate[1]);
}
