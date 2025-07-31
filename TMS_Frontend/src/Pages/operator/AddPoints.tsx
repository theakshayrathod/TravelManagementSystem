import { useEffect, useState } from "react";
import { getRoutes, type RouteResponse } from "../../services/operator/route";
import { toast } from "react-toastify";
import { addpoints, getAllPoints as getPoints } from "../../services/operator/points";
import { Link } from "react-router-dom";


type point = {
  id: number,
  name: string,
  address: string,
  mapLink: string
}
export function Addpoints() {

  const [routes, setRoutes] = useState<RouteResponse[]>([]);
  const [routId, setRoutId] = useState<number>(0);
  const [pointName, setPointName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [mapLink, setMapLink] = useState<string>("");

  const [points, setPoints] = useState<point[]>([]);

  const getAllRoutes = async () => {
    const result = await getRoutes();
    if (result != null) {
      setRoutes(result);
    } else {
      console.error("Failed to fetch routes");
      setRoutes([]);
    }
  }

  const getAllPoints = async () => {
    const result = await getPoints();

    if (!result)
      toast.error("error while fetching All points");
    else
      setPoints(result)
  }

  const onDelete = async (id:number) =>{

  }

  useEffect(() => {
    getAllRoutes();
    getAllPoints();

  }, []);

  const onAddPoints = async () => {
    if (pointName.length == 0) {
      toast.warn("Point name is required")
    } else if (address.length == 0) {
      toast.warn("Address is required")
    } else if (mapLink.length == 0) {
      toast.warn("mapLink is required")
    } else {
      const result = await addpoints(routId, pointName, address, mapLink);

      if (!result) {
        toast.error("Error while adding points")
      } else
        toast.success("Add Point successfully")
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center p-4 bg-gray-100">
      {/* Header */}
      {/* Main Section */}
      <div className="mt-8 p-6 rounded-lg shadow-2xl  max-w-full bg-white ">
        <h2 className="text-xl font-semibold mb-4">Add Points</h2>

        <div className="flex justify-between items-center gap-4 mb-6">
          <select className=" flex-1 px-3 py-2 border rounded"

            onChange={(e) => setRoutId(Number(e.target.value))}>
            <option>Select Route</option>
            {routes.map((route) => (
              <option value={route.id}>
                {route.source} - {route.destination}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Point Name"
            onChange={(e) => setPointName(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Address "
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1 px-3 py-2 border rounded"
          />
          <input
            type="text"
            onChange={(e) => setMapLink(e.target.value)}
            placeholder="Add Map Link"
            className=" px-3 py-2 border rounded"
          />
        </div>

        {/* Add Points Button */}
        <div className="flex justify-center mb-8">
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            onClick={onAddPoints}
          >
            Add Point
          </button>
        </div>

        {/* Points Table */}
        <div className="  rounded p-5">
          <h3 className="text-center font-medium mb-4">PickUp/Drop points</h3>

          <table className="w-full
           table-auto  rounded-2xl shadow-2xl ">
            <thead className="bo">
              <tr className="bg-gray-200">
                <th className="p-2  text-left">Point Name</th>
                <th className="p-2  text-left">Address</th>
                <th className="p-2  text-left">Map Link</th>
                <th className="p-2  text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {points.map((e) => {
                return (
                  <tr className="hover:bg-gray-50" > 
                    <td>  {e.name}</td>
                    <td>{e.address}</td>
                    <td>
                      <a href={e.mapLink} className="text-blue-600">View Location</a>
                    </td>
                    <td><button onClick={()=>onDelete(e.id) }
                      className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-700 text-sm">Delete</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}