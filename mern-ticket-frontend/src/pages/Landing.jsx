// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserAlt, FaHeadset, FaUsersCog, FaCheckCircle, FaFacebook, FaTwitter, FaLinkedin, FaChevronDown } from "react-icons/fa";
import heroImage from "../assets/hero-image.jpg";
import bg2Image from "../assets/bg2.webp";
import resolveLogo from "../assets/resolveos-logo.svg";
import CountUp from "react-countup";

export default function Landing() {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar + Hero */}
      {/* Hero Section */}
<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
  {/* Dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Navbar */}
  <nav className="relative flex justify-between items-center p-6 max-w-7xl mx-auto z-10">
    <div className="flex items-center gap-3">
      <img src={resolveLogo} alt="ResolveOS logo" className="w-12 h-12 rounded-2xl shadow" />
      <span className="text-2xl font-bold">ResolveOS</span>
    </div>
    <div className="space-x-6 font-medium">
      <a href="#about" className="hover:text-gray-200 transition">About</a>
      <a href="#features" className="hover:text-gray-200 transition">Features</a>
      <a href="#roi" className="hover:text-gray-200 transition">ROI</a>
      <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
      <a href="#faq" className="hover:text-gray-200 transition">FAQs</a>
      <Link
        to="/register"
        className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Get Started
      </Link>
    </div>
  </nav>

  {/* Hero Content */}
  <div className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 z-10">
    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left md:w-1/2 space-y-6"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mt-[90px] leading-tight">
        ResolveOS – <span className="text-yellow-400">Smart Ticket Management</span>
      </h1>
      <p className="text-lg md:text-xl max-w-lg text-gray-100">
        Effortlessly manage, resolve, and track support tickets with our modern MERN-based system for Users, Agents, and Admins.
      </p>
      <div className="flex justify-center md:justify-start space-x-4 mt-6">
        <Link
          to="/register"
          className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-xl hover:bg-yellow-300 shadow-lg transform hover:-translate-y-1 transition"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-700 shadow-lg transition"
        >
          Login
        </Link>
      </div>
    </motion.div>

    {/* Hero Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="md:w-1/2 flex justify-center mb-10 md:mb-0 relative"
    >
      <img
        src={heroImage}
        alt="Support"
        className="rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-500"
      />

      {/* Floating shapes */}
      <div className="absolute -top-12 -left-12 w-20 h-20 bg-yellow-400 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-green-400 rounded-full opacity-30 animate-bounce-slow delay-200"></div>
      <div className="absolute top-1/2 left-0 w-10 h-10 bg-pink-400 rounded-full opacity-20 animate-bounce-slow delay-500"></div>
    </motion.div>
  </div>

  {/* Scroll Down Arrow */}
  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
    <FaChevronDown className="text-white text-3xl" />
  </div>
</section>

{/* About Section */}
<section className="relative py-24 bg-gradient-to-b from-blue-50 to-white text-gray-800" id="about">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About ResolveOS</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        ResolveOS is a modern, intuitive MERN-based Ticket Management System designed to simplify support workflows for Users, Support Agents, and Admins.
        Manage, track, and resolve tickets efficiently in a secure and role-based environment.
      </p>
    </motion.div>

    {/* Cards Section */}
    <div className="grid md:grid-cols-3 gap-10">
      {/* Users Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
      >
        <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-blue-100 text-blue-700 text-2xl mx-auto">
          🧑‍💻
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">For Users</h3>
        <p className="text-gray-600 text-sm text-center">
          Raise tickets, track progress, chat with agents, and monitor your issue history—all in a simple, intuitive dashboard.
        </p>
      </motion.div>

      {/* Support Agents Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
      >
        <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-green-100 text-green-700 text-2xl mx-auto">
          🎯
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">For Support Agents</h3>
        <p className="text-gray-600 text-sm text-center">
          View assigned tickets, update status & priority, provide instant support, and maintain seamless communication with users.
        </p>
      </motion.div>

      {/* Admins Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
      >
        <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-red-100 text-red-700 text-2xl mx-auto">
          ⚙️
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">For Admins</h3>
        <p className="text-gray-600 text-sm text-center">
          Manage users, support agents, tickets, and analytics to ensure smooth operations and high-quality support.
        </p>
      </motion.div>
    </div>
  </div>

  {/* Subtle Background Shapes */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-100 rounded-full opacity-20 -translate-x-12 -translate-y-12 animate-bounce-slow"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-100 rounded-full opacity-20 translate-x-12 translate-y-12 animate-bounce-slow"></div>
</section>

      {/* ROI / Value Section */}
<section className="py-24 bg-gray-50" id="roi">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Maximise Your ROI with ResolveOS
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
        Save time and resources with ResolveOS. Our system helps Users, Agents, and Admins work efficiently, ensuring faster ticket resolution and higher customer satisfaction.
      </p>
    </motion.div>

    {/* Metrics */}
    <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mb-16">
      {/* Metric 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg rounded-2xl p-6 flex-1 flex items-start gap-4 md:gap-6"
      >
        <div className="text-5xl font-bold">301%</div>
        <div className="text-left">
          <h3 className="font-semibold text-lg">Average ROI</h3>
          <p className="text-sm">Customers achieved this over three years using ResolveOS.</p>
        </div>
      </motion.div>

      {/* Metric 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg rounded-2xl p-6 flex-1 flex items-start gap-4 md:gap-6"
      >
        <div className="text-5xl font-bold">$23M</div>
        <div className="text-left">
          <h3 className="font-semibold text-lg">Net Value</h3>
          <p className="text-sm">Total value customers gained over three years.</p>
        </div>
      </motion.div>

      {/* Metric 3 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 shadow-lg rounded-2xl p-6 flex-1 flex items-start gap-4 md:gap-6"
      >
        <div className="text-5xl font-bold">6</div>
        <div className="text-left">
          <h3 className="font-semibold text-lg">Months</h3>
          <p className="text-sm">Time it took for customers to receive payback.</p>
        </div>
      </motion.div>
    </div>

    {/* Key Features */}
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3 hover:shadow-lg transition"
      >
        <div className="text-blue-600 text-2xl font-bold">✔</div>
        <div>
          <h4 className="font-semibold mb-1">Improve Time to Value</h4>
          <p className="text-gray-600 text-sm">ResolveOS works out of the box. Solve ticket issues immediately without complex setup.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3 hover:shadow-lg transition"
      >
        <div className="text-green-600 text-2xl font-bold">✔</div>
        <div>
          <h4 className="font-semibold mb-1">Reduce Effort per Ticket</h4>
          <p className="text-gray-600 text-sm">Automation and smart dashboards reduce agent effort and accelerate ticket resolution.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white shadow-md rounded-lg p-5 flex items-start gap-3 hover:shadow-lg transition"
      >
        <div className="text-yellow-600 text-2xl font-bold">✔</div>
        <div>
          <h4 className="font-semibold mb-1">Keep Costs Down</h4>
          <p className="text-gray-600 text-sm">No need for extra staff—efficiency and automation are built in from day one.</p>
        </div>
      </motion.div>
    </div>
  </div>

  {/* Floating shapes for style */}
  <div className="absolute top-0 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-20 animate-bounce-slow delay-200"></div>
</section>

      {/* Employee Service Section */}
<section className="py-24 bg-gradient-to-b from-white to-blue-50 relative" id="employee-service">
  <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-12">

    {/* Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        Make Employee Service Effortless
      </h2>
      <p className="text-gray-600 text-lg md:text-xl mb-8">
        With ResolveOS, your team can get help instantly, track requests efficiently, and improve productivity across the organization.  
        Streamline IT support, HR requests, and operational tasks—all in one platform.
      </p>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Instant request submission and tracking</li>
        <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Role-based dashboards for easy management</li>
        <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Automated notifications and reminders</li>
        <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✔</span> Analytics to monitor team performance</li>
      </ul>
    </motion.div>

    {/* Image Content */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="md:w-1/2 relative flex justify-center"
    >
      <img
        src={bg2Image}
        alt="Employee service illustration"
        className="rounded-3xl shadow-2xl w-full object-cover transform hover:scale-105 transition-all duration-500"
      />

      {/* Chat bubbles */}
      <div className="absolute top-12 right-6 bg-white p-4 rounded-xl shadow-md w-48 text-sm">
        <p className="text-gray-700 font-medium">What is our equipment replacement policy?</p>
      </div>
      <div className="absolute bottom-12 left-6 bg-white p-4 rounded-xl shadow-md w-48 text-sm flex items-center justify-between">
        <span className="text-gray-700">Need a replacement? Here you go.</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md font-medium text-xs">Equipment.doc</span>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 p-3 rounded-xl shadow text-sm">
        <p className="text-blue-700 font-medium">Request approved!</p>
      </div>
    </motion.div>
  </div>

  {/* Decorative floating shapes */}
  <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-100 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-100 rounded-full opacity-20 animate-bounce-slow delay-200"></div>
</section>


    {/* Features Section */}
<section className="py-24 bg-gradient-to-b from-white to-blue-50" id="features">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Features That Empower Your Team
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
        ResolveOS streamlines support workflows, providing Users, Agents, and Admins with all the tools they need to manage, track, and resolve tickets quickly.
      </p>
    </motion.div>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* User Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 relative group"
      >
        <div className="text-5xl mb-5">🧑‍💻</div>
        <h3 className="text-2xl font-bold mb-4 text-blue-700">User Dashboard</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2 hover:text-blue-700 transition">
            <span className="text-green-500 font-bold">✔</span> Raise support tickets quickly
          </li>
          <li className="flex items-center gap-2 hover:text-blue-700 transition">
            <span className="text-green-500 font-bold">✔</span> Track ticket status & history
          </li>
          <li className="flex items-center gap-2 hover:text-blue-700 transition">
            <span className="text-green-500 font-bold">✔</span> Comment on tickets
          </li>
          <li className="flex items-center gap-2 hover:text-blue-700 transition">
            <span className="text-green-500 font-bold">✔</span> Receive real-time updates
          </li>
        </ul>
        <div className="absolute top-0 right-0 w-12 h-12 bg-blue-100 rounded-full -translate-x-6 -translate-y-6 opacity-40 group-hover:opacity-70 transition-all"></div>
      </motion.div>

      {/* Support Agent Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 relative group"
      >
        <div className="text-5xl mb-5">🎯</div>
        <h3 className="text-2xl font-bold mb-4 text-green-600">Support Agent Panel</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2 hover:text-green-600 transition">
            <span className="text-blue-500 font-bold">✔</span> View assigned tickets
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 transition">
            <span className="text-blue-500 font-bold">✔</span> Update ticket status & priority
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 transition">
            <span className="text-blue-500 font-bold">✔</span> Add internal notes
          </li>
          <li className="flex items-center gap-2 hover:text-green-600 transition">
            <span className="text-blue-500 font-bold">✔</span> Resolve tickets efficiently
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-100 rounded-full translate-x-6 translate-y-6 opacity-40 group-hover:opacity-70 transition-all"></div>
      </motion.div>

      {/* Admin Features */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 relative group"
      >
        <div className="text-5xl mb-5">⚙️</div>
        <h3 className="text-2xl font-bold mb-4 text-red-600">Admin Management</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2 hover:text-red-600 transition">
            <span className="text-yellow-500 font-bold">✔</span> Manage users & agents
          </li>
          <li className="flex items-center gap-2 hover:text-red-600 transition">
            <span className="text-yellow-500 font-bold">✔</span> View tickets & history
          </li>
          <li className="flex items-center gap-2 hover:text-red-600 transition">
            <span className="text-yellow-500 font-bold">✔</span> Delete/archive tickets
          </li>
          <li className="flex items-center gap-2 hover:text-red-600 transition">
            <span className="text-yellow-500 font-bold">✔</span> Monitor performance
          </li>
        </ul>
        <div className="absolute top-1/2 right-0 w-12 h-12 bg-red-100 rounded-full -translate-x-6 -translate-y-6 opacity-40 group-hover:opacity-70 transition-all"></div>
      </motion.div>

    </div>
  </div>

  {/* Floating shapes for style */}
  <div className="absolute top-10 left-10 w-20 h-20 bg-purple-100 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-10 right-10 w-28 h-28 bg-pink-100 rounded-full opacity-20 animate-bounce-slow delay-200"></div>
</section>

    {/* FAQ Section - Premium SaaS Style */}
<section className="relative py-24 bg-gradient-to-b from-blue-50 to-white" id="faq">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
        Quick answers to the most common questions. Can’t find what you’re looking for? Contact our support team!
      </p>
    </motion.div>

    {/* Search Bar */}
    <div className="max-w-xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full border border-gray-300 rounded-full py-3 px-5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 transition"
      />
    </div>

    {/* FAQ Cards */}
    <div className="max-w-5xl mx-auto grid gap-6">

      {[
        {
          question: "What is ResolveOS?",
          answer: "ResolveOS is a modern MERN-based ticket management platform for Users, Agents, and Admins to manage, track, and resolve tickets efficiently.",
          role: "All"
        },
        {
          question: "Who can use it?",
          answer: "Users, Support Agents, and Admins — each with dedicated dashboards tailored to their role.",
          role: "All"
        },
        {
          question: "Is real-time chat available?",
          answer: "Yes! Built using Socket.io, allowing instant communication between Users and Support Agents.",
          role: "Agents/Users"
        },
        {
          question: "Can I track ticket history?",
          answer: "Absolutely. Users and Admins can view the complete ticket history with statuses, comments, and updates.",
          role: "Users/Admins"
        },
        {
          question: "Is there analytics for Admins?",
          answer: "Yes! Admins can monitor team performance, ticket resolution times, and overall system efficiency with built-in analytics.",
          role: "Admins"
        },
      ].map((faq, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
        >
          <details className="group p-6 bg-white rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300">
            <summary className="flex items-center justify-between text-lg md:text-xl font-semibold text-gray-900 group-open:text-blue-600">
              <span className="flex items-center gap-2">
                {faq.role === "Users/Admins" && <span className="text-green-500 font-bold">👥</span>}
                {faq.role === "Agents/Users" && <span className="text-yellow-500 font-bold">⚡</span>}
                {faq.role === "Admins" && <span className="text-red-500 font-bold">⚙️</span>}
                {faq.role === "All" && <span className="text-blue-500 font-bold">⭐</span>}
                {faq.question}
              </span>
              <span className="text-blue-500 font-bold transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-gray-600 text-sm md:text-base">{faq.answer}</p>
          </details>
        </motion.div>
      ))}

    </div>
  </div>

  {/* Decorative Floating Shapes */}
  <div className="absolute top-0 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-100 rounded-full opacity-20 animate-bounce-slow delay-200"></div>
</section>

 {/* Contact Section */}
<section className="py-24 bg-gradient-to-r from-blue-50 to-white" id="contact">
  <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-12">

    {/* Contact Info */}
    <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 mb-8 text-lg md:text-xl"
      >
        Have questions, need support, or want to collaborate? Reach out and we’ll get back to you promptly.
      </motion.p>

      <div className="space-y-4 text-gray-700 text-left">
        <p className="flex items-center gap-3"><span className="text-blue-600">📧</span> support@resolveos.com</p>
        <p className="flex items-center gap-3"><span className="text-green-600">📞</span> +1 (555) 123-4567</p>
        <p className="flex items-center gap-3"><span className="text-red-600">📍</span> 123 Resolve St, Tech City, USA</p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="md:w-1/2 bg-white p-10 rounded-3xl shadow-lg">
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-xl py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-xl py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full border border-gray-300 rounded-xl py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>

  </div>

  {/* Decorative Shapes */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-100 rounded-full opacity-20 animate-bounce-slow delay-200"></div>
</section>


     {/* Footer */}
<footer className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-gray-300 py-16 mt-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* About */}
    <div>
      <h2 className="text-xl font-bold text-white mb-4">ResolveOS</h2>
      <p className="text-sm leading-6">
        ResolveOS is a modern MERN-based ticket management platform for Users, Support Agents, and Admins.  
        Efficiently handle, track, and resolve support tickets with role-specific dashboards.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#features" className="hover:text-white transition">Features</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
        <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
      <p className="flex items-center gap-2 text-sm mb-2"><span className="text-blue-400">📧</span> support@resolveos.com</p>
      <p className="flex items-center gap-2 text-sm mb-2"><span className="text-green-400">📞</span> +1 (555) 123-4567</p>
      <p className="flex items-center gap-2 text-sm"><span className="text-red-400">📍</span> 123 Resolve St, Tech City, USA</p>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white transition text-2xl">🐦</a>
        <a href="#" className="hover:text-white transition text-2xl">💼</a>
        <a href="#" className="hover:text-white transition text-2xl">📘</a>
        <a href="#" className="hover:text-white transition text-2xl">📸</a>
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="mt-12 border-t border-blue-700 pt-6 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} ResolveOS — All Rights Reserved.
  </div>

  {/* Decorative Floating Shapes */}
  <div className="absolute top-10 left-10 w-24 h-24 bg-purple-600 rounded-full opacity-10 animate-bounce-slow"></div>
  <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-600 rounded-full opacity-10 animate-bounce-slow delay-200"></div>
</footer>


    </div>
  );
}
