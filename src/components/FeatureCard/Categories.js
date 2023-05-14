import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import Loading from "../Product/Loading";

function Categories() {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };
    fetchProducts();
  }, []);

  if (Categories.length === 0)
    return (
      <div>
        {" "}
        <Loading />
      </div>
    );
  return <FeatureCard Categories={Categories} />;
}

export default Categories;
