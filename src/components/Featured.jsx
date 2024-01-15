import FeaturedProduct from "./FeaturedProduct";
// import featured1 from "../assets/featured1.png";
// import featured2 from "../assets/featured2.png";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductLoader from "./common/ProductLoader";

export default function Featured() {
  const [trendingProducts, setTrendingProducts] = useState([1, 2]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        setTrendingProducts(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  //     // .then((res) => res.json)
  //     // .then((data) => setTrendingProducts(data))

  // const products = [
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured2,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured2,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  //   {
  //     title: "Cantilever Chair",
  //     code: "Y523201",
  //     price: 42.0,
  //     image: featured1,
  //   },
  // ];

  const settings = {
    dots: true,
    arrows: false,
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
    <div className=" wrapper  mt-10  md:mt-[182px] lg:mt-[219px] ">
      <Slider {...settings}>
        {isLoading &&
          [1, 2, 3, 4].map((el) => {
            return <ProductLoader />;
          })}
        {trendingProducts.map((el) => (
          <Link to={`/products/${el._id}`}>
            <FeaturedProduct key={el._id} product={el} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
