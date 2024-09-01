import React from "react";
import TeslaLogo from "../assets/LogoTesla.png";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import ModelSwhite from "../assets/ModelSwhite.png";
import ModelSRed from "../assets/ModelSRed.png";
import ModelXblue from "../assets/ModelXblue.png";

import "../App.css";
function ModelS() {
  const list = [
    {
      imageUrl: ModelSwhite,
      Title: "Model S",
      Feature1: "420mL",
      Subfeature1: "Range (EPA est.)",

      Feature2: "130mph",
      Subfeature2: "Top Speed",

      Feature3: "3.1sec",
      Subfeature3: "0-60 mph",
      About:
        " Include $7,500 Federal Tax Credit and est. 5-year gas savings of $5,000.",
      Span: "Customize",

      Types1: "Long Range All-Wheel Drive ",
      Rates1: "$31,490",
      Types2: "Rear-Wheel Drive",
      Rates2: "$34,290",
      Types3: "Long Range Rear-Wheel Drive",
      Rates3: "$39,590",
      Types4: "   Dual Motor All-Wheel Drive",
      Rates4: "$37,950",
      Button: "Features details",
    },
    {
      Add: "True",
      imageUrl: ModelSRed,
      Title: "Full Self-Driving Capability",
      Sup: "$8,000",
      Feature1: "  Pearl White Multi-Coat ",
      Subfeature1: "$2,500",
      Feature2: " Ultra Red",
      Subfeature2: "$1,000",

      Feature3: "  Deep Blue",
      Subfeature3: " $2,000",
      About:
        " Receive a 30 day trial of Full Self-Driving Capability with a newvehicle purchase.",
      Span: "",
      Types: " Navigate on Autopilot",
      Rates: "",
      Types1: " Auto Lane Change",
      Rates1: "",
      Types2: "Autopark",
      Rates2: "",
      Types3: " Smart Summon",
      Rates3: "",
      Types4: "  Traffic Light and Stop Sign Control",
      Rates4: "",
      Types5: " Autosteer on city streets",
      Rates5: "",

      Foottitle:
        "The currently enabled features require active driver supervisionand do not make the vehicle autonomous.",
      Button: "Features details",
      Button2: "Add",
    },
  ];

  return (
    <>
      <div className="head flex justify-center w-full">
        <div className="head-box flex items-center justify-between w-[90%] h-[65px]">
          <img src={TeslaLogo} alt="logo" className="w-28 " />

          <div className="icon justify-around flex items-center w-[7%]">
            <TfiWorld className="cursor-pointer" />
            <BiSupport className="cursor-pointer" />
            <FaRegUser className="cursor-pointer" />
          </div>
        </div>
      </div>

      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full h-[740px] flex items-center justify-evenly"
          >
            <div className="ordernow bg-cover w-[60%] ">
              <img src={item.imageUrl} alt="ModelY" />
            </div>
            <div className="Cardetails">
              <h1 className="modelname">
                {item.Title} <sup>{item.Sup}</sup>
              </h1>
              <div className="carfeatures">
                <h1>
                  {" "}
                  {item.Feature1}
                  <span>{item.Subfeature1}</span>
                </h1>
                <h1>
                  {item.Feature2}
                  <span>{item.Subfeature2}</span>
                </h1>
                <h1>
                  {item.Feature3}
                  <span>{item.Subfeature3}</span>
                </h1>
              </div>
              <div className="aboutcar">
                <h2>
                  {item.About} <span>{item.Span}</span>
                </h2>
                <h2 className="typesofcar ">
                  {item.Types} <span className="rates">{item.Rates}</span>
                </h2>
                <h2 className="typesofcar ">
                  {item.Types1} <span className="rates">{item.Rates1}</span>
                </h2>
                <h2 className="typesofcar">
                  {item.Types2} <span className="rates">{item.Rates2}</span>
                </h2>
                <h2 className="typesofcar">
                  {item.Types3} <span className="rates">{item.Rates3}</span>
                </h2>
                <h2 className="typesofcar">
                  {item.Types4} <span className="rates">{item.Rates4}</span>
                </h2>
                <h2 className="typesofcar ">
                  {item.Types5} <span className="rates">{item.Rates5}</span>
                </h2>
                <h2>{item.Foottitle}</h2>
              </div>
              {item.Add === "True" && (
                <button className="feature-btn">{item.Button2}</button>
              )}
              <button className="feature-btn1">{item.Button}</button>
            </div>
          </div>
        );
      })}

      <div className="box w-full h-[740px] flex items-center justify-evenly">
        <div className="ordernow bg-cover w-[60%] ">
          <img src={ModelXblue} alt="ModelY" />
        </div>
        <div className="order-now">
          <h1 className="self-driving">Order Your Model S</h1>

          <div className="delivery">
            <h2>Est. Delivery: Jul – Aug 2024</h2>

            <h2>
              Your design qualifies for a $7,500 federal tax credit for eligible
              buyers.
              <span> See Details</span>
            </h2>
          </div>
          <button className="add-btn">Order</button>
        </div>
      </div>
    </>
  );
}

export default ModelS;
