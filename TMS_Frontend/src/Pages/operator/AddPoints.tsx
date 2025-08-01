import { useEffect, useState } from "react";
import { getRoutes, type RouteResponse } from "../../services/operator/route";
import { toast } from "react-toastify";
import { addpoints, getAllPoints as getPoints } from "../../services/operator/points";
import type { JSX } from "react"


type point = {
  id: number,
  name: string,
  address: string,
  mapLink: string
}
export function Addpoints(): JSX.Element {

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
      } else if (result.message == "Point already exist") {
        toast.warn(result.message)
      } else
        toast.success(result.message)
      getAllPoints()
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

          <table className="w-full table-auto rounded-2xl shadow-2xl ">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Point Name</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Map Link</th>
              </tr>
            </thead>
            <tbody>
              {points.map((e, idx) => (
                <tr key={idx} className="hover:bg-gray-50 border-t">
                  <td className="px-4 py-2">{e.name}</td>
                  <td className="px-4 py-2">{e.address}</td>
                  <td className="px-4 py-2">
                    <a
                      href={e.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Location
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );

}