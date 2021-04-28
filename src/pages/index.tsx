import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function Home(){
  return (
    <div className="bg-default">
      <Head>
        <title>Mandula Natural</title>
      </Head>
      <Hero />
      <Footer />
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      ></div>      
    </div>
  );
};

