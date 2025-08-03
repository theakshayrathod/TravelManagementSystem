import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { JSX } from "react";
import { getRoutes, type RouteResponse } from "../../services/operator/route";
import type { Bus } from "./Buses";
import { getAllBuses } from "../../services/operator/bus";
import { getAllPoints, type Points } from "../../services/operator/points";

type SchedulePoint = {
  pointId: number;
  type: string;
  arrivalTime: string;
};

// type


export function AddSchedule(): JSX.Element {

  
    const [routes, setRoutes] = useState<RouteResponse[]>([]);
    const [buses,setBuses] = useState<Bus[]>([]);
    const [points,setPoints] = useState<Points[]>([]);



    const getBuses = async () =>{
      const result = await getAllBuses(1);
      if(result){
        setBuses(result)
      }else{
        setRoutes([])
      }
    }


    const getPoints = async()=>{
      const result = await getAllPoints();
      if(result){
        setPoints(result)
      }else{
        setPoints([])
      }
    }



     const getAllRoutes = async () => {
    const result= await getRoutes();
    if (result) {
      setRoutes(result);
      // console.log(result)
    } else {
      console.error("Failed to fetch routes");
      setRoutes([]);
    }
  }


  useEffect(()=>{
    getAllRoutes();
    getBuses();
    getPoints();
  },[])



  const [schedulePoints, setSchedulePoints] = useState<SchedulePoint[]>([
    


    { pointId: 0, type: "", arrivalTime: "" },
  ]);

  const addSchedulePoint = () => {
    setSchedulePoints([...schedulePoints, { pointId: 0, type: "", arrivalTime: "" }]);
  };

  const updateSchedulePoint = (index: number, field: keyof SchedulePoint, value: string) => {
    const updated:SchedulePoint[] = [...schedulePoints];
    if (field === "pointId") {
      updated[index].pointId = parseInt(value);
    } else {
      updated[index][field] = value;
    }
    setSchedulePoints(updated);
  };

  return (
    <div className="w-full p-6 bg-gray-100">
      <Link to="/operator/schedule" className="text-sm mb-4 text-indigo-700 inline-block">&larr; Back to Schedules</Link>
      
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Create Schedule</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Route *</label>
            <select required className="w-full border px-3 py-2 rounded">
              <option >Select route</option>
              {routes.map((r)=>{
                return (<option key={r.id} value={r.id}>  {r.source} to {r.destination}</option>)
              })}
             
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Bus *</label>
            <select className="w-full border px-3 py-2 rounded">
              <option >Select bus</option>

                 {buses.map((b)=>{
                return (<option key={b.id} value={b.id}>{b.busName} {b.registrationNumber}</option>)
              })}
             
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Departure Time *</label>
            <input type="time" className="w-full border px-3 py-2 rounded" />
          </div>
          <div>
            <label className="block text-sm mb-1">Arrival Time *</label>
            <input type="time" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Recurrence *</label>
            <select className="w-full border px-3 py-2 rounded">
              <option value="">Select</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="SPECIFIC_DATE">Specific Date</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Recurrence Detail</label>
            <input type="text" className="w-full border px-3 py-2 rounded" placeholder="e.g. Monday, Wednesday" />
          </div>
        </div>

        {/* Schedule Points Section */}
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Schedule Points</h3>

          {schedulePoints.map((sp, idx) => (
            <div key={idx} className="grid grid-cols-3 gap-4 mb-3">
              <select
                className="w-full border px-3 py-2 rounded"
                value={sp.pointId}
                onChange={(e) => updateSchedulePoint(idx, "pointId", e.target.value)}
              >
                <option value={0}>Select Point</option>
                {points.map((p)=> {
                  return (
                    <option key={p.id} value={p.id}> {p.name} </option>
                  )
                })}
                
              </select>

              <select
                className="w-full border px-3 py-2 rounded"
                value={sp.type}
                onChange={(e) => updateSchedulePoint(idx, "type", e.target.value)}
              >
                <option>select</option>
                <option value="PICKUP">Pickup</option>
                <option value="DROP">Drop</option>
              </select>

              <input
                type="time"
                className="w-full border px-3 py-2 rounded"
                value={sp.arrivalTime}
                onChange={(e) => updateSchedulePoint(idx, "arrivalTime", e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            className="text-sm text-blue-600 mt-1"
            onClick={addSchedulePoint}
          >
            + Add another point
          </button>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button className="border px-4 py-2 rounded">Cancel</button>
          <button className="bg-black text-white px-4 py-2 rounded">Create Schedule</button>
        </div>
      </div>
    </div>
  );
}
