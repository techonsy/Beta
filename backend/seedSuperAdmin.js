import User from "./models/User.js";
import bcrypt from "bcryptjs";

export const createSuperAdmin = async () => {
  try {
    const exists = await User.findOne({ role: "superadmin" });

    if (exists) return; // Superadmin already exists

    const hashed = await bcrypt.hash("admin@123", 10); // Default password

    await User.create({
      name: "Super Admin",
      email: "admin@123.com", // Updated email
      password: hashed,
      role: "superadmin",
    });

    console.log("⭐ SUPERADMIN created (email: admin@123.com | password: admin@123)");
  } catch (error) {
    console.error("SuperAdmin creation error:", error);
  }
};
