import Layout from "../../components/_Layouts/Layout";
import img from "../../assets/images/our-service/footer-bg.png";
import OurServicePage from "../../components/OurService/Index";

const OurService = () => {
  const nextPageData = {
    title: "About us",
    bgImg: img,
    link: "/about-us",
  };
  return (
    <Layout
      meta={
        <>
          <title>Myndspan</title>
          <title>Our Service - Myndspan</title>
          <meta name="description" content="" />
          <link
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </>
      }
      nextPageData={nextPageData}
    >
      <OurServicePage />
    </Layout>
  );
};

export default OurService;
