import express from "express";
import {
  createTicket,
  getMyTickets,
  getTicketById,
  addUserComment,
} from "../controllers/ticketController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create", protect, authorizeRoles("user"), createTicket);

router.get("/my", protect, authorizeRoles("user"), getMyTickets);

router.get("/:id", protect, authorizeRoles("user", "support", "admin"), getTicketById);

router.post("/comment", protect, authorizeRoles("user"), addUserComment);

export default router;
