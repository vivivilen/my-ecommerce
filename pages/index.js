import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import { Fragment } from "react";

export default function Home({ products }) {
  return (
    <Fragment>
      <Banner />
      <ProductList products={products.products} />
    </Fragment>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const products = await res.json();
  return { props: { products } };
};
