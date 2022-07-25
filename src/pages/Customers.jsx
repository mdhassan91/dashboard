import React from "react";
import { customersData } from "../data/dummy";

function Customers() {
  return (
    <div className="align-center mt-5  ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Customer ID
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Project Name
              </th>
              <th scope="col" className="py-3 px-6">
                Location
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Budget
              </th>
              <th scope="col" className="py-3 px-6">
                Weeks
              </th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer, i) => (
              <tr
                key={customer.CustomerID}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {customer.CustomerID}
                </th>
                <td className="py-4 px-6">
                  <div className="image flex gap-4">
                    <img
                      className="rounded-full w-10 h-10"
                      src={customer.CustomerImage}
                      alt="employee"
                    />
                    <div>
                      <p>{customer.CustomerName}</p>
                      {/* <p>{props.CustomerEmail}</p> */}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{customer.CustomerEmail}</td>
                <td className="py-4 px-6">{customer.ProjectName}</td>
                <td className="py-4 px-6">{customer.Location}</td>
                <td className="py-4 px-6">
                  <span
                    class="text-white   text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                    style={{ backgroundColor: customer.StatusBg }}
                  >
                    {customer.Status}{" "}
                  </span>
                </td>
                <td className="py-4 px-6">{customer.Budget}</td>
                <td className="py-4 px-6">{customer.Weeks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
