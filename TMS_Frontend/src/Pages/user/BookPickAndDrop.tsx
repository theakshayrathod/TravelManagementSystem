import { Link } from "react-router-dom";
import { BookPickDrop } from "../../components/BookPickDrop";
import { useState } from "react";

export function BookPickAndDrop() {

  const [pickupPoints, setPickupPoints] = useState<string[]>([]);
  const [dropPoints, setDropPoints] = useState<string[]>([]);

  // const async (params:type) => {

  // }
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <Link to="/user/search-results" className=" p-4  text-base text-blue-600 ">{'< Back to Seats selection'}</Link>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">



        {/* Left Panel: Pickup & Drop Points */}
        <div className="lg:col-span-2 space-y-8 ">



          {/* Pickup Section */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-green-600">➤ Select Pickup Point</h2>
            <p className="text-sm text-gray-500 mb-4">Choose where you want to board the bus in New York</p>

            <div className="space-y-4">
              {/* Pickup Option 1 */}

              <BookPickDrop />

              {/* Pickup Option 2 */}

              <BookPickDrop />

              {/* Pickup Option 3 */}
              <BookPickDrop />
            </div>
          </div>

          {/* Drop Section */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-lg font-semibold text-red-600">➤ Select Drop Point</h2>
            <p className="text-sm text-gray-500 mb-4">Choose where you want to get off the bus in Miami</p>

            <div className="space-y-4">
              {/* Drop Option 1 */}
              <BookPickDrop />

              {/* Drop Option 2 */}
              <BookPickDrop />
            </div>
          </div>
        </div>

        {/* Right Panel - Summary */}
        <div className="bg-white p-10 rounded-2xl shadow space-y-4 h-[60vh]">
          <h3 className="text-lg font-semibold">Trip Summary</h3>
          <div className="text-sm text-gray-600">
            <p><strong>Operator:</strong> MegaBus</p>
            <p><strong>Duration:</strong> 6h 30m</p>
            <p><strong>Date:</strong> Dec 25, 2024</p>
          </div>
          <hr />
          <div className="text-sm">
            <p><strong className="text-green-600">Pickup:</strong> Port Authority Bus Terminal</p>
            <p><strong className="text-red-600">Drop:</strong> Not selected</p>
          </div>
          <div>
            <p className="text-lg font-bold">₹450</p>
            <p className="text-xs text-gray-500 mt-2">per person</p>
          </div>
          <Link to="/user/booking-view" className=" bg-black text-white py-2 px-6 border-2 rounded hover:bg-gray-800">
            Continue to Booking Summary
          </Link>
        </div>
      </div>
    </div>
  )
}