import Feedback from "./Feedback";

function Footer() {
  return (
    <>
      <section className="bg-[#008E93] flex flex-col lg:flex-row justify-between items-start gap-10 px-6 md:px-10 py-20 lg:py-72 text-white relative">
        {/* Logo & Contact */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl mb-3">
            Modeva
          </h1>

          <div className="text-sm flex flex-col gap-1">
            <p>WhatsApp : +62 859 9999 999</p>
            <p>Email : hello@modeva.com</p>
            <p>
              Address : Lorem ipsum street Block B Number 08,
              <br />
              Jakarta, Indonesia, 12345
            </p>
          </div>
        </div>

        {/* Menu */}
        <section className="w-full sm:w-auto">
          <h1 className="mb-3 font-bold">Menu</h1>

          <ul className="flex flex-col gap-2">
            <li><a href="">Sale</a></li>
            <li><a href="">New Arrivals</a></li>
            <li><a href="">Formal Men</a></li>
            <li><a href="">Formal Woman</a></li>
            <li><a href="">Casual Men</a></li>
            <li><a href="">Casual Woman</a></li>
          </ul>
        </section>

        {/* Get Help */}
        <section className="w-full sm:w-auto">
          <h1 className="mb-3 font-bold">Get Help</h1>

          <ul className="flex flex-col gap-2">
            <li><a href="">FAQ</a></li>
            <li><a href="">Customer Service</a></li>
            <li><a href="">Refund and Return</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Shipping</a></li>
          </ul>
        </section>

        {/* Account */}
        <section className="w-full sm:w-auto">
          <h1 className="mb-3 font-bold">Account</h1>

          <ul className="flex flex-col gap-2">
            <li><a href="">My Account</a></li>
            <li><a href="">My Orders</a></li>
            <li><a href="">Vouchers and Discounts</a></li>
          </ul>
        </section>

      </section>
    </>
  );
}

export default Footer;