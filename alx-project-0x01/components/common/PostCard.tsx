import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-80">
      <h2 className="text-xl font-semibold mb-2">Post Title</h2>
      <p className="text-gray-700">This is a brief description of the post content.</p>
    </div>
  );
};

export default PostCard;
