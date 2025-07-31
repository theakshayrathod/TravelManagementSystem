import axios from "axios"
import { config } from "../../config"

export async function addpoints(routId: number, pointName: string, address: string, mapLink: string) {
    try {
        const url = `${config.serverUrl}/`
        const body = {
            pointName,
            address,
            mapLink
        }

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