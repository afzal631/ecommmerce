import React from "react";
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
      <header class="bg-white  dark:bg-gray-900">
        <nav class="bg-white mx-auto lg:w-5/6 md:w-5/6 dark:bg-gray-900 sm:w-auto ">
          <div class="container flex flex-col items-center p-6 mx-auto">
            <a
              href="/"
              className="flex cursor-pointer title-font font-medium items-center mb-4 md:mb-0  dark:text-gray-300"
            >
              <span className="ml-3 text-xl">ecommerce</span>
            </a>
            <div class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
              {navigations.map((navigations) => (
                <a
                  href={navigations.path}
                  className="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6"
                >
                  {navigations.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
