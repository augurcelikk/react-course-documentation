for (let i = 0; i < 10; i++) {
  //statement
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  //statements
  console.log(i);

  if (i == 4) {
    break;
  }
}


let myArr = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday"];


for(let i = 0; i<myArr.length; i++ ){

    console.log( myArr[i]  );
}


let myProductsArr = [
    {title:"Hp laptop", price:14000, count:12},
    {title:"Ürün 2", price:14000, count:12},
    {title:"Ürün 3", price:14000, count:14},
    {title:"Ürün 4", price:14000, count:15},
]


// for döngüsü ve object destructuring ile ürünlerin title, price ve count değerlerini yazdırınız...

for( let i=0; i<myProductsArr.length; i++){
    /*
    console.log(myProductsArr[i].title, myProductsArr[i].price, myProductsArr[i].count );
    */

 //destructuring
    const { title, price, count } = myProductsArr[i];

    console.log(title, price, count);
}