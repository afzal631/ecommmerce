import React from "react";
// import image from "../Hero/hero1.jpg";
// import image2 from "../Hero/hero2.jpg";
import image from "../Hero/herooo.png";

function Hero() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto lg:w-5/6 md:w-5/6 sm:w-2/2 flex flex-col px-6 py-4 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                The best products
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div className="mt-6">
                <a
                  href="/#"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Lets Shop...
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
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
