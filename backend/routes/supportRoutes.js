import express from "express";
import { getAssignedTickets, updateStatus, addComment } from "../controllers/supportController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// All routes here are SUPPORT only
router.get("/tickets", protect, authorizeRoles("support"), getAssignedTickets);
router.post("/update-status", protect, authorizeRoles("support"), updateStatus);
router.post("/comment", protect, authorizeRoles("support"), addComment);

export default router;
