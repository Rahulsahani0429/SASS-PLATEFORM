// // // // src/App.jsx
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Register from "./pages/Register";
// // // import Login from "./pages/Login";
// // // import Home from "./pages/Home";
// // // import Dashboard from "./pages/Dashboard";
// // // import Navbar from "./components/Navbar";

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <Navbar />
// // //       <Routes>
// // //         <Route path="/" element={<Register />} />
// // //         <Route path="/login" element={<Login />} />
// // //         <Route path="/home" element={<Home />} />
// // //         <Route path="/dashboard" element={<Dashboard />} />
// // //       </Routes>
// // //     </Router>
// // //   );
// // // };

// // // export default App;

// // import React from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Dashboard from "./pages/Dashboard";
// // import Header from "./components/Header";
// // import useAuthStore from "./store/authStore";

// // const App = () => {
// //   const { user } = useAuthStore();

// //   return (
// //     <>
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route
// //           path="/login"
// //           element={!user ? <Login /> : <Navigate to="/dashboard" />}
// //         />
// //         <Route
// //           path="/dashboard"
// //           element={user ? <Dashboard /> : <Navigate to="/login" />}
// //         />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Header from "./components/Header";
// import useAuthStore from "./store/authStore";

// const App = () => {
//   const { user } = useAuthStore();

//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/login"
//           element={!user ? <Login /> : <Navigate to="/dashboard" />}
//         />
//         <Route
//           path="/dashboard"
//           element={user ? <Dashboard /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
