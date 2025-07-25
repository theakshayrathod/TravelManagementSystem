import { Link } from "react-router-dom";

export function BookingSummary() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

    <div className="max-w-2xl mx-auto px-4 py-5 ">
      <div className="text-center">
        <div className=" text-green-500 text-5xl mb-2">✓</div>
        <h1 className="text-2xl font-semibold mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Your bus ticket has been booked successfully. A confirmation email has been sent to your email address.
        </p>
      </div>

      <div className="bg-white  rounded-lg shadow-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Booking Details</h2>
            <p className="text-sm text-gray-500">Booking ID: BX23456789</p>
          </div>
          <span className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">Confirmed</span>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Journey Information</h3>
          <div className="flex justify-between text-sm text-gray-700">
            <div>
              <p className="font-semibold">08:00 AM</p>
              <p>New York</p>
              <p className="text-gray-400 text-xs">Dec 25, 2024</p>
            </div>
            <div className="text-center">
              <p>🚌</p>
              <p className="text-gray-500">6h 30m</p>
              <p className="text-gray-400 text-xs">MegaBus</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">02:30 PM</p>
              <p>Miami</p>
              <p className="text-gray-400 text-xs">Dec 25, 2024</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Passenger Information</h3>
          <div className="flex justify-between items-center text-sm">
            <div>
              <p className="font-semibold">Ravi Kumar</p>
              <p className="text-gray-500">Male, 28 years</p>
              <p className="text-gray-400 text-xs">ravi.kumar@email.com</p>
            </div>
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Seat 5</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Information</h3>
          <div className="text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Base fare (1 × ₹45)</span>
              <span>₹45</span>
            </div>

            <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
              <span>Total Paid</span>
              <span>₹45</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Paid via Credit Card ending in 3456</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link to="/user/dashboard" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Book Another Trip
        </Link>
      </div>
    </div>
    </div>

  )
}