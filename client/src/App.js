import React from "react";
import Home from "./pages/home/home";
import Catalog from "./pages/catalog/catalog";
import ProductInspection from "./pages/productInspection/productInspection";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./pages/checkout/checkout";
import Confirm from "./pages/confirm/confirm";
import Contacts from "./pages/contacts/contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductContextProvider } from "./pages/context";
import "./App.css";




function App() {
  return (
    <div className="App">
      <ProductContextProvider> 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/productInspection" element={<ProductInspection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkOut" element={<Checkout />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>     
        </BrowserRouter>
      </ProductContextProvider> 
    </div>
  );
}

export default App;
