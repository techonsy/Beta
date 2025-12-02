// /src/pages/MyTickets.jsx
import { useEffect, useState } from "react";
import { getMyTickets } from "../api/ticketApi";
import { useNavigate } from "react-router-dom";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMyTickets()
      .then(res => setTickets(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">My Tickets</h2>

      {tickets.length === 0 ? (
        <p className="text-gray-500">No tickets yet — you're either lucky or ignoring problems.</p>
      ) : (
        <div className="grid gap-4">
          {tickets.map(t => (
            <div
              className="bg-white shadow rounded-xl p-4 border hover:bg-gray-50 cursor-pointer"
              key={t._id}
              onClick={() => navigate(`/ticket/${t._id}`)}
            >
              <div className="flex justify-between">
                <h3 className="font-medium">{t.title}</h3>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700">
                  {t.status}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{t.description.slice(0, 90)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
