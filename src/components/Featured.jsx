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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "none" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
        breakpoint: 850,
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
    <div className=" mx-auto  mt-8 w-[75%] lg:mt-[219px] ">
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
