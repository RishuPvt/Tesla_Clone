import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import TeslaLogo from "../assets/LogoTesla.png";
import { NavLink } from "react-router-dom";
import "../App.css";

function Header() {
  const list = [
    {
      name: "Vehicles",
    },
    {
      name: "Charging",
    },
    {
      name: "Energy",
    },
    {
      name: "Discover",
    },
    {
      name: "Shop",
    },
  ];

  return (
    <>
      <div className="main bg-cover h-[742px]">
        <div className="head flex items-center justify-around w-full h-[65px]">
          <img src={TeslaLogo} alt="logo" className="w-28 " />
          <ul className="list-items flex items-center justify-center w-[75%]">
            {list.map((item, index) => {
              return (
                <li
                  className="li p-2 m-1.5 cursor-pointer hover:bg-gray-200 rounded-lg font-medium"
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
          <div className="icon justify-around flex items-center w-[7%]">
            <TfiWorld className="cursor-pointer" />
            <BiSupport className="cursor-pointer" />
            <FaRegUser className="cursor-pointer" />
          </div>
        </div>
        <h1 className="model3heading items-center justify-center flex font-medium mt-10">
          Model 3
        </h1>
        <h1 className="model3subheading items-center justify-center flex font-semibold">
          $7,500 Federal Tax Credit Available<sup>1</sup>
        </h1>
        <h1 className="model3subheading items-center justify-center flex underline text-gray-600 ">
          From $29,990 After Est. Savings<sup>2</sup>
        </h1>

        <div className="btn-box items-center justify-center flex mt-[400px] gap-8">
          <NavLink
            to="/Model3"
            className="btn font-medium hover:bg-gray-200 hover:text-black w-[250px] p-2 rounded-xl bg-white text-center"
          >
            Order Now
          </NavLink>

          <button className="btn font-medium hover:bg-gray-600  w-[250px] p-2 rounded-xl bg-gray-800 text-white">
            Demo Drive
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
