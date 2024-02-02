const linkEl = document.querySelector("a");

linkEl.addEventListener("click", (e) => {
  e.preventDefault(); //hyperlink elemanının default davranışını engelle

  alert(e.target.getAttribute("href"));
});

const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault(); //form elemanının default davranışını engelle

  alert("Form ile ilgilenme işi bende");
}
