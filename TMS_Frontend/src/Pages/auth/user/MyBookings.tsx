import { BookingCard } from "../../../components/BookingsCard";


export default function MyBookings() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold">My Bookings</h1>
      <p className="text-gray-500 mb-6">Manage your bus bookings and travel history</p>

      <div className="space-y-4">
        <BookingCard/>

      </div>
    </div>
  );
}
