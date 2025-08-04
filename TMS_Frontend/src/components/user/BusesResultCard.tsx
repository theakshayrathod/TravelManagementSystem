import {  FaWifi,  FaTv  , FaBolt} from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import type { Schedule } from "../../services/user/Schedule";
import { useState } from "react";



type Props = {
  schedule: Schedule
  date:string
}

export default function BusesResultCard({schedule , date}:Props) {


  const navigate = useNavigate();
  const [id,setId] = useState<number>();


  const onButton = (id:number , date:string)=>{

    navigate("/user/seat-selection", {state :{id:id,
      date:date
    }})

  }



  function getDuration(departure:string,arrival:string):string{

    const [depHour,depMin] = departure.split(":").map(Number);
    const [arrHour,arrMin] = arrival.split(":").map(Number);

    const depDate : Date = new Date(0,0,0,depHour, depMin);
    const arrDate : Date = new Date(0,0,0,arrHour,arrMin);
    if(arrDate < depDate){
      arrDate.setDate(arrDate.getDate()+1);
    }

    const diffMs = arrDate.getTime() - depDate.getTime();
    const diffHrs = Math.floor(diffMs/(1000*60*60));
    const diffMins = Math.floor((diffMs % (1000*60*60))/(1000*60));


    return `${diffHrs}h ${diffMins}m`


  }



  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 flex justify-between items-center w-[80%]  mx-auto mb-3">
      <div className="flex flex-col w-[25%]">
          <h2 className="text-lg font-semibold">{schedule.companyName}</h2>
        <h3 className="text-lg font-semibold">{schedule.busName}</h3>
        <h3 className="text-md font-semibold">{date}</h3>
        <div className="    text-gray-500">
          <h3 className=" mt-2"></h3>

          <h3 className=" mb-3"></h3>
        </div>
      </div>

  
      <div className="flex flex-col items-center justify-center w-[40%]">
 
        <div className="flex items-center gap-3 text-gray-500">
        <div>{schedule.departureTime.substring(0,5)}</div>
          <div className="w-2 h-2 bg-gray-500 rounded-full">
           
            </div>
          <div className="w-24 h-px bg-gray-300"></div>
          <MdAccessTime className="text-xl" />
          <span className="text-sm font-medium">{ getDuration(schedule.departureTime.substring(0,5), schedule.reachingTime.substring(0,5)) }</span>
          <div className="w-24 h-px bg-gray-300">
            </div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <div>{schedule.reachingTime.substring(0,5)} </div>
        </div>
<br/>
        {/* Features */}
        <div className="flex items-center gap-5 mt-5 text-gray-500">
          { schedule.wifi && (<FaWifi />) }
         {schedule.powerOutlet && (<FaBolt />)}
         {schedule.tv && ( <FaTv /> ) }
          <span className="bg-gray-200 text-sm font-semibold px-3 py-1 rounded-full">
            12 seats left
          </span>
        </div>
      </div>

      {/* Right Section: Price & Button */}
      <div className="flex flex-col justify-between items-end h-full">


        <div className="text-right mt-10">
          <h3 className="text-xl font-bold">₹{schedule.fare}</h3>
          <p className="text-sm text-gray-500">per person</p>
        </div>

        <button onClick={()=>onButton(schedule.scheduleId , date)} className="mt-4 bg-black text-white rounded-md px-5 py-2 hover:bg-gray-800">
          Book Now
        </button>
      </div>
    </div>
  );
}
