import React, { useEffect, useState } from "react";
import RouteCard from "../../components/RouteCard";
import { addRoute as addRouteToDb, type ApiResponse, type RouteResponse, getRoutes as getRoutesFromDb } from "../../services/operator/route";
import { toast } from "react-toastify";
import type { JSX } from "react"




export default function AddedRoutes(): JSX.Element {

  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [distance, setDistance] = useState<number>(0);
  const [routes, setRoutes] = useState<RouteResponse[]>([])


  useEffect(() => {
    getRoutes();
  }, [])

  const addRoute = async () => {

    if (source.length == 0) {
      toast.warn("Please Enter Source")
    } else if (destination.length == 0) {
      toast.warn("Please Enter Destination")
    } else if (distance == 0 || distance < 0 || distance < 10) {
      toast.warn("Please Enter valid distance")
    } else if (source == destination) {
      toast.error("Source and Destination can't be same")
    }
    else {
      const result: ApiResponse | null = await addRouteToDb(source, destination, distance);
      if (!result) {
        toast.error("Error While Adding Route")
      } else if (result.message == "Already Exists") {
        toast.warn(result.message)
      } else {
        toast.success(result.message)
        getRoutes()
      }

    }

  }


  const getRoutes = async () => {


    const result: RouteResponse[] | null = await getRoutesFromDb();
    console.log(result)
    if (!result) {
      toast.error("Error While Getting Routes")
    } else {
      setRoutes(result)
    }


  }







  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">



        {/* Add Route Form (UI Only) */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4 ">
          <h2 className="text-lg font-semibold">Add New Route</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border p-2 rounded" type="text" placeholder="Origin City" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSource(e.target.value)} />
            <input className="border p-2 rounded" type="text" placeholder="Destination City" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDestination(e.target.value)} />
            <input className="border p-2 rounded" type="number" placeholder="distance(in kms)" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDistance(Number.parseFloat(e.target.value))} />
          </div>
          <button onClick={addRoute} className="bg-black text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Add Route
          </button>
        </div>

        {/* Static Route Cards */}
        <div className="space-y-4">

          {routes.map((route) => {
            return (<RouteCard key={route.id} route={route} />)
          })}

          {/* 
          <RouteCard />
          <RouteCard />
          <RouteCard /> */}
        </div>

      </div>
    </div>
  );
}

