import { useState } from "react";
import { GetStaticProps } from "next";
import PostCard from "@/components/PostCard";
import PostModal from "@/components/PostModal";
import Header from "@/components/Header";
import { PostData } from "@/interfaces";

interface PostProps {
  posts: PostData[];
}

export default function Posts({ posts }: PostProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);

  const handleAddPost = (newPost: PostData) => {
    console.log("Post submitted:", newPost);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <button onClick={() => setModalOpen(true)}>Add Post</button>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
        initialData={post}
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostData[] = await res.json();
  return {
    props: {
      posts,
    },
  };
};
