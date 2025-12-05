// MyTickets.jsx
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getMyTickets } from "../../api/tickets";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const statusColors = {
  open: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  resolved: "bg-green-100 text-green-800",
  closed: "bg-gray-100 text-gray-800",
};

const MyTickets = () => {
  const { token } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchTickets = async () => {
      try {
        const res = await getMyTickets(token);
        setTickets(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTickets();
  }, [token, navigate]);

  const filteredTickets = tickets.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen font-sans">

      {/* TOP NAV */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">My Tickets</h1>
          <button
            onClick={() => navigate("/dashboard/user")}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </header>

      {/* SEARCH BAR */}
      <div className="pt-28 max-w-7xl mx-auto px-6 mb-6">
        <input
          type="text"
          placeholder="Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 
                     border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 
                     outline-none shadow-sm transition"
        />
      </div>

      {/* TICKETS */}
      <div className="max-w-7xl mx-auto px-6 space-y-6 pb-12">
        {filteredTickets.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-lg text-center mt-12">
            No tickets found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTickets.map((t) => (
              <motion.div
                key={t._id}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 
                           rounded-2xl shadow-lg p-6 flex flex-col justify-between transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t.title}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">{t.description?.slice(0, 80)}...</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                      statusColors[t.status] || "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {t.status}
                  </span>

                  <Link
                    to={`/dashboard/user/ticket/${t._id}`}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 
                               hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow font-medium transition"
                  >
                    View
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTickets;
