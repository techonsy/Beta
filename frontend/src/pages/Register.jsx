import React, { useState } from "react";
import api from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await api.post("/auth/register", formData);
      setSuccess(response.data.message);

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] px-4">
      <div className="w-full max-w-md bg-[#161B22] border border-[#30363D] rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[#E2E8F0] mb-2">
          Create an Account ✨
        </h1>
        <p className="text-center text-[#9CA3AF] mb-6">
          Register to join the platform
        </p>

        {/* Error message */}
        {error && (
          <p className="text-red-400 text-center mb-4 bg-red-900/30 p-2 rounded-lg border border-red-700 text-sm">
            {error}
          </p>
        )}

        {/* Success message */}
        {success && (
          <p className="text-green-400 text-center mb-4 bg-green-900/30 p-2 rounded-lg border border-green-700 text-sm">
            {success}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none"
            />
          </div>

          {/* Role Dropdown */}
          <div>
            <label className="text-[#E2E8F0] text-sm font-medium">Select Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full mt-1 p-3 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#E2E8F0] focus:ring-2 focus:ring-[#3B82F6] outline-none cursor-pointer"
            >
              <option value="">Choose a role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg py-3 transition duration-200 shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-[#9CA3AF] mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#3B82F6] hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
