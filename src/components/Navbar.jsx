import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <p
        className="text-center text-white text-sm md:text-base py-2"
        style={{ backgroundColor: "#008E93" }}
      >
        Discount 20% For New Member, <strong>ONLY FOR TODAY!!</strong>
      </p>

      <nav className="bg-transparent p-4 md:p-8 lg:p-10">
        <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-white">

          {/* Logo */}
          <li>
            <a href="">
              <img
                src="src/assets/images/Modeva.png"
                alt="Modeva"
                className="w-36 md:w-44"
              />
            </a>
          </li>

          {/* Menu */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li><a href="">Catalog</a></li>
            <li><a href="">Sale</a></li>
            <li><a href="">New Arrival</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Dashboard</a></li>
          </div>

          {/* Search & Icons */}
          <li className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-center gap-3">

              <div className="relative w-full sm:w-64">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />

                <input
                  className="bg-white text-gray-500 pl-10 py-2 rounded-md w-full outline-none"
                  type="search"
                  placeholder="Search"
                />
              </div>

              <div className="flex gap-3">
                <a href="">
                  <img
                    src="src/assets/images/user.svg"
                    alt="User"
                    className="w-6 h-6"
                  />
                </a>

                <a href="">
                  <img
                    src="src/assets/images/shopping-cart.svg"
                    alt="Cart"
                    className="w-6 h-6"
                  />
                </a>
              </div>

            </div>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;