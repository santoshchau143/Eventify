import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // 🔐 CHECK LOGIN + LOAD CART
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Please login first ❗");
      navigate("/login");
      return;
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const validCart = storedCart.filter(
      (item) => item && item.seats && item.seats.length > 0
    );

    setCart(validCart);
    localStorage.setItem("cart", JSON.stringify(validCart));
  }, [navigate]);

  // 💰 TOTAL
  const total = cart.reduce(
    (sum, item) =>
      sum + (item.total || item.price * (item.seats?.length || 1)),
    0
  );

  // ❌ REMOVE ITEM
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // 🔥 CHECKOUT WITH LOGIN CHECK
  const handleCheckout = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      alert("Login required to proceed ❗");
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="empty">No items in cart ❌</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="cart-card">
            <h4>{item.title || "Untitled Event"}</h4>

            <p>
              <b>Seats:</b>{" "}
              {item.seats?.length ? item.seats.join(", ") : "No seats"}
            </p>

            <p><b>Price per seat:</b> ₹{item.price || 0}</p>

            <p>
              <b>Total:</b> ₹
              {item.total ||
                (item.price || 0) * (item.seats?.length || 1)}
            </p>

            <button
              className="remove-btn"
              onClick={() => removeItem(i)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <h3 className="total">Grand Total: ₹{total}</h3>

      <button
        className="checkout-btn"
        onClick={handleCheckout}
        disabled={cart.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}