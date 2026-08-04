import woman_up from "../assets/images/Product left up.jpg";
import man from "../assets/images/Product left down.jpg";
import woman_right from "../assets/images/Product right.jpg";

function ProductCard() {

    return (
        <section className="
            flex flex-col 
            p-5 sm:p-8 lg:p-10
            gap-6 lg:flex-row
        ">

            {/* Left side */}
            <div className="flex flex-col gap-6 lg:w-1/2">

                <div className="relative">
                    <img 
                        src={woman_up} 
                        alt="formal woman"
                        className="
                            w-full 
                            h-64 sm:h-80 lg:h-96
                            object-cover
                        "
                    />

                    <h1 className="
                        uppercase 
                        absolute 
                        top-1/2 
                        left-6 sm:left-10
                        -translate-y-1/2
                        text-2xl sm:text-4xl lg:text-5xl
                        text-white
                    ">
                        Formal woman
                    </h1>
                </div>


                <div className="relative">

                    <img 
                        src={man} 
                        alt="formal men"
                        className="
                            w-full 
                            h-64 sm:h-80 lg:h-96
                            object-cover
                        "
                    />

                    <h1 className="
                        uppercase 
                        absolute 
                        top-1/2 
                        left-6 sm:left-10
                        -translate-y-1/2
                        text-2xl sm:text-4xl lg:text-5xl
                        text-white
                    ">
                        Formal men
                    </h1>

                </div>

            </div>


            {/* Right side */}
            <div className="
                relative 
                lg:w-1/2
            ">

                <img 
                    src={woman_right} 
                    alt="casual style"
                    className="
                        w-full
                        h-96 sm:h-[500px] lg:h-[800px]
                        object-cover
                    "
                />

                <h1 className="
                    uppercase
                    absolute
                    top-1/2
                    left-6 sm:left-10
                    -translate-y-1/2
                    text-3xl sm:text-5xl lg:text-6xl
                    text-white
                ">
                    Casual Style
                </h1>

            </div>

        </section>
    );
}

export default ProductCard;