import React from 'react'
import {ordersData} from "../data/dummy"

function Orders() {
  return (
<div className='align-center mt-5  ' >


<div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Order ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Customer Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Location
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                <th scope="col" className="py-3 px-6">
                    Total Amount
                </th>
            </tr>
        </thead>
        <tbody>
            {ordersData.map((order,i)=>(
  <tr  key={order.OrderID}      className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  {order.OrderID}
  </th>
  <td className="py-4 px-6">
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={order.ProductImage}
      alt="order-item"
    />
  </div> 
  </td>
  <td className="py-4 px-6">
      {order.OrderItems}
  </td>
  <td className="py-4 px-6">
      {order.CustomerName}
  </td>
  <td className="py-4 px-6">
    {order.Location}
  </td>
  <td className="py-4 px-6">

 <span class="text-white   text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800" style={{backgroundColor: order.StatusBg}}>
 {order.Status} </span>  
  </td>
  <td className="py-4 px-6">
    {order.TotalAmount}
  </td>
</tr>

            ))}
          
            {/* <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="py-4 px-6">
                    White
                </td>
                <td className="py-4 px-6">
                    Laptop PC
                </td>
                <td className="py-4 px-6">
                    $1999
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td className="py-4 px-6">
                    Black
                </td>
                <td className="py-4 px-6">
                    Accessories
                </td>
                <td className="py-4 px-6">
                    $99
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td className="py-4 px-6">
                    Gray
                </td>
                <td className="py-4 px-6">
                    Phone
                </td>
                <td className="py-4 px-6">
                    $799
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            {/* <tr>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td className="py-4 px-6">
                    Red
                </td>
                <td className="py-4 px-6">
                    Wearables
                </td>
                <td className="py-4 px-6">
                    $999
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
        </tbody>
    </table>
</div>
</div>
  )
}

export default Orders