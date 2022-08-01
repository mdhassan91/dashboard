import React from "react";
import { products } from "../data/dummy";
import Table from "../components/Table";

const tableData = [
  {
    title: "Product ID",
    render: (rowData) => {
      return <span>{rowData.productID}</span>;
    },
  },
  {
    title: "Product Image",
    render: (rowData) => {
      return (
        <div>
          <img
            className="rounded-xl h-20 md:ml-3"
            src={rowData.productImage}
            alt="order-item"
          />
        </div>
      );
    },
  },

  {
    title: "Product Name",
    render: (rowData) => {
      return <span>{rowData.productName}</span>;
    },
  },
  {
    title: "Category",
    render: (rowData) => {
      return <span>{rowData.category}</span>;
    },
  },
  {
    title: "Price",
    render: (rowData) => {
      return <span>{rowData.price}</span>;
    },
  },

  {
    title: "Quantity",
    render: (rowData) => {
      return <span>{rowData.quantity}</span>;
    },
  },
];

function Products() {
  return <Table data={products} columns={tableData} />;
}

export default Products;
