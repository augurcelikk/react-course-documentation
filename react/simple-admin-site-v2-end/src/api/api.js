const BASE_API_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

export async function getProducts() {
  try {
    const response = await fetch(BASE_API_URL + "/products");

    if (!response.ok) {
      throw new Error("Smt went wrong...");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    return err;
  }
}

export async function login(){

  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(token);
    },3000);
  })

}
