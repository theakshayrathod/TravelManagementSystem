
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getSchedulePoint as getPoints, type SchedulePointInfo } from "../../services/operator/schedulePoint";
import { BookPick } from "../../components/BookPick";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookDrop } from "../../components/BookDrop";
import { createBooking } from "../../services/Booking";

type SelectedSeatsAndScheduleId = {
  scheduleId: number,
  selectedSeats: string[]
}


export function BookPickAndDrop() {



  const location = useLocation();
  const { scheduleId, selectedSeats } = location.state as SelectedSeatsAndScheduleId

  const [points, setPoints] = useState<SchedulePointInfo[]>([])
  const [pickupPoint, setPickupPoint] = useState<number>(0);
  const [dropPoint, setDropPoint] = useState<number>(0);




  const navigate = useNavigate();
  const getSchedulePoint = async () => {
    const result: SchedulePointInfo[] | null = await getPoints(scheduleId);
    if (!result || result.length === 0) {
      toast.error("Error while getting schedule points");
    } else {
      setPoints(result);
    }
  };

  useEffect(() => {
    getSchedulePoint();
  }, []);

  const onContinue = async () => {
    const result = await createBooking(scheduleId, selectedSeats, pickupPoint, dropPoint)

    if (!result)
      toast.error("Error while book ticket")
    else {
      

      toast.success("successfull..")

      navigate("/user/booking-summary",{
        state:{
          id:result
        }
      })
    }
    // navigate("/user/booking-summary")

  }


  const pickupOptions = points.filter(p => p.type === 'PICKUP');
  const dropOptions = points.filter(p => p.type === 'DROP');


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <Link to="/user/search-results" className="block mb-4 text-base text-blue-600">
        {'< Back to Seats selection'}
      </Link>

      <div className="flex justify-center items-start">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left Panel: Pickup & Drop Points */}
          <div className="w-full space-y-8">

            {/* Pickup Section */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold text-green-600">➤ Select Pickup Point</h2>
              <p className="text-sm text-gray-500 mb-4">Choose where you want to board the bus</p>

              <div className="space-y-4">
                {pickupOptions.map((p) => {
                  return (
                    <BookPick key={p.pointId} p={p} setPoint={() => setPickupPoint(p.pointId)} />
                  )
                })}
              </div>
            </div>

            {/* Drop Section */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
              <h2 className="text-lg font-semibold text-red-600">➤ Select Drop Point</h2>
              <p className="text-sm text-gray-500 mb-4">Choose where you want to get off the bus</p>

              <div className="space-y-4">
                {dropOptions.map((p) => {
                  return (
                    <BookDrop key={p.pointId} p={p} setPoint={() => setDropPoint(p.pointId)} />
                  )
                })}
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={onContinue}
                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
              >
                Continue to Booking Summary
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );


  // return (
  //   <div className="min-h-screen bg-gray-100 p-8">
  //     <div className="bg-white p-10 rounded-2xl shadow space-y-4 h-[60vh]">
  //       <label className="block font-medium mb-1">Select Pickup Point</label>
  //       <select value={pickupPoint} onChange={e => setPickupPoint(e.target.value)} className="border px-3 py-2 rounded w-full">
  //         <option>Select pickup</option>
  //         {pickupOptions.map(p => (
  //           <option key={p.pointId} value={p.pointId}>{p.pointName} - {p.arrivalTime}</option>
  //         ))}
  //       </select>

  //       <label className="block font-medium mt-4 mb-1">Select Drop Point</label>
  //       <select value={dropPoint} onChange={e => setDropPoint(e.target.value)} className="border px-3 py-2 rounded w-full">
  //         <option>Select drop</option>
  //         {dropOptions.map(p => (
  //           <option key={p.pointId} value={p.pointId}>{p.pointName} - {p.arrivalTime}</option>
  //         ))}
  //       </select>
  //       <div className="mt-5">

  //         <button
  //           className="mt-5 w-auto text-white bg-black hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 "
  //         >
  //           Continue To Checkout
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
}