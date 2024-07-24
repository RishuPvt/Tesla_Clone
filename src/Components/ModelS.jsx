import React from "react";
import { NavLink } from "react-router-dom";
function ModelS() {
  return (
    <>
      <div className="ModelS bg-cover h-[742px] flex flex-col  items-center justify-center">
        <div className="box w-[50%] h-[85%] flex items-center justify-cente">
          <div className="sub-box w-full h-[55%]">
            <h1 className="model3heading items-center justify-center flex font-medium  text-white">
              Model S
            </h1>
            <h1 className="model3subheading items-center text-white justify-center flex font-semibold">
              From $68,4905
            </h1>
            <h1 className="model3subheading items-center text-white justify-center flex underline text-gray-600 ">
              After $6,500 Est. Savings
            </h1>
          </div>
        </div>

        <div className="btn-box items-center justify-center flex flex-col sm:flex-row gap-4 sm:gap-8">
        <NavLink to="/ModelS" className="btn font-medium hover:bg-gray-200 hover:text-black w-[250px] p-2 rounded-xl bg-white text-center">
         Order Now
         
          </NavLink>
          <button className="btn font-medium hover:bg-gray-600 w-full sm:w-[250px] p-2 rounded-xl bg-gray-800 text-white">
            Demo Drive
          </button>
        </div>
      </div>
    </>
  );
}

export default ModelS;
