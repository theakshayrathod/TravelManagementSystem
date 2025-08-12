import axios, { type AxiosResponse } from "axios";
import { config } from "../../config";

export type SeatResponse = {
  
    source:string ,
    destination:string ,
    companyName:string ,
    busName:string ,
    registrationNumber: string,
    fare:number ,
    departureTime:string ,
    reachingTime:string
    seats:Seat[]
}

export type Seat = {
    id:number ,
    seatNumber:string ,
    status: "AVAILABLE" | "BOOKED" ,
}

export async function getSeatsByScheduleId(id:number):Promise<SeatResponse | null>{

    try{
          const token: string | null = localStorage.getItem("jwt")
        const url:string = `${config.serverUrl}/seats/${id}`
        const response :AxiosResponse<SeatResponse> = await axios.get(url ,  {headers:{Authorization:`Bearer ${token}`}});
        if(response.status == 200){
            return response.data
        }

    }catch(e){
        if(e instanceof Error){
            console.log(e.message)
        }else{
            console.log(e)
        }
        
    }

    return null;

}
