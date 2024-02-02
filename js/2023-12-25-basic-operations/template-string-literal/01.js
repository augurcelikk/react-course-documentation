const pi = 3.1415;
let radius = 12;

let circumferenceMsg =
  "Çember çapı: \n" + radius * 2 + " olan çemberin çevresi" + 2 * pi * radius;

console.log(circumferenceMsg);

// template string literal

//backtick  ``
let circumferenceMsg2 = `Çember çapı: 
${radius * 2} 
olan çemberin çevresi 
${2 * pi * radius} `;

console.log(circumferenceMsg2);

let basketItemPrice = 14500;
let taxElectronics = 0.36;
let taxIncluded;
let basketMsg = `${basketItemPrice} kdv'li fiyatı ${(taxIncluded =
  basketItemPrice * taxElectronics + basketItemPrice)}`;


  console.log( basketMsg, taxIncluded );


