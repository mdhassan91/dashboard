import { FiBarChart } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

export const products = [
  {
    productID: 1,
    category: "Clothing",
    price: 50,
    quantity: 1,
    productImage: "./images/shirt.jpg",
    productName: "Shirt",
  },
  {
    productID: 2,
    category: "Electronic",
    price: 5,
    quantity: 1,
    productImage: "./images/headphone.jpeg",
    productName: "Headphones",
  },
  {
    productID: 3,
    category: "Furniture",
    price: 15,
    quantity: 1,
    productImage: "./images/furnitur.jpeg",
    productName: "Furniture",
  },
  {
    productID: 4,
    category: "Clothing",
    price: 50,
    quantity: 1,
    productImage: "./images/shirt.jpg",
    productName: "Shirt",
  },
  {
    productID: 5,
    category: "Electronic",
    price: 5,
    quantity: 1,
    productImage: "./images/headphone.jpeg",
    productName: "Headphones",
  },
  {
    productID: 6,
    category: "Furniture",
    price: 15,
    quantity: 1,
    productImage: "./images/furnitur.jpeg",
    productName: "Furniture",
  },
];

export const ordersData = [
  {
    OrderID: 845954,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    OrderID: 874536,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    OrderID: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    OrderID: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    OrderID: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "/images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    CustomerID: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: "./images/avatar3.png",

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    CustomerID: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: "/images/avatar4.jpg",
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    CustomerID: 1004,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: "./images/avatar.jpg",
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: "./images/avatar2.jpg",
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    CustomerID: 1006,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: "./images/avatar2.jpg",
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar3.png",
  },
  {
    EmployeeID: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar3.png",
  },
  {
    EmployeeID: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar4.jpg",
  },
  {
    EmployeeID: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar2.jpg",
  },
  {
    EmployeeID: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar.jpg",
  },
  {
    EmployeeID: 4,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar.jpg",
  },
  {
    EmployeeID: 5,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: "./images/avatar2.jpg",
  },
];
export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const lineChartData = [
  { year: 2005, Germany: 21, England: 28, India: 10 },
  { year: 2006, Germany: 24, England: 44, India: 20 },
  { year: 2007, Germany: 36, England: 48, India: 30 },
  { year: 2008, Germany: 37, England: 50, India: 39 },
  { year: 2009, Germany: 54, England: 66, India: 50 },
  { year: 2010, Germany: 57, England: 78, India: 70 },
  { year: 2011, Germany: 70, England: 84, India: 100 },
];

export const barChartData = [
  { month: "Jan", expense: 100, budget: 50 },
  { month: "Feb", expense: 50, budget: 100 },
  { month: "March", expense: 200, budget: 300 },
  { month: "Apr", expense: 150, budget: 150 },
  { month: "May", expense: 150, budget: 100 },
  { month: "Jun", expense: 150, budget: 100 },
];

export const pieChartData = [
  { year: "2018", val: 35 },
  { year: "2019", val: 15 },
  { year: "2020", val: 25 },
  { year: "2021", val: 25 },
];

export const simpleBar=[
  {x:1,yval:2},
  {x:2,yval:6},
  {x:3,yval:8},
  {x:4,yval:5},
  {x:5,yval:10}
];