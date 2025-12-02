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
      <h2 className="text-xl font-semibold">{ticket.title}</h2>
      <p className="text-gray-700">{ticket.description}</p>
      <p className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 w-fit">Status: {ticket.status}</p>

      <hr />
      <h3 className="font-medium">Comments</h3>
      <div className="space-y-3">
        {ticket.comments.map((c, i) => (
          <div key={i} className="border p-2 rounded text-sm bg-gray-50">
            {c.text}
            <div className="text-xs text-gray-500">{new Date(c.date).toLocaleString()}</div>
          </div>
        ))}
      </div>

      <textarea
        className="border p-2 rounded w-full"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Post Comment
      </button>
    </div>
  );
}
