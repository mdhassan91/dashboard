import React from "react";
import { products } from "../data/dummy";

function Products() {
  return (
    <div className="align-center mt-5  ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product ID
              </th>
              <th scope="col" className="py-3 px-6">
                Product Image
              </th>
              <th scope="col" className="py-3 px-6">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
             
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr
                key={product.productID}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.productID}
                </th>
                <td className="py-4 px-6">
                  <div>
                    <img
                      className="rounded-xl h-20 md:ml-3"
                      src={product.productImage}
                      alt="order-item"
                    />
                  </div>
                </td>
                <td className="py-4 px-6">{product.productName}</td>
                <td className="py-4 px-6">{product.category}</td>
                <td className="py-4 px-6">{product.price}</td>
              
                <td className="py-4 px-6">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
