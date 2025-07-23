// import { StrictMode } from "react";
// import React from "react";
// import { createRoot } from "react-dom/client";
// // import './index.css'
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//       <ToastContainer position="top-right" autoClose={3000} />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// main.jsx या index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // ✅ Router यहाँ use करो

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* ✅ BrowserRouter सिर्फ यहाँ यूज़ करो */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
