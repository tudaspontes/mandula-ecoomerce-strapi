import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-default">
      <Link href="/">
        <a className="mr-5">
          <img
            src="/logo.png"
            alt="home"
            className="logo"
            height="436"
            width="254"
          />
        </a>
      </Link>
      <Link href="/">
        <div className="flex md:hidden">
          <button id="hamburger">
            <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
            <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
          </button>
        </div>
      </Link>
      <Link href="/">
        LOGIN
      </Link>
      <Link href="/">
        CONTA
      </Link>
      <Link href="/">
        QUEM SOMOS
      </Link>
      <Link href="/">
        PRODUTOS
      </Link>
      <Link href="/">
        BLOG
      </Link>
      <Link href="/">
        CONTATO
      </Link>
      <Link href="/">
      <button className="snipcart-checkout flex items-center">
        <img src="/cart.svg" alt="Cart" />
        <span className="snipcart-total-price ml-3 font-semibold text-sm text-gray"></span>
      </button>
      </Link>
    </nav>
  );
};

export default Navbar;
