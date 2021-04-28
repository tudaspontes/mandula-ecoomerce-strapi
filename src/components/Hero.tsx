import Link from "next/link";

export default function Hero() {
  return (
    <>
  <div className="py-32 p-4 bg-hero grid place-items-end">
    <div className="ml-10">
      <img className="pr-40 pb-12" src="/hero1.png" alt="beleza" width="435" height="81"/>
    </div>
    <div>
      <img className="pr-40" src="/hero2.png" alt="que cura" width="551" height="97"/>
    </div>
  </div>
    
    <Link href="products">
      <div className="flex p-4">
        <a className="mx-auto" href="products">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
        </a>
      </div>
    </Link>
</>
  );
};
