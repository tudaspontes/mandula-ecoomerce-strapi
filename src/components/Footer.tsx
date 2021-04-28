export default function Footer() {
  return (
    <div className="flex justify-between m-6 max-h-screen">
      <p className="text-xs font-semibold text-gray-600">
        Mandula Natural 2021 | © Todos os Direitos Reservados
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://instagram.com/" className="ml-3"
        >
          <img src="/instagram.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};
