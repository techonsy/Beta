import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
   <Landing />
     
    </Router>
  );
}

export default App;
