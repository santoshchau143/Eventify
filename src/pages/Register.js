import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { username, email, password } = form;

    // ✅ Required
    if (!username || !email || !password) {
      alert("All fields are required ❗");
      return;
    }

    // ✅ Unique check
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(
      (u) => u.email === email || u.username === username
    );

    if (exists) {
      alert("User already exists ❌");
      return;
    }

    // ✅ Save
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully ✅");

    navigate("/"); // go home
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* LEFT FORM (same design) */}
        <div className="login-right">
          <h2>Register</h2>

          <input
            type="text"
            placeholder="UserName"
            name="username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="login-btn" onClick={handleRegister}>
            Register
          </button>

          <p className="or">Or Register with other platform</p>

          <div className="social-login">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

        {/* RIGHT PANEL (UNCHANGED) */}
        <div className="login-left">
          <h1>Welcome, Back!</h1>
          <p>Already have an account?</p>

          <button
            className="register-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default Register;