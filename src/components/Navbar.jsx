import { FaSearch } from "react-icons/fa";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import modeva from "../assets/images/Modeva.png"
import user from "../assets/images/user.svg"
import cart from "../assets/images/shopping-cart.svg"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <p
        className="text-center text-white text-xs sm:text-sm md:text-base"
        style={{ fontSize: 16, backgroundColor: "#008E93" }}
      >
        Discount 20% For New Member, <strong>ONLY FOR TODAY!!</strong>
      </p>

      <nav className="bg-transparent-500 p-4 sm:p-6 md:p-8 lg:p-10">
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center text-white">

          <li>
            <a href="">
              <img
                src={modeva}
                alt=""
                className="w-32 sm:w-40 md:w-auto"
              />
            </a>
          </li>

          <li><Link to="">catalog</Link></li>
          <li><Link to="">sale</Link></li>
          <li><Link to="">New Arrival</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>

          <li className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 items-center">

              <div className="relative w-full sm:w-auto">
                <FaSearch className="absolute left-1 top-1.5 text-gray-400" />

                <input
                  className="bg-white text-gray-500 pl-7 w-full sm:w-auto"
                  type="search"
                  name=""
                  id=""
                  placeholder="search"
                />
              </div>

              <a href="">
                <img src={user}alt="" />
              </a>

              <a href="">
                <img src={cart} alt="" />
              </a>

            </div>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;