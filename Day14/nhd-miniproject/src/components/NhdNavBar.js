import React from 'react';
import { Link } from 'react-router-dom';

export default function NhdNavBar() {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-200"
          >
          | Home
          </Link>
          <Link
            to="/list-user"
            className="text-white text-lg font-medium hover:text-gray-300 transition duration-200"
          >
          | Danh sách User
          </Link>
          <Link
            to="/create-user"
            className="text-white text-lg font-medium bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
          | Thêm User
          </Link>
        </nav>
      </div>
    </header>
  );
}
