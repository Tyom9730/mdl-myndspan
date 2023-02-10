import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Cookies from "../Cookies";
import { useRouter } from "next/router";

function Layout({ meta, children, nextPageData }) {
  const router = useRouter();
  return (
    <>
      <Head>
        {meta}
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" href="/logo.32.png" sizes="32x32" />
        <link rel="icon" href="/logo.192.png" sizes="192x192" />
        <meta name="msapplication-TileImage" content="/logo.270x270.png" />
      </Head>
      <Header />
      {children}
      <Footer nextPageData={nextPageData} />
      <Cookies />
    </>
  );
}

export default Layout;
