import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { getAssignedTickets } from "../../api/tickets";

const AssignedTickets = () => {
  const { token } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");

    const fetchTickets = async () => {
      try {
        const res = await getAssignedTickets(token);
        setTickets(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTickets();
  }, [token, navigate]);


  // Dynamic Colors
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  const statusColor = {
    Open: "bg-blue-100 text-blue-700",
    InProgress: "bg-purple-100 text-purple-700",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-gray-200 text-gray-700",
  };


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0d0d0d]">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 pt-24">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          My Assigned Tickets
        </h1>

        {tickets.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              🎉 No assigned tickets at the moment!
            </p>
            <p className="text-sm text-gray-500 mt-2">
              You will see new tickets here once assigned.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="
                  bg-white dark:bg-gray-800 rounded-xl shadow 
                  p-6 border border-gray-200 dark:border-gray-700
                  hover:shadow-lg transition-all duration-200 
                  hover:-translate-y-1
                "
              >
                <div className="flex justify-between items-start">
                  
                  {/* LEFT SECTION */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {ticket.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {ticket.description?.slice(0, 80) || "No description"}...
                    </p>

                    <div className="flex gap-3 mt-3">

                      {/* Priority Badge */}
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-semibold 
                          ${priorityColor[ticket.priority] || "bg-gray-200 text-gray-700"}
                        `}
                      >
                        Priority: {ticket.priority}
                      </span>

                      {/* Status Badge */}
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-semibold 
                          ${statusColor[ticket.status] || "bg-gray-200 text-gray-700"}
                        `}
                      >
                        {ticket.status}
                      </span>
                    </div>
                  </div>

                  {/* VIEW BUTTON */}
                  {/* <Link
                    to={`/dashboard/support/ticket/${ticket._id}`}
                    className="
                      px-4 py-2 rounded-md bg-blue-600 text-white 
                      hover:bg-blue-700 transition-all duration-200
                    "
                  >
                    View →
                  </Link> */}

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignedTickets;
