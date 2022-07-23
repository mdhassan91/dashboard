import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-56 ">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800  ml-3 h-screen">
        <ul className="space-y-2">
          
          <li>
            <Link to="/">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Dashboard</span>
            </button>
            </Link>
           
          </li>
        </ul>
        <ul className="space-y-2">
          
          <li>
            <Link to="products">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Products</span>
            </button>
            </Link>
           
          </li>
          <li>
            <Link to="newProduct">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">New Product</span>
            </button>
            </Link>
           
          </li>
          <li>
            <Link to="productPage">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Products Page</span>
            </button>
            </Link>
           
          </li>
          <li>
            <Link to="orders" >
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Orders</span>
            </button>
            </Link>
            
          </li>
          <li>
            <Link to="customers">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Customers</span>
            </button>
            </Link>
          
          </li>
          <li>
            <Link to="employees">
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Employees</span>
            </button>
            </Link>
          
          </li>
        </ul>
        {/* <ul className="space-y-2">
          <h1 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            Apps
          </h1>
          <li>
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Calender</span>
            </button>
          </li>
          <li>
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Kanban</span>
            </button>
          </li>
          <li>
            <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Editor</span>
            </button>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Navbar;
