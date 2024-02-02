/* single threaded, non blocking, asynchronous */

/* Senkron */

function f1() {
  // Some code
}
function f2() {
  f1();
}
function f3() {
  f2();
}
f3();

/* Asenkron */

function func1() {
  console.log("func1");
}

function func2() {
  console.log("func2");
}

function main() {
  func1();

  //browser api callback fonksiyonları macro task kuyruğuna alınır
  setTimeout(() => {
    console.log("I am from browser api set timeout");
  }, 0);

  //web api event listener callback fonksiyonları macro task kuyruğuna alınır
  document.querySelector("button").addEventListener("click", () => {
    console.log("clicked");
  });

  new Promise((resolve, reject) => {
    resolve("Ben resolved");
  }).then((msg) => {
    console.log(msg);
  });

  func2();
}

main();
