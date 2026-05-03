import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("All fields are required ❗");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      alert(res.data.msg || "Message sent successfully ✅");

      // clear form
      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.log(err);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions or need help? Reach out to us anytime.</p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>Lucknow, Uttar Pradesh, India</p>

          <h3>📧 Email</h3>
          <p>support@eventify.com</p>

          <h3>📞 Phone</h3>
          <p>+91 9140882176</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-footer">
        <p>We will respond within 24 hours ⏱️</p>
      </div>
    </div>
  );
};

export default Contact;