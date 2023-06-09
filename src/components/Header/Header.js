import React from "react";
import { Link } from "react-router-dom";
import cartImg from "./cart.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

// import { Link } from "react-router-dom";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/Products",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];
function Header() {
  return (
    <div>
      <header className="text-white" style={{ backgroundColor: "black" }}>
        <nav
          className="text-white mx-auto lg:w-5/6 md:w-5/6 sm:w-auto "
          style={{ backgroundColor: "black" }}
        >
          <div className="flex flex-col items-center p-6 mx-auto">
            <a
              href="/"
              className="flex cursor-pointer title-font font-medium items-center mb-4 md:mb-0 text-white"
            >
              <span className="ml-3 text-xl">EcomExpress</span>
            </a>
            <div
              className="flex items-center justify-center mt-6  capitalize text-white"
              style={{ backgroundColor: "black" }}
            >
              {navigations.map((navigations) => (
                <a
                  href={navigations.path}
                  className="mx-2 text-white marker:border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6"
                  key={navigations?.name}
                >
                  {navigations?.name}
                </a>
              ))}
              <Link to="/cart">
                {/* <img className="w-[3rem]" src={cartImg} alt="cart" /> */}
                <div className="w-[3rem]">
                  <AiOutlineShoppingCart size={25} />
                </div>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
