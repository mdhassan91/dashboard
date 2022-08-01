import React from 'react'
import Table from "../components/Table";
import { employeesData } from "../data/dummy";

const tableData = [
  {
    title: "Employees ID",
    render: (rowData) => {
      return <span>{rowData.EmployeeID}</span>;
    },
  },
  {
    title: "Name",
    render: (rowData) => {
      return (
        <div className="image flex gap-4">
          <img
            className="rounded-full w-10 h-10"
            src={rowData.EmployeeImage}
            alt="employee"
          />
          <div>
            <p>{rowData.Name}</p>
          </div>
        </div>
      );
    },
  },
  {
    title: "Title",
    render: (rowData) => {
      return <span>{rowData.Title}</span>;
    },
  },
  {
    title: "Hire Date",
    render: (rowData) => {
      return <span>{rowData.HireDate}</span>;
    },
  },
  {
    title: "Country",
    render: (rowData) => {
      return <span>{rowData.Country}</span>;
    },
  },

 
  {
    title: "Reports to",
    render: (rowData) => {
      return <span>{rowData.ReportsTo}</span>;
    },
  }
];

function Employees() {
  return <Table data={employeesData} columns={tableData} />;
}

export default Employees