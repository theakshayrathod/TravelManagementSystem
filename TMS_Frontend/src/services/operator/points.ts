import axios from "axios"
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
        } else {
            return null;
        }

    } catch (e: unknown) {
        console.log(e)
    }
}

export async function getAllPoints() {
    try {
        const url = `${config.serverUrl}/points/getAll`

        const response = await axios.get(url)
        console.log(response)

        if (response.status == 200)
            return response.data
        else
            return null;

    } catch (e) {
        console.log(e)
    }
}