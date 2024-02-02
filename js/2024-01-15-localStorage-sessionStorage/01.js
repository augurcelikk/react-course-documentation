//Tarayıcının depolama alanaına string değerler saklayabiliriz.
//localStorage  ile data sakladığınızda kullanıcı datayı temi,zleyene kadar tarayıcı depolama alanında saklanır
localStorage.setItem("deneme", "1234");

const payload = {
  userRole: "Admin",
  userName: "Burak",
};

localStorage.setItem("payload", JSON.stringify(payload));

const btnEl = document.querySelector("button");

btnEl.addEventListener("click", () => {
  const storedPayload = localStorage.getItem("payload");

  const userName = JSON.parse(storedPayload).userName;

  alert(userName);
});


//Tarayıcının depolama alanaına string değerleri sessionStorage ojesinin kullanarak da saklayabiliriz.
//sessionStorage  ile data sakladığınızda kullanıcı sekmeyi kapattığında, taryıcıyı kapattığında data silinir.

sessionStorage.setItem("sessionKeyDeneme", "sessionValueDeneme12334");


sessionStorage.getItem();