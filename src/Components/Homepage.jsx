import React from "react";
import { NavLink } from "react-router-dom";
import cybertrucklogo from "../assets/Cybertrucklogo.png";
import Header from "./Header";
function Homepage() {
  const list = [
    {
      Title: "Model X",
      Rate: "From $65,990 ",
      Saving: "After $14,000 Est. Savings",
      sup: "4",
      path: "/ModelX",
      Button: "Order Now",
      Button2: "Demo Drive",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-v2.jpg",
    },
    {
      Title: "Model Y",
      Saving: " 1.99% APR Financing Ending August 31",
      Rate: "From $31,490",
      sup: "4",
      path: "/ModelY",
      Button: "Order Now",
      Button2: "Demo Drive",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png",
    },
    {
      Title: "Model S",
      Saving: "After $6,500 Est. Savings",
      Rate: "From $68,4905",
      path: "/ModelS",
      Button: "Order Now",
      Button2: "Demo Drive",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-v2.jpg",
      Required: "true",
    },
    {
      path: "/CyberTruck",
      imageUrl:
        "https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg",
      Class: "true",
      logo: cybertrucklogo,
      Button: "Order Now",
      Button2: "Demo Drive",
    },
    {
      Title: "Solar Roof",
      Saving: " ",
      Rate: "Produce Clean Energy From Your Roof",
      path: "/Solarroof",
      Button: "Order Now",
      Button2: "Learn More",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global",
    },
    {
      Title: "Solar Wall",
      Saving: " ",
      Rate: "Produce Clean Energy From Your Wall",
      path: "/Solarroof",
      Button: "Order Now",
      Button2: "Learn More",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg",
    },
    {
      Title: "Accessories",
      Saving: " ",
      path: "/Solarroof",
      Button: "Shop",
      Button2: "Learn More",
      imageUrl:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div className="">
        {list.map((item, index) => (
          <div
            key={index}
            className="ModelS bg-cover h-[743px] flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className="box w-[50%] h-[85%] flex items-center justify-cente">
              <div className="sub-box w-full h-[75%]">
                {item.Class === "true" && (
                  <div className="flex items-center justify-center w-full h-[50%]">
                    <img
                      src={item.logo}
                      alt="cybertruck"
                      className="logoimg w-[370px]"
                    />
                  </div>
                )}
                <h1
                  className={`model3heading items-center justify-center flex font-medium ${
                    item.Required === "true" ? "text-white" : "text-black"
                  }`}
                >
                  {item.Title}
                </h1>
                <h1
                  className={`model3subheading items-center justify-center flex font-semibold ${
                    item.Required === "true" ? "text-white" : "text-black"
                  }`}
                >
                  {item.Rate}
                </h1>
                <h1
                  className={`model3subheading items-center  justify-center flex underline text-gray-600 ${
                    item.Required === "true" ? "text-white" : "text-black"
                  }`}
                >
                  {item.Saving}
                  <sup>{item.sup}</sup>
                </h1>
              </div>
            </div>

            <div className="btn-box items-center justify-center flex flex-col sm:flex-row gap-4 sm:gap-8">
              <NavLink
                to={item.path}
                className={` ${
                  item.Class === "true"
                    ? "btn text-center font-medium hover:bg-gray-600 hover:text-black w-full sm:w-[250px] p-2 text-white bg-black"
                    : "btn font-medium hover:bg-gray-200 hover:text-black w-[250px] p-2 rounded-xl bg-white text-center"
                } `}
              >
                {item.Button}
              </NavLink>
              <button
                className={`${
                  item.Class === "true"
                    ? "btn font-medium hover:bg-black  w-full sm:w-[250px] p-2  bg-gray-800 text-white"
                    : "btn font-medium hover:bg-gray-600 w-full sm:w-[250px] p-2 rounded-xl bg-gray-800 text-white"
                }`}
              >
                {item.Button2}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homepage;
