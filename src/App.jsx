import ProductCard from "./assets/myComponents/ProductCard";
import Navbar from "@/assets/myComponents/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./assets/myComponents/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductCard />} />
          <Route path="/product/:productName" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
