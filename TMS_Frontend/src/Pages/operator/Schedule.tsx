import { Link } from "react-router-dom";
import { getScheduleForOperator, updateScheduleStatus } from "../../services/operator/schedule";
import { useEffect, useState } from "react";
import type { OperatorSchedule } from "../../services/operator/schedule";
import { toast } from "react-toastify";

export function Schedule() {


  const [schedule , setSchedules] = useState<OperatorSchedule[]>([])


  useEffect(()=>{
    getSchedules();
  },[])



  const getSchedules = async()=>{

    const result = await getScheduleForOperator(1);

    if(result){
      setSchedules(result);
      
    }else{
      setSchedules([]);
    }



  }


  const onDeleteButton = async()=>{
    

  }

  const changeStatus = async(id:number,status:string)=>{


    const result =await updateScheduleStatus(id,status);
    
    if(result){
      toast.success(result.message);
      console.log(result.timestamp);
      getSchedules();
    }else{
      toast.error("An Error Occured")
    }




  }




  return (
    <div className=" justify-center items-center min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-10 mb-6 ">
        <div>
          <h2 className="text-2xl font-semibold">Schedule Management</h2>
          <p className="text-sm text-gray-600">Manage your bus schedules</p>
        </div>
        <Link to="/operator/add-schedule" className="bg-black text-white px-4 py-2 rounded">
          + Create New Schedule
        </Link>
      </div>
      <div className=" flex justify-center items-center ">

        <div className="bg-white p-6 rounded-lg shadow-lg w-[80vw]">
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

                <th className="p-3 border-b">Recurrrence</th>
                <th className="p-3 border-b">Recurrence Details</th>
             
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}

              {schedule.map((s)=>{
                return (
                  <tr key={s.scheduleId} className="hover:bg-gray-50">
                <td className="p-3 border-b">{s.scheduleId}</td>
                <td className="p-3 border-b">{s.source} to {s.destination}</td>
                <td className="p-3 border-b">{s.busName}</td>

                <td className="p-3 border-b">{s.departureTime.substring(0,5)}</td>
                <td className="p-3 border-b">{s.reachingTime.substring(0,5)}</td>
                <td className="p-3 border-b">{s.recurrence}</td>
                <td className="p-3 border-b">{s.recurrence==="DAILY"? <p>Runs Daily</p> : s.recurrenceDetail}</td>
              


                <td className="p-3 border-b">

                  <select value={s.status} onChange={(e)=>changeStatus(s.scheduleId,e.target.value)} >
                    <option value={"ACTIVE"}>ACTIVE</option>
                    <option value={"INACTIVE"}>INACTIVE</option>
                  </select>


                  <Link to="#" className="text-blue-600 hover:underline">Edit</Link>
                  {' | '}
                  <button onClick={onDeleteButton} className=" hover:underline text-red-600 font-medium ">Delete</button>
                </td>
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