import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./assets/myComponents/ProductDetails";
import Layout from "./assets/myComponents/Layout";
import Shop from "./pages/Shop";
import ScrollToTop from "./assets/myComponents/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="product/:productName" element={<ProductDetails />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default App;
