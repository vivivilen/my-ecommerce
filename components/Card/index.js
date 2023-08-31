import Image from "next/image";

const Card = ({ title, price, img }) => {
  return (
    <div className="border-2 p-2 rounded-lg shadow w-60 hover:shadow-lg cursor-pointer">
      <div className="h-64 mb-5">
        <Image
          alt={title}
          src={img}
          className="w-full max-h-64"
          width={350}
          height={350}
          objectFit="contain"
        />
      </div>
      <h3 className="text-gray-800">{title}</h3>
      <p className="text-sm font-medium text-gray-700">{`Rp ${price}`}</p>
    </div>
  );
};

export default Card;
