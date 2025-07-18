import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (user: UserData) => {
    setNewUser({ ...user, id: posts.length + 1 });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-center">All Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              username={user.username}
              phone={user.phone}
              website={user.website}
              company={user.company}
              address={user.address}
            />
          ))}
          {newUser && (
            <UserCard
              key={newUser.id}
              name={newUser.name}
              email={newUser.email}
              username={newUser.username}
              phone={newUser.phone}
              website={newUser.website}
              company={newUser.company}
              address={newUser.address}
            />
          )}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}

      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
