/* 

window object
      -- document object


*/

window.console.log("hello window");

console.log(window.document);

console.log(window.document.body);

//
document.title = "Merhaba dünya";

//selecting elements by id
const buttonEl = document.getElementById("the-button");

console.log(typeof buttonEl);

//changing text content
buttonEl.textContent = "Buton olduğuna emin misin?";

//selecting elements by
const buttonEls = document.getElementsByTagName("button");

console.log(buttonEls, typeof buttonEls);

for (btn of buttonEls) {
  console.log(btn);
}

//selecting via css selector (querySelector)

const primaryButtonEl = document.querySelector(".btn-primary.btn-small");

//changing color style
primaryButtonEl.style.color = "red";

//selecting via css selector (querySelectorAll)

const boxElsList = document.querySelectorAll("body div.box");

console.log(boxElsList, typeof boxElsList);

for (box of boxElsList) {
  console.log(box);
  box.style.backgroundColor = "red";
}
