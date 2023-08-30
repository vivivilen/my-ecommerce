import Link from "next/link";
import Card from "../Card";

const ProductList = ({ products }) => {
  return (
    <section className="px-4 py-7 md:px-28">
      <h1 className="text-xl sm:text-2xl font-semibold mb-7">
        Popular Products
      </h1>
      <div className="w-full flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-4">
        {products.map((item) => (
          <Link href={`/products/${item.id}`}>
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.images[0]}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
