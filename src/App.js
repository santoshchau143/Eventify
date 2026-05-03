import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import EventDetails from "./pages/EventDetails";
import Checkout from "./pages/Checkout";
import MyBookings from "./pages/MyBookings";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>}/>
        <Route path="/event/:id" element={<ProtectedRoute><EventDetails/></ProtectedRoute>} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
        <Route path="/mybookings" element={<MyBookings/>}/>
        <Route path="admindashboard" element={<AdminDashboard/>}/>        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;