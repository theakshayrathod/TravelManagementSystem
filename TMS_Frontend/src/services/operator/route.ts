import axios, { type AxiosResponse } from "axios"
import { config } from "../../config"


export type RouteResponse = {
    id: number,
    source: string,
    destination: string,
    distance: number
}
export type ApiResponse = {
    message: string
    timestamp: string
}


export async function getRoutes(): Promise<RouteResponse[] | null> {

    try {
        const url: string = `${config.serverUrl}/route`

        const response: AxiosResponse<RouteResponse[]> = await axios.get(url);
        console.log(response);

        if (response.status == 200) {
            return response.data
        } else {
            return null;
        }


    } catch (error: unknown) {

        if (error instanceof Error) {
            console.error(error);
        } else {
            console.error("An Unknown Error Occured", error)
        }



    }

    return null;


}

export async function addRoute(source: string, destination: string, distance: number): Promise<ApiResponse | null> {

    try {
        const url: string = `${config.serverUrl}/route`
        const body = {
            source, destination, distance
        }

        const response: AxiosResponse<ApiResponse> = await axios.post(url, body);

        if (response.status == 201) {
            return response.data
        } else {
            return null;
        }


    } catch (error: unknown) {
        if (error instanceof Error)
            console.error("Error while adding Route", error)
        else
            console.error("Unknown error while adding route", error)

    }

    return null;

}