import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-14 text-black tracking-wide">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row gap-10 bg-gray-50 rounded-lg shadow-lg p-10">
          {/* Contact Info */}
          <section className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-red-600 tracking-wide">Get in Touch</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Have questions or need support? We're here to help! Reach out to us anytime.
            </p>
            <ul className="space-y-4 text-gray-900 font-semibold text-lg">
              <li><span className="font-bold">Address:</span> 123 Sportzy Lane, Sports City, USA</li>
              <li><span className="font-bold">Email:</span> support@sportzy.com</li>
              <li><span className="font-bold">Phone:</span> +1 (555) 123-4567</li>
              <li><span className="font-bold">Working Hours:</span> Mon - Fri, 9am - 6pm</li>
            </ul>
          </section>

          {/* Contact Form */}
          <section className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-black tracking-wide">Send us a Message</h2>
            {submitted && (
              <p className="mb-6 text-green-600 font-semibold text-center">
                Thank you for contacting us! We will get back to you shortly.
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-gray-700 font-semibold tracking-wide"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-gray-700 font-semibold tracking-wide"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-gray-700 font-semibold tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
