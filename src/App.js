import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/Product/Product";
import Home from "./modules/Home/Home";
import AllProduct from "./modules/AllProduct/AllProduct";
import ProCategory from "./modules/ProductCategory/ProCategory";
import Cart from "./modules/cart/Cart";

function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products/" element={<AllProduct />} />
        <Route path="/Categories/:name" element={<ProCategory />} />
        <Route path="Cart" element={<Cart />} />

        {/* <Route path="/" element={<Feature/>} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
