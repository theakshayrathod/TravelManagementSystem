import { FaSearch, FaBus, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 ">
      <div className="h-[300px] w-[60%] flex flex-col bg-white border-white rounded-2xl shadow-lg p-6">
        
        {/* Header Section (Full Width) */}
        <div className="flex flex-col  ">
          <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <FaSearch />
            <span>Search Buses</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Enter your travel details to find available buses
          </p>
        </div>

        {/* Main Input Sections */}
        <div className="flex justify-between w-full h-full">
          {/* From & To Input Section */}
          <div className="flex flex-col w-[40%] justify-center">
            <div className="flex gap-3 mx-6 mt-4">
              <FaBus size={30} />
              <input
                className="text-base rounded-lg border border-gray-300 w-full px-3 py-2"
                type="text"
                placeholder="From"
              />
            </div>

            <div className="flex gap-3 mt-4 mx-6">
              <FaBus size={30} />
              <input
                className="text-base rounded-lg border border-gray-300 w-full px-3 py-2"
                type="text"
                placeholder="To"
              />
            </div>
          </div>

          {/* Journey Date & Button */}
          <div className="w-[50%] flex flex-col justify-center items-center px-6 ">
            <div className="w-full">
              <div className="flex items-center gap-3">
                <FaRegCalendarAlt size={30} />
                <label htmlFor="journeydate" className="text-lg font-medium">
                  Journey Date
                </label>
              </div>
 
              <input
                className="h-10 text-base mt-3 rounded-lg border border-gray-300 w-full px-3 mb-7"
                type="date"
                id="journeydate"
              />

              <Link
                to="/user/search-results"
                className="mt-5 w-full text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 "
              >
                Show Buses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
