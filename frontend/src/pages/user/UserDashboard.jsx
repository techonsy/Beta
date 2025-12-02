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
      
    </div>
  );
}
