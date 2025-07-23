import React from "react";
import { Upload, CreditCard, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Upload size={32} className="text-blue-600" />,
    title: "Easy File Upload",
    description:
      "Upload and manage your files securely with our cloud service.",
  },
  {
    icon: <CreditCard size={32} className="text-green-600" />,
    title: "Razorpay Payments",
    description: "Accept payments instantly with Razorpay integration.",
  },
  {
    icon: <ShieldCheck size={32} className="text-purple-600" />,
    title: "Secure OAuth Login",
    description: "Login securely using Google OAuth and protect your data.",
  },
];

const FeatureCard = () => {
  return (
    <section className="py-16 bg-white px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Powerful Features
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
