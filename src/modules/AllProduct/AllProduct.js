import React, { useEffect, useState } from "react";
import AllProductsApi from "./AllProductsApi";
// import Categories from "../../components/FeatureCard/Categories";
import Loading from "../../components/Product/Loading";

function AllProduct() {
  const [Allproducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      {/* <Categories /> */}
      {Allproducts.length > 0 ? (
        <AllProductsApi products={Allproducts} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default AllProduct;
