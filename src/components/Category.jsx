import woman_section from "../assets/images/section woman.png";
import star from "../assets/images/star.svg";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Category({ title }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getAllProduct();
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="p-5 sm:p-8 lg:p-10">

      {/* Section Title */}
      <p
        className="
          uppercase
          text-3xl
          sm:text-5xl
          lg:text-7xl
          mb-8
        "
      >
        {title}
      </p>


      {/* Products Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >

        {products.map((product) => (

          <SwiperSlide key={product.id}>

            <div className="w-full">

              {/* Product Image */}
              <div className="relative mt-8">

                <img
                  src={woman_section}
                  alt={product.name}
                  className="
                    w-full
                    h-72
                    sm:h-80
                    lg:h-96
                    object-cover
                  "
                />


                {/* Rating */}
                <p
                  className="
                    absolute
                    top-3
                    right-3
                    flex
                    items-center
                    justify-center
                    gap-1
                    rounded-2xl
                    bg-[#008E93]
                    text-white
                    px-3
                    py-1
                    text-sm
                  "
                >
                  <img
                    src={star}
                    alt="star"
                    className="w-4 h-4"
                  />

                  8.0
                </p>

              </div>



              {/* Product Details */}
              <div className="flex flex-col items-start">

                <p
                  className="
                    text-[#757575]
                    text-sm
                    pt-4
                  "
                >
                  {product.category}
                </p>


                <h3
                  className="
                    pt-1
                    pb-4
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                  "
                >
                  {product.name}
                </h3>


                <p
                  className="
                    text-[#757575]
                    text-sm
                    pb-8
                  "
                >
                  {product.price}$
                </p>

              </div>


            </div>

          </SwiperSlide>

        ))}

      </Swiper>



      {/* See More Button */}
      <div className="mt-8">

        <button
          className="
            bg-[#008E93]
            px-6
            py-3
            text-white
            transition
            hover:bg-[#006f73]
          "
        >
          SEE MORE
        </button>

      </div>


    </section>
  );
}

export default Category;