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
  const activeMenu = true;
  const currentMode = "Light";
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Navbar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Navbar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className=" md:static bg-main-bg dark:bg-main-dark-bg navbar w-full "></div>
            <div>
              {/* {themeSettings && (<ThemeSettings />)} */}
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
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
