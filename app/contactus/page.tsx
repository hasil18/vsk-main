"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({ name: "", email: "", phone: "", message: "" });
    } else {
      setSuccess("");
      alert("Something went wrong!");
    }
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">
              Contact VSK Construction
            </h2>
            <p className="text-gray-500 mt-3">
              We’d love to hear from you. Send us a message and we’ll respond shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-600 text-center mt-2">{success}</p>
            )}
          </form>
        </div>

        {/* Contact Info Card (Now Below Form) */}
        <div className="bg-gray-900 text-white mt-12 p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-2">📞 +91 9979206812</p>
          <p className="mb-2">📞 +91 7874152686</p>
          <p className="mb-2">📧 vskconstruction32@gmail.com</p>
          <p>📍 Gujarat, India</p>
        </div>

        {/* Google Map Below Info Card */}
        <div className="rounded-3xl overflow-hidden shadow-xl mt-8">
          <iframe
            src="https://www.google.com/maps?q=Gujarat,India&output=embed&z=12"
            width="100%"
            height="400"
            loading="lazy"
            className="grayscale contrast-125"
          ></iframe>
        </div>

      </div>
    </div>
  );
}