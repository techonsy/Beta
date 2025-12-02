import express from "express";
import { getAllUsers, assignTicket, getAllTickets } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// All routes here are ADMIN only
router.get("/users", protect, authorizeRoles("admin"), getAllUsers);
router.get("/tickets", protect, authorizeRoles("admin"), getAllTickets);
router.post("/assign-ticket", protect, authorizeRoles("admin"), assignTicket);

export default router;
