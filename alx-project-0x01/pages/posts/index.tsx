'use client';
import React, { useState } from 'react';
import { PostProps, PostData } from '@/interfaces';
import Post from '@/components/Post';
import PostModal from '@/components/PostModal';

const dummyPosts: PostData[] = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post.',
    author: 'John Doe'
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the second post.',
    author: 'Jane Doe'
  }
];

export default function PostsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleClick = (post: PostData) => {
    setPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPost(null);
  };

  return (
    <div>
      <h1>Posts</h1>
      {dummyPosts.map((p) => (
        <div key={p.id} onClick={() => handleClick(p)}>
          <Post post={p} />
        </div>
      ))}
      {post && (
        <PostModal post={post} isOpen={isOpen} onClose={closeModal} />
      )}
    </div>
  );
}
