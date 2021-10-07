import { getCategoryPaths, getPosts } from "@/lib/index";
import Layout from "@/components/Layout";
import PostItem from "@/components/PostItem";
import CategoryList from "@/components/CategoryList";

const CategoryPage = ({ posts, categoryName, categories }) => {
  return (
    <Layout>
      <h1 className="border-b-2 pb-3 mb-5 text-4xl font-bold">
        Posts in {categoryName}
      </h1>
      <div className="flex justify-between items-start">
        <div className="sm:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <div className="sm:w-1/4 hidden sm:block">
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

// Get Static Props
export async function getStaticProps({ params: { category_page } }) {
  const posts = getPosts();

  const categories = posts.map((post) => post.category);
  const uniqueCategory = [...new Set(categories)];
  return {
    props: {
      posts: posts.filter(
        (post) => post.category.toLowerCase() === category_page
      ),
      categoryName: category_page,
      categories: uniqueCategory,
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
