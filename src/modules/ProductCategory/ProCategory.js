import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import AllproductsApi from "../AllProduct/AllProductsApi";

function ProCategory() {
  const { name } = useParams();

  const [ProCat, setProCat] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await res.json();
      setProCat(data);
    };
    fetchProducts();
  }, []);
  console.log(ProCat);
  return (
    <div>
      <AllproductsApi products={ProCat} />
    </div>
  );
}

export default ProCategory;
