import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { Alert, Snackbar } from "@mui/material";
import Counter from "../../components/Counter";
import BlueButton from "../../components/BlueButton";

const ProductDetails = ({ details }) => {
  const router = useRouter();

  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const dataLocal = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCart(dataLocal);
  }, []);

  const increment = () => setQty(qty + 1);
  const decrement = () => setQty(qty - 1);

  const addToCart = () => {
    const id = cart.find((item) => item.id === details.id);

    if (id) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === details.id
          ? { ...cartItem, qty: cartItem.qty + qty }
          : cartItem
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...details, qty: qty }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    setQty(1);
    setOpenSnackbar(true);
    window.dispatchEvent(new Event("cart"));
  };

  const onClose = () => setOpenSnackbar(false);

  return (
    <Fragment>
      {
        <Snackbar
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={onClose}
        >
          <Alert variant="filled" onClose={onClose} severity="success">
            {"Added to cart!"}
          </Alert>
        </Snackbar>
      }
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
              width={"400"}
              height={"400"}
              alt={details.title}
              style={{
                objectFit: "contain",
                maxWidth: "20rem",
                maxHeight: "20rem",
              }}
            />
          </div>
          <div className="mt-5 ml-0 sm:ml-5 sm:mt-0 flex-1">
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
              <Counter
                onIncrement={increment}
                onDecrement={decrement}
                qty={qty}
              />
              <div className="mt-5">
                <BlueButton
                  addedClassName={"md:w-1/2 lg:w-1/4"}
                  title={"+ Add to Cart"}
                  onClick={addToCart}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://dummyjson.com/products/${context.query.id}`);
  const details = await res.json();

  return {
    props: { details },
  };
};

export default ProductDetails;
