import woman_section from "../assets/images/section woman.png";
import star from "../assets/images/star.svg";
import { useState, useEffect } from "react";
import { getAllProduct } from "../../services/api";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Category({ title }) {
  const [products, setproducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getAllProduct();
      console.log(res.data);
      setproducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="p-10">
        <p className="uppercase text-7xl mb-8">{title}</p>

        <Swiper
          modules={[Pagination,]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
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
              <div>
                <div className="relative mt-8 w-80 sm:px-3">
                  <img
                    src={woman_section}
                    alt={product.name}
                    className="w-80 h-auto"
                  />

                  <p className="rounded-2xl flex items-center justify-center absolute top-1 right-1 pr-2 pl-2 gap-1 bg-[#008E93] text-white">
                    <img src={star} alt="" />
                    8.0
                  </p>
                </div>

                <div className="flex flex-col items-start">
                  <p className="text-[#757575] text-sm pt-4">
                    {product.category}
                  </p>

                  <h3 className="pt-1 pb-4 text-3xl">
                    {product.name}
                  </h3>

                  <p className="text-[#757575] text-sm pb-8">
                    `{product.price}$`
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8">
          <button className="bg-[#008E93] p-4 text-white">
            SEE MORE
          </button>
        </div>
      </section>
    </>
  );
}

export default Category;