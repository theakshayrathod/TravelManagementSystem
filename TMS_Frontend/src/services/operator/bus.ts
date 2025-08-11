import axios, { type AxiosResponse } from "axios";
import { config } from "../../config";
import type { ApiResponse } from "./route";

export type BusResponse = {
  id: number,
  busName: string,
  busType: string,
  totalSeats: string,
  wifi: boolean
  tv: boolean
  powerOutlet: boolean
  registrationNumber: string,
  images: string[]

}

export async function addBus(
  busName: string,
  seatingCapacity: number,
  registrationNumber: string,
  busType: string,
  busPhotos: string[],
  wifi: boolean,
  tv: boolean,
  powerOutlet: boolean
): Promise<ApiResponse | null> {



  try {
    const url: string = `${config.serverUrl}/bus/add`;
    const token : string | null = localStorage.getItem("jwt")
    const body = {
      busName,
      totalSeats: seatingCapacity,
      registrationNumber,
      busType,
      wifi,
      tv,
      powerOutlet,
      images: busPhotos.map(url => ({ imageUrl: url }))
    }

    console.log("Request Body:", body);
    const response: AxiosResponse<ApiResponse> = await axios.post(url, body, {headers : {Authorization: `Bearer ${token}`}});
    return response.data;
  } catch (e) {
    console.log(e);
  }
  return null;
}

export async function getAllBuses(): Promise<BusResponse[] | null> {
  try {
    const url: string = `${config.serverUrl}/bus/get-buses`;
    const token: string | null = localStorage.getItem("jwt")
    const response: AxiosResponse<BusResponse[]> = await axios.get(url, {headers : {Authorization : `Bearer ${token}`}});
    if (response.status == 200) {
      return response.data
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
  return null

}
export async function deleteBus(busId: number): Promise<ApiResponse | null> {
  try {
    const url: string = `${config.serverUrl}/bus/delete/${busId}`
    const token: string | null = localStorage.getItem("jwt")

    const response: AxiosResponse<ApiResponse> = await axios.delete(url, {headers : {Authorization:`Bearer ${token}`}});
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


