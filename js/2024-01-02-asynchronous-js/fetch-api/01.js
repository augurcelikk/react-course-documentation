

/* fetch is a function that returns a promise object */

fetch("https://github.com/api/users ")
  .then((data) => {
    console.log("success", data);
  })
  .catch((err) => {
    console.log("Hatalar", err);
  });

fetch(`${API_BASEURL}/Users`)
  .then((response) => {
    //console.log(response);
    if (!response.ok) {
      throw new Error("Sunucu hatası");
    }

    // json() metodu bir promise döndürür
    return response.json();
  })
  .then((data) => {
    //console.log(typeof data, data);
    generateUsersList(data);
  })
  .catch((error) => {
    console.log(error);
  });

function generateUsersList(usersData) {
  const ulEl = document.createElement("ul");

  for (const user of usersData) {
    const liEl = document.createElement("li");
    liEl.textContent = user.firstName + " id:" + user.id;
    ulEl.append(liEl);
  }

  document.body.append(ulEl);
}
