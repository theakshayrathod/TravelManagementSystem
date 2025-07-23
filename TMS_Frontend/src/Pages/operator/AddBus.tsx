  export function AddBus(){
    return (
  <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg bg-gray-00  shadow-lg">
    <button className="text-sm text-blue-600 mb-4">{'< Back to Buses'}</button>
    <h2 className="text-2xl font-semibold mb-1">Add New Bus</h2>
    <p className="text-sm text-gray-500 mb-6">Enter the details for the new bus</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Bus ID *</label>
        <input
          type="text"
          placeholder="e.g., BUS-107"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Bus Name *</label>
        <input
          type="text"
          placeholder="e.g., BUS-"
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      

      <div>
        <label className="block text-sm font-medium mb-1">Bus Type *</label>
        <select className="w-full border px-3 py-2 rounded">
          <option value="">Select bus type</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Seating Capacity *</label>
        <input
          type="number"
          placeholder="e.g., 40"
          className="w-full border px-3 py-2 rounded"
        />
      </div>
    </div>

    <hr className="my-6" />

    {/* Amenities */}
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="h-4 w-4" />
          <span>WiFi</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="h-4 w-4" />
          <span>TV</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" className="h-4 w-4" />
          <span>Power Outlets</span>
        </label>
      </div>
    </div>

    {/* Actions */}
    <div className="flex justify-end gap-4">
      <button className="px-4 py-2 border rounded">Cancel</button>
      <button className="px-4 py-2 bg-black text-white rounded">Add Bus</button>
    </div>
  </div>
);

  }

  



