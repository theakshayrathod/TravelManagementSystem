export function Bookings() {
    return (
        <div className="p-6 h-[90vh] bg-gray-100">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Booking Management</h2>
                <p className="text-sm text-gray-500">View and manage customer bookings</p>
            </div>

            <div className="bg-white rounded shadow overflow-x-auto sm:w-full lg:w-3/4 mx-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="p-3">Booking ID</th>
                            <th className="p-3">Passenger</th>
                            <th className="p-3">Route</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Seats</th>
                            <th className="p-3">Fare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            {
                                id: 'BG123456',
                                name: 'John Doe',
                                email: 'john.doe@example.com',
                                route: 'New York to Miami',
                                date: 'Dec 25, 2024 08:00 AM',
                                seats: 4,
                                fare: '$50',
                            }
           
                        ].map((booking) => (
                            <tr key={booking.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{booking.id}</td>
                                <td className="p-3">
                                    <div className="font-medium">{booking.name}</div>
                                    <div className="text-xs text-gray-500">{booking.email}</div>
                                </td>
                                <td className="p-3">{booking.route}</td>
                                <td className="p-3">{booking.date}</td>
                                <td className="p-3">{booking.seats}</td>
                                <td className="p-3">{booking.fare}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}