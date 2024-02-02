//fetch options - method:"DELETE"

function handleDeleteUser() {
  const fetchOptions = {
    method: "DELETE",
  };

  fetch(`${API_BASEURL}/Users/13`, fetchOptions)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
