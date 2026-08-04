import woman_up from "../assets/images/Product left up.jpg"
import man from "../assets/images/Product left down.jpg"
import woman_right from "../assets/images/Product right.jpg"
import { useEffect, useState } from "react"
import { getAllProduct } from "../../services/api";
function ProductCard() {

    return ( <>
        <section className="flex flex-col p-10  gap-8 lg:flex flex-row ">
            <div>
                <div className="flex-col gap-4">
                    <div className="relative mb-8">
                        <img src={woman_up} alt="sssssss" className="w-full h-96" />
                        <h1 className="uppercase absolute top-1/2 pl-14 text-5xl text-white">formal woman</h1>
                    </div>
                    <div className="relative">
                        <img src={man} alt="sssssss" className="w-full h-96" />
                        <h1 className="uppercase absolute top-1/2 pl-14 text-5xl text-white">formal men</h1>
                    </div>
                </div>
                </div>
                <div className="relative">
                    <img src={woman_right} alt="sssssss"  style={{height:800, width:900}} />
                    <h1 className="uppercase absolute top-1/2 pl-14 text-5xl text-white" >Casual Style</h1>
                </div>
        </section>
    </> );
}

export default ProductCard;