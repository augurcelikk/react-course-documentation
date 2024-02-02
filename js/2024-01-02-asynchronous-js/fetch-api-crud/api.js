const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

//Get    getUsers

function getUsers() {
  return fetch(`${API_BASE_URL}/Users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu hatası ");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//Get   getUser

function getUser(userId) {
  return fetch(`${API_BASE_URL}/Users/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu hatası ");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//DELETE  deleteUser

function deleteUser(userId) {
  const fetchOptions = {
    method: "DELETE",
  };

  return fetch(`${API_BASE_URL}/Users/${userId}`, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu hatası ");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//POST  addNewUser

function addNewUser(userData) {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify(userData),
  };

  return fetch(`${API_BASE_URL}/Users}`, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu hatası ");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

//PUT  updateUser
function updateUser(userId, userData) {
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify(userData),
  };

  return fetch(`${API_BASE_URL}/Users/${userId}}`, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Sunucu hatası ");
      }

      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
