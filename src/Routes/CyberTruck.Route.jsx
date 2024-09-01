import React, { useRef } from "react";

function CyberRoute() {
  const containerRef = useRef(null);

  const scrollSmoothly = (event) => {
    const container = containerRef.current;
    const delta = Math.sign(event.deltaY) * 400;
    container.scrollTo({
      top: container.scrollTop + delta,
      behavior: "smooth",
    });
    event.preventDefault();
  };

  const list = [
    {
      Rate: "EST. $60,990",
      Types: "REAR-WHEEL DRIVE",
      Avl: "-AVAILABLE IN 2025",
      Mil: "-250 MI. RANGE (EST.)",
      Speed: "-6.5 SEC. 0-60 MPH",
    },
    {
      Rate: "Est.$76,390*",
      Types: "All-Wheel Drive",
      Avl: "-Delivery in 2025",
      Mil: "-340 mi. range (EST.)",
      Speed: "-4.1 sec. 0-60 mph",
      horsepower: "-600 horsepower",
      torque: "-7,435 LB-FT torque",
      capacity: "-11,000 lbs. towing Capacity",
    },
    {
      Rate: "Est. $96,390*",
      Types: "Cyberbeast",
      Avl: "-Delivery in 2025",
      Mil: "- 320 Mi. Range (Est.)",
      Speed: "-2.6 sec. 0-60 mph† 130 mph top speed",
      horsepower: "-845 horsepower",
      torque: "- 10,296 LB-FT torque",
      capacity: "-11,000 lbs. towing Capacity",
    },
    {
      Rate: "Est. $96,390*",
      Types: "Cyberbeast",
      Avl: "-Delivery in 2025",
      Mil: "- 320 Mi. Range (Est.)",
      Speed: "-2.6 sec. 0-60 mph† 130 mph top speed",
      horsepower: "-845 horsepower",
      torque: "- 10,296 LB-FT torque",
      capacity: "-11,000 lbs. towing Capacity",
    },
  ];

  return (
    <div className="CyberRoute flex text-white">
      <div className="w-[75%] h-[742px]">
        <img
          src="https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/CYBERTRUCK/ct_reservation.jpg"
          alt="CyberTruck"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-[35%] h-[742px] overflow-hidden relative"
        onWheel={scrollSmoothly}
        ref={containerRef}
      >
        <div className="truckdetails flex flex-col h-full w-full p-4">
          <h1 className="truckheading">Reserve Now</h1>
          <div className="orderbtn2 flex space-x-4">
            <button className="purchasebtn text-white rounded">
              PURCHASE PRICE
            </button>
            <button className="problembtn text-white rounded">SAVINGS</button>
          </div>
          {list.map((item, index) => (
            <div
              className="truckfeatures p-4 mb-4 rounded hover:bg-gray-300 transition duration-300"
              key={index}
            >
              <h2 className="text-xl font-semibold mb-2">{item.Rate}</h2>
              <h1 className="text-lg mb-2">{item.Types}</h1>
              <h3 className="mb-1">{item.Avl}</h3>
              <h3 className="mb-1">{item.Mil}</h3>
              <h3 className="mb-1">{item.Speed}</h3>
              {item.horsepower && <h3 className="mb-1">{item.horsepower}</h3>}
              {item.torque && <h3 className="mb-1">{item.torque}</h3>}
              {item.capacity && <h3 className="mb-1">{item.capacity}</h3>}
            </div>
          ))}
          <div className="Truckorder-now">
            <div className="delivery">
              <h2>Est. Delivery: Jul – Aug 2024</h2>
              <h2>
                Your design qualifies for a $7,500 federal tax credit for
                eligible buyers. <span>See Details</span>
              </h2>
            </div>
            <button className="add-btn2">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberRoute;
             