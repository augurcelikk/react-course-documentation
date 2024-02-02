/* rest operator ...  */

function testing(a, b, ...rest) {
  console.log(a, b, rest);
}

testing(3, 4, "a", "b", "c", "d", "e");

const testing2 = (a, b, ...kalanlar) => {
  console.log(a, b, kalanlar);
};

testing2(1, 2, 3, 4, 5, 6, 7, 8);
