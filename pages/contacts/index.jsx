import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import img from "../../assets/images/contacts/next-bg.png";
import ContactsPage from "../../components/Contacts/Index";
import Layout from "../../components/_Layouts/Layout";
const Contacts = () => {
  const nextPageData = {
    title: "Home",
    bgImg: img,
    link: "/",
  };
  return (
    <Layout
      meta={
        <>
          <title>Myndspan</title>
          <title>Contacts - Myndspan</title>
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
      <ContactsPage />
    </Layout>
  );
};

export default Contacts;
