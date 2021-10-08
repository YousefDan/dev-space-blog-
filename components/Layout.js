import Head from "next/head";
import { Fragment } from "react";
import Header from "./Header";
import Search from "./Search";

const Layout = ({ children, keywords, title, description }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto px-5 mt-7">{children}</main>
    </Fragment>
  );
};
Layout.defaultProps = {
  title: "Welcome To DevSpace",
  description: "This App Is About Programming",
  keywords: "coding, web, programming, blockchain",
};

export default Layout;
