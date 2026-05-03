import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    DOB: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { username, email, phone, DOB, password } = form;

    // ✅ Improved validation
    if (!username || !email || !phone || !DOB || !password) {
      alert("All fields are required ❗");
      return;
    }
    if (phone.length !== 10) {
      alert("Enter valid 10-digit phone number");
      return;
    }  

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert(res.data.msg || "Registered Successfully ✅");

      // ✅ clear form
      setForm({
        username: "",
        email: "",
        phone: "",
        DOB: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      console.log(err); // 🔥 debug
      alert(err.response?.data?.msg || "Something went wrong ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

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

          {/* ✅ FIXED */}
          <input
            type="tel"
            placeholder="Mobile Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="date"
            name="DOB"
            value={form.DOB}
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