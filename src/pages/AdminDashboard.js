import { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  // 🔥 fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/messages"
      );
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // ❌ delete message
  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/admin/messages/${id}`
      );
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>📊 Admin Dashboard</h1>

      {messages.length === 0 ? (
        <p>No messages yet ❌</p>
      ) : (
        <div className="admin-grid">
          {messages.map((msg) => (
            <div key={msg._id} className="admin-card">
              <h3>{msg.name}</h3>
              <p><b>Email:</b> {msg.email}</p>
              <p><b>Message:</b> {msg.message}</p>

              <p className="time">
                {new Date(msg.createdAt).toLocaleString()}
              </p>

              <button
                onClick={() => deleteMessage(msg._id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}