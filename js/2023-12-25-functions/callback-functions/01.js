//Bir fonksiyona argüman olarak gönderilen ve gönderildiği fonksiyon tarafından çağrılan fonksiyonlar callback fonksiyon olarak adlandırılırlar.

// myFunc(11, 12 );

//myFunkyFunc( callbackFunc );

function emergency(willBeCalled) {
  willBeCalled();
}

function call112() {
  console.log("112 aranıyor");
}

function call911() {
  console.log("911 aranıyor");
}

emergency(call112); //function's identifier name as an argument

emergency(call911);

// örnek (  anonymous function expression as a callback   )

function emergency2(willBeCalled) {
  willBeCalled();
}

emergency2(function () {
  console.log("112 aranıyor ***");
}); //anonymous function expression as argument

// örnek (  anonymous arrow function expression as a callback   )

function emergency3(willBeCalled) {
  willBeCalled();
}

emergency3(() => {
  console.log("Houston aranıyor!!!");
});

//bir fonksiyon yaz: argüman olarak dizi gönderebileyim ( [1,3,6]),  dizideki sadece çift sayıları döndürebilsin

function filterEvenNumbers(arr) {
  const resArr = [];

  for (num of arr) {
    if (num % 2 === 0) {
      resArr.push(num);
    }
  }

  return resArr;
}

console.log(filterEvenNumbers([1, 3, 6, 8]));

//filter faunction params: array ve callback function
function filter(arr, testFunc) {
  const resArr = [];
  for (item of arr) {
    if (testFunc(item)) {
      resArr.push(item);
    }
  }

  return resArr;
}

filter([1, 13, 16, 18], (num) => {
  return num > 2 === 0;
});




filter( [14, 18, 3],  function(num){   return num>3; }   );



function lessThan10(num){
    return num < 10;
}


filter( [12, 3, 5],  lessThan10 );