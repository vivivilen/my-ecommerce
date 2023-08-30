const Card = ({ title, price, img }) => {
  return (
    <div className="border-2 p-2 rounded-lg shadow w-60 hover:shadow-lg cursor-pointer">
      <div className="h-64 mb-5">
        <img alt="..." src={img} className="w-full max-h-64 object-contain" />
      </div>
      <h3 className="text-gray-800">{title}</h3>
      <p className="text-sm font-medium text-gray-700">{`Rp ${price}`}</p>
    </div>
  );
};

export default Card;
