import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

export default function Home({ products }){
  return (
    <div>
      <Head>
        <title>Mandula Natural</title>
      </Head>
      <ProductsList products={products} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}