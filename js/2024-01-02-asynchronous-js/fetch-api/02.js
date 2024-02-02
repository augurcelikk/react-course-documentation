//kullanıcı getir formu submit edildiğinde "API_BASEURL/Users/:id" endpoint kullanılarak tek kullanıcı datası alınacak
// ve detaylı kullanıcı bilgisi formun içerisindeki p elemanına yazdırılacak

const frmGetUserEl = document.getElementById("frm-get-user");
const inpUserIdEl = document.querySelector("input[name='user-id']");
const userInfoPEl = document.getElementById("selected-user");

frmGetUserEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  getUserDataById(inpUserIdEl.value)
  .then((data) => {
    console.log(data);
    writeUserDataToHtmlEl(data);
  });
}

function test() {
  console.log("1");

  setTimeout(() => {
    console.log("x");
  }, 0);

  console.log("2");
}

test();

/*

function getUserDataById(userId) {
  let userData;

  //response
  fetch(`${API_BASEURL}/Users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu Hatası");
      }
      //response json datasını al
      return response.json();
    })
    .then((data) => {
      console.log(data);
      userData = data;
    });

  return userData;
}

*/

function getUserDataById(userId) {
  //response
  return fetch(`${API_BASEURL}/Users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu Hatası");
      }
      //response json datasını al
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}

function writeUserDataToHtmlEl(userDataObj) {
  const { firstName, lastName, id, isPremium } = userDataObj;
  userInfoPEl.textContent = `Kullanıcı adı:${firstName}, Premium Kullanıcı: ${
    isPremium ? "Evet" : "Hayır"
  }`;
}
