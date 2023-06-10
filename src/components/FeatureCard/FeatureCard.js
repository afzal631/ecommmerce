import React from "react";
import { Link } from "react-router-dom";
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            ALL CATEGORIES
          </h1>
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-1">
            See all of our categories
          </h2>
        </div>
        <div className=" flex justify-center" style={{ alignItems: "center" }}>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-0 -m-3 ">
            {Categories.map((cat) => {
              return (
                <Link
                  href={`/Categories/${cat}`}
                  className="mt-3 text-indigo-500  text-center hover:scale-105 gap-0"
                >
                  <div className=" md:w-3/3 px-6 " key={cat?.id}>
                    <div
                      className="flex rounded-lg   bg-teel-200 p-8 flex-col duration-200 hover:shadow-[5px_6px_black] h-40 w-64 justify-center"
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCard;
