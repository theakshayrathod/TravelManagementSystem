import {  FaWifi, FaCoffee, FaTv } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BusesResultCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 flex justify-between items-center w-[80%]  mx-auto mb-3">
      {/* Left Section: Bus Info */}
      <div className="flex flex-col w-[25%]">
        <h2 className="text-lg font-semibold">Bus Name</h2>
        <div className="    text-gray-500">
          <h3 className=" mt-2">08:00 AM</h3>

          <h3 className=" mb-3">02:30 PM</h3>
        </div>
      </div>

      {/* Middle Section: Time + Points */}
      <div className="flex flex-col items-center justify-center w-[40%]">
        {/* Timeline */}
        <div className="flex items-center gap-3 text-gray-500">
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          <div className="w-24 h-px bg-gray-300"></div>
          <MdAccessTime className="text-xl" />
          <span className="text-sm font-medium">6h 30m</span>
          <div className="w-24 h-px bg-gray-300"></div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
<br/>
        {/* Features */}
        <div className="flex items-center gap-5 mt-5 text-gray-500">
          <FaWifi />
          <FaCoffee />
          <FaTv />
          <span className="bg-gray-200 text-sm font-semibold px-3 py-1 rounded-full">
            12 seats left
          </span>
        </div>
      </div>

      {/* Right Section: Price & Button */}
      <div className="flex flex-col justify-between items-end h-full">


        <div className="text-right mt-10">
          <h3 className="text-xl font-bold">₹450</h3>
          <p className="text-sm text-gray-500">per person</p>
        </div>

        <Link to="/user/pickup-drop" className="mt-4 bg-black text-white rounded-md px-5 py-2 hover:bg-gray-800">
          Book Now
        </Link>
      </div>
    </div>
  );
}
