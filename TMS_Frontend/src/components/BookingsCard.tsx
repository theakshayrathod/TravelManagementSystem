import { getTimeDifference, type Booking } from "../services/Booking";


  type BookingCardProps = {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {

  const {
    source,
    destination,
    departureTime,
    reachingTime,
    points,
    date,
    seatNumbers,
    totaleAmount,
  } = booking;



  return (
    <div className="bg-white p-6 rounded shadow space-y-2 w-[70vw] mx-auto">
      {/* Route */}
      <div className="font-semibold text-lg">
        {source} → {destination}
      </div>

      {/* Time Info */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>
          <div className="text-lg font-medium">{departureTime}</div>
          <div className="text-xs">{new Date(date).toLocaleDateString()}</div>
          <div className="text-xs">{points[0]}</div>
        </div>
        <div className="text-center text-sm">
          <div>
    {departureTime} - {reachingTime} <br />
    <span className="text-xs text-gray-500">
      ({getTimeDifference(departureTime, reachingTime)})
    </span>
  </div>
          <div>⟶</div>
        </div>
        <div>
          <div className="text-lg font-medium">{reachingTime}</div>
          <div className="text-xs">Arrival</div>
          <div className="text-xs">{points[points.length - 1]}</div>
        </div>
      </div>

      {/* Booking Info */}
      <div className="text-xs text-gray-600">
        Seats: {seatNumbers.join(", ")} • ₹{totaleAmount}
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        
        <button className="px-4 py-1 text-sm border rounded text-red-600">
          Cancel Booking
        </button>
      </div>
    </div>
  );
}
