import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
      <Carousel slideInterval={3000}>
        <img
          alt="..."
          //   src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          src="/images/img-1.jpg"
        />
        <img
          alt="..."
          //   src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          src="/images/img-2.jpg"
        />
        <img
          alt="..."
          //   src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          src="/images/img-3.jpg"
        />
        <img
          alt="..."
          //   src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          src="/images/img-4.jpg"
        />
      </Carousel>
    </div>
  );
};

export default Banner;
