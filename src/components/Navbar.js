import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateUser = () => {
      const currentUser = localStorage.getItem("currentUser");
      setUser(currentUser ? JSON.parse(currentUser) : null);
    };

    updateUser();
    window.addEventListener("userChanged", updateUser);

    return () =>
      window.removeEventListener("userChanged", updateUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("userChanged"));
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <h2 className="logo" onClick={() => navigate("/")}>
        Eventify
      </h2>

      {/* HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/events")}>Events</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        {user ? (
          <div className="profile-container">
            <div
              className="profile-icon"
              onClick={() => setShowMenu(!showMenu)}
            >
              👤
            </div>

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
      </div>
    </nav>
  );
};

export default Navbar;