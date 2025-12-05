import axios from "axios";

const BASE_URL = "https://beta-1-b3zx.onrender.com";

// Register user
export const registerUser = async (userData) => {
  return await axios.post(`${BASE_URL}/register`, userData);
};

// Login user
export const loginUser = async (userData) => {
  return await axios.post(`${BASE_URL}/login`, userData);
};

// Admin registering support/admin
export const registerAdminUser = async (userData, token) => {
  return await axios.post(`${BASE_URL}/register/admin`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
