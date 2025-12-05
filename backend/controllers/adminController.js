import User from "../models/User.js";
import Ticket from "../models/Ticket.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tickets (admin)
export const getAllTicketsAdmin = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("user", "name email")
      .populate("assignedTo", "name email");

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Assign ticket (admin)
export const assignTicketAdmin = async (req, res) => {
  try {
    const { ticketId, supportId } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { assignedTo: supportId, status: "in-progress" },
      { new: true }
    )
      .populate("user", "name email")
      .populate("assignedTo", "name email");

    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    res.json({ message: "Ticket assigned successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE USER OR SUPPORT
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Prevent deleting yourself
    if (req.user.id === userId) {
      return res.status(400).json({ message: "You cannot delete yourself." });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent deleting other admins
    if (user.role === "admin" && req.user.role !== "superadmin") {
  return res.status(403).json({ message: "Only SUPERADMIN can delete admins" });
}


    // Delete the user
    await User.findByIdAndDelete(userId);

    // Optional: Unassign tickets assigned to this user
    await Ticket.updateMany(
      { assignedTo: userId },
      { $unset: { assignedTo: "" }, $set: { status: "open" } }
    );

    res.json({ message: `${user.name} has been deleted successfully.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
