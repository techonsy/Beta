// RaiseTicket.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { createTicket } from "../../api/tickets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const RaiseTicket = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "General",
    priority: "medium",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket(form, token);
      alert("Ticket created successfully!");
      navigate("/dashboard/user/my-tickets");
    } catch (err) {
      console.error(err);
      alert("Failed to create ticket");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 min-h-screen font-sans">

      {/* TOP NAV */}
      <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wide">
            Create Ticket
          </h1>

          <button
            onClick={() => navigate("/dashboard/user")}
            className="px-5 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow font-medium"
          >
            Back
          </button>
        </div>
      </header>

      {/* MAIN */}
      <div className="pt-28 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-64">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5 sticky top-28">
            <button
              onClick={() => navigate("/dashboard/user/my-tickets")}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:from-blue-600 hover:to-blue-700 transition flex items-center justify-center gap-2"
            >
              ← Back to My Tickets
            </button>
          </div>
        </aside>

        {/* CENTER — Glass Card */}
        <main className="flex-1 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                        border border-white/30 dark:border-gray-700/30 shadow-2xl rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
              🚀 Raise a Support Ticket
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* TITLE */}
              <div className="relative">
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Ticket Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Dashboard not loading properly"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                             border border-gray-300 dark:border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm hover:shadow-md"
                  required
                />
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your issue in detail…"
                  rows="6"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                             border border-gray-300 dark:border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm hover:shadow-md"
                  required
                ></textarea>
              </div>

              {/* CATEGORY + PRIORITY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                               border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm hover:shadow-md"
                  >
                    <option value="General">General</option>
                    <option value="Technical">Technical</option>
                    <option value="Product">Product</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Financial">Financial</option>
                    <option value="Sales">Sales</option>
                    <option value="Medical">Medical</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Supply Chain">Supply Chain</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Priority
                  </label>
                  <select
                    name="priority"
                    value={form.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                               border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition shadow-sm hover:shadow-md"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-4 w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 
                           hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl 
                           font-bold shadow-lg transition"
              >
                Submit Ticket
              </motion.button>

            </form>
          </motion.div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside className="hidden lg:flex flex-col w-72">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-28">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Tips for Faster Resolution</h3>
            <ul className="list-disc ml-5 space-y-3 text-gray-700 dark:text-gray-300">
              <li>Keep the title short and descriptive.</li>
              <li>Provide step-by-step details of your issue.</li>
              <li>Choose the appropriate category for quicker handling.</li>
              <li>Set priority accurately based on urgency.</li>
              <li>Attach relevant files if necessary (coming soon!).</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default RaiseTicket;
