/*  Promise  */

/* pending state */

/* fullfilled */

/* rejected  */

const isRainy = false;

const iWillBeThereShortly = new Promise((resolve, reject) => {
  if (!isRainy) {
    resolve("Her zaman dakik bir insan olmuşumdur");
    console.log("resolved");
  }

  reject("İstanbul trafiği, malumunuz!!!");
});

//Promise object's then and catch  methods

iWillBeThereShortly
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

const test = 3;

// returning a promise from a function

function loadAllData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Bilinmeyen bir şekilde datayı yükleyemedik");
      //resolve("Bütün data yüklendi :)");
    }, 2000);
  });
}

loadAllData()
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

// throwing and catching an error

function loadAllProducts() {
  return new Promise((resolve, reject) => {
    throw new Error("Büyük bir hata oluştu");
  });
}

loadAllProducts().catch((err) => {
  console.log(err);
});

const frmQuizEl = document.getElementById("frm-quiz");

frmQuizEl.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const userAnswer = document.querySelector("input[name='user-answer']").value;

  checkAnswer(userAnswer)
    .then((msg) => {
      alert(msg);
    })
    .catch((err) => {
      alert(err);
    });
}

function checkAnswer(userAnswer) {
  const dummyServerResponse = { status: "wrong answer", ok: false };

  return new Promise((resolve, reject) => {
    if (!dummyServerResponse.ok) {
      throw new Error("Beklenmeyen bir sunucu hatası oluştu");
    }

    if (dummyServerResponse.status === "success") {
      resolve("Tebrikler");
    }

    if (dummyServerResponse.status === "wrong answer") {
      reject("Hatalı cevap");
    }
  });
}
