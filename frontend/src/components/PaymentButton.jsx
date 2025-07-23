import React from "react";
import { toast } from "react-toastify";
import { loadRazorpay } from "../utils/razorpay";

const PaymentButton = () => {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      toast.error("Razorpay SDK लोड नहीं हुआ");
      return;
    }

    // ⚙️ Payment order details — ideally from backend
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY, // Razorpay Dashboard से API Key
      amount: 49900, // ₹499 = 49900 paise
      currency: "INR",
      name: "My SaaS App",
      description: "Pro Plan Subscription",
      image: "/logo.png", // optional logo
      handler: function (response) {
        toast.success("पेमेंट सफल 🎉");
        console.log("Payment ID:", response.razorpay_payment_id);
      },
      prefill: {
        name: "Rahul Sahani",
        email: "rahul@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-lg transition"
    >
      Pay ₹499
    </button>
  );
};

export default PaymentButton;
