import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

// User Tickets
import RaiseTicket from "./pages/Tickets/RaiseTicket";
import MyTickets from "./pages/Tickets/MyTickets";
import TicketDetail from "./pages/Tickets/TicketDetail";

// Support Tickets
import TicketDetailSupport from "./pages/Tickets/TicketDetailSupport";
import AssignedTickets from "./pages/Dashboard/AssignedTickets";

// Dashboards
import UserDashboard from "./pages/Dashboard/UserDashboard";
import SupportDashboard from "./pages/Dashboard/SupportDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";

// Auth Context
import { AuthProvider } from "./context/AuthContext";
import { Themeprovider } from "./context/ThemeContext";

function App() {
  return (
    <Themeprovider>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboards */}
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/support" element={<SupportDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />

          {/* User Tickets */}
          <Route path="/dashboard/user/raise-ticket" element={<RaiseTicket />} />
          <Route path="/dashboard/user/my-tickets" element={<MyTickets />} />
          <Route path="/dashboard/user/ticket/:id" element={<TicketDetail />} />

          {/* Support Tickets */}
          <Route path="/dashboard/support/assigned" element={<AssignedTickets />} />
          <Route path="/dashboard/support/ticket/:id" element={<TicketDetailSupport />} />

          {/* You can add Profile, About, Contact routes here later */}
        </Routes>
      </Router>
    </AuthProvider>
    </Themeprovider>
  );
}

export default App;
