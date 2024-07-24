import React from "react";
import TeslaLogo from "../assets/LogoTesla.png";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import ModelX from "../assets/Screenshot.png";
import bluemodelx from "../assets/bluemodelx.png";
import redmodel3 from "../assets/redmodel3.png";
import "../App.css";
function Layout() {
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

      <div className="w-full h-[740px] flex items-center justify-evenly">
        <div className="ordernow bg-cover w-[60%] ">
          <img src={ModelX} alt="ModelX" />
        </div>
        <div className="Cardetails">
          <h1 className="modelname">Model 3</h1>
          <div className="carfeatures">
            <h1>
              {" "}
              363mi
              <span>Range (EPA est.)</span>
            </h1>
            <h1>
              125mph
              <span>Top Speed</span>
            </h1>
            <h1>
              4.9sec<span>0-60 mph</span>
            </h1>
          </div>
          <div className="aboutcar">
            <h2>
              Include $7,500 Federal Tax Credit and est. 5-year gas savings of
              $5,000. <span>Customize</span>
            </h2>
            <h2 className="typesofcar ">
              Long Range All-Wheel Drive <span className="rates">$34,990</span>
            </h2>
            <h2 className="typesofcar">
              Rear-Wheel Drive <span className="rates">$33,990</span>
            </h2>
            <h2 className="typesofcar">
              Long Range Rear-Wheel Drive <span className="rates">$29,990</span>
            </h2>
            <h2 className="typesofcar">
              Dual Motor All-Wheel Drive <span className="rates">$42,990</span>
            </h2>
          </div>
          <button className="feature-btn1">Features details</button>
        </div>
      </div>

      <div className="w-full h-[740px] flex items-center justify-evenly">
        <div className="ordernow bg-cover w-[60%] ">
          <img src={bluemodelx} alt="ModelX" />
        </div>
        <div className="Cardetails">
          <h1 className="self-driving">
            Full Self-Driving Capability <sup>$8,000</sup>
          </h1>
          <div className="car-color">
            <h1 className="grey">
              {" "}
              Stealth Grey
              <span>Included</span>
            </h1>
            <h1 className="blue">
              Deep Blue Metallic
              <span> $1,000</span>
            </h1>
            <h1 className="red">
              Ultra Red
              <span> $2,000</span>
            </h1>
          </div>
          <div className="aboutcar">
            <h2>
              Receive a 30 day trial of Full Self-Driving Capability with a new
              vehicle purchase. Your car will be able to drive itself almost
              anywhere with minimal driver intervention and will continuously
              improve
            </h2>
            <h2 className="typesofcar ">
              Navigate on Autopilot
              <span className="rates">$34,990</span>
            </h2>
            <h2 className="typesofcar">
              Auto Lane Change <span className="rates">$33,990</span>
            </h2>
            <h2 className="typesofcar">
              Autopark <span className="rates">$29,990</span>
            </h2>
            <h2 className="typesofcar">
              Smart Summon <span className="rates">$42,990</span>
            </h2>
            <h2 className="typesofcar">
              Autosteer on city streets
              <span className="rates">$42,990</span>
            </h2>
            <h2 className="typesofcar">
              Traffic Light and Stop Sign Control
              <span className="rates">$42,990</span>
            </h2>
            <h2>
              {" "}
              The currently enabled features require active driver supervision
              and do not make the vehicle autonomous.
            </h2>
          </div>
          <button className="feature-btn">Add</button>

          <button className="feature-btn">Features details</button>
        </div>
      </div>

      <div className="box w-full h-[740px] flex items-center justify-evenly">
        <div className="ordernow bg-cover w-[60%] ">
          <img src={redmodel3} alt="ModelX" />
        </div>
        <div className="order-now">
          <h1 className="self-driving">Order Your Model 3</h1>

          <div className="delivery">
            <h2>Est. Delivery: Aug – Sep 2024</h2>

            <h2>
              Your design qualifies for a $7,500 federal tax credit for eligible
              buyers.
              <span> See Details</span>
            </h2>
          </div>
          <button className="add-btn">Add</button>
        </div>
      </div>
    </>
  );
}

export default Layout;
