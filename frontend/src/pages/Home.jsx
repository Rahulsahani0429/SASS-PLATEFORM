// // src/pages/Home.jsx
// import React from "react";
// import  useAuthStore  from "../store/authStore";

// import { Link } from "react-router-dom";

// const Home = () => {
//   const { user } = useAuthStore();

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">
//         Welcome {user?.name || "Guest"} 🎉
//       </h1>

//       <Link
//         to="/dashboard"
//         className="text-blue-600 underline hover:text-blue-800"
//       >
//         Go to Dashboard
//       </Link>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import UploadBox from "../components/UploadBox";
import PaymentButton from "../components/PaymentButton";

// import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-10 px-4 max-w-5xl mx-auto">
        <HeroSection />
      </section>

      {/* Upload Section */}
      <section className="mt-8 px-4 max-w-3xl mx-auto">
        <UploadBox />
      </section>

      {/* Payment Section */}
      <section className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Upgrade to Pro Plan</h2>
        <PaymentButton />
      </section>
    </div>
  );
};

export default Home;
