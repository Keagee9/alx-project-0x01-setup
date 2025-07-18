import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import PostCard from '../../components/common/PostCard';

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <PostCard />
          <PostCard />
          <PostCard />
          {/* Add more PostCard components as needed */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
