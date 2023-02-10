import Layout from "../components/_Layouts/Layout";
import Homepage from "../components/Homepage/Index";
import img from "../assets/images/homepage/next-page-bg1.png";

export default function Home() {
  const nextPageData = {
    title: "Our Service",
    bgImg: img,
    link: "/our-service",
  };
  return (
    <Layout
      meta={
        <>
          <title>Myndspan</title>
          <meta name="description" content="" />
        </>
      }
      nextPageData={nextPageData}
    >
      <Homepage />
    </Layout>
  );
}
