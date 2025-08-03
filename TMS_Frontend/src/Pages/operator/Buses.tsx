import { Link } from "react-router-dom";
import { BusCard } from "../../components/operator/BusCard";
import { useEffect, useState } from "react";
import { deleteBus, getAllBuses } from "../../services/operator/bus";
import { toast } from "react-toastify";

export type Bus = {
  id: number,
  busName: string,
  busType: string,
  totalSeats: string,
  wifi: boolean
  tv: boolean
  powerOutlet: boolean
  registrationNumber: string,
  images: string[]

}


export function Buses() {

  const [buses, setBuses] = useState<Bus[]>([]);


  const getBuses = async () => {

    const result = await getAllBuses(1);


    if (!result) {

      console.log("No buses found");
      setBuses([])
    }
    else {

      setBuses(result);

    }
  }


  const handleDelete = async (busId: number) => {
    const result = await deleteBus(busId)

    // console.log(result.data)

    if (!result) {
      toast.error("Error while delete bus")
      console.log(result)
    }
    else {
      toast.success("Bus delete successfully.")
      getBuses()


    }

  }



  useEffect(() => {
    getBuses();

  }, [])
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

        <div className="grid grid-cols-1  sm:grid-cols-4  gap-6">
          {/* Example card - repeat for each bus */}

          {buses.map((bus: Bus) => {
            return (

              <BusCard key={bus.id} bus={bus} onDelete={()=>handleDelete(bus.id)} />
            )
          })}
          {/* Repeat similar blocks for other buses... */}
        </div>
      </div>
    </div>
  );

}