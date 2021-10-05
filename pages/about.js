import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout title="About This App">
      <h1 className="border-b-4 pb-3 text-4xl font-bold">About</h1>
      <div className="shadow-xl p-4">
        <h2 className="text-xl text-gray-800">DevSpace</h2>
        <p className="my-3">This app is about blog project build by Nextjs</p>
        <strong>Version: 1.0.0</strong>
      </div>
    </Layout>
  );
};

export default About;
