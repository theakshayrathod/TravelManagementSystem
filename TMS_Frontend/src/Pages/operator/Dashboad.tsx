export function OperatorDashboard() {
  return (
    <div className="flex justify-center items-center bg-gray-100">

      <div className="h-[75.3vh] ">


        <div className="max-w-4xl mx-auto  p-6 ">
          {/* <button className="text-sm text-blue-600 mb-4">{'< Back to Buses'}</button> */}
          <h2 className="text-2xl font-semibold mb-1">Operator Dashboard</h2>
          <p className="text-sm text-gray-500 mb-6">Manage your buses, routes, schedules, and bookings</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg bg-gray-00 bg-white shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Trip ID	Route	Bus	Departure	Bookings	Actions(View Details) */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">TRIP-001</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Route A</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bus 101</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">10:00 AM</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    type="submit"
                    className="flex w-25 justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>



        </div>
      </div>

    </div>
  );
}
