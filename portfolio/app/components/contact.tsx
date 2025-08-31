'use client';
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => { 
    e.preventDefault();
    if (!form.current) return;

    emailjs.sendForm(
      "service_0tc45mg", 
      "template_jn0hl7d", 
      form.current, 
      { publicKey: "0X005Nz_tJ7quFh3O" }
    ).then(
      () => {
        console.log("SUCCESS!");
        form.current?.reset(); // ✅ clears form after success
      }, 
      (error) => {
        console.log("FAILED...", error.text);
      }
    );    
  }

  return (
    <section className="bg-[#0f172a] text-white px-6 py-16 border-t rounded-t-lg">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-300">Fill out the form below to get in touch</p>
          <h3 className="text-2xl font-semibold leading-snug">
            Have a Project in mind? <br /> Let’s talk!
          </h3>
          <p className="text-gray-400">
            Have questions or need assistance? Contact us for support to discuss your project.
          </p>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 bg-[#1e293b] p-6 rounded-2xl shadow-lg"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"   // ✅ required for EmailJS
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"  // ✅ required for EmailJS
              placeholder="Your best Email address"
              className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            name="subject"      // ✅ optional but useful
            placeholder="Project Subject"
            className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"      // ✅ required for EmailJS
            placeholder="About Project"
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-[#0f172a] text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
