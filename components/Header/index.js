import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <header className="bg-blue-950 py-6 px-6 sm:px-12 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium">MyEcommerce</h1>
        <ShoppingCartIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
