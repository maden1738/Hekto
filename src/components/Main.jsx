import lamp from "../assets/lamp.png";
import chair from "../assets/chair.png";
import discount from "../assets/discount.svg";

export default function Main() {
  return (
    <div className="bg-background font-main flex pd-7">
      <img src={lamp} className="w-[387px] h-[387px]" alt="" />
      <div>
        <p className="text-accent pt-[203px]">
          Best Furniture For Your Castle....
        </p>
        <p className="text-[45px] font-bold tracking-wide ">
          <span>New Furniture Collection Trends</span>
          <br />
          <span>Trends in 2020</span>
        </p>
        <p className="mt-4 text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="btn-red mt-7">Shop Now</button>
      </div>
      <img src={chair} alt="" className="mt-[99px] w-[629px] h-[629px]" />
    </div>
  );
}
