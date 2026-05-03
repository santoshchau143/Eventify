import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 LOGIN FUNCTION
  const handleLogin = async () => {
    const { emailOrPhone, password } = form;

    if (!emailOrPhone || !password) {
      alert("All fields are required ❗");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      // ✅ Save user
      localStorage.setItem("currentUser", JSON.stringify(res.data.user));

      // 🔥 IMPORTANT: update navbar instantly
      window.dispatchEvent(new Event("userChanged"));

      alert("Login Success ✅");

      navigate("/"); // go to home
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.msg || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ENTER KEY SUPPORT
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* LEFT PANEL */}
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

        {/* RIGHT FORM */}
        <div className="login-right">
          <h2>Login</h2>

          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone"
            value={form.emailOrPhone}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />

          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;