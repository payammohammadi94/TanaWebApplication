import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from './pages/Home'
import Login from "./pages/Login";
import ProductForCategory from './pages/ProductForCategory';
import Register from "./pages/Register";
import SingleProduct from './pages/SingleProduct';
function App() {
  return (


<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/product" element={<ProductForCategory />}></Route>
  <Route path="/detail-product" element={<SingleProduct />}></Route>
  <Route path="/register" element={<Register />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
