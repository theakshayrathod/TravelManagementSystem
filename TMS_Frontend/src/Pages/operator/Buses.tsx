import { Link } from "react-router-dom";
import { BusCard } from "../../components/operator/BusCard";


export function Buses() {
  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Bus Management</h2>
          <p className="text-sm text-gray-600">Manage your fleet of buses</p>
        </div>
        <Link to="/operator/add-bus" className="bg-black text-white px-4 py-2 rounded">
          + Add New Bus
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow ">
        <h3 className="text-lg font-medium mb-4">Bus Fleet</h3>
        <p className="text-sm text-gray-500 mb-4">View and manage all buses in your fleet</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <input
            type="text"
            placeholder="Search buses..."
            className="flex-1 border px-3 py-2 rounded w-full sm:w-auto"
          />
          <select className=" px-3 py-2 rounded">
            <option>Bus Type</option>
            <option>AC</option>
            <option>NON-AC</option>
          </select>
          {/* Removed Status dropdown as per your instruction */}
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
          {/* Example card - repeat for each bus */}
         
          <BusCard />
          <BusCard />
          {/* Repeat similar blocks for other buses... */}
        </div>
      </div>
    </div>
  );

}