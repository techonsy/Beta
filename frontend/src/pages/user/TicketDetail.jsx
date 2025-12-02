// /src/pages/TicketDetail.jsx
import { useEffect, useState } from "react";
import { getTicketById, addComment } from "../api/ticketApi";
import { useParams } from "react-router-dom";

export default function TicketDetail() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getTicketById(id)
      .then(res => setTicket(res))
      .catch(err => console.error(err));
  }, [id]);

  const submitComment = async () => {
    await addComment(id, comment);
    setTicket({ ...ticket, comments: [...ticket.comments, { text: comment, date: new Date() }] });
    setComment("");
  };

  if (!ticket) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow border">
      
    </div>
  );
}
