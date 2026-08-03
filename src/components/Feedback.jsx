import circle from "../assets/images/brown circle.png"
import star from "../assets/images/star.svg"
function Feedback() {
    return ( <>
        <section className=" bg-[#F2F2F2] pt-20 top-1 flex gap-6 mb-10">
            <div className="bg-white p-4">
                <div className="justify-between flex gap-6">
                <div className="flex  gap-2">
                    <img src={circle} alt="" />
                    <div className="flex-col">
                        <h3 className="text-[#3E3E3E]">Cynthia caroline</h3>
                        <p className="text-[#757575]">15 July 2023</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                </div>
            </div>
            <p className="text-[#757575] w-dvh mt-6">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
            </div>

                        <div className="bg-white p-4">
                <div className="justify-between flex gap-6">
                <div className="flex  gap-2">
                    <img src={circle} alt="" />
                    <div className="flex-col">
                        <h3 className="text-[#3E3E3E]">Cynthia caroline</h3>
                        <p className="text-[#757575]">15 July 2023</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                    <img src={star} className="w-6 h-6" alt="" />
                </div>
            </div>
            <p className="text-[#757575] w-dvh mt-6">Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis. Faucibus pharetra dictum quis feugiat eu augue semper et nulla. Lectus turpis ut et eros tortor placerat rhoncus. Imperdiet purus eu ornare vel. Donec commodo elementum.</p>
            </div>
        </section>
    
    </> );
}

export default Feedback;