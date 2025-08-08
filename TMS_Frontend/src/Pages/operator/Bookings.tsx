import { useEffect, useState } from "react";
import { getAllBooking, type Booking } from "../../services/Booking";

export function Bookings() {

    const [bookings, setBooking] = useState<Booking[]>([]);


    const userId = 1;

    useEffect(() => {
        getAllBooking(userId)
            .then(data => setBooking(data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, []);

    console.log(bookings)


    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Booking Management</h2>
                <p className="text-sm text-gray-500">View and manage customer bookings</p>
            </div>

            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="p-3">Booking ID</th>
                            <th className="p-3">Passenger</th>
                            <th className="p-3">scheduleId</th>
                            <th className="p-3">Route</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Seats</th>
                            <th className="p-3">Fare</th>
                            <th className="p-3">Bus Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.bookingId} className="border-b hover:bg-gray-50">
                                <td className="p-3">{booking.bookingId}</td>
                                <td className="p-3">{booking.passengerName}</td>
                                <td className="p-3">{booking.scheduleId}</td>
                                <td className="p-3">{booking.source} to {booking.destination}</td>
                                <td className="p-3">{booking.date.substring(0,2)}/{booking.date.substring(3,5)}</td>
                                <td className="p-3">{booking.seatNumbers.join(', ')}</td>
                                <td className="p-3">{booking.totaleAmount}</td>
                                <td className="p-3">{booking.busNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}