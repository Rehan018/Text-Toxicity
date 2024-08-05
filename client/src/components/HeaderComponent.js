import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <header className="w-full bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-xl font-semibold">Your Project Name</h1>
        {username ? (
          <div className="flex items-center text-white">
            <span className="mr-4">User: {username}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
