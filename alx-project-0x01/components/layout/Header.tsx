import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ALX Project</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/posts" className="hover:text-gray-300">Posts</a></li>
          <li><a href="/users" className="hover:text-gray-300">Users</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;