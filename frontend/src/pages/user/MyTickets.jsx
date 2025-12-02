// /src/pages/MyTickets.jsx
import { useEffect, useState } from "react";
import { getMyTickets } from "../api/ticketApi";
import { useNavigate } from "react-router-dom";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);


  useEffect(() => {
    getMyTickets()
      .then(res => setTickets(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="space-y-4">
      
    </div>
  );
}
