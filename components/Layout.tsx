import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Layout = ({ children, categories }) => {
  return (
    <div className="bg-default">
      <div className="max-w-screen-full flex flex-col min-h-screen w-full font-light">
        <Navbar />
        <Hero />

        <div className="mx-auto p-4 ">
          <a href="a">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
          </a>
        </div>

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
