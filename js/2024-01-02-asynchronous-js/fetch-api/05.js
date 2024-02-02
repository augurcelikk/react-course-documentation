//fetch options - method:"PUT"   //data güncellemek

function handleUpdateUser() {
  const userEditedData = {
    firstName: "Kadir",
  };

  const fetchOptions = {
    method: "PUT",
    headers: { "Content-type": "Application/json" },
    body: JSON.stringify(userEditedData),
  };

  fetch(`${API_BASEURL}/Users/16`, fetchOptions)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
