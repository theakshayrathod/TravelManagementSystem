import axios, { type AxiosResponse } from "axios"
import { config } from "../../config"
import type { ApiResponse } from "./route"


export type OperatorSchedule = {
    scheduleId:number,
    busId:number,
    busName:string,
    busType:string,
    routeId : number,
    source:string,
    destination:string,
    departureTime:string,
    reachingTime:string,
    fare:number,
    recurrence : "DAILY" | "WEEKLY" | "SPECIFIC_DATE"
    recurrenceDetail : string
    status : "ACTIVE" | "INACTIVE"
    schedulePoint : SchedulePointInfo


}

type SchedulePointInfo = {

    schedulePointId : number
    pointId : number
    pointName : string
    pointAddress :string
    type : "PICKUP" | "DROP"
    arrivalTime :string

}


export async function getScheduleForOperator(id:number):Promise<OperatorSchedule[] | null>{

    try{
        const url:string = `${config.serverUrl}/schedule/operator/${id}`
        const response : AxiosResponse<OperatorSchedule[]> = await axios.get(url)

        if(response.status == 200){
            return response.data
        }


    }catch(e : unknown){

        if(e instanceof Error){
            console.log(e.message)
        }else{
            console.log(e)
        }
    }


    return null;



}


export async function updateScheduleStatus(id:number, status:string):Promise<ApiResponse | null> {
    
    try{
        const url : string = `${config.serverUrl}/schedule/${id}/${status}`
        const result = await axios.put(url);

        if(result.status == 200){
            return result.data
        }

    }catch(e : unknown){

        if(e instanceof Error){
            console.log(e.message)
        }else{
            console.log(e)
        }
        

    }


    return null;
}



