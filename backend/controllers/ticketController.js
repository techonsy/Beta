import Ticket from "../models/Ticket.js";

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

export const getMyTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate(
      "assignedTo",
      "name email"
    );
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate("user", "name email")
      .populate("assignedTo", "name email")
      .populate("comments.sender", "name email");

    if (!ticket) return res.status(404).json({ message: "Not found" });

    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUserComment = async (req, res) => {
  try {
    const { ticketId, text } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) return res.status(404).json({ message: "Not found" });

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
