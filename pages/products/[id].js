import Image from "next/image";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const ProductDetails = ({ details }) => {
  const router = useRouter();

  const [qty, setQty] = useState(1);

  const increment = () => setQty(qty + 1);
  const decrement = () => setQty(qty - 1);

  console.log("details: ", details);
  return (
    <section className="px-4 py-7 lg:px-28">
      <div className="mb-7">
        <span
          onClick={() => router.push("/")}
          className="flex items-center text-sm font-semibold cursor-pointer active:font-bold"
        >
          <ArrowBackIcon
            style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }}
          />
          Back to Home
        </span>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="h-80 max-w-80">
          <Image
            src={details.images[0]}
            width={"350"}
            height={"350"}
            alt={details.title}
            style={{
              objectFit: "contain",
              maxWidth: "20rem",
              maxHeight: "20rem",
            }}
          />
        </div>
        <div className="ml-5 flex-1">
          <h2 className="uppercase font-semibold tracking-wide mb-2">
            {details.brand}
          </h2>
          <p className="font-normal mb-2">{details.title}</p>
          <p className="text-2xl font-semibold">{`Rp ${details.price}`}</p>

          <div className="mt-5">
            <h5 className="text-sm font-semibold mb-1">Description</h5>
            <p className="text-sm">{details.description}</p>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold mb-2">Quantity</p>

            <div>
              <button
                onClick={decrement}
                disabled={qty === 1}
                className="px-5 py-2 border-2 font-bold disabled:text-gray-400"
              >
                -
              </button>
              <span className="px-5">{qty}</span>
              <button
                onClick={increment}
                className="px-5 py-2 border-2 font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps = async (context) => {
  console.log("context: ", context);
  const res = await fetch(`https://dummyjson.com/products/${context.query.id}`);
  const details = await res.json();

  return {
    props: { details },
  };
};

export default ProductDetails;
