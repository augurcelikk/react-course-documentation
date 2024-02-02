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
