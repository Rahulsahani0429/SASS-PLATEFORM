// import React from "react";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import useAuthStore from "../store/authStore";

// const Register = () => {
//   const navigate = useNavigate();
//   const { registerUser } = useAuthStore();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return;
//     }

//     const success = await registerUser(formData);

//     if (success) {
//       toast.success("Registered successfully!");
//       navigate("/login");
//     } else {
//       toast.error("Registration failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">
//       <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-full max-w-md shadow-2xl text-white">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           Create an Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label htmlFor="name" className="block text-sm mb-1">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="********"
//               className="w-full px-4 py-2 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 rounded-xl bg-purple-500 hover:bg-purple-600 font-semibold"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-sm text-center mt-6">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-300 hover:underline">
//             Login now
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;
