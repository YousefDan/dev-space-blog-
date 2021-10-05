import Layout from "@/components/Layout";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <section className="mt-12 flex flex-col items-center justify-center">
        <img
          src="/images/logo.png"
          alt=""
          className="bg-gray-800 rounded-xl w-40 h-28 my-5"
        />
        <h1 className="font-semibold my-3 text-6xl">Whoops!</h1>
        <p className="text-3xl text-gray-600 my-4">This Page Does Not Exist</p>
        <Link href="/">
          <a className="text-blue-800 text-xl font-semibold">
            {"< "} Go Back To Home Page
          </a>
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
