import express from "express";
import {
  getAssignedTickets,
  updateStatusSupport,
  addSupportComment,
} from "../controllers/supportController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/tickets", protect, authorizeRoles("support"), getAssignedTickets);
router.post("/status", protect, authorizeRoles("support"), updateStatusSupport);
router.post("/comment", protect, authorizeRoles("support"), addSupportComment);

export default router;
