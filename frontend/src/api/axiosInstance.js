<<<<<<< Updated upstream
// /src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true, // enable cookies/token if backend uses them
});

// Add JWT token automatically to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // token saved on login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired / not valid
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
=======
import axios from "axios";

const api =axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials :true,
})

api.interceptors.request.use((config)=>{
    const token=localStorage.getItem("token")

    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }

    return config;
})

export default api;
>>>>>>> Stashed changes
