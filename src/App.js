// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product/Product";
import Home from "./modules/Home/Home";
import AllProduct from "./modules/AllProduct/AllProduct";
import ProCategory from "./modules/ProductCategory/ProCategory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<Product />} />
        <Route path="/Products/" element={<AllProduct />} />
        <Route path="/Categories/:name" element={<ProCategory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
