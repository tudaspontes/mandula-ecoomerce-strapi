import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-default">
      <div className="mx-auto px-6">
        <div className="flex justify-between">
          <div className="flex mr-4">
            <Link href="/">
              <a>
                <img
                  src="/logo.png"
                  alt="home"
                  className="logo"
                  width="286"
                  height="165"
                />
              </a>
            </Link>
          </div>
          {/* mobile nav */}
          <div className="flex items-center space-x-10">
            <Link href="/">
              <div className="flex md:hidden">
                <button id="hamburger">
                  <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                  <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
              </div>
            </Link>
            {/* primary nav */}
            <Link href="/">
              HOME
            </Link>
            <Link href="/about">
              QUEM SOMOS
            </Link>
            <Link href="/products" prefetch>
              PRODUTOS
            </Link>

            <Link href="/contact">
              CONTATO
            </Link>
            <Link href="/">
            <button className="snipcart-checkout flex items-center">
              <img src="/cart.svg" alt="Cart" />
              <span className="snipcart-total-price ml-3 font-semibold text-sm text-gray"></span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};