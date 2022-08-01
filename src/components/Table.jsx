import React from "react";

function Table({ data, columns }) {
  return (
    <div className="align-center mt-5  ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((headerItem, index) => (
                <th scope="col" className="py-3 px-6" key={index}>
                  {headerItem.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                {columns.map((col, index) => (
                  <td className="py-4 px-6" key={index}>
                    {col.render(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
