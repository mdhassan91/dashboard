import React from "react";
import { Link ,NavLink} from "react-router-dom";
import { MdOutlineCancel } from 'react-icons/md';

const links=[
  {
    title:"Dashboard",
    link: "",
  },
  {
    title:"Products",
    link: "products",
  },
  {
    title:"New Product",
    link: "newProduct",
  },
  {
    title:"Product Page",
    link: "productPage",
  },
  {
    title:"Orders",
    link: "orders",
  },
  {
    title:"Customers",
    link: "customers",
  },
  {
    title:"Employees",
    link: "employees",
  }
]


function Navbar() {
  const activeMenu=true;
  const currentColor='#03C9D7';

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
    {activeMenu && (
      <>
        <div className="flex justify-between items-center">
          <button  className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <span>Shoppy</span>
          </button>
       
            <button
              type="button"
              // onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>
       
        </div>
        <div className="mt-10 ">
          {links.map((item) => (
            <div key={item.title}>
              <NavLink
                    to={`/${item.link}`}
                    key={item.title}
                    // onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                   
                    <span className="capitalize ">{item.title}</span>
                  </NavLink>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  );
}

export default Navbar

{/* <div className="w-56  ">
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
 
</div>
</div> */}

// {item.links.map((link) => (
//   <NavLink
//     to={`/${link.name}`}
//     key={link.name}
//     onClick={handleCloseSideBar}
//     style={({ isActive }) => ({
//       backgroundColor: isActive ? currentColor : '',
//     })}
//     className={({ isActive }) => (isActive ? activeLink : normalLink)}
//   >
//     {link.icon}
//     <span className="capitalize ">{link.name}</span>
//   </NavLink>
// ))}
