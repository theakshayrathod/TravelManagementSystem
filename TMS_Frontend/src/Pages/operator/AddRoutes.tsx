// AddedRoutes.tsx

import RouteCard from "../../components/RouteCard";


export default function AddedRoutes() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">

        {/* Add Route Form (UI Only) */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 ">
          <h2 className="text-lg font-semibold">Add New Route</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border p-2 rounded" type="text" placeholder="Origin City" />
            <input className="border p-2 rounded" type="text" placeholder="Destination City" />
            <input className="border p-2 rounded" type="number" placeholder="Hours" />
            <input className="border p-2 rounded" type="number" placeholder="Minutes" />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Add Route
          </button>
        </div>

        {/* Static Route Cards */}
        <div className="space-y-4">
          <RouteCard />
          <RouteCard />
          <RouteCard />
        </div>
        
      </div>
    </div>
  );
}

