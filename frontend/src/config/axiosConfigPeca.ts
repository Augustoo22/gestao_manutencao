import axios from "axios";

// Defina as URLs possíveis de sua API
const apiURLs = {
  port6060: "http://localhost:6060", // peca
  // port8080: "http://localhost:8080", // carro
  // port9090: "http://localhost:9090", // manutencao
  // port7070: "http://localhost:7070", // equipe
  // port5050: "http://localhost:5050", // usuario
};

// Aqui você pode alterar a URL base dependendo da porta desejada
const selectedPort = "port6060";
const api = axios.create({
  baseURL: apiURLs[selectedPort], // Altere dinamicamente com a porta desejada
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptores para adicionar lógica personalizada
api.interceptors.request.use(
  (config) => {
    // Exemplo: Adicionar token de autenticação, se necessário
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Erro na resposta Axios:", error.response);
    return Promise.reject(error);
  }
);

export default api;
