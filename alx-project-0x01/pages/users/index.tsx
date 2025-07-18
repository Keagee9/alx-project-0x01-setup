import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const UsersPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">All Users</h1>
        <div className="bg-white shadow-md rounded-lg p-6 m-4 text-center">
          <p className="text-lg text-gray-700">User list will be displayed here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;