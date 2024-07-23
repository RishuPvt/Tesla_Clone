import React from "react";

function SolarWall() {
  return (
    <>
      <div className="Solarwall bg-cover h-[742px] flex flex-col items-center justify-center">
        <div className="box w-[50%] h-[85%] flex items-center justify-cente">
          <div className="sub-box w-full h-[75%]">
            <h1 className="model3heading items-center justify-center flex font-medium ">
              Power Wall
            </h1>
            <h1 className="model3subheading items-center justify-center flex font-semibold">
              Produce Clean Energy From Your Wall
            </h1>
          </div>
        </div>
        <div className="btn-box items-center justify-center flex flex-col sm:flex-row gap-4 sm:gap-8">
          <button className="btn font-medium hover:bg-gray-200 hover:text-black w-full sm:w-[250px] p-2 rounded-xl bg-white">
            Order Now
          </button>
          <button className="btn font-medium hover:bg-gray-600 w-full sm:w-[250px] p-2 rounded-xl bg-gray-800 text-white">
            Demo Drive
          </button>
        </div>
      </div>
    </>
  );
}

export default SolarWall;
