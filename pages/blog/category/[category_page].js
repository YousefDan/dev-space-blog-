import { getCategoryPaths, getPosts } from "@/lib/index";
import Layout from "@/components/Layout";
import PostItem from "@/components/PostItem";

const CategoryPage = ({ posts, categoryName }) => {
  return (
    <Layout>
      <h1 className="border-b-2 pb-3 mb-5 text-4xl font-bold">
        Posts in {categoryName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

// Get Static Props
export async function getStaticProps({ params: { category_page } }) {
  const posts = getPosts();
  return {
    props: {
      posts: posts.filter(
        (post) => post.category.toLowerCase() === category_page
      ),
      categoryName: category_page,
    },
  };
}
//
export async function getStaticPaths() {
  return {
    paths: getCategoryPaths(),
    fallback: false,
  };
}

export default CategoryPage;
