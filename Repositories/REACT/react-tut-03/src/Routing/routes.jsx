import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Product1 from "../pages/Products/Product-1.jsx";
import Product2 from "../pages/Products/Product-2.jsx";
import Product3 from "../pages/Products/Product-3.jsx";
import Users from "../pages/Users.jsx";
import UsersAddress from "../pages/Users/UsersAddress.jsx";
import UsersData from "../pages/Users/UsersData.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />}>
        <Route index element={<Product1 />} />
        <Route path="product1" element={<Product1 />} />
        <Route path="product2" element={<Product2 />} />
        <Route path="product3" element={<Product3 />} />
      </Route>
      <Route path="/users" element={<Users />}>
        <Route index element={<UsersData />} />
        <Route path="usersaddress" element={<UsersAddress />} />
        <Route path="usersdata" element={<UsersData />} />
      </Route>
    </Routes>
  );
}
