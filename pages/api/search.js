import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function searchHandler(req, res) {
  let posts;
  if (process.env.NODE_ENV === "production") {
    // @todo - fetch from cache
  } else {
    const files = fs.readdirSync(path.join("posts"));

    posts = files.map((fileName) => {
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
  }

  const results = posts.filter(
    (post) =>
      post.title.toLowerCase().indexOf(req.query.q) != -1 ||
      post.category.toLowerCase().indexOf(req.query.q) != -1
  );
  res.status(200).json(JSON.stringify({ results }));
}
