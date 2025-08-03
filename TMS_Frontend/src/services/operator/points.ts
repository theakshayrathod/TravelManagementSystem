import axios, { type AxiosResponse } from "axios"
import { config } from "../../config"

export async function addpoints(routId: number, pointName: string, address: string, mapLink: string) {
    try {
        const url = `${config.serverUrl}/points/add/${routId}`
        const body = {
            name: pointName,
            address,
            mapLink
        }
        console.log(routId)
        console.log(body)

        const response = await axios.post(url, body);

        if (response.status == 200) {
            return response.data
        }
        else {
            return null;
        }

    } catch (e: unknown) {
        console.log(e)
    }
}

export type Points = {
    id:number,
    name:string,
    address:string,
    mapLink:string
}

export async function getAllPoints():Promise<Points[] | null> {
    try {
        const url = `${config.serverUrl}/points/getAll`

        const response:AxiosResponse<Points[]> = await axios.get(url)
        console.log(response)

        if (response.status == 200)
            return response.data
        else
            return null;

    } catch (e) {
        console.log(e)
    }
    return null;
}

export async function deletePoint(id: number) {
    try {
        const url = `${config.serverUrl}/points/delete/${id}`

        const response = await axios.delete(url);

        if (response.status == 200)
            return response.data
        else
            return null;

    } catch (e) {
        console.log(e)
    }
}