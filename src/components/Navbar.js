import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        Eventify
      </h2>

      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/events")}>Events</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* RIGHT SIDE */}
      {user ? (
        <div className="profile-container">
          <div
            className="profile-icon"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            👤
          </div>

          {/* 🔥 Dropdown */}
          {showMenu && (
            <div className="dropdown">
              <div onClick={() => navigate("/profile")}>Profile</div>
              <div onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      ) : (
        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Login / Sign Up
        </button>
      )}
    </nav>
  );
};

export default Navbar;