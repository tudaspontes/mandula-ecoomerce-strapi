import Link from "next/link";

export function Header() {
  return (
    <header>
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
              <Link href="products">
                PRODUTOS
              </Link>
              <Link href="about">
                QUEM SOMOS
              </Link>
              <Link href="contact">
                CONTATO
              </Link>
              <Link href="/">
              <button className="snipcart-checkout flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="snipcart-total-price ml-3 font-semibold text-sm text-gray"></span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};