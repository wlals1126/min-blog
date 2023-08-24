import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./components/PostCard";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="my-8 text-center text-3xl font-bold">
        Next.js & ContentLayer Blog Example
      </h1>
      {posts.map((post) => (
        <PostCard key={post._id} {...post} />
      ))}
    </main>
  );
}
