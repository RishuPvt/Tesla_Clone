import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import TeslaLogo from "../assets/LogoTesla.png";
import menuimg from "../assets/Megas.png";
import menuimg1 from "../assets/Model3.listitem.png";
import menuimg2 from "../assets/ModelXmenuitems.png";
import menuimg3 from "../assets/ModelYmenuitems.png";
import menuimg4 from "../assets/Cybertruckmenuitems.png";
import { NavLink } from "react-router-dom";
import menuimg01 from "../assets/menuimgsolarpannel.png";
import menuimg02 from "../assets/menuimgsolarroof.png";
import menuimg03 from "../assets/menuimgpowerwall.png";
import menuimg11 from "../assets/menuimgsupercharger.png";
import menuimg12 from "../assets/menuimgcharger.png";
import menuimg13 from "../assets/menuimghomecharger.png";
import menuimg21 from "../assets/menuimg21capshop.png";
import menuimg22 from "../assets/menuimg21bagshop.png";
import menuimg23 from "../assets/menuimg21accensorshop.png";

const PopupBox = ({ className, onMouseLeave, hoveredIndex }) => {
  // Define the different content for each hovered index
  const hoverContent = [
    [
      { logo: menuimg, name: "Model S", path: "/ModelS" },
      { logo: menuimg1, name: "Model 3", path: "/Model3" },
      { logo: menuimg2, name: "Model X", path: "/ModelX" },
      { logo: menuimg3, name: "Model Y", path: "/ModelY" },
      { logo: menuimg4, name: "Cyber Truck", path: "/CyberTruck" },
    ],
    [
      { logo: menuimg12, name: "Charger" },
      { logo: menuimg13, name: "Home Charger" },
      { logo: menuimg11, name: "Super Charger" },
    ],
    [
      { logo: menuimg01, name: "Solar Pannel" },
      { logo: menuimg02, name: "Solar Roof" },
      { logo: menuimg03, name: "Power Wall" },
    ],
    [
      { logo: menuimg21, name: "Apparel" },
      { logo: menuimg22, name: "Lifestyle" },
      { logo: menuimg23, name: "Accessories" },
    ],
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[340px] bg-white z-20 transition-transform duration-300 ${className} transform ${
        hoveredIndex !== null ? "scale-105" : "scale-100"
      }`}
      onMouseLeave={onMouseLeave}
    >
      <div className="head flex items-center justify-around w-full h-[65px] mt-14 ">
        <img
          src={TeslaLogo}
          alt="logo"
          className="w-28 transition-transform duration-300"
        />
        <ul className="list-items flex items-center justify-center w-[65%] h-[45px] transition-opacity duration-300 ">
          {/* Render the appropriate content based on hoveredIndex */}
          {hoveredIndex !== null &&
            hoverContent[hoveredIndex].map((item, index) => (
              <li
                className="li p-2 m-1.5 cursor-pointer hover:bg-gray-200 rounded-lg font-medium  transition-all duration-300"
                key={index}
              >
                {typeof item === "string" ? ( // Check if the item is a string
                  item
                ) : (
                  // Render image if it's not a string
                  <NavLink to={item.path}>
                    <img
                      src={item.logo}
                      alt={`Popup item ${index}`}
                      className="w-34 h-24 transition-transform duration-300"
                    />
                  </NavLink>
                )}
                <div className="flex items-center justify-center">
                  {item.name}
                </div>
              </li>
            ))}
        </ul>
        <div className="icon justify-around flex items-center w-[7%] transition-transform duration-300">
          <TfiWorld className="cursor-pointer" />
          <BiSupport className="cursor-pointer" />
          <FaRegUser className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
