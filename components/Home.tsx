import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="bg-default">
      <div className="max-w-screen-full flex flex-col min-h-screen w-full font-light">
        <Navbar />
        <Hero />
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      ></div>
    </div>
  );
};