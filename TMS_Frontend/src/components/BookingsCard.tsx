import { getTimeDifference, type Booking } from "../services/Booking";


  type BookingCardProps = {
  booking: Booking;
  onCancelButton:()=>void
}

export function BookingCard({ booking , onCancelButton }: BookingCardProps) {

  const {
    bookingId,
    source,
    destination,
    departureTime,
    reachingTime,
    points,
    date,
    seatNumbers,
    totaleAmount,
    status,
    journeyDate
  } = booking;

  const dt = new Date(journeyDate);


  




  return (
    <div className="bg-white p-6 rounded shadow space-y-2 w-[70vw] mx-auto">
      {/* Route */}
      <div className="font-semibold text-lg">
        {source} → {destination} 
      </div>

      <div className="font-semibold text-lg">
      Booking Id  - {bookingId} - {status}
      </div>

      <div className="font-semibold text-lg">
      Journey Date {journeyDate}
      </div>

      {/* Time Info */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>
          <div className="text-lg font-medium">{departureTime}</div>
          <div className="text-xs">Booking Time { date.substring(0,10) } { ' '} { date.substring(11,19)} </div>
          <div className="text-xs">Pick Up Point {points[0]}</div>
        </div>
        <div className="text-center text-sm">
          <div>
    {/* {departureTime} - {reachingTime} <br /> */}
    <span className="text-xs text-gray-500">
      ({getTimeDifference(departureTime, reachingTime)})
    </span>
  </div>
          <div>⟶</div>
        </div>
        <div>
          <div className="text-lg font-medium">{reachingTime}</div>
          <div className="text-xs">Arrival</div>
          <div className="text-xs">Drop Points {points[points.length - 1]}</div>
        </div>
      </div>

      {/* Booking Info */}
      <div className="text-xs text-gray-600">
        Seats: {seatNumbers.join(", ")} • ₹{totaleAmount} 
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        {status == 'CONFIRMED' &&  dt > new Date() &&
        <button onClick={onCancelButton}  className="px-4 py-1 text-sm border rounded cursor-pointer text-red-600">
          Cancel Booking
        </button>
       
}
      </div>
    </div>
  );
}
