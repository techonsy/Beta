import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // your backend base URL

// -------------------- User APIs --------------------
// Create a new ticket
export const createTicket = async (ticketData, token) => {
  return await axios.post(`${BASE_URL}/tickets/create`, ticketData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Get my tickets
export const getMyTickets = async (token) => {
  return await axios.get(`${BASE_URL}/tickets/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Get ticket by ID
export const getTicketById = async (ticketId, token) => {
  return await axios.get(`${BASE_URL}/tickets/${ticketId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add comment (User)
export const addUserComment = async (ticketId, text, token) => {
  return await axios.post(
    `${BASE_URL}/tickets/comment`,
    { ticketId, text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// -------------------- Support APIs --------------------

// Get tickets assigned to the support agent
export const getAssignedTickets = async (token) => {
  return await axios.get(`${BASE_URL}/support/tickets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add comment as support
export const addSupportComment = async (ticketId, text, token) => {
  return await axios.post(
    `${BASE_URL}/support/comment`,
    { ticketId, text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// Update status (Support)
export const updateStatusSupport = async (ticketId, status, token) => {
  return await axios.post(
    `${BASE_URL}/support/status`,
    { ticketId, status },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

// -------------------- Admin APIs --------------------

// Get all tickets (Admin)
export const getAllTicketsAdmin = async (token) => {
  return await axios.get(`${BASE_URL}/admin/tickets`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Assign ticket to support agent (Admin)
export const assignTicketAdmin = async (data, token) => {
  return await axios.post(`${BASE_URL}/admin/assign`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};