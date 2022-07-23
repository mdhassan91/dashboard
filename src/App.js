import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Customers,
  Dashboard,
  Employees,
  Products,
  ProductPage,
  Ecommerce,
  Orders,
  NewProduct,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex relative">
        <div className="flex">
          <BrowserRouter>
            <Navbar />
           <div className="flex justify-center ">

         
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/newProduct" element={<NewProduct />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
              </Routes>
              </div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
