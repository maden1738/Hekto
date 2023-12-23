import FeaturedProduct from "./FeaturedProduct";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";

export default function Featured(props) {
  return (
    <div className="grid grid-cols-4 gap-6  mt-[219px] mx-auto w-[75%]">
      <FeaturedProduct
        title="Cantilever Chair"
        code="Y523201"
        price={42.0}
        image={featured1}
      />
      <FeaturedProduct
        title="Cantilever Chair"
        code="Y523201"
        price={42.0}
        image={featured1}
      />
      <FeaturedProduct
        title="Cantilever Chair"
        code="Y523201"
        price={42}
        image={featured2}
      />
      <FeaturedProduct
        title="Cantilever Chair"
        code="Y523201"
        price={42}
        image={featured2}
      />
    </div>
  );
}
