import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import PostItem from "@/components/PostItem";
import { getPosts } from "@/lib/index";
import { POST_PER_PAGE } from "config";

const BlogPage = ({ posts, pages, currentPage }) => {
  return (
    <Layout>
      <h1 className="border-b-2 pb-3 mb-5 text-4xl font-bold">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
      <Pagination pages={pages} currentPage={currentPage} />
    </Layout>
  );
};

// Get Static Props
export async function getStaticProps({ params }) {
  const currentPage = parseInt((params && params.page_index) || 1);

  const posts = getPosts();
  const pages = Math.ceil(posts.length / POST_PER_PAGE);

  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const finishedIndex = currentPage * POST_PER_PAGE;
  const orderedPosts = posts.slice(startIndex, finishedIndex);

  return {
    props: {
      posts: orderedPosts,
      currentPage,
      pages
    },
  };
}
// Get Static Paths
export async function getStaticPaths() {
  const posts = getPosts();
  const pages = Math.ceil(posts.length / POST_PER_PAGE);

  const paths = [];

  for (let i = 1; i <= pages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export default BlogPage;
