// /src/pages/UserDashboard.jsx
import { useEffect, useState } from "react";
import { getDashboardData } from "../api/dashboardApi";
import MyTickets from "./MyTickets";
import RaiseTicket from "./RaiseTicket";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [data, setData] = useState({
    tickets: [],
    projects: [],
    activities: [],
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getDashboardData();
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
      <div className="flex gap-4 border-b pb-3">
        <button
          className={`pb-2 ${activeTab === "dashboard" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          Overview
        </button>
        <button
          className={`pb-2 ${activeTab === "tickets" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
          onClick={() => setActiveTab("tickets")}
        >
          My Tickets
        </button>
        <button
          className={`pb-2 ${activeTab === "raise" ? "border-b-2 border-blue-600 font-semibold" : ""}`}
          onClick={() => setActiveTab("raise")}
        >
          Raise Ticket
        </button>
      </div>

      {/* Tab Screens */}
      {activeTab === "dashboard" && (
        <p className="text-gray-600 text-sm">
          Welcome back! Your tickets are patiently waiting — unlike your weekend plans.
        </p>
      )}

      {activeTab === "tickets" && <MyTickets />}
      {activeTab === "raise" && <RaiseTicket />}
    </div>
  );
}
