import axios from "axios";

export default function Checkout() {

  const handlePayment = async () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const total = cart.reduce((sum, i) => sum + i.total, 0);

      // 🔥 CALL BACKEND
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: total }
      );

      const options = {
        key: "rzp_test_SkmKGXrKPtmzjc", // ✅ YOUR KEY ID
        amount: data.amount,
        currency: "INR",
        order_id: data.id,

        handler: async function (response) {
          console.log("PAYMENT SUCCESS:", response);

          await axios.post("http://localhost:5000/api/booking", {
            items: cart,
            total,
            paymentId: response.razorpay_payment_id,
          });

          alert("Payment Success 🎉");
          localStorage.removeItem("cart");
          window.location.href = "/my-bookings";
        },

        modal: {
          ondismiss: function () {
            alert("Payment cancelled ❌");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.log(err);
      alert("Payment failed ❌");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Checkout</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}