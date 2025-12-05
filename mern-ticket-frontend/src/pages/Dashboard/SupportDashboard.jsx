// SupportDashboard.jsx
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getAssignedTickets } from "../../api/tickets";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const SupportDashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  if (!token) {
    navigate("/login");
    return;
  }

  const fetchTickets = async () => {
    try {
      const res = await getAssignedTickets(token);
      setTickets(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  fetchTickets();

  // 🔥 Re-fetch whenever user returns to dashboard
  const handleVisibility = () => {
    if (document.visibilityState === "visible") {
      fetchTickets();
    }
  };

  document.addEventListener("visibilitychange", handleVisibility);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibility);
  };
}, [token, navigate]);


  const summary = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in-progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0d0d0d] min-h-screen font-sans">

      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">Support Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* WRAPPER */}
      <div className="pt-28 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-6">

        {/* LEFT SIDEBAR */}
        <aside className="hidden md:flex flex-col w-64 gap-6 sticky top-28">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
              {user?.name?.charAt(0)}
            </div>

            <h2 className="text-lg font-semibold text-center">{user?.name}</h2>
            <p className="text-sm text-gray-500 text-center">{user?.email}</p>
            <p className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700">{user?.role}</p>

            <div className="w-full flex flex-col gap-3 mt-5">
              <button
                onClick={() => setShowProfile(true)}
                className="w-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 py-2 rounded-lg transition"
              >
                Profile
              </button>

              <button
                onClick={() => setShowProfile(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow transition"
              >
                Assigned Tickets
              </button>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 flex flex-col gap-8">

          {showProfile ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Profile</h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Name:</strong> {user?.name}</p>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Role:</strong> {user?.role}</p>
              </div>
            </motion.div>
          ) : (
            <>
              {/* SUMMARY BOXES */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl shadow-lg text-center transition"
                >
                  <h2 className="text-lg font-semibold">Total</h2>
                  <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">{summary.total}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-lg text-center transition"
                >
                  <h2 className="text-lg font-semibold">Open</h2>
                  <p className="text-3xl font-bold">{summary.open}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-2xl shadow-lg text-center transition"
                >
                  <h2 className="text-lg font-semibold">In Progress</h2>
                  <p className="text-3xl font-bold">{summary.inProgress}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg text-center transition"
                >
                  <h2 className="text-lg font-semibold">Resolved</h2>
                  <p className="text-3xl font-bold">{summary.resolved}</p>
                </motion.div>
              </div>

              {/* ASSIGNED TICKETS */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Assigned Tickets</h2>

                {tickets.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400">No tickets assigned.</p>
                ) : (
                  <div className="space-y-4">
                    {tickets.map((ticket) => (
                      <motion.div
                        key={ticket._id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg flex justify-between items-center transition"
                      >
                       <div>
  <h3 className="font-semibold text-gray-900 dark:text-white">
    {ticket.title}
  </h3>

  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
    {ticket.status}
  </p>

  <p className="text-xs text-gray-400 mt-1">
    Assigned By:{" "}
    <span className="font-medium text-gray-600 dark:text-gray-300">
      {ticket.assignedBy?.name ||
       ticket.assignedByName ||
       ticket.createdBy?.name ||
       "Admin"}
    </span>
  </p>
</div>

                        <Link
                          to={`/dashboard/support/ticket/${ticket._id}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg shadow transition"
                        >
                          View
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </main>

      </div>
    </div>
  );
};

export default SupportDashboard;
