import React, { useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] px-4">
      <div className="w-full max-w-md bg-[#161B22] border border-[#30363D] rounded-2xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold text-center text-[#E2E8F0] mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-center text-[#9CA3AF] mb-6">
          Login to continue to your dashboard
        </p>

        {error && (
          <p className="text-red-400 text-center mb-4 bg-red-900/30 p-2 rounded-lg border border-red-700 text-sm">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg py-3 transition duration-200 shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-[#9CA3AF] mt-6">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-[#3B82F6] hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
