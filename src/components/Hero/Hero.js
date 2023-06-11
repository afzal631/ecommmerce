import React from "react";
import image from "./banners2.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section className="bg-white " style={{ backgroundColor: "black" }}>
        <div className=" mx-auto lg:mx-auto lg:w-5/6 md:w-5/6 sm:w-2/2   flex flex-col-reverse xs:px-5 px-6 py-4 xs:p-0 xs:m-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 ">
            <div className="max-w-lg lg:mx-12 xs:mb-[5rem] lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-white  lg:text-4xl">
                The best products
              </h1>
              <p className="mt-4 text-white">
                Welcome to EcomExpress website! Discover our unique collection
                of electronic, jewelry and trendy clothing to elevate your
                style. Enjoy seamless shopping with quick delivery and excellent
                customer service. Start shopping now!
              </p>
              <div className="mt-6">
                <Link
                  to={`/products`}
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-400 rounded-lg hover:bg-blue-300 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Lets Shop...
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2 xs:m-0">
            <img
              className="object-contain w-full h-full max-w-2xl rounded-md"
              src={image}
              // src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="apple watch "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
