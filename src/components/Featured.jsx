import FeaturedProduct from "./FeaturedProduct";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Featured() {
  const products = [
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured2,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured2,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
    {
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      image: featured1,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1243,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mx-auto  mt-[219px] w-[75%] ">
      <Slider {...settings}>
        {products.map((el) => (
          <FeaturedProduct
            title={el.title}
            code={el.code}
            price={el.price}
            image={el.image}
          />
        ))}
      </Slider>
    </div>
  );
}
