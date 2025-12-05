import axios from "axios";

const BASE_URL = "http://localhost:5000/api/admin";

// Get all users (Admin)
export const getAllUsers = async (token) => {
  return await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Get all tickets (Admin)
export const getAllTicketsAdmin = async (token) => {
  return await axios.get(`${BASE_URL}/tickets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Assign ticket to support agent (Admin)
export const assignTicketAdmin = async (data, token) => {
  return await axios.post(`${BASE_URL}/assign`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
// Delete user or support by ID (Admin)
export const deleteUserAdmin = async (userId, token) => {
  return await axios.delete(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
