export function Schedule(){
  return (
  <div className="max-w-7xl mx-auto p-6">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Schedule Management</h2>
        <p className="text-sm text-gray-600">Manage your bus schedules</p>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded">
        + Create New Schedule
      </button>
    </div>

    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-4">Bus Schedules</h3>
      <p className="text-sm text-gray-500 mb-4">
        View and manage all bus schedules
      </p>

      

      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border-b">Schedule ID</th>
            <th className="p-3 border-b">Route</th>
            <th className="p-3 border-b">Bus</th>
            
            <th className="p-3 border-b">Departure</th>
            <th className="p-3 border-b">Arrival</th>
            
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr className="hover:bg-gray-50">
            <td className="p-3 border-b">SCH-001</td>
            <td className="p-3 border-b">New York to Miami</td>
            <td className="p-3 border-b">Luxury Coach 101</td>
            
            <td className="p-3 border-b">08:00 AM</td>
            <td className="p-3 border-b">02:30 PM</td>
            
            <td className="p-3 border-b">
              <button className="text-blue-600 hover:underline">Delete</button>
            </td>
          </tr>

          
        </tbody>
      </table>
    </div>
  </div>
);

}