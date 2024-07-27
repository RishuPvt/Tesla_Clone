import React from "react";
import Cybertruckimg from "../assets/Cybertruckimg.png";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaCircleArrowDown } from "react-icons/fa6";

function CyberRoute() {
  return (
    <>
      <div className="CyberRoute flex  text-white">
        <img
          src={Cybertruckimg}
          alt="CyberTruck"
          className="w-[70%] h-[741px]"
        />
        <div className="truckdetails flex  ">
          <h1 className="truckheading">Reserve Now</h1>
          
          <div className="orderbtn2 flex  "> <button className="purchasebtn">Purchase</button>
          <button className="problembtn">Problem</button>
          </div>
                   <div className="truckfeatures">
            <h2 className="">EST. $60,990</h2>
            <h1 className="">REAR-WHEEL DRIVE</h1>
            <h3 className="">-AVAILABLE IN 2025</h3>
            <h3 className="">-250 MI. RANGE (EST.)</h3>
            <h3 className="">-6.5 SEC. 0-60 MPH</h3>
          </div>
          <div className="truckfeatures">
            <h2 className="">EST. $60,990</h2>
            <h1 className="">REAR-WHEEL DRIVE</h1>
            <h3 className="">-AVAILABLE IN 2025</h3>
            <h3 className="">-250 MI. RANGE (EST.)</h3>
            <h3 className="">-6.5 SEC. 0-60 MPH</h3>
          </div>
          <div className="truckfeatures ">
            <h2 className="">EST. $60,990</h2>
            <h1 className="">REAR-WHEEL DRIVE</h1>
            <h3 className="">-AVAILABLE IN 2025</h3>
            <h3 className="">-250 MI. RANGE (EST.)</h3>
            <h3 className="">-6.5 SEC. 0-60 MPH</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CyberRoute;
