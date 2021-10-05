import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
import { getPaths, getSinglePost } from "@/lib/index";
import Link from "next/link";
import marked from "marked";
import styles from "@/styles/BlogContent.module.css";

const SingleBlogPage = ({ post, content }) => {
  const { cover_image, author, title, author_image, date, category } = post;
  return (
    <Layout>
      <Link href="/blog">
        <a className="text-blue-700 text-xl">{"< "} Go Back</a>
      </Link>
      <section className="p-4 shadow-2xl rounded-md my-7">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl my-3 font-semibold">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt="" className="w-full rounded-md" />
        <div className="flex items-center justify-between my-4 p-2 bg-gray-300 rounded-md">
          <div className="flex items-center">
            <img
              src={author_image}
              alt={author}
              className="w-10 h-10 rounded-full mr-3"
            />
            <strong>{author}</strong>
          </div>
          <div>{date}</div>
        </div>
        <div className={styles.blog}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </section>
    </Layout>
  );
};

//
export async function getStaticProps({ params: { slug } }) {
  const { data, content } = getSinglePost(slug);

  return {
    props: {
      post: data,
      content,
    },
  };
}
// 
export async function getStaticPaths() {
  return {
    paths: getPaths(),
    fallback: false,
  };
}
export default SingleBlogPage;
