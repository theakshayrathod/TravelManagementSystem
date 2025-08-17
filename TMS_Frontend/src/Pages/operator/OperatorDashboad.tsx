import { useEffect, useState } from "react";
import {  getDashBoardData } from "../../services/operator/schedule";
import type { DashBoardResponse } from "../../services/operator/schedule";

export function OperatorDashboard() {

  const [dashboard , setDashBoard] = useState<DashBoardResponse[]>([])


  const getData= async()=>{
    const result = await getDashBoardData();
    if(result){
      const today = new Date()

      const upcoming = result.filter(
      (s) => new Date(s.date).getTime() >= today.getTime()
    );


     const sorted = [...upcoming].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

      setDashBoard(sorted)
    }else{
      setDashBoard([]);
    }

  }

  useEffect(()=>{
getData();

  },[])



  return (
  
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mb-20 border p-3">
        <div className="p-4 sm:p-6">
          {/* <button className="text-sm text-blue-600 mb-4">{'< Back to Buses'}</button> */}
          <h2 className="text-2xl font-semibold mb-1">Operator Dashboard</h2>
          <h5 className="text-xl font-semibold mb-1">Upcoming Schedules</h5>
          <p className="text-sm text-gray-500 mb-6">Manage your buses, routes, schedules, and bookings</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-2 sm:p-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bus</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip Collection</th>
                {/* <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

              {dashboard.map((s)=>{
                return(
                <tr>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.scheduleId}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.source} to {s.destination}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.busName} {s.busNumber}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.departureTime}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.date}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{s.collection}</td>
              
              </tr>
                )

              } )}


              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
