import Layout from "../../components/_Layouts/Layout";
import img from "../../assets/images/about-us/next-bg.png";
import AboutUsPage from "../../components/AboutUs/Index";

const AboutUs = () => {
  const nextPageData = {
    title: "Contact us",
    bgImg: img,
    link: "/contacts",
  };
  return (
    <Layout
      meta={
        <>
          <title>Myndspan</title>
          <title>About Us - Myndspan</title>
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
      <AboutUsPage />
    </Layout>
  );
};

export default AboutUs;
