import React from "react";
import { Link } from "react-router-dom";
import image from "./banners.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function FeatureCard({ Categories = [] }) {
  console.log(Categories);
  return (
    // <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
    //   <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} showIndicators={false} showStatus={false} width={1000} dynamicHeight={500} showArrows={true} >
    //     <div>
    //       <img src={men} />
    //       {/* <p className="legend">Legend 1</p> */}
    //     </div>
    //     <div>
    //       <img src={women} />
    //       {/* <p className="legend">Legend 2</p> */}
    //     </div>
    //     <div>
    //       <img src={jwels} />
    //       {/* <p className="legend">Legend 3</p> */}
    //     </div>
    //     <div>
    //       <img src={electronic} />
    //       {/* <p className="legend">Legend 3</p> */}
    //     </div>
    //   </Carousel>
    // </div>
    <section className="text-gray-600 body-font ">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            ALL CATEGORIES
          </h1>
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-1">
            See all of our categories
          </h2>
        </div>
        <div className="lg:flex ">
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2 xs:m-0">
            <img
              className="object-contain w-full h-full max-w-2xl rounded-md"
              src={image}
              // src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="apple watch "
            />
          </div>
          <div
            className=" flex justify-center"
            style={{ alignItems: "center" }}
          >
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 md:grid-cols-2 xs:grid-cols-1 md:mt-9 sm:mt-9 xs:mt:9 ">
              {Categories.map((cat) => {
                return (
                  <div
                    className=" md:w-3/3 px-6 hover:scale-105 "
                    key={cat?.id}
                  >
                    <Link
                      to={`/Categories/${cat}`}
                      className="mt-3 text-indigo-500  text-center  gap-0 bg-transparent outline-none select-none"
                    >
                      <div
                        className="flex rounded-lg xs:w-[12rem] bg-teel-200 p-8 flex-col duration-200 lg:hover:shadow-[5px_6px_black] shadow-[5px_6px_black] h-40 w-64 justify-center"
                        style={{
                          // background: "rgb(138 205 255)",
                          border: "3px solid black",
                        }}
                      >
                        <div className=" mb-3">
                          <h2 className="text-black text-lg title-font font-medium capitalize text-center">
                            {cat || "Example cat"}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;
