import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">All Users</h1>
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
        </div>
      </main>
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
