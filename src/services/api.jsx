import axios from 'axios'

const api = axios.create({
  baseURL: "https://front-back-montain-backend-api.onrender.com",
  headers: { 'Content-Type': 'Application/json' }
})

export default api