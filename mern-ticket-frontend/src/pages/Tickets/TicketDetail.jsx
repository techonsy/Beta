// TicketDetail.jsx
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getTicketById, addUserComment } from "../../api/tickets";
import { motion } from "framer-motion";

const TicketDetail = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState("");

  const fetchTicket = async () => {
    try {
      const res = await getTicketById(id, token);
      setTicket(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) fetchTicket();
  }, [token]);

  const handleComment = async () => {
    if (!comment) return;
    try {
      await addUserComment(id, comment, token);
      setComment("");
      fetchTicket(); // refresh ticket to show new comment
    } catch (err) {
      console.error(err);
    }
  };

  if (!ticket) return <p className="p-6 text-gray-700 dark:text-gray-300">Loading...</p>;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Ticket Detail</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
          >
            ← Back
          </button>
        </div>
      </header>

      <div className="pt-28 max-w-7xl mx-auto flex gap-6 px-6">

        {/* LEFT SIDEBAR */}
        <aside className="hidden md:block w-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 
                       rounded-2xl shadow-lg p-5 sticky top-24"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Ticket Info</h2>
            <p><strong>Title:</strong> {ticket.title}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Status:</strong> <span className={`capitalize font-semibold text-sm ${ticket.status === "open" ? "text-blue-600" : ticket.status === "in-progress" ? "text-yellow-600" : "text-green-600"}`}>{ticket.status}</span></p>
            <p><strong>User:</strong> {ticket.user?.name || "Unknown"}</p>
          </motion.div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="flex-1 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 dark:border-gray-700/40 
                       rounded-2xl shadow-2xl p-8 flex flex-col gap-6"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{ticket.title}</h1>
            <p className="text-gray-600 dark:text-gray-300">{ticket.description}</p>

            {/* Comments */}
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Comments</h2>
              <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
                {ticket.comments?.length > 0 ? (
                  ticket.comments.map((c) => (
                    <motion.div
                      key={c._id}
                      whileHover={{ scale: 1.02 }}
                      className={`p-3 rounded-xl shadow-md ${c.sender._id === ticket.user._id ? "bg-green-100 dark:bg-green-800/50" : "bg-blue-100 dark:bg-blue-800/50"}`}
                    >
                      <p className="text-sm font-semibold">{c.sender.name}</p>
                      <p className="text-gray-700 dark:text-gray-200">{c.text}</p>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-gray-400">No comments yet.</p>
                )}
              </div>

              {/* Add Comment */}
              <div className="flex gap-3 mt-3">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm"
                />
                <button
                  onClick={handleComment}
                  className="px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition transform hover:scale-105"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:block w-72">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-lg p-5 sticky top-24"
          >
            <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-200">Tips</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Add comments to communicate with support.</li>
              <li>Track the ticket status to follow progress.</li>
              <li>Resolved tickets are archived automatically.</li>
            </ul>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default TicketDetail;
