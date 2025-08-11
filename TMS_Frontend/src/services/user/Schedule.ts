import axios from "axios"
import { config } from "../../config"

export type Schedule = {
    scheduleId : number,
    busName : string ,
    companyName : string ,
    source:string
    destination :string,
    departureTime : string,
    reachingTime :string,
    fare : string ,
    powerOutlet : string ,
    tv : boolean,
    wifi : boolean


}







export async function getScheduleForUser(source:string, destination:string, journeyDate:string) : Promise<Schedule[] | null>{

    try{
          const token: string | null = localStorage.getItem("jwt")
        const url:string = `${config.serverUrl}/schedule/get/${source}/${destination}/${journeyDate}`
        const res = await axios.get(url, {headers:{Authorization:`Bearer ${token}`}});
        if(res.status == 200)
            return res.data;
    }catch(e){
        console.log(e);
    }

    return null;

}






