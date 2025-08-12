import { Link, useLocation } from "react-router-dom";
import { getConfirmBooking } from "../../services/Booking";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

type ConfirmBookingDetails = {
  journeyStart: string;
  journeyEnd: string;
  startTime: string;
  endTime: string;
  busNumber: string;
  passengerName: string;
  gender: string;
  email: string;
  noOfSeats: number;
  amount: number;
}
type Id = {
  id: number
}

export function BookingSummary() {


  const location = useLocation();
  const { id } = location.state as Id

  const [confirmBooking, setConfirmBooking] = useState<ConfirmBookingDetails>();

  const getBooking = async () => {
    const result = await getConfirmBooking(id)

    console.log("result" + result)

    if (!result)
      toast.error("Error while get confirm booking")
    else
      setConfirmBooking(result)
  }

  useEffect(() => {
    getBooking();
  }, [id])

  // const timeDiffer = getTimeDifference(confirmBooking?.startTime,confirmBooking?.endTime);

  const totalAmount = confirmBooking ? confirmBooking.amount * confirmBooking.noOfSeats : 0;
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
              <p className="text-sm text-gray-500">{id}</p>
            </div>
            <span className="text-green-600 font-semibold text-sm bg-green-100 px-3 py-1 rounded-full">Confirmed</span>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Journey Information</h3>
            <div className="flex justify-between text-sm text-gray-700">
              <div>
                <p className="font-semibold">{confirmBooking?.startTime}</p>
                <p>{confirmBooking?.journeyStart}</p>
                {/* <p className="text-gray-400 text-xs">{confirmBooking.}</p> */}
              </div>
              <div className="text-center">
                <p>🚌</p>
                <p className="text-gray-500">6h 30m</p>
                <p className="text-gray-400 text-xs">{confirmBooking?.busNumber}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{confirmBooking?.endTime}</p>
                <p>{confirmBooking?.journeyEnd}</p>
                {/* <p className="text-gray-400 text-xs">Dec 25, 2024</p> */}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Passenger Information</h3>
            <div className="flex justify-between items-center text-sm">
              <div>
                <p className="font-semibold">{confirmBooking?.passengerName}</p>
                <p className="text-gray-500">{confirmBooking?.gender}</p>
                <p className="text-gray-400 text-xs">{confirmBooking?.email}</p>
              </div>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">{confirmBooking?.noOfSeats}</span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Payment Information</h3>
            <div className="text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Base fare ({confirmBooking?.noOfSeats} × {confirmBooking?.amount})</span>
                {/* <span>₹45</span> */}
              </div>

              <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
                <span>Total Paid</span>
                <span>{totalAmount}</span>
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