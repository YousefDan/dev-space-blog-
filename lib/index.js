import matter from "gray-matter";
import fs from "fs";
import path from "path";
// Get All Post
export function getPosts() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const markDownWithMeta = fs.readFileSync(
      path.join("posts", fileName),
      "utf-8"
    );

    const { data } = matter(markDownWithMeta);

    return {
      slug,
      ...data,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
// Get Paths Based On Slug
export function getPaths() {
  const posts = getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return paths;
}
// Get Single Post
export function getSinglePost(slug) {
  const file = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  return matter(file);
}
// Get Paths Based On Category
export function getCategoryPaths() {
  const posts = getPosts();
  const paths = posts.map((post) => ({
    params: { category_page: post.category.toLowerCase() },
  }));
  return paths;
}
