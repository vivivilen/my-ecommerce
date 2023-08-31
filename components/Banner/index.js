import { Carousel } from "flowbite-react";
import Image from "next/image";

const imgBanner = [
  {
    id: "1",
    title: "promo-1",
    image: "/images/img-1.jpg",
  },
  {
    id: "2",
    title: "promo-2",
    image: "/images/img-2.jpg",
  },
  {
    id: "3",
    title: "promo-3",
    image: "/images/img-3.jpg",
  },
  {
    id: "4",
    title: "promo-4",
    image: "/images/img-4.jpg",
  },
];

const Banner = () => {
  return (
    <div className="h-56 md:h-[32rem] rounded-lg ">
      <Carousel slideInterval={3000}>
        {imgBanner.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.image}
              alt={item.title}
              width={1350}
              height={1000}
              objectFit="contain"
              unoptimized
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
