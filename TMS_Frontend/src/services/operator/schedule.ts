import axios, { type AxiosResponse } from "axios"
import { config } from "../../config"
import type { ApiResponse } from "./route"
import type { SchedulePoint } from "../../Pages/operator/AddSchedule"


export type OperatorSchedule = {
    scheduleId: number,
    busId: number,
    busName: string,
    busType: string,
    routeId: number,
    source: string,
    destination: string,
    departureTime: string,
    reachingTime: string,
    fare: number,
    recurrence: "DAILY" | "WEEKLY" | "SPECIFIC_DATE"
    recurrenceDetail: string
    status: "ACTIVE" | "INACTIVE"
    schedulePoint: SchedulePoint[]


}


export type DashBoardResponse = {
    	 scheduleId:number
        busId:number
	    busName:string
	     busType:string
	    routeId:number
	    source : string
	    destination:string
	    collection : number
	    status:string
	    date:string
        busNumber:string
        departureTime:string

}





export async function getScheduleForOperator(): Promise<OperatorSchedule[] | null> {

    try {
        const url: string = `${config.serverUrl}/schedule/operator`
        const token: string | null = localStorage.getItem("jwt")

        const response: AxiosResponse<OperatorSchedule[]> = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status == 200) {
            return response.data
        }


    } catch (e: unknown) {

        if (e instanceof Error) {
            console.log(e.message)
        } else {
            console.log(e)
        }
    }


    return null;



}

export async function deleteSchedule(id: number): Promise<ApiResponse | null> {
    try {

        const token: string | null = localStorage.getItem("jwt")
        const url: string = `${config.serverUrl}/schedule/${id}`
        const response: AxiosResponse<ApiResponse> = await axios.delete(url, { headers: { Authorization: `Bearer ${token}` } });
        if (response.status == 200) {
            return response.data
        }
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message)
        } else {
            console.log(e)
        }
    }
    return null;
}

export async function createSchedule(routeId: number,
    busId: number,
    fare: number,
    departureTime: string,
    reachingTime: string,
    recurrence: string,
    recurrenceDetail: string,
    schedulePoints: SchedulePoint[]): Promise<ApiResponse | null> {


    try {

        const token: string | null = localStorage.getItem("jwt")


        const url: string = `${config.serverUrl}/schedule`

        const body = {
            routeId,
            busId,
            fare,
            departureTime,
            reachingTime,
            recurrence,
            recurrenceDetail,
            schedulePoints

        }


        const response: AxiosResponse<ApiResponse> = await axios.post(url, body, { headers: { Authorization: `Bearer ${token}` } })

        if (response.status == 201) {

            return response.data

        }






    } catch (e) {

        if (e instanceof Error) {
            console.log(e.message)
        } else {
            console.log(e)
        }


    }


    return null;





}


export async function updateScheduleStatus(id: number, status: string): Promise<ApiResponse | null> {

    try {
        const token: string | null = localStorage.getItem("jwt")
        const url: string = `${config.serverUrl}/schedule/${id}/${status}`
        const result = await axios.put(url, {}, { headers: { Authorization: `Bearer ${token}` } });

        if (result.status == 200) {
            return result.data
        }

    } catch (e: unknown) {

        if (e instanceof Error) {
            console.log(e.message)
        } else {
            console.log(e)
        }


    }


    return null;
}

export async function getScheduleById(id: number) {
    try {
        console.log(id);
        const token = localStorage.getItem("jwt");
        const url = `${config.serverUrl}/schedule/get/${id}`;
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (response.status === 200) return response.data;
        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

type UpdateSchedule = {
    busId: number,
    departureTime: string,
    reachingTime: string,
    fare: number
}

export async function updateSchedule(id: number, body: UpdateSchedule) {
    try {
      
        const token = localStorage.getItem("jwt");
        const url = `${config.serverUrl}/schedule/update/${id}`;
        const response = await axios.put(url, body, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (response.status === 200) return response.data;
        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}

    export async function getDashBoardData():Promise<DashBoardResponse[] | null>{   
   try {
      
        const token = localStorage.getItem("jwt");
        const url = `${config.serverUrl}/schedule/dashboard`;
        const response = await axios.get<DashBoardResponse[]>(url,  {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (response.status === 200) return response.data;
        return null;
    } catch (err) {
        console.error(err);
        return null;
    }
}


