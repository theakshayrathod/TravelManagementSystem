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
    const token: string | null = localStorage.getItem("jwt")
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
    const response: AxiosResponse<ApiResponse> = await axios.post(url, body, { headers: { Authorization: `Bearer ${token}` } });
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
    const response: AxiosResponse<BusResponse[]> = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
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

    const response: AxiosResponse<ApiResponse> = await axios.delete(url, { headers: { Authorization: `Bearer ${token}` } });
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

export async function getBusById(id: number) {
  try {
    const url: string = `${config.serverUrl}/bus/getbus/${id}`; // ensure path matches backend
    const token = localStorage.getItem("jwt");

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error in getBusById:", e);
    return null;
  }
}

export async function updateBus(
  id: number,
  busName: string,
  totalSeats: number,
  registrationNumber: string,
  busType: string,
  
  wifi: boolean,
  tv: boolean,
  powerOutlet: boolean
) {
  try {
    const url = `${config.serverUrl}/bus/update/${id}`; // prefix with /bus if your backend has that
    const token = localStorage.getItem("jwt");

    const body = {
      busName,
      totalSeats, // use same property name as in backend DTO
      registrationNumber,
      busType,
      wifi,
      tv,
      powerOutlet
    
    };

    const response = await axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (e) {
    console.error("Error in updateBus:", e);
    return null;
  }
}


