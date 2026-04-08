import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  // ✅ define navigate
  const navigate = useNavigate();

  // ✅ define form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // ✅ handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ login function
  const handleLogin = () => {
    const { email, password } = form;

    if (!email || !password) {
      alert("All fields are required ❗");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const valid = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!valid) {
      alert("Invalid credentials ❌");
      return;
    }

    // ✅ save user
    localStorage.setItem("currentUser", JSON.stringify(valid));

    alert("Login Success ✅");

    // ✅ redirect
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <div className="login-left">
          <h1>Hello, Welcome!</h1>
          <p>Don’t have an account?</p>

          <button
            className="register-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

        </div>

      </div>
    </div>
  );
};

export default Login;