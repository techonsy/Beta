// AdminDashboard.jsx
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getAllTicketsAdmin,
  assignTicketAdmin,
  deleteUserAdmin,
} from "../../api/admin";
import { motion } from "framer-motion";
import {
  Home,
  Users as UsersIcon,
  FileText,
  Settings,
  LogOut,
  Trash2,
  UserPlus,
  CheckCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const { user, token, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedSupport, setSelectedSupport] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [view, setView] = useState("home");
  const [userView, setUserView] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const usersRes = await getAllUsers(token);
        setUsers(usersRes.data || []);

        const ticketsRes = await getAllTicketsAdmin(token);
        setTickets(ticketsRes.data || []);
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    fetchData();
  }, [token, navigate]);

  const handleAssign = async () => {
    if (!selectedTicket || !selectedSupport) {
      setStatusMessage("Select a ticket and support agent first.");
      return;
    }

    const ticketToAssign = tickets.find((t) => t._id === selectedTicket);

    if (ticketToAssign?.assignedTo) {
      setStatusMessage("This ticket is already assigned.");
      return;
    }

    try {
      const res = await assignTicketAdmin(
        { ticketId: selectedTicket, supportId: selectedSupport },
        token
      );

      if (res?.status === 200) {
        const ticketsRes = await getAllTicketsAdmin(token);
        setTickets(ticketsRes.data || []);
        setSelectedTicket("");
        setSelectedSupport("");
        setStatusMessage("Ticket assigned successfully.");
      } else {
        setStatusMessage("Failed to assign ticket. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("Failed to assign ticket. Try again.");
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await deleteUserAdmin(userId, token);
      setUsers((prev) => prev.filter((u) => u._id !== userId));
      setStatusMessage("User deleted successfully.");
    } catch (err) {
      console.error(err);
      setStatusMessage("Failed to delete user. Try again.");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const filteredUsers =
    userView === "all"
      ? users
      : userView === "support"
      ? users.filter((u) => u.role === "support")
      : users.filter((u) => u.role === "user");

  const summary = {
    totalTickets: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    inProgress: tickets.filter((t) => t.status === "in-progress").length,
    resolved: tickets.filter((t) => t.status === "resolved").length,
    totalUsers: users.length,
    totalSupport: users.filter((u) => u.role === "support").length,
    totalNormalUsers: users.filter((u) => u.role === "user").length,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1d] text-slate-900 dark:text-slate-100 font-sans">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/50 dark:bg-[#0f172a]/50 border-b border-slate-200/20 dark:border-slate-700/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow">
              AD
            </div>
            <div>
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Welcome, {user?.name}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl shadow"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* BODY */}
      <div className="pt-24 max-w-7xl mx-auto px-6 flex gap-6">

        {/* SIDEBAR */}
        <aside className="hidden md:flex flex-col w-72 sticky top-28 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-[#111c3a] rounded-2xl p-5 shadow-xl border border-slate-200/40 dark:border-slate-700/40"
          >
            {/* PROFILE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {user?.name?.charAt(0)}
              </div>
              <h3 className="mt-3 font-semibold">{user?.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                {user?.email}
              </p>

              <span className="mt-2 inline-block text-xs px-3 py-1 rounded-full bg-blue-600 text-white shadow">
                {user?.role}
              </span>
            </div>

            {/* NAV */}
            <nav className="mt-5 grid gap-2">
              {[
                { id: "home", label: "Home", icon: <Home size={16} /> },
                { id: "tickets", label: "All Tickets", icon: <FileText size={16} /> },
                { id: "users", label: "Users", icon: <UsersIcon size={16} /> },
                { id: "profile", label: "Profile", icon: <Settings size={16} /> },
              ].map((n) => (
                <button
                  key={n.id}
                  onClick={() => setView(n.id)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                    view === n.id
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-200/40 dark:hover:bg-[#0f172a]"
                  }`}
                >
                  <span>{n.icon}</span>
                  <span>{n.label}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 space-y-6">

          {/* HOME */}
          {view === "home" && (
            <>

              {/* SUMMARY CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                {/* Card Template */}
                {[
                  {
                    label: "Total Tickets",
                    value: summary.totalTickets,
                    icon: <FileText size={22} />,
                    color: "from-blue-600 to-indigo-600",
                  },
                  {
                    label: "Open",
                    value: summary.open,
                    icon: <CheckCircle size={22} />,
                    color: "from-amber-500 to-orange-500",
                  },
                  {
                    label: "In Progress",
                    value: summary.inProgress,
                    icon: <FileText size={22} />,
                    color: "from-orange-500 to-yellow-500",
                  },
                  {
                    label: "Resolved",
                    value: summary.resolved,
                    icon: <UsersIcon size={22} />,
                    color: "from-emerald-500 to-green-500",
                  },
                ].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-white dark:bg-[#111c3a] shadow-xl hover:shadow-2xl transition border border-slate-200/40 dark:border-slate-700/40"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm text-slate-500 dark:text-slate-300">
                          {c.label}
                        </h3>
                        <p className="text-3xl font-bold mt-1">{c.value}</p>
                      </div>
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${c.color} text-white shadow`}
                      >
                        {c.icon}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ASSIGN TICKET */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-6 rounded-2xl bg-white dark:bg-[#111c3a] shadow-xl border border-slate-200/40 dark:border-slate-700/40"
              >
                <div className="flex justify-between mb-4">
                  <h2 className="text-lg font-semibold">Assign Ticket</h2>
                  <p className="text-sm text-blue-400">{statusMessage}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <select
                    value={selectedTicket}
                    onChange={(e) => setSelectedTicket(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border bg-white dark:bg-[#0f172a]"
                  >
                    <option value="">Select Ticket</option>
                    {tickets.map((t) => (
                      <option key={t._id} value={t._id}>
                        {t.title} ({t.status})
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedSupport}
                    onChange={(e) => setSelectedSupport(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border bg-white dark:bg-[#0f172a]"
                  >
                    <option value="">Select Support Agent</option>
                    {users
                      .filter((u) => u.role === "support")
                      .map((u) => (
                        <option key={u._id} value={u._id}>
                          {u.name}
                        </option>
                      ))}
                  </select>

                  <button
                    onClick={handleAssign}
                    disabled={!selectedTicket || !selectedSupport}
                    className={`px-5 py-2 rounded-xl text-white shadow ${
                      !selectedTicket || !selectedSupport
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition"
                    }`}
                  >
                    Assign
                  </button>
                </div>
              </motion.div>
            </>
          )}

          {/* USERS SECTION */}
          {view === "users" && (
            <div className="space-y-4">

              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Users & Support</h1>

                <div className="flex gap-2">
                  {["all", "support", "users"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setUserView(v)}
                      className={`px-4 py-1 rounded-lg ${
                        userView === v
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                          : "bg-slate-200 dark:bg-[#0f172a]"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* USER CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredUsers.map((u) => (
                  <motion.div
                    key={u._id}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#111c3a] shadow-xl border border-slate-200/40 dark:border-slate-700/40 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-semibold text-lg">{u.name}</p>
                      <p className="text-sm text-slate-500">{u.email}</p>
                      <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-blue-600 text-white shadow">
                        {u.role}
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeleteUser(u._id)}
                      className="px-3 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 flex items-center gap-2 shadow"
                    >
                      <Trash2 size={16} /> Delete
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ALL TICKETS */}
          {view === "tickets" && (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">All Tickets</h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.map((t) => (
                  <motion.div
                    key={t._id}
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-white dark:bg-[#111c3a] shadow-xl border border-slate-200/40 dark:border-slate-700/40"
                  >
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-lg">{t.title}</h3>
                        <p className="text-sm text-slate-500">
                          User: {t.user?.name || "Unknown"}
                        </p>
                        <p className="text-sm text-slate-400">
                          Assigned: {t.assignedTo?.name || "Unassigned"}
                        </p>
                      </div>

                      <div className="text-right">
                       <span
  className={`inline-block px-3 py-1 rounded-full text-white text-xs shadow capitalize ${
    t.status === "open"
      ? "bg-amber-600"
      : t.status === "in-progress"
      ? "bg-blue-600"
      : t.status === "resolved"
      ? "bg-emerald-600"
      : "bg-slate-600"
  }`}
>
  {t.status}
</span>


                        {/* <button
                          onClick={() =>
                            navigate(`/dashboard/admin/ticket/${t._id}`)
                          }
                          className="mt-3 px-4 py-1 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow hover:scale-105"
                        >
                          View
                        </button> */}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* PROFILE */}
          {view === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#111c3a] shadow-xl border border-slate-200/40 dark:border-slate-700/40"
            >
              <h1 className="text-2xl font-bold mb-4">Profile</h1>
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Role:</strong> {user?.role}</p>
            </motion.div>
          )}

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
