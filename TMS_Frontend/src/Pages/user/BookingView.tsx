import { Link } from "react-router-dom";

export function BookingView() {
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Link to="/home/pickup-drop" className="absolute top-20 left-5 text-base text-blue-600 mb-4">{'< Back to Seats selection'}</Link>
      <div className=" rounded-lg p-5 shadow-2xl w-full   bg-white max-w-sm">
        
        <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>

        <div className="mb-4 text-sm">
          <p className="text-gray-600">Journey Details</p>
          <p className="text-black font-medium">Pune → Karad</p>
          <p className="text-gray-500">Dec 25, 2024 · 08:00 AM</p>
          <p className="text-gray-500">MegaBus · 6h 30m</p>
        </div>

        <hr className="my-2" />

        <div className="mb-4 text-sm">
         
        </div>

        <hr className="my-2" />

        <div className="mb-4 text-sm">
          <p className="text-gray-600 font-medium mb-2">Price Breakdown</p>
          <div className="flex justify-between">
            <span>Base fare (0 × ₹45)</span>
            <span>₹0</span>
          </div>
          <div className="flex justify-between font-semibold border-t mt-2 pt-2">
            <span>Total</span>
            <span>₹0</span>
          </div>
        </div>

        <Link to="/user/booking-summary" className="w-full bg-black text-white py-2 px-4 mx-20 rounded mt-2">
          Continue to Payment
        </Link>
      </div>

    </div>


  )
}