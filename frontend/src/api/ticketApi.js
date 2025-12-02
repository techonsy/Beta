// /src/api/ticketApi.js
import axios from "./axiosInstance";

export const getMyTickets = () =>
  axios.get("/tickets/me").then((res) => res.data);

export const createTicket = (data) =>
  axios.post("/tickets", data).then((res) => res.data);

export const getTicketById = (id) =>
  axios.get(`/tickets/${id}`).then((res) => res.data);

export const addComment = (id, text) =>
  axios.post(`/tickets/${id}/comments`, { text }).then((res) => res.data);
