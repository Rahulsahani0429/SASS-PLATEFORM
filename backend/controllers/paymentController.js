// controllers/paymentController.js
import Razorpay from "razorpay";
import crypto from "crypto";
import razorpay from "../config/razorpay.js";

export const createOrder = async (req, res) => {
  const { amount, currency = "INR" } = req.body;
  try {
    const options = {
      amount: amount * 100, // in paise
      currency,
      receipt: `rcpt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json({ message: "Payment order failed", error: err.message });
  }
};

export const verifyPayment = (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return res.status(200).json({ message: "Payment verified successfully" });
  } else {
    return res.status(400).json({ message: "Invalid signature" });
  }
};
