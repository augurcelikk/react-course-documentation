const API_BASE_URL = "https://638a06e04eccb986e8a1804b.mockapi.io";

async function getTodos() {
  const response = await fetch(`${API_BASE_URL}/todos`);

  if (!response.ok) {
    throw new Error("Sunucu hatası");
  }

  const data = await response.json();

  return data;
}
async function getTodo(id) {
  const response = await fetch(`${API_BASE_URL}/todos/${id}`);

  if (!response.ok) {
    throw new Error("Sunucu hatası");
  }

  const data = await response.json();

  return data;
}
async function updateTodo(id, data) {
  const fetchOptions = {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${API_BASE_URL}/todos/${id}`, fetchOptions);

  if (!response.ok) {
    throw new Error("Sunucu hatası");
  }

  const data = await response.json();

  return data;
}

async function addTodo(data) {
  const fetchOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${API_BASE_URL}/todos`, fetchOptions);

  if (!response.ok) {
    throw new Error("Sunucu hatası");
  }

  const data = await response.json();

  return data;
}

async function deleteTodo(id) {
    const fetchOptions = {
        method: "DELETE",
      };
    
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, fetchOptions);
    
      if (!response.ok) {
        throw new Error("Sunucu hatası");
      }
    
      const data = await response.json();
    
      return data;

}
