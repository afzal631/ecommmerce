import React from "react";
import { Link } from "react-router-dom";

function AllproductsApi({ products = [] }) {
  return (
    <section className="bg-white mt-15">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl justify-center flex ">
          All Products
        </h1>
        <p className="text-1xl  tracking-tight text-gray-900  justify-center flex">
          Choose you're product.
        </p>
      </div>
      <div className="container px-6 py-10 mx-auto  ">
        <div className="grid mx-auto grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 lg:w-5/6 md:w-5/6">
          {products.map((product) => {
            return (
              <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg h-4/4 duration-200 hover:scale-105 mx-auto">
                <div className="min-h-40 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md p-2 lg:aspect-none group-hover:opacity-75 lg:h-44">
                  <img
                    src={product.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                  />
                </div>
                <div
                  className="mt-4 flex justify-between hover:bg-gray-200  "
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
                  <Link to={`/products/${product.id}`}>
                    <button
                      className="bg-green-600 w-full hover:bg-green-500"
                      style={{
                        padding: "0.2rem 1rem",
                        borderRadius: "0.2rem",
                        color: "white",
                        marginBottom: "7px",
                      }}
                    >
                      buy now
                    </button>
                  </Link>
                  <h3 className=" text-gray-700 text-sm font-bold">
                    {/* <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span> */}
                    {product.title}
                  </h3>
                </div>
                {/* </Link> */}
                {/* <button>add to cart</button> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AllproductsApi;
