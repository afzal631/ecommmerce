import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const carts = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    const total = carts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  }, [carts]);
  const handleInc = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  const handleDec = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  const removeProduct = (id) => {
    const updateCart = carts.filter((product) => product.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  if (!carts.length) <div>Cart is empty</div>;
  return (
    <>
      <div className="bg-gray-100" style={{ margin: "0rem 5rem" }}>
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              {/* left side */}
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {carts ? carts.length : 0} Items
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {/* products */}

              {carts?.map((cart) => {
                return (
                  <div
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 "
                    key={cart?.id}
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={cart?.image}
                          alt={cart?.title}
                        />
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{cart?.title}</span>
                        <span className="text-red-500 text-xs capitalize">
                          {cart?.category}
                        </span>
                        <a
                          href="#"
                          onClick={() => removeProduct(cart?.id)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                        onClick={() => handleDec(cart?.id)}
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>

                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        value={cart?.quantity}
                      />

                      <svg
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        onClick={() => handleInc(cart?.id)}
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cart?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cart?.price * cart?.quantity}
                    </span>
                  </div>
                );
              })}

              <a
                href="/products"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>
            {/* right side */}
            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Items {carts ? carts.length : 0}
                </span>
                <span className="font-semibold text-sm">
                  {total.toFixed(2)}$
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>${(total + 10).toFixed(2)}</span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

//   <section
//     classNameName="h-100 h-custom"
//     style={{ backgroundColor: "#d2c9ff" }}
//   >
//     <div classNameName="container py-5 h-100">
//       <div classNameName="row d-flex justify-content-center align-items-center h-100">
//         <div classNameName="col-12">
//           <div
//             classNameName="card card-registration card-registration-2"
//             style={{ borderRadius: "15px" }}
//           >
//             <div classNameName="card-body p-0">
//               <div classNameName="row g-0">
//                 <div classNameName="col-lg-8">
//                   <div classNameName="p-5">
//                     <div classNameName="d-flex justify-content-between align-items-center mb-5">
//                       <h1 classNameName="fw-bold mb-0 text-black">
//                         Shopping Cart
//                       </h1>
//                       <h6 classNameName="mb-0 text-muted">3 items</h6>
//                     </div>
//                     <hr classNameName="my-4" />

//                     <div classNameName="row mb-4 d-flex justify-content-between align-items-center">
//                       <div classNameName="col-md-2 col-lg-2 col-xl-2">
//                         <img
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
//                           classNameName="img-fluid rounded-3"
//                           alt="Cotton T-shirt"
//                         />
//                       </div>
//                       <div classNameName="col-md-3 col-lg-3 col-xl-3">
//                         <h6 classNameName="text-muted">Shirt</h6>
//                         <h6 classNameName="text-black mb-0">Cotton T-shirt</h6>
//                       </div>
//                       <div classNameName="col-md-3 col-lg-3 col-xl-2 d-flex">
//                         <button
//                           classNameName="btn btn-link px-2"
//                           onClick={() => {}}
//                         >
//                           <i classNameName="fas fa-minus"></i>
//                         </button>

//                         <input
//                           id="form1"
//                           min="0"
//                           name="quantity"
//                           value="1"
//                           type="number"
//                           classNameName="form-control form-control-sm"
//                         />

//                         <button
//                           classNameName="btn btn-link px-2"
//                           onClick={() => {}}
//                         >
//                           <i classNameName="fas fa-plus"></i>
//                         </button>
//                       </div>
//                       <div classNameName="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
//                         <h6 classNameName="mb-0">€ 44.00</h6>
//                       </div>
//                       <div classNameName="col-md-1 col-lg-1 col-xl-1 text-end">
//                         <a href="#!" classNameName="text-muted">
//                           <i classNameName="fas fa-times"></i>
//                         </a>
//                       </div>
//                     </div>

//                     <hr classNameName="my-4" />

//                     {/* Other product rows */}
//                   </div>
//                 </div>
//                 <div classNameName="col-lg-4 bg-grey">
//                   <div classNameName="p-5">
//                     <h3 classNameName="fw-bold mb-5 mt-2 pt-1">Summary</h3>
//                     <hr classNameName="my-4" />

//                     <div classNameName="d-flex justify-content-between mb-4">
//                       <h5 classNameName="text-uppercase">Items</h5>
//                       <h5>€ 132.00</h5>
//                     </div>

//                     {/* Shipping and discount code sections */}

//                     <div classNameName="d-flex justify-content-between mb-5">
//                       <h5 classNameName="text-uppercase">Total price</h5>
//                       <h5>€ 137.00</h5>
//                     </div>

//                     <button
//                       type="button"
//                       classNameName="btn btn-dark btn-block btn-lg"
//                       data-mdb-ripple-color="dark"
//                     >
//                       Register
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
