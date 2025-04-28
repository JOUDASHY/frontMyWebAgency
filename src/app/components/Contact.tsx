"use client";

import React, { useState, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePaperAirplane } from "react-icons/hi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "787ea491-c99b-45f9-8b15-7375e439fe7e");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert("Send failed: " + result.message);
      }
    } catch (error) {
      alert("An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.4),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(219,39,119,0.3),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
              Get in Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                    <HiOutlineLocationMarker className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Our Location</h4>
                    <p className="mt-1 text-gray-400">Fianarantsoa, Madagascar</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-600 to-pink-400 flex items-center justify-center">
                    <HiOutlineMail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email Us</h4>
                    <a 
                      href="mailto:contact@thebeast.site" 
                      className="mt-1 text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      contact@thebeast.site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-0 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border-0 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border-0 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="h-5 w-5 rotate-90 transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-gradient-to-r from-blue-900/50 to-pink-900/50 border border-green-500/20 rounded-xl flex items-center justify-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;