/* 1- function declaration statement */
function startPlayer(delay) {
  //statement
}

startPlayer(100);

/* 2- anonymous function expression */

const stopPlayer = function (delay) {
  //statement 1;
  //statement 2;
};

stopPlayer(50);

/* ***  3- Annoymous arrow function expression *** */

const pausePlayer = (delay) => {
  //statement 1;
  //statement 2;
};

pausePlayer(20);

// --- Kullanıcının ad ve soyadını alıp, bir kullanıcı karşılama mesajı döndüren fonksiyonu anonymous function expression olarak yazınız.

const messageToUser = function (ad, soyad) {
  return `Sayın ${ad} ${soyad} merhaba`;
};

console.log(messageToUser("Burak", "Kuyucaklı"));

//--- Sepet tutarını ve kdv miktarını alıp kdv'li fiyatı kullanıcıya mesaj olarak verebilecek fonksiyonu anonymous arrow function expression olarak yazınız. Fonksiyon çağrılırken kdv miktarı gönderilmezse default olarak 0.18 kullanın

const basketMessage = (basketAmount, tax) => {
  console.log(tax);

  if (tax === undefined) {
    tax = 0.18;
  }

  return basketAmount + basketAmount * tax;
};


const myMaximalArrowFunc = (p1)=>{ 
  //statement1
  //statement2
  return p1 * 2;
 }

const myMinimalArrowFunc1 =  p1 =>{ return p1 * 2 }; 

const myMinimalArrowFunc2 =  p1 => p1 * 2; 



const double = n=>n *2;


const greeting = (lastName, firstName)=>`Merhaba ${lastName} ${firstName}`;


const greeting2 = (lastName, firstName)=>{

  //statement1
  //statement2
  return `Merhaba ${lastName} ${firstName}`;

}














console.log(basketMessage(1000, 0.36));

console.log(basketMessage(1300));

//iki sayı alıp, çarpımlarını döndüren fonksiyonu, declaration statement olarak yazınız. Sayı olarak gönderilen parametrelerin tiplerini kontrol edin. Herhangi biri sayı değilse fonksiyonumuz false değeri döndürsün.

function multiply(a1, a2) {
  //console.log(typeof typeof a1);
  if (typeof a1 !== "number" || typeof a2 !== "number") {
    return false;
  }

  return a1 * a2;
}

console.log(multiply(12, "6"));

console.log(typeof typeof true);
