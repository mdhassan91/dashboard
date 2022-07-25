import React from 'react'
import { employeesData } from "../data/dummy";

function Employees() {
  return (
    <div className="align-center mt-5  ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Employees ID
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Title
              </th>
              <th scope="col" className="py-3 px-6">
                Hire Date
              </th>
              <th scope="col" className="py-3 px-6">
                Country
              </th>
              <th scope="col" className="py-3 px-6">
                Reports to
              </th>
             
            </tr>
          </thead>
          <tbody>
            {employeesData.map((employee, i) => (
              <tr
                key={employee.EmployeeID}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {employee.EmployeeID}
                </th>
                <td className="py-4 px-6">
                  <div className="image flex gap-4">
                    <img
                      className="rounded-full w-10 h-10"
                      src={employee.EmployeeImage}
                      alt="employee"
                    />
                    <div>
                      <p>{employee.Name}</p>
                      {/* <p>{props.employeeEmail}</p> */}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{employee.Title}</td>
                <td className="py-4 px-6">{employee.HireDate}</td>
                <td className="py-4 px-6">{employee.Country}</td>
                <td className="py-4 px-6">{employee.ReportsTo}</td>
             
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employees