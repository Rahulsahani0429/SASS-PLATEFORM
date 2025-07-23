import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#4cd964] via-[#3cbfbb] to-[#2c3e50] text-white py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Simplify Your Workflows with{" "}
        <span className="text-yellow-300">SaaSify</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8">
        Upload your documents, manage your data, and make payments — all in one
        place.
      </p>
      <Link
        to="/dashboard"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
      >
        Get Started
      </Link>
    </section>
  );
};

export default HeroSection;
