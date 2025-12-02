import React from "react";

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Landing Section */}
      <section className="h-screen bg-gradient-to-r from-blue-900 to-blue-600 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Welcome to TicketMaster</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Efficient, secure, and user-friendly ticket management system to streamline your events and customer support.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 w-72">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Easy to Use</h3>
            <p>Intuitive interface that helps you manage tickets effortlessly.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 w-72">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Secure</h3>
            <p>All your data is encrypted and securely stored in our system.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 w-72">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">24/7 Support</h3>
            <p>Our support team is always available to assist you with any issues.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
          TicketMaster is dedicated to providing seamless ticketing solutions for events, support systems, and more. Our mission is to simplify ticket management while ensuring efficiency, reliability, and customer satisfaction.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h2>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
            required 
          />
          <textarea 
            placeholder="Your Message" 
            rows="5" 
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        &copy; 2025 TicketMaster. All Rights Reserved.
      </footer>

    </div>
  );
};

export default Landing;
