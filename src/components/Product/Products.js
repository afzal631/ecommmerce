import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Products({ products = [] }) {
  return (
    <section className="bg-white">
      <div className=" py-4 mx-auto mb-12 ">
        <div className="grid mx-auto grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 lg:w-5/6 md:w-5/6 ">
          {products.map((product) => {
            return (
              <div
                className="max-w-xs overflow-hidden bg-white border border-gray-300 hover:shadow-[5px_5px_black] hover:scale-105 rounded-lg h-4/4 duration-200 mx-auto "
                key={product?.id}
                style={{ width: "95%" }}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md p-2 lg:aspect-none group-hover:opacity-75 lg:h-44 sm:h-44 duration-200  hover:scale-90">
                  <img
                    src={product.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-contain object-center lg:h-full max-h-[13rem] lg:w-full "
                  />
                </div>
                {/* <div className=" hover:bg-blue-400 hover:text-white"> */}
                <div
                  className="mt-4 flex justify-between hover:bg-gray-200   "
                  style={{ padding: "0rem 1rem 1rem" }}
                >
                  <div>
                    <p className="mt-1 text-sm text-gray-500 uppercase">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm text-gray-900 pl-16 font-bold">
                    ${product.price}
                  </p>
                </div>
                <div className="" style={{ padding: "0rem 1rem 1rem" }}>
                  <h3
                    className=" text-gray-700 text-sm font-bold "
                    style={{ marginBottom: "10px" }}
                  >
                    {/* <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span> */}
                    {product.title.substring(0, 22) + "..."}
                  </h3>
                  <Link to={`/products/${product.id}`}>
                    <button
                      className="bg-black w-full hover:bg-slate-900"
                      style={{
                        padding: "0.2rem 1rem",
                        borderRadius: "0.2rem",
                        color: "white",
                      }}
                    >
                      buy now
                    </button>
                  </Link>
                </div>
                {/* </Link> */}
                {/* <button>add to cart</button> */}
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
