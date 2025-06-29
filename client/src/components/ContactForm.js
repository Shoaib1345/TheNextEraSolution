import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", message: ""
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData)
    }).then(res => alert("Message Sent!")).catch(err => console.error(err));
  };

  return (
    <section id="contact" className="p-10 bg-gray-100">
      <h3 className="text-3xl mb-6 font-bold text-center">Contact Us</h3>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-3" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-3" />
        <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-3" />
        <button type="submit" className="bg-green-400 px-6 py-3 rounded w-full">Send Message</button>
      </form>
    </section>
  );
}
