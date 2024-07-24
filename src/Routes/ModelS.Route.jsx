
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
          <img src={ModelSwhite} alt="ModelS" />
        </div>
        <div className="Cardetails">
          <h1 className="modelname">Model S</h1>
          <div className="carfeatures">
            <h1>
              {" "}
              402mL
              <span>Range (EPA est.)</span>
            </h1>
            <h1>
              130mph
              <span>Top Speed</span>
            </h1>
            <h1>
              3.1sec<span>0-60 mph</span>
            </h1>
          </div>
          <div className="aboutcar">
            <h2>
            Include est. 5-year gas savings of $6,500,  est. gas savings of $108 /mo <span>Customize</span>
            </h2>
            <h2 className="typesofcar ">
              Long Range All-Wheel Drive <span className="rates">$63,490</span>
            </h2>
            <h2 className="typesofcar">
              Rear-Wheel Drive <span className="rates">$60,290</span>
            </h2>
            <h2 className="typesofcar">
              Long Range Rear-Wheel Drive <span className="rates">$59,590</span>
            </h2>
            <h2 className="typesofcar">
             Plaid <span className="rates">$83,950</span>
            </h2>
          </div>
          <button className="feature-btn1">Features details</button>
        </div>
      </div>

      <div className="w-full h-[740px] flex items-center justify-evenly">
        <div className="ordernow bg-cover w-[60%] ">
          <img src={ModelSRed} alt="ModelX" />
        </div>
        <div className="Cardetails">
          <h1 className="self-driving">
            Full Self-Driving Capability <sup>$8,000</sup>
          </h1>
          <div className="car-color">
            <h1 className="white">
              {" "}
              Pearl White Multi-Coat 
              <span>$2,500</span>
            </h1>
            <h1 className="red">
              Ultra Red
              <span> $2,500</span>
            </h1>
            <h1 className="blue">
               Deep Blue
              <span> $2,000</span>
            </h1>
          </div>
          <div className="aboutcar">
            <h2>
            Receive a 30 day trial of Full Self-Driving Capability with a new vehicle purchase.
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
          <img src={ModelXblue} alt="ModelS" />
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
