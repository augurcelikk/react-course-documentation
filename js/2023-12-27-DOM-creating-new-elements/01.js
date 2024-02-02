// --- innerHTML

document.body.innerHTML = "<div><p>Hello</p></div>";

document.body.innerHTML = "<article><div>Hello</div></article>";

// dökümanın createElement metodunu kullanarak yeni eleman oluşturmak

const myNewDivEl = document.createElement("div");

myNewDivEl.textContent = "Hello i am the new div dude here!";

myNewDivEl.style.border = "4px solid black";

myNewDivEl.style.width = "100px";
myNewDivEl.style.height = "100px";

document.body.append(myNewDivEl);

function createALotOfVividBox(count = 100) {
  const vividColorsArr = ["purple", "green", "blue", "aqua", "yellow", "red"];

  for (let i = 0; i < count; i++) {
    const randVividColorIndex = Math.floor(
      Math.random() * vividColorsArr.length 
    );

    const vividBoxEl = document.createElement("div");
    vividBoxEl.style.border = "6px solid black";
    vividBoxEl.style.backgroundColor = vividColorsArr[randVividColorIndex];
    vividBoxEl.style.width = "100px";
    vividBoxEl.style.height = "100px";
    vividBoxEl.textContent = `Ben ${i + 1}. kutu`;
    document.body.append(vividBoxEl);
  }
}

createALotOfVividBox(120);
