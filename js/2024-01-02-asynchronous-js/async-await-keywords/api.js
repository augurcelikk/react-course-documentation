const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

//async fonksiyonları Promise döndürürler

async function getUsers() {
  //await keyword async function içerisinde kullanılabilir

  const response = await fetch(`${API_BASE_URL}/Users`);

  if (!response.ok) {
    throw new Error("Ters giden bir şeyler var!!!");
  }

  const data = await response.json();

  return data;
}

async function doSmtWithUsersData() {
  const usersData = await getUsers();

  console.log(usersData);
}

doSmtWithUsersData();

function doSmtWithUsersData() {
  getUsers()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
