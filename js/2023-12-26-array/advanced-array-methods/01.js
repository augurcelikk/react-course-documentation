const userListEl = document.getElementById("user-list");

//foreach - argüman olarak verğiniz callback function'ı çağırırken , üzerinde çalıştığı dizinin elemanını, eleman index'ini ve üzerinde çalıştığı diziyi gönderir.
const userNamesArr = ["Burak", "Jeff", "john", "Sarah"];

userNamesArr.forEach(testCallback);

/*
function testCallback(item, index, arr) {
  console.log(item, index, arr);

  const userItemEl = document.createElement("li");
  userItemEl.textContent = item;
  userListEl.append(userItemEl);
}
*/

function testCallback(userName, index, arr) {
  console.log(userName, index, arr);

  const userItemEl = document.createElement("li");
  userItemEl.textContent = userName;
  userListEl.append(userItemEl);
}

userNamesArr.forEach(greetUsers);

function greetUsers(userName, index, arr) {
  console.log(`Merhaba ${index} numaralı kullanıcımız, ${userName}`);
}

const DATA_PRODUCTS = [
  { id: 3, title: "laptop1", price: 12000, count: 12 },
  { id: 4, title: "laptop2", price: 12500, count: 12 },
  { id: 5, title: "laptop3", price: 12800, count: 14 },
  { id: 6, title: "laptop4", price: 12900, count: 12 },
];

const DATA_ALPHANUMERIC = [1, "a", "x", 2, "u"];

/* ---  A CASE STUDY --- */
//html tarafında bir product-list ul'si olsun
//products datasında foreach ile çalışarak her ürünü listeye yazdıralım
//ürünler tıklandığında kendi id ve fiyatlarını gösterebilsin
const productListEl = document.getElementById("product-list");

productListEl.addEventListener("click", handleProductClick);

DATA_PRODUCTS.forEach(createProductItemEl);

function createProductItemEl(productObj, index, arr) {
  const { id, title, price, count } = productObj;
  const productItemEl = document.createElement("li");

  productItemEl.textContent = `Ürün adı: ${title}, fiyat:${price}`;

  productListEl.append(productItemEl);
}

function handleProductClick(e) {
  const { target } = e; //target olayı tetikleyen cursor'ın üzerinde olduğu asıl eleman
  alert(target.textContent);
}

//filter -> [ 1, "a" , "x" ,2, "u"  ]
const onlyNums = DATA_ALPHANUMERIC.filter(filterNums);

function filterNums(item, index, arr) {
  //eğer filtreyi geçsin istiyorsan true döndürebilirsin
  if (typeof item === "number") {
    return true;
  }
  //false döndürdüğünde item filtreyi geçemez
  return false;
}

const onlyNums2 = DATA_ALPHANUMERIC.filter((item) => typeof item === "number");
/* ********************************** Case 1 Start */
// -  CASE - Ünlüler listesi. arayüzde bir girdi kutusu olacak. Girdi kutusuna ünlü, sevilen birinin ismi yazılabilsin. Ekle butonu tıklandığında arayüzdeki listeye ünlü adı eklenerek gösterilecek.
let famousPeopleList = [];

const frmAddFamousNameEl = document.getElementById("frm-add-famous-name");
const famousListEl = document.getElementById("famous-list");

/*
frmAddFamousNameEl.click = (e) => {
  e.preventDefault();
  alert("xxx");
};
*/

frmAddFamousNameEl.addEventListener("submit", handleAddFamous);

function handleAddFamous(e) {
  e.preventDefault();
  const famousNameInpEl = document.querySelector("input[name='famous-name']");
  const famousNameVal = famousNameInpEl.value;

  //alert(famousNameVal);

  //id:unique, name

  const famousObj = { id: crypto.randomUUID(), famousName: famousNameVal };

  famousPeopleList.push(famousObj);

  //console.log(famousPeopleList);
  createFamousDomListItems(famousPeopleList);

  famousNameInpEl.value = "";
  famousNameInpEl.focus();
}

function createFamousDomListItems(list) {
  //famousListEl içeriğini temizle
  famousListEl.innerHTML = "";
  /*
  const items = document.querySelectorAll("#famous-list li");
  for(let item of items){
    item.remove();
  }
  */

  list.forEach((item) => {
    const el = document.createElement("li");
    const btnDelete = document.createElement("button");
    el.textContent = item.famousName;
    btnDelete.textContent = "sil";
    btnDelete.type = "button";
    btnDelete.dataset.id = item.id;
    btnDelete.addEventListener("click", handleDeleteFamousItemEl);
    el.append(btnDelete);
    famousListEl.append(el);
  });
}

function handleDeleteFamousItemEl(e) {
  const { target } = e;

  const id = target.dataset.id;

  //[  {id:1, name:"deneme"}, {id:2, name:"test"} ]
  //filter

  famousPeopleList = famousPeopleList
    .slice()
    .filter((famousPerson) => famousPerson.id !== id);

  createFamousDomListItems(famousPeopleList);
}

//1- kullanıcı girdi kutusuna isim yazıp ekle dediğinde, yazdığı değeri famousPeople liste ekelesek

//["burak"] ->
//[ {id:"13232 434" name:"burak" }  ]

//createFamousPeopleListElements(famousPeople); //DOM elemanlarına çevirecek

/* ********************************** Case 1 End */

//map
const nums = [1, 2, 3, 4, 5];

const doubles = nums.map((item, index, arr) => {
  return item * 2;
});

console.log(doubles);

const evenNums = nums.map((num, index, arr) => {
  if (num % 2 === 0) {
    return num;
  }

  //return undefined;
});

console.log(evenNums);

const domElObjList = [
  { elementName: "p", content: "lorem lorem lorem" },
  { elementName: "h2", content: "lorem lorem isum" },
];

//[  "<p>lorem lorem lorwem</p>", "<h2>lorem lorem ipsum</h2>"  ]

const domElStrList = domElObjList.map(
  (el) => `<${el.elementName}>${el.content}</${el.elementName}>`
);

console.log(domElStrList);

//reduce
const debt = 5000;
const priceList = [12000, 23000, 4500];

//reduce metoduna birinci argüman olarak callback, ikinci argüman olarak initial değer gönderiyoruz.
const totalPrice = priceList.reduce(calculateTotal, debt);

function calculateTotal(accumulator, current, index, arr) {
  //1. iteration accumulator 5000
  //1. iteration current 12000

  //2. iteration accumulator 17000
  //2. iteration current 23000

  //3. iteration accumulator 40000
  //3. iteration current 4500

  console.log(accumulator, current, index, arr);

  return accumulator + current; //17000, 40000, 44500
}

console.log(totalPrice);

const user2PriceList = [20000, 40000, 5000];

const totalPrice2 = user2PriceList.reduce(calculateTotal2);

function calculateTotal2(accumulator, current, index, arr) {
  //1. iteration accumulator 20000
  //1. iteration current 40000

  //2. iteration accumulator 60000
  //2. iteration current 5000

  return accumulator + current;
}

console.log(totalPrice2);

const user3Inventory = [
  { id: 1, pTitle: "laptop", price: 20000 },
  { id: 2, pTitle: "shirt", price: 2000 },
  { id: 3, pTitle: "book", price: 300 },
  { id: 4, pTitle: "swatch", price: 22000 },
];

const totalPrice3 = user3Inventory.reduce(
  (acc, current) => acc + current.price,
  0
);

console.log(totalPrice3);

//findIndex
const user4Inventory = [
  { id: 1, title: "Ürün1", price: 12000 },
  { id: 2, title: "Ürün2", price: 14000 },
  { id: 3, title: "Ürün3", price: 15000 },
  { id: 4, title: "Ürün4", price: 18000 },
  { id: 5, title: "Ürün5", price: 28000 },
];

//fiyatı 14000'den fazla olan ilk ürün index'ini getir
const hasPromotionIndex = user4Inventory.findIndex((product, index) => {
  if (product.price > 14000) {
    return true;
  }
});

console.log(hasPromotionIndex);

//findLastIndex
const hasPromotionLastIndex = user4Inventory.findLastIndex((product, index) => {
  if (product.price > 14000) {
    return true;
  }
});

console.log(hasPromotionLastIndex);

//find
const hasPromotionProduct = user4Inventory.find((product, index) => {
  if (product.price > 14000) {
    return true;
  }
});

console.log(hasPromotionProduct);

//findLast

const hasPromotionLastProduct = user4Inventory.findLast((product, index) => {
  if (product.price > 14000) {
    return true;
  }
});

console.log(hasPromotionLastProduct);

//every - dizinin tüm elemanları verdiğim testi geçerse true döndürür
const myArr1 = [1, 2,3,"x", 4];

const isNumberArr = myArr1.every(  (item)=>typeof item === "number"     );

console.log(isNumberArr)


//some - dizinin sadece bir elemanı bile verdiğim testi geçerse true döndürür
const newUsers = [
    {id:12, userName:"Deneme", userStatus:"online"},
    {id:13, userName:"Deneme", userStatus:"offline"},
    {id:14, userName:"Deneme", userStatus:"offline"},
]


const isSomeoneOnline = newUsers.some( user=>user.userStatus === "online");

console.log( isSomeoneOnline);

//sort - sıralama için kullanyoruz
const nums2 = [3, 2, 8, 101, 123, 11000];

const sorted = nums2.sort();

console.log(sorted, nums2);


const nums3 = [3, 2, 8, 101, 123, 11000 ];

nums3.sort( (a, b)=>{

    if(a < b ){
        return -1;
    }

    if(a > b){
        return 1;
    }

    return 0;
}  );

console.log(nums3);


const students = [
    {id:1, firstName:"Burak", score:72},
    {id:12, firstName:"Deneme", score:56},
    {id:14, firstName:"Test", score:25},
    {id:5, firstName:"Lorem", score:12},
    {id:7, firstName:"Ipsum", score:48},
]

//asıl diziyi mutasyona uğratmadan, puanlarına göre sıralanmış öğrenci listesi oluşturunuz...


//copy students array
const studentsCopy = [];


for( let student of students){

    studentsCopy.push(student);
}

//copy students array
const studentsCopy2 = students.slice();

studentsCopy2.sort(  sortAscending );

function sortAscending(a, b){
    if(a.score < b.score){
        return -1;
    }

    if(a.score > b.score){
        return 1;
    }

    return 0;
}


console.log(  students, studentsCopy2);

