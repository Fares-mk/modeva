import Navbar from "./Navbar";
import boy_hero from "../assets/images/boy Hero.jpg"
import hero from "../assets/images/Hero.jpg"
import scroll from "../assets/images/chevron-double-down.svg"

function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{backgroundImage:`url(${boy_hero})`}}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto h-screen flex items-center justify-between px-8">

        {/* Left Content */}

        <div className="text-white max-w-xl">

          <p className="uppercase tracking-[5px] text-sm mb-4">
            MADE IN MODERN & CLASSIC FASHION
          </p>

          <h1 className="text-6xl font-serif leading-tight">
            DISCOVER THE ART OF
            <br />
            DRESSING UP
          </h1>

          <button className=" absolute flex left-1/2 -translate-x-1/2 bottom-8 mt-8  px-8 py-3">
            SCROLL DOWN <img src={scroll} alt="" />
          </button>

        </div>


        {/* Right content */}

        <div className="hidden lg:flex flex-col gap-5">
            <div className="bg-white w-72 p-4 flex gap-4 shadow-lg">
              <img src={hero} alt="" className="w-24 h-28 object-cover"/>
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-lg">
                  Product Name
                </h3>
                <p className="text-gray-500">$100.00</p>
                <button className="mt-3 text-sm text-[#008E93] font-semibold hover:underline">
                  SHOP NOW
                </button>
              </div>
            </div>
                <div className="bg-white w-72 p-4 flex gap-4 shadow-lg">
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-lg">
                  Product Name
                </h3>
                <p className="text-gray-500">$100.00</p>
                <button className="mt-3 text-sm text-[#008E93] font-semibold hover:underline">
                  SHOP NOW
                </button>
              </div>
                <img src={hero} alt="" className="w-24 h-28 object-cover"/>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;