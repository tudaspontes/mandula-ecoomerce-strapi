import Head from 'next/head'
import { getProducts } from "../../utils/api";
import ProductsList from "../../components/ProductsList";

export default function ProductList(products) {
  return(
    <>
      <Head>
        <title> Produtos </title>
      </Head>
      <ProductsList products={products} />

      <main>

      </main>
    </>
  )
}
export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}