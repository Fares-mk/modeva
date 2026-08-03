
import woman_section from "../assets/images/section woman.png"
import star from "../assets/images/star.svg"

function Category( {title}) {
    return ( <>
    <section className="p-10">
        <p className="uppercase text-7xl">{title}</p>
        <div className="relative mt-8 w-80">
            <img src={woman_section} alt=""  className="w-80 h-auto "/>
            <p className=" rounded-2xl flex items-center justify-center absolute top-1 right-1 pr-1 gap-0.5 bg-[#008E93]"><img src={star} alt="" />4.95</p>
        </div>
        <div className="flex flex-col  items-start">
            <p className="text-[#757575] text-xs pt-4">Product Category</p>
            <h3 className="pt-1 pb-4 text-3xl">Product Name</h3>
            <p className="text-[#757575] text-xs pb-8">$XXX</p>
            <a href=""><button className="bg-[#008E93] p-4 text-white">SEE MORE </button></a>
        </div>
        
    </section>
    </> );
}

export default Category;