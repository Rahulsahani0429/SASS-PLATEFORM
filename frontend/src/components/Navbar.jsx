// // src/components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import  useAuthStore  from "../store/authStore";

// const Navbar = () => {
//   const { user, logoutUser } = useAuthStore();

//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-between">
//       <div>
//         <Link to="/home" className="mr-4">
//           Home
//         </Link>
//         <Link to="/dashboard">Dashboard</Link>
//       </div>
//       <div>
//         {user ? (
//           <>
//             <span className="mr-2">{user.name}</span>
//             <button
//               onClick={logoutUser}
//               className="bg-red-600 px-2 py-1 rounded"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="mr-4">
//               Register
//             </Link>
//             <Link to="/login">Login</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
