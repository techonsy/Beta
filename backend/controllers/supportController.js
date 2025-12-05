import Ticket from "../models/Ticket.js";

export const getAssignedTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ assignedTo: req.user._id })
      .populate("user", "name email")
      .populate("assignedTo", "name email");

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStatusSupport = async (req, res) => {
  try {
    const { ticketId, status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    ).populate("user", "name email");

    if (!ticket) return res.status(404).json({ message: "Not found" });

    res.json({ message: "Status updated", ticket });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addSupportComment = async (req, res) => {
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
