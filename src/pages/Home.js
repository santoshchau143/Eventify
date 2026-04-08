import React from "react";

const Home = () => {
  return (
    <div className="container">

      <div className="hero">
        <div className="hero-left">
          <h1>Event Management</h1>
          <p>Discover and book your favorite events</p>

          <div className="search-box">
            <input type="text" placeholder="Search for events" />
            <button type="submit">Find Events</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="event"
          />
        </div>
      </div>

      <div className="categories">
        <div className="card concert">🎵 Concert</div>
        <div className="card sport">⚽ Sport</div>
        <div className="card college">🎓 College Fest</div>
      </div>
            <div className="footer">

      </div>

    </div>

  );
};

export default Home;