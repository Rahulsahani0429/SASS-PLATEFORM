import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Header = () => {
  const { user, logoutUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <header className="bg-cyan-500 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SaaSify</h1>

      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        {user ? (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
