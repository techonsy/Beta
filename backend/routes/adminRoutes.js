import express from "express";
import {
  getAllUsers,
  getAllTicketsAdmin,
  assignTicketAdmin,
  deleteUser,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", protect, authorizeRoles("admin", "superadmin")
, getAllUsers);
router.get("/tickets", protect,authorizeRoles("admin", "superadmin")
, getAllTicketsAdmin);
router.post("/assign", protect, authorizeRoles("admin", "superadmin")
, assignTicketAdmin);

// DELETE support or user
router.delete("/users/:id", protect, authorizeRoles("admin", "superadmin")
, deleteUser);

export default router;
