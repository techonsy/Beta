import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public registration for normal users
router.post("/register", registerUser); // self-registration

// Login
router.post("/login", loginUser);

// Admin registering support/admin
router.post("/register/admin", protect, authorizeRoles("admin"), registerUser);

// Example protected admin/support route
router.get("/admin-only", protect, authorizeRoles("admin", "support"), (req, res) => {
  res.json({ message: `Hello ${req.user.name}, you are an ${req.user.role}` });
});

export default router;
