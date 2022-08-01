import React from "react";
import { ordersData } from "../data/dummy";
import Table from "../components/Table";

const tableData = [
  {
    title: "Order ID",
    render: (rowData) => {
      return <span>{rowData.OrderID}</span>;
    },
  },
  {
    title: "Image",
    render: (rowData) => {
      return (
        <div>
          <img
            className="rounded-xl h-20 md:ml-3"
            src={rowData.ProductImage}
            alt="order-item"
          />
        </div>
      );
    },
  },
  {
    title: "Order Item",
    render: (rowData) => {
      return <span>{rowData.OrderItems}</span>;
    },
  },
  {
    title: "Customer Name",
    render: (rowData) => {
      return <span>{rowData.CustomerName}</span>;
    },
  },
  {
    title: "Location",
    render: (rowData) => {
      return <span>{rowData.Location}</span>;
    },
  },

  {
    title: "Status",
    render: (rowData) => {
      return (
        <span
          style={{ backgroundColor: rowData.StatusBg }}
          className="text-white   text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
        >
          {rowData.Status}
        </span>
      );
    },
  },
  {
    title: "Total Amount",
    render: (rowData) => {
      return <span>{rowData.TotalAmount}</span>;
    },
  },
];

function Orders() {
  return <Table data={ordersData} columns={tableData} />;
}

export default Orders;

// {
//   /* <div className="align-center mt-5  ">
// <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
//   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//     <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//       <tr>
//         <th scope="col" className="py-3 px-6">
//           Order ID
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Name
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Email
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Customer Name
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Location
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Status
//         </th>
//         <th scope="col" className="py-3 px-6">
//           Total Amount
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       {ordersData.map((order, i) => (
//         <tr
//           key={order.OrderID}
//           className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
//         >
//           <th
//             scope="row"
//             className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//           >
//             {order.OrderID}
//           </th>
//           <td className="py-4 px-6">
//             <div>
//               <img
//                 className="rounded-xl h-20 md:ml-3"
//                 src={order.ProductImage}
//                 alt="order-item"
//               />
//             </div>
//           </td>
//           <td className="py-4 px-6">{order.OrderItems}</td>
//           <td className="py-4 px-6">{order.CustomerName}</td>
//           <td className="py-4 px-6">{order.Location}</td>
//           <td className="py-4 px-6">
//             <span
//               class="text-white   text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
//               style={{ backgroundColor: order.StatusBg }}
//             >
//               {order.Status}{" "}
//             </span>
//           </td>
//           <td className="py-4 px-6">{order.TotalAmount}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
// </div> */
// }
