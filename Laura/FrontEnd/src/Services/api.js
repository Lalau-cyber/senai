// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // Altere para a porta do seu servidor Node
});

export default api;