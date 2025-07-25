

export function EditSchedule(){
 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <button className="absolute top-10 left-5 text-lg text-blue-600 mb-4">{'< Back to Seats selection'}</button>

      <div className=" w-[60vw]  mt-4 mb-4 p-4 rounded-lg shadow-md bg-white ">
        
        <h2 className="text-2xl font-semibold mb-1">Edit Schedule</h2>
        <p className="text-sm text-gray-600 mb-6">Edit the details for the bus schedule</p>

        <div className="bg-white p-5   ">
          <h3 className="text-lg font-medium mb-2">Schedule Details</h3>
          <p className="text-sm text-gray-500 mb-4">Basic information about the schedule</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
            

            <div>
              <label className="block text-sm font-medium mb-1">Route *</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Select route</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Effective Date *</label>
              <input type="date" className="w-full border px-3 py-2 rounded" />
            </div>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">Departure Time *</label>
              <input type="time" className="w-full border px-3 py-2 rounded" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Arrival Time *</label>
              <input type="time" className="w-full border px-3 py-2 rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            
            <div>
              <label className="block text-sm font-medium mb-1">Bus *</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Select bus</option>
              </select>
            </div>

          </div>

          <div className="flex justify-end space-x-2 mt-10">
            <button className="border px-4 py-2 rounded">Cancel</button>
            <button className="bg-black text-white px-4 py-2 rounded">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}