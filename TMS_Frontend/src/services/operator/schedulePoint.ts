import axios from "axios"
import { config } from "../../config"


export type SchedulePointInfo = {
    schedulePointId: number
    pointId: number
    pointName: string
    pointAddress: string
    type: "PICKUP" | "DROP"  // assuming you're using enum-like values from backend
    arrivalTime: string // use string if returned as time string (e.g., "10:30:00")
}

export async function getSchedulePoint(id: number): Promise<SchedulePointInfo[] | null> {
    try {
        const token:string | null = localStorage.getItem("jwt")
       
        const url = `${config.serverUrl}/schedulePoint/${id}`
        const response = await axios.get<SchedulePointInfo[]>(url, {headers:{
            Authorization: `Bearer ${token}`
        }});

        console.log(response.data)

        if (response.status == 200)
            return response.data
        else
            return null

    } catch (e) {
        console.log(e)
    }
    return null

}