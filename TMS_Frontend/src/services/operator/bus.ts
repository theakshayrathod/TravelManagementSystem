import axios from "axios";
import { config } from "../../config";

export async function AddBus(busName: string, seatingCapacity: number, registrationNumber: string, busType: string, busPhotos: string[], wifi: boolean, tv: boolean, powerOutlet: boolean) {

  const operatorId = 2;

  try {
    const url = `http://localhost:8080/bus/add/${operatorId}`;
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
    const response = await axios.post(url, body);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getAllBuses(operatorId: number) {
  try {
    const url = `http://localhost:8080/bus/get-buses/${operatorId}`;
    const response = await axios.get(url);
    if (response.status == 200)
      return response.data;
  } catch (e) {
    console.log(e);
  }

}
export async function deleteBus(busId: number) {
  try {
    const url = `${config.serverUrl}/bus/delete/${busId}`

    const response = await axios.delete(url);
    console.log(response)
    if (response.status == 200)
     
      return response.data
  } catch (e) {
    console.log(e)
  }

}


