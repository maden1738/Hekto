import discount from "../assets/discount.svg";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const data = [
    {
      image: banner1,
      h1: "Best Furniture For Your Castle....",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipisciin phasellus non in justo.",
    },
    {
      image: banner3,
      h1: "Best Furniture For Your Castle....",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipisciin phasellus non in justo.",
    },
    {
      image: banner2,
      h1: "Best Furniture For Your Castle....",
      h2: "New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipisciin phasellus non in justo.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((el) => {
          return (
            <div className="relative font-body">
              <img src={el.image} alt="" />
              <div className="absolute left-[20%] top-0  lg:left-[20%] lg:top-0 lg:w-[35%]">
                <p className="text-accent md:pt-[18%] lg:pt-[42%]">{el.h1}</p>
                <p className="text-[1.5rem] font-bold lg:text-[3.125rem] lg:tracking-wide ">
                  {el.h2}
                </p>
                <p className="text-slate-400 lg:mt-4">{el.description}</p>
                <button className="btn-red md:mt-2 lg:mt-7">Shop Now</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
