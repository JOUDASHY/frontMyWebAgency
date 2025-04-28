"use client";

import React, { useState, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePaperAirplane } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("access_key", "30e0198b-9fe5-4e87-97a5-97dc8ac90f58");
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("message", form.message);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Échec : " + json.message);
      }
    } catch {
      alert("Erreur lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-12 md:py-24 bg-light text-black overflow-hidden"
      style={{
        backgroundImage: "url('https://img.freepik.com/premium-photo/gold-leaf-pattern-white-background_956920-132597.jpg?w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Nouveau fond avec overlay blanc et blur */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--blue)] rounded-full mix-blend-soft-light blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-[var(--blue-ciel)] rounded-full mix-blend-soft-light blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-soft-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-[var(--blue)]">
            Get in Touch
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
            Have a project in mind? Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 md:space-y-12"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[var(--blue)] relative before:absolute before:-bottom-2 before:left-0 before:w-12 before:h-1 before:bg-[var(--blue-ciel)]">
                Contact Information
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-[var(--blue-ciel)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--blue)]">
                    <HiOutlineLocationMarker className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-gray-800">Our Location</h4>
                    <p className="mt-1 text-sm md:text-base text-gray-600">Fianarantsoa, Madagascar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4 group">
                  <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-[var(--blue-ciel)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--blue)]">
                    <HiOutlineMail className="h-5 w-5 md:h-6 md:w-6 text-black group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-medium text-gray-800">Email Us</h4>
                    <a
                      href="mailto:contact@thebeast.site"
                      className="mt-1 text-sm md:text-base text-gray-600 hover:text-[var(--blue)] transition-colors"
                    >
                      contact@thebeast.site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[var(--blue)] relative before:absolute before:-bottom-2 before:left-0 before:w-12 before:h-1 before:bg-[var(--blue-ciel)]">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { icon: FaFacebookF, color: "#1877F2" },
                  { icon: FaInstagram, color: "#E4405F" },
                  { icon: FaTwitter, color: "#1DA1F2" },
                  { icon: FaLinkedin, color: "#0A66C2" },
                  { icon: FaGithub, color: "#181717" },
                ].map(({ icon: Icon, color }, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -4 }}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
                    style={{ color }}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.a>
                ))}
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
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl md:rounded-[2rem] p-6 md:p-10 shadow-xl md:shadow-2xl border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[var(--blue-ciel)] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[var(--blue)] relative before:absolute before:-bottom-2 before:left-0 before:w-12 before:h-1 before:bg-[var(--blue-ciel)]">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-5 text-sm md:text-base text-gray-800 placeholder-gray-400 focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-ciel)] transition-all duration-300"
                      required
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="relative">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-5 text-sm md:text-base text-gray-800 placeholder-gray-400 focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-ciel)] transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-white border-2 border-gray-200 rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-5 text-sm md:text-base text-gray-800 placeholder-gray-400 focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-ciel)] transition-all duration-300 resize-none"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[var(--blue)] hover:bg-opacity-90 text-[var(--blue-ciel)] font-medium py-3 md:py-4 px-6 rounded-lg md:rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-[var(--blue-ciel)]" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962..."
                      />
                    </svg>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="h-4 w-4 md:h-5 md:w-5 rotate-90 text-[var(--blue-ciel)]" />
                      <span className="text-sm md:text-base text-[var(--blue-ciel)]">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 md:mt-8 p-4 md:p-6 bg-[var(--blue-ciel)]/10 border-2 border-[var(--blue)] rounded-lg md:rounded-xl flex items-center backdrop-blur-sm"
                >
                  <HiOutlinePaperAirplane className="h-5 w-5 md:h-6 md:w-6 text-[var(--blue)] mr-3 md:mr-4 flex-shrink-0" />
                  <p className="text-sm md:text-base text-[var(--blue)] font-medium">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}