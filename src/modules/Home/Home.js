import React, { useEffect, useState } from "react";
import Products from "../../components/Product/Products";
import Loading from "../../components/Product/Loading";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/FeatureCard/Categories";
import Feature from "../../components/Feature/Feature";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=8");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />

      <Categories />

      <div className="container px-6 py-10 mx-auto">
        <h1 
        // className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl justify-center flex animate-bounce duration-2000ms"
        className="sm:text-3xl text-2xl font-medium title-font justify-center flex text-gray-900 mb-3"
        >
          PRODUCTS
        </h1>
        <p className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-1  justify-center flex">
          See our trending products
        </p>
        <p className="text-xs text-indigo-500 tracking-widest font-medium title-font mt-1  justify-center flex">
          Choose you're product.
        </p>
      </div>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <div>
          <Loading />
        </div>
      )}
      <Feature />
    </>
  );
}

export default Home;
