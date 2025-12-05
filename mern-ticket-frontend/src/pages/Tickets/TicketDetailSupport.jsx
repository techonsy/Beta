import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { getTicketById, addSupportComment, updateStatusSupport } from "../../api/tickets";
import { motion } from "framer-motion";

const TicketDetailSupport = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const fetchTicket = async () => {
    try {
      const res = await getTicketById(id, token);
      setTicket(res.data);
      setStatus(res?.data?.status || "");
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
      await addSupportComment(id, comment, token);
      setComment("");
      fetchTicket();
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusChange = async () => {
    if (!status) return;
    try {
      await updateStatusSupport(id, status, token);
      fetchTicket();
    } catch (err) {
      console.error(err);
    }
  };

  if (!ticket) return <p className="p-6 text-gray-600 dark:text-gray-300">Loading...</p>;

  const statusGradient = {
    "open": "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    "in-progress": "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white",
    "resolved": "bg-gradient-to-r from-green-500 to-green-600 text-white",
    "closed": "bg-gray-400 text-white",
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0d0d0d] min-h-screen font-sans">
      <div className="pt-24 max-w-7xl mx-auto flex gap-6 px-6">

        {/* LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col w-64">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4 sticky top-28"
          >
            <button
              onClick={() => navigate("/dashboard/support")}
              className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              &larr; Back to Tickets
            </button>
          </motion.div>
        </aside>

        {/* CENTER CONTENT */}
        <main className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col gap-6"
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{ticket.title}</h1>

            <div className="flex flex-wrap gap-4">
              <span className={`px-4 py-2 rounded-full font-semibold ${statusGradient[ticket.status]}`}>
                {ticket.status.toUpperCase()}
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                Priority: {ticket.priority}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-200 mt-4">{ticket.description}</p>

            {/* Update Status */}
            <div className="flex flex-wrap gap-2 items-center mt-4">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>
              <button
                onClick={handleStatusChange}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
              >
                Update Status
              </button>
            </div>

            {/* Comments */}
            <h2 className="text-2xl font-semibold mt-6">Comments</h2>
            <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
              {ticket.comments?.length > 0 ? (
                ticket.comments.map((c, idx) => (
                  <motion.div
                    key={c?._id || idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-2xl max-w-[80%] ${
                      c?.sender?._id === ticket?.user?._id
                        ? "bg-green-100 self-start"
                        : "bg-blue-100 self-end"
                    }`}
                  >
                    <p className="text-sm font-semibold">{c?.sender?.name || "Unknown"}</p>
                    <p>{c?.text}</p>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-300">No comments yet.</p>
              )}
            </div>

            {/* Add Comment */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 border px-4 py-2 rounded-2xl bg-white dark:bg-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleComment}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-2xl shadow-lg transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-72">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-28"
          >
            <h3 className="font-semibold text-lg mb-3">Tips</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Use the back button to return to your assigned tickets list.</li>
              <li>Update ticket status as progress changes.</li>
              <li>Add comments to communicate with users/admin.</li>
              <li>Resolved tickets are archived automatically.</li>
            </ul>
          </motion.div>
        </aside>

      </div>
    </div>
  );
};

export default TicketDetailSupport;
