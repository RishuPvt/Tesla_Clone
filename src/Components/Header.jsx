import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import TeslaLogo from "../assets/LogoTesla.png";
import { NavLink } from "react-router-dom";
import "../App.css";
import PopupBox from "./PopupBox";

// Header component definition
function Header() {
  // State to manage the visibility of the hover box
  const [isVisible, setIsVisible] = useState(false);

  // State to track the index of the hovered item in the list
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to show the hover box and set the index of the hovered item
  const showHoverBox = (index) => {
    setIsVisible(true);
    setHoveredIndex(index);
  };

  // Function to hide the hover box and reset the hovered index
  const hideHoverBox = () => {
    setIsVisible(false);
    setHoveredIndex(null);
  };

  // List of items to be displayed in the header menu
  const list = [
    { name: "Vehicles" },
    { name: "Charging" },
    { name: "Energy" },
    { name: "Shop" },
  ];

  return (
    <>
      {/* Background overlay: displayed when hover box is visible */}
      {isVisible && (
        <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      )}

      {/* Hover box component: shown or hidden based on isVisible state */}
      <PopupBox
        className={`${isVisible ? "block" : "hidden"}`}
        onMouseLeave={hideHoverBox}
        hoveredIndex={hoveredIndex} // Passing hovered index to PopupBox for dynamic content
      />

      {/* Main header section */}
      <div
        className={`main bg-cover h-[742px] ${isVisible ? "opacity-20" : ""}`}
      >
        <div className="head flex items-center justify-around w-full h-[65px]">
          {/* Tesla logo */}
          <img src={TeslaLogo} alt="logo" className="w-28" />

          {/* Navigation menu list */}
          <ul className="list-items flex items-center justify-center w-[75%]">
            {list.map((item, index) => (
              <li
                onMouseEnter={() => showHoverBox(index)} // Show hover box on mouse enter and set the index
                className="li p-2 m-1.5 cursor-pointer hover:bg-gray-200 rounded-lg font-medium"
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Icons for additional actions */}
          <div className="icon justify-around flex items-center w-[7%]">
            <TfiWorld className="cursor-pointer" />
            <BiSupport className="cursor-pointer" />
            <FaRegUser className="cursor-pointer" />
          </div>
        </div>

        {/* Headings and subheadings for the Model 3 section */}
        <h1 className="model3heading items-center justify-center flex font-medium mt-10">
          Model 3
        </h1>
        <h1 className="model3subheading items-center justify-center flex font-semibold">
          $7,500 Federal Tax Credit Available<sup>1</sup>
        </h1>
        <h1 className="model3subheading items-center justify-center flex underline text-gray-600 ">
          From $29,990 After Est. Savings<sup>2</sup>
        </h1>

        {/* Buttons for order and demo drive actions */}
        <div className="btn-box items-center justify-center flex mt-[400px] gap-8">
          <NavLink
            to="/Model3"
            className="btn font-medium hover:bg-gray-200 hover:text-black w-[250px] p-2 rounded-xl bg-white text-center"
          >
            Order Now
          </NavLink>

          <button className="btn font-medium hover:bg-gray-600 w-[250px] p-2 rounded-xl bg-gray-800 text-white">
            Demo Drive
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
