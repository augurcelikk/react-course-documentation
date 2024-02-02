let userName = "Burak";

console.log(userName[0]);

//-- immutability ---
userName[0] = "C"; //ilk index üzerindeki elemanı değiştiremiyoruz

console.log(userName[0]);

let userName2 = userName;

userName2 = "Ahmet";

//userName ---> Burak

let city = "İstanbul";

let lengthOfCityStr = city.length;

console.log(lengthOfCityStr);

/* *** string methods *** */

//trim()
let inputValue = "    Deneme  ";

let trimmedInputValue = inputValue.trim();

console.log(trimmedInputValue, inputValue);

//toLowerCase()
let myCity = "Ankara";

let modifiedMyCity = myCity.toLowerCase();

//toLocaleLowerCase()
console.log(modifiedMyCity, myCity);

let mySentence = "İstanbul şimdi, öĞlen güneşi iÇindedir";

let modifiedMySentence = mySentence.toLocaleLowerCase("tr");

console.log(modifiedMySentence === "istanbul şimdi, öğlen güneşi içindedir");

//toUpperCase()
let country = "Turkey";
let modifiedCountry = country.toUpperCase(); //TURKEY

let mySentence2 = "İstanbul şimdi, öĞlen güneşi iÇindedir";

let modifiedMySentence2 = mySentence2.toLocaleUpperCase("tr");

console.log(modifiedMySentence2);

//slice()
let userAnswer = "Türkiye";

//0. indexden 2. indexe kadar olan bir dilim
let slice1 = userAnswer.slice(0, 2); //Tü

//2. indexden sonuna kadar bir dilim
let slice2 = userAnswer.slice(2);

//
let slice3 = userAnswer.slice(-4, -2); //ki

let slice4 = userAnswer.slice(-3); // iye

console.log(slice1, slice2, slice3, slice4, userAnswer);

//replace()
let paragraph = "Lorem lorem ipsum dolores";

let replacedParagraph = paragraph.replace("dolores", "deneme");

console.log(replacedParagraph); //"Lorem lorem ipsum deneme"

//replaceAll()
let paragraph2 = "Lorem lorem ipsum forbidden, forbidden, deneme, forbidden";
let replacedParagraph2 = paragraph2.replaceAll("forbidden", "");

console.log(replacedParagraph2); //Lorem lorem ipsum , , deneme,

//replace() regexp kullanarak

let paragraph3 = "Lorem lorem deneme Deneme, deneme, asd lorem";

let replacedParagraph3 = paragraph3.replace(/deneme/gi, "111");

console.log(replacedParagraph3);



//split()
let daysStr = "Pazartesi, Salı, Çarşamba, Cuma";

let daysArr = daysStr.split(",");

console.log( daysArr);

//daysStr.toLocaleLowerCase().split(",");

console.log( daysStr.toLocaleLowerCase().split(",") );




//includes()
let paragraph4 = "lorem lorem ipsum deneme ipsum";

console.log( paragraph4.includes("ipsum") );//true
console.log( paragraph4.includes("ipsumx") );//false

//indexOf()
console.log( paragraph4.indexOf("ipsumx") ); //-1
console.log( paragraph4.indexOf("ipsum") ); //12

//lastIndexOf()
console.log(paragraph4.lastIndexOf("ipsum") ); //25



