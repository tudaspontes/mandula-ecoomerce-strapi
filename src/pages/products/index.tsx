import Link from "next/link";
import Head from 'next/head'
import { getStrapiMedia } from "../../utils/medias";
import { getProducts } from "../../utils/api";

type Product = {
  slug: string;
  title: string;
  description: string;
  id: number;
  image
}

interface ProductProps {
  products: Product[]
}

export default function ProductsList({ products }: ProductProps){
  return (
    <>
      <Head>
        <title>Produtos</title>
      </Head>
      <main>
        <div>

        </div>
      </main>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
        {products.map(_product => (
          <div
            key={_product.id}
            className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
          >
            <Link href={`/products/${_product.slug}`}>
              <a>
                <div className="rounded-t-lg bg-white pt-2 pb-2">
                  <img
                    className="crop mx-auto"
                    src={getStrapiMedia(_product.image.formats.thumbnail.url)}
                    alt={_product.title}
                  />
                </div>
                <div className="pl-4 pr-4 pb-4 pt-4 rounded-lg">
                  <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                    {_product.title}
                  </h4>
                  <div className="mt-1 text-sm text-gray-700">
                    {_product.description}
                  </div>
                </div>
              </a>
            </Link>
            <div
            hidden
            id="snipcart"
            data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
          ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  
  return {
    props: 
    {
      products
    }
  };
}