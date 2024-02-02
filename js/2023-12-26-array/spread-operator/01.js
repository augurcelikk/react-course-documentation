// spread operator kullanarak ... bir diziyi kopyalamak

const arr1 = [1, 2, 3, 4];

const arr2 = [...arr1];

const letters = ["a", "b", "c", "d", "e"];

const numbers = [1, 2, 3, 4];

const alphaNumericArr = [...letters, ...numbers];

const myArr = [...numbers, 1, 2, 3, 4, ...letters];

//

const students = [
  { id: 1, firstName: "Burak", score: 45 },
  { id: 1, firstName: "Test", score: 75 },
  { id: 1, firstName: "Deneme", score: 36 },
];

const copiedStudents = [...students];

console.log(students === copiedStudents);



