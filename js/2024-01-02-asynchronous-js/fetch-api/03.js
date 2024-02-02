//fetch options - method:"POST"

/*
const btnAddNewUser = document.getElementById("btn-add-new-user");


btnAddNewUser.addEventListener("click", handleAddNewUser)
*/

function handleAddNewUser(e) {
  //console.log("testing, testing");
  const jsUserDataObj = {
    firstName: "Deniyorum",
    lastName: "Testing",
    isPremium: false,
  };

  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(jsUserDataObj),
  };

  fetch(`${API_BASEURL}/Users`, fetchOptions)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
