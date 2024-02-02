const BASE_API_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";
import axios from 'axios';


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


export async function login(credentials) {
  // Backend'e login isteği gönder
  return await axios.post('http://localhost:9090/api/v1/auth/login', credentials)
    .then(response => {

      localStorage.setItem('token',response?.data.token)
      // Backend'den gelen token'ı döndür
      return response.data.token;
    });
}  

