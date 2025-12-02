// /src/pages/RaiseTicket.jsx
import { useState } from "react";
import { createTicket } from "../api/ticketApi";

export default function RaiseTicket() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "low",
  });
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createTicket(form);
      setSuccess("Ticket raised successfully!");
      setForm({ title: "", description: "", priority: "low" });
    } catch (err) {
      console.error(err);
      setSuccess("Failed to raise ticket.");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-xl shadow border">
      <h2 className="text-lg font-semibold">Raise a Ticket</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        rows={4}
        placeholder="Describe your issue"
        className="w-full border p-2 rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />

      <select
        className="border p-2 rounded w-full"
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
        Submit Ticket
      </button>

      {success && <p className="text-center text-green-600">{success}</p>}
    </form>
  );
}
