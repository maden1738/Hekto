export default function Header() {
  return (
    <section className="bg-primary text-white font-semibold flex justify-around py-4 font-body ">
      <div className="flex gap-9">
        <div>mhhasanul@gmail.com</div>
        <div>(12345)67890</div>
      </div>
      <div className="flex gap-4">
        <select name="language" id="" className="bg-inherit">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <select name="currency" id="" className="bg-inherit">
          <option value="usd">USD</option>
          <option value="nrs">NRS</option>
        </select>
        <div>Login</div>
        <div>WishList</div>
      </div>
    </section>
  );
}
