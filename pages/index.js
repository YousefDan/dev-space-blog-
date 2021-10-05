import Layout from "@/components/Layout";
import PostItem from "@/components/PostItem";
import { getPosts } from "@/lib/index";
import Link from "next/link";

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <h1 className="border-b-2 pb-3 mb-5 text-4xl font-bold">Latest Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
      <Link href="/blog">
        <a className="block w-full my-4 duration-500 transition rounded-md border p-2 text-center hover:text-white hover:bg-gray-900">All Posts</a>
      </Link>
    </Layout>
  );
};

// Get Static Props
export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts: posts.slice(0, 6),
    },
  };
}

export default HomePage;
