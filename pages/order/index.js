import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Counter from "../../components/Counter";
import BlueButton from "../../components/BlueButton";

const Order = () => {
  const router = useRouter();

  const [dataOrder, setDataOrder] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const dataLocal = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setDataOrder(dataLocal);
  }, []);

  useEffect(() => {
    countOrderDetails();
  }, [dataOrder]);

  const incrementById = (id) => {
    const updatedCart = dataOrder.map((orderItem) =>
      orderItem.id === id ? { ...orderItem, qty: orderItem.qty + 1 } : orderItem
    );
    setDataOrder(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart"));
  };

  const decrementById = (id) => {
    const updatedCart = dataOrder.map((orderItem) =>
      orderItem.id === id ? { ...orderItem, qty: orderItem.qty - 1 } : orderItem
    );
    setDataOrder(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart"));
  };

  const deleteItem = (id) => {
    const updatedCart = dataOrder.filter((item) => item.id !== id);
    setDataOrder(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart"));
  };

  const countOrderDetails = () => {
    let totalItems = dataOrder
      .map((item) => item.qty)
      .reduce((acc, currValue) => acc + currValue, 0);

    let totalPrice = dataOrder
      .map((item) => item.price * item.qty)
      .reduce((acc, currValue) => acc + currValue, 0);

    setTotalItems(totalItems);
    setSubTotal(totalPrice);
  };

  const emptyCart = () => {
    localStorage.clear("cart");
  };

  const NoOrder = () => {
    return (
      <div className="flex flex-col min-h-[20rem] justify-center items-center">
        <div className="flex justify-center items-center w-28 h-28">
          <img
            src="/images/empty-cart.svg"
            className="w-20 h-20 sm:max-w-28 sm:max-h-28"
            alt="empty-cart"
          />
        </div>
        <h1 className="text-lg sm:text-2xl font-semibold mt-3">
          Your Cart is Empty!
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-7 text-center">Looks like you haven't added anything to your cart yet.</p>
        <div>
          <BlueButton
            title={"Return to Shop"}
            onClick={() => router.push("/")}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-7 md:px-12">
      <h2 className="text-2xl text-center font-bold">Shopping Cart</h2>
      {dataOrder.length === 0 && <NoOrder />}
      {dataOrder.length > 0 && (
        <div className="flex flex-wrap mt-7">
          <div className="w-full lg:w-[70%] border-1 rounded shadow">
            {dataOrder.map((item) => {
              return (
                <div className="p-3 flex" key={item.id}>
                  <div className="w-32 h-32">
                    <img
                      className="max-w-32 max-h-32"
                      src={item.images[0]}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-wrap flex-1">
                    <div className="ml-3 flex flex-1 flex-col justify-between ">
                      <div>
                        <h3 className="font-semibold text-sm">{item.brand}</h3>
                        <p>{item.title}</p>
                      </div>

                      <div className="flex flex-wrap justify-between">
                        <p className="font-semibold">{`Rp ${item.price}`}</p>
                        <div className="my-5 flex items-center justify-center">
                          <DeleteIcon
                            onClick={() => deleteItem(item.id)}
                            className="w-6 h-6 mr-5 text-red-500 cursor-pointer hover:text-red-600"
                          />
                          <Counter
                            onIncrement={() => incrementById(item.id)}
                            onDecrement={() => decrementById(item.id)}
                            qty={item.qty}
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full h-60 lg:w-[30%] border-1 rounded shadow p-4 flex flex-col justify-between">
            <h1 className="text-xl font-bold">Summary</h1>

            <div>
              <div className="flex justify-between">
                <p>Total Item(s)</p>
                <p>{totalItems}</p>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Subtotal</p>
                <p>{`Rp ${subTotal}`}</p>
              </div>
            </div>

            <div className="mt-3">
              <BlueButton
                title={"Pay with Virtual Account"}
                onClick={() => {
                  router.push("/confirmation");
                  emptyCart();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
