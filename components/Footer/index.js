const Footer = () => {
  return (
    <footer className="w-full mt-auto flex flex-wrap bg-blue-950 text-white px-5 sm:px-20 py-7 gap-y-7">
      <div className="w-full lg:w-1/3">
        <h2 className="font-semibold">MyEcommerce</h2>
        <div className="w-[80%] text-stone-100 text-sm">
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="font-semibold">Informasi</h2>
        <div className="text-stone-100 text-sm leading-7">
          <p>Tentang MyEcommerce</p>
          <p>Hubungi Kami</p>
          <p>FAQ</p>
          <p>Syarat, Ketentuan, & Privasi</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <h2 className="font-semibold">Layanan</h2>
        <div className="text-stone-100 text-sm leading-7">
          <p>Cara Pemesanan</p>
          <p>Cara Pembayaran</p>
          <p>Informasi Pengiriman</p>
          <p>Lacak Pesanan</p>
          <p>Pembatalan Pesanan</p>
        </div>
      </div>
      <p className="text-sm">&copy; 2023 MyEcommerce. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
