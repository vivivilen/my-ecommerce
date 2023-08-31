import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Header = () => {
  const [countCartItem, setCountCartItem] = useState(0);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const dataLocal = JSON.parse(localStorage.getItem("cart") || "[]");

    window.addEventListener("cart", () => {
      setIsUpdated(!isUpdated);
    });

    let allQty = [];

    for (let i of dataLocal) {
      allQty.push(i.qty);
    }

    const count = allQty.reduce((acc, currValue) => acc + currValue, 0);
    setCountCartItem(count);
  }, [isUpdated]);

  return (
    <header className="bg-blue-950 py-6 px-6 sm:px-12 text-white">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-lg font-medium">MyEcommerce</h1>
        </Link>
        <Link href={"/order"}>
          <Badge color="success" badgeContent={countCartItem}>
            <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Header;
