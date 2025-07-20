import { useState } from "react";
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

  return (
    <div>
      <Header />
      <button onClick={() => setModalOpen(true)}>Create Post</button>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(post) => console.log(post)}
        post={post ?? undefined}
      />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostData[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
