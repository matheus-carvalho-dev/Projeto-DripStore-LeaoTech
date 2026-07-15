const API_URL = "http://localhost:3000/api";

export async function registerUser(data) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao cadastrar");
  }

  return response.json();
}
