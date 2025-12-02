import express from "express";
import {
  createTicket,
  getMyTickets,
  getAllTickets,
  assignTicket,
  updateStatus,
  addComment,
} from "../controllers/ticketController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// USER
router.post("/create", protect, authorizeRoles("user"), createTicket);
router.get("/my-tickets", protect, authorizeRoles("user"), getMyTickets);

// SUPPORT & ADMIN
router.get("/all", protect, authorizeRoles("support", "admin"), getAllTickets);

// ADMIN: assign a support agent
router.post("/assign", protect, authorizeRoles("admin"), assignTicket);

// SUPPORT: update ticket status
router.post("/status", protect, authorizeRoles("support"), updateStatus);

// USER + SUPPORT: add comment
router.post("/comment", protect, authorizeRoles("user", "support"), addComment);

export default router;
