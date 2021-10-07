import CategoryList from "@/components/CategoryList";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import PostItem from "@/components/PostItem";
import { getPosts } from "@/lib/index";
import { POST_PER_PAGE } from "config";

const BlogPage = ({ posts, pages, currentPage, categories }) => {
  return (
    <Layout>
      <h1 className="border-b-2 pb-3 mb-5 text-4xl font-bold">Blog</h1>
      <div className="flex justify-between items-start">
        <div className="sm:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
          <Pagination pages={pages} currentPage={currentPage} />
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

// Get Static Props
export async function getStaticProps({ params }) {
  const currentPage = parseInt((params && params.page_index) || 1);

  const posts = getPosts();

  // Category List
  const categories = posts.map(post => post.category);
  const uniqueCategory = [...new Set(categories)];

  // Pagination
  const pages = Math.ceil(posts.length / POST_PER_PAGE);
  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const finishedIndex = currentPage * POST_PER_PAGE;
  const orderedPosts = posts.slice(startIndex, finishedIndex);

  return {
    props: {
      posts: orderedPosts,
      currentPage,
      pages,
      categories: uniqueCategory
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
