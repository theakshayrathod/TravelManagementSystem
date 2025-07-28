export function BusCard() {
  return (
    <div className=" w-60 p-4 rounded-lg shadow-lg border">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">🚌</span>
            <h4 className="font-semibold">name</h4>
          </div>
          <p className="text-sm text-gray-500">Registration No: MH12AB1234</p>
        </div>

      </div>
      <p className="text-sm">Type: <strong>Bus Type</strong></p>
      <p className="text-sm mb-2">Capacity: <strong>50 seats</strong></p>
      {/* Removed Next Maintenance */}
      <p className="text-sm mb-2">Status: <strong>Active</strong></p>
      <p className="text-sm mb-2">Amenities: AC, WiFi, Power Outlets</p>
      {/* update and delete button */}
      <div className="flex justify-end gap-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">Update</button>
        <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  );
}



