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

  const operatorId = 1;

  try {
    const url: string = `${config.serverUrl}/bus/add/${operatorId}`;
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
    const response: AxiosResponse<ApiResponse> = await axios.post(url, body);
    return response.data;
  } catch (e) {
    console.log(e);
  }
  return null;
}

export async function getAllBuses(operatorId: number): Promise<BusResponse[] | null> {
  try {
    const url: string = `${config.serverUrl}/bus/get-buses/${operatorId}`;
    const response: AxiosResponse<BusResponse[]> = await axios.get(url);
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

    const response: AxiosResponse<ApiResponse> = await axios.delete(url);
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


