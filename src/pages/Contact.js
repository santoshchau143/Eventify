import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have questions or need help? Reach out to us anytime.
      </p>

      <div className="contact-content">
        {/* LEFT: CONTACT INFO */}
        <div className="contact-info">
          <h3>📍 Address</h3>
          <p>Lucknow, Uttar Pradesh, India</p>

          <h3>📧 Email</h3>
          <p>support@eventify.com</p>

          <h3>📞 Phone</h3>
          <p>+91 9140882176</p>
        </div>

        {/* RIGHT: FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* FOOTER */}
      <div className="contact-footer">
        <p>We will respond within 24 hours ⏱️</p>
      </div>
    </div>
  );
};

export default Contact;