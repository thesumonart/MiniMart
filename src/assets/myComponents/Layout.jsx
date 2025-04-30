import { Outlet } from "react-router-dom";
import Navbar from "./../myComponents/Navbar";
import Footer from "./../myComponents/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
