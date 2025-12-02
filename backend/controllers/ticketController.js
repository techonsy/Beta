import Ticket from "../models/Ticket.js";

// CREATE TICKET (USER)
export const createTicket = async (req, res) => {
  try {
    const { title, description, priority, category } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      priority,
      category,
      user: req.user._id,
    });

    res.status(201).json({ message: "Ticket created", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER'S OWN TICKETS
export const getMyTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate("assignedTo", "name email");
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL TICKETS (ADMIN + SUPPORT)
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

// ASSIGN SUPPORT AGENT (ADMIN)
export const assignTicket = async (req, res) => {
  try {
    const { ticketId, supportId } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { assignedTo: supportId, status: "in-progress" },
      { new: true }
    );

    res.json({ message: "Ticket assigned", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS (SUPPORT)
export const updateStatus = async (req, res) => {
  try {
    const { ticketId, status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD COMMENT (USER + SUPPORT)
export const addComment = async (req, res) => {
  try {
    const { ticketId, text } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });

    ticket.comments.push({
      text,
      sender: req.user._id,
    });

    await ticket.save();

    res.json({ message: "Comment added", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
