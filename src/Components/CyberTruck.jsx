import React from "react";
import cybertrucklogo from "../assets/Cybertrucklogo.png";
function CyberTruck() {
  return (
    <>
      <div className="CyberTruck flex flex-col  items-center justify-center bg-cover h-[742px]">
        <div className="box w-[50%] h-[80%] flex items-center justify-cente">
          <div className="sub-box w-full h-full">
            <div className="Trucklogo flex items-center justify-center w-full h-[50%]">
              <img
                src={cybertrucklogo}
                alt="cybertruck"
                className="logoimg w-[370px]"
              />
            </div>
          </div>
        </div>
        <div className="btn-box items-center justify-center flex flex-col sm:flex-row gap-4 sm:gap-8">
          <button className="btn font-medium hover:bg-gray-600 hover:text-black w-full sm:w-[250px] p-2 text-white bg-black">
            Order Now
          </button>
          <button className="btn font-medium hover:bg-black  w-full sm:w-[250px] p-2  bg-gray-800 text-white">
            Demo Drive
          </button>
        </div>
      </div>
    </>
  );
}

export default CyberTruck;
