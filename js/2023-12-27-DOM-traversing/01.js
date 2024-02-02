//console.log(document.body.children);

const childrenOfBody = document.body.children;
for (item of childrenOfBody) {
  console.log(item);
}


const selectedBoxEl = document.querySelector(".box:nth-of-type(2)");


const parentOfSelectedBoxEl = selectedBoxEl.parentElement;

console.log(parentOfSelectedBoxEl);


const siblingOfSelectedBoxEl = selectedBoxEl.nextElementSibling;


console.log(siblingOfSelectedBoxEl);


