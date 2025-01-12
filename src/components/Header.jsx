import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Import ikon

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <FaHome className="text-white" /> {/* Ikon Home */}
          <span>Flood Natural Disaster Information</span>
        </h1>
        <nav>
          <Link to="/" className="mx-2 hover:underline flex items-center space-x-1 transition-all duration-300">
            <FaHome className="text-white" /> {/* Ikon untuk Home */}
            <span>Home</span>
          </Link>
          <Link to="/login" className="mx-2 hover:underline flex items-center space-x-1 transition-all duration-300">
            <FaSignInAlt className="text-white" /> {/* Ikon untuk Login */}
            <span>Login</span>
          </Link>
          <Link to="/register" className="mx-2 hover:underline flex items-center space-x-1 transition-all duration-300">
            <FaUserPlus className="text-white" /> {/* Ikon untuk Register */}
            <span>Register</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
