import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Left Section */}
        <div className="footer-col">
          <h2 className="logo">⭐ EventApp</h2>
          <p>Your gateway to unforgettable events</p>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Browse Events</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <p>📧 support@gmail.com</p>
          <p>📞 +91 9140882176</p>
          <p>📍 Lucknow, India</p>
        </div>

      </div>

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 EventApp. All Rights Reserved.</p>

        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;