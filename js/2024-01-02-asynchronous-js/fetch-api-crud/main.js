const usersListEl = document.getElementById("users-list");

function listAllUsers() {
  getUsers()
    .then((data) => {
      createDomUsersList(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createDomUsersList(usersData) {
 
    emptyDomUserList();

  for (let user of usersData) {
    const liEl = document.createElement("li");
    const btnDeleteEl = document.createElement("button");

    btnDeleteEl.textContent = "sil";
    btnDeleteEl.dataset.id = user.id;
    liEl.textContent = user.firstName;
    liEl.append(btnDeleteEl);

    usersListEl.append(liEl);
  }
}

function emptyDomUserList(){
 //Delete current list elements begin
 const children = usersListEl.children;

 while (children[0]) {
   children[0].remove();
 }
 //Delete current list elements end
}

usersListEl.addEventListener("click", (e) => {
  const userId = e.target.dataset.id;
  //alert(e.target.dataset.id);
  deleteUser(userId)
    .then((data) => {
      console.log(data);
      listAllUsers();
    })
    .catch((err) => {
      console.log(err);
    });
});

listAllUsers();
