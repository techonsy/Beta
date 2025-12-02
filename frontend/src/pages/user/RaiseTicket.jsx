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
      
    </form>
  );
}
