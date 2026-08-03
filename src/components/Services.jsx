import { LuThumbsUp,LuPhone,LuRocket,LuCreditCard } from "react-icons/lu";
// LuThumbsUp,
//   LuPhone,
//   LuRocket,
//   LuCreditCard,
import VerticalFeature from "../components/verticalFeature";
import Horizantlfeature from "../components/horizantlfeature";


function Services() {
     const description =
    "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.";
    return ( <>
        <section className=" py-10 mb-72">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr_1fr]">
          <VerticalFeature
            title="100% Satisfaction Guaranteed"
            description={description}
            icon={<LuThumbsUp className="text-2xl" />}
          />

          <div className="grid gap-6">
            <Horizantlfeature
              title="24/7 Online Service"
              description={description}
              icon={<LuPhone className="text-2xl" />}
            />

            <Horizantlfeature
              title="Fast Delivery"
              description={description}
              icon={<LuRocket className="text-2xl" />}
            />
          </div>

          <VerticalFeature
            title="Payment With Secure System"
            description={description}
            icon={<LuCreditCard className="text-2xl" />}
          />
        </div>
      </div>
    </section>
    </> );
}

export default Services;