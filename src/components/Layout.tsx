import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Layout = ({ children, categories }) => {
  return (
    <div className="bg-default">
      <div className="max-w-screen-full flex flex-col min-h-screen w-full font-light">
        <Navbar />

        <div className="flex-grow">{children}</div>
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

export default Layout;
