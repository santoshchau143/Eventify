import React from "react";
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="profile-page">

      <div className="profile-wrapper">
        <div className="profile-card">

          {/* Avatar */}
          <div className="profile-avatar">
            <span>{user?.username?.charAt(0).toUpperCase()}</span>
          </div>

          {/* User Info */}
          <h2>{user?.username}</h2>
          <p className="email">{user?.email}</p>

          {/* Info Box */}
          <div className="profile-info">
            <div>
              <p className="label">Username</p>
              <p>{user?.username}</p>
            </div>

            <div>
              <p className="label">Email</p>
              <p>{user?.email}</p>
            </div>

            <div>
              <p className="label">Phone</p>
              <p>{user?.phone || "Not Added"}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="profile-actions">
            <button className="edit-btn">Edit Profile</button>

            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("currentUser");
                window.dispatchEvent(new Event("userChanged")); // 🔥 update navbar
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Profile;