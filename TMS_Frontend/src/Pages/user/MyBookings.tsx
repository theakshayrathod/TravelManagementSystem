import { useEffect, useState } from "react";
import { BookingCard } from "../../components/BookingsCard";
import { getAllBooking, type Booking } from "../../services/Booking";




export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const userId = 1; // Replace this with actual user ID logic
    getAllBooking(userId).then((data) => setBookings(data));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold">My Bookings</h1>
      <p className="text-gray-500 mb-6">Manage your bus bookings and travel history</p>

      <div className="space-y-4">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No bookings found.</p>
        )}
      </div>
    </div>
  );
}
