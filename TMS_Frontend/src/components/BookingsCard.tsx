export function BookingCard() {
  return (
    <div className="bg-white p-6 rounded shadow space-y-2  w-[70vw] mx-auto">
      {/* Route */}
      <div className="font-semibold text-lg">Pune  → Karad</div>

      {/* Time Info */}
      <div className="flex items-center justify-between text-sm text-gray-700">
        <div>
          <div className="text-lg font-medium">08:00 AM</div>
          <div className="text-xs">Dec 25, 2024</div>
          <div className="text-xs">Swarget Terminal</div>
        </div>
        <div className="text-center text-sm">
          <div>6h 30m</div>
          <div>⟶</div>
        </div>
        <div>
          <div className="text-lg font-medium">02:30 PM</div>
          <div className="text-xs">Arrival</div>
          <div className="text-xs">Karad Terminal</div>
        </div>
      </div>

      {/* Booking Info */}
      <div className="text-xs text-gray-600">
        Seats: 2 • Bus: BUS-102 • $50
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <button className="px-4 py-1 text-sm border rounded">View Details</button>
        <button className="px-4 py-1 text-sm border rounded text-red-600">Cancel Booking</button>
      </div>
    </div>
  );
}
