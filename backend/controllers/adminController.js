import User from "../models/User.js";
import Ticket from "../models/Ticket.js";

// GET all users (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // don't send passwords
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ASSIGN TICKET (Admin)
export const assignTicket = async (req, res) => {
  try {
    const { ticketId, supportId } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { assignedTo: supportId, status: "in-progress" },
      { new: true }
    ).populate("assignedTo", "name email");

    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    res.json({ message: "Ticket assigned successfully", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all tickets (Admin)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate("user", "name email")
      .populate("assignedTo", "name email");

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
