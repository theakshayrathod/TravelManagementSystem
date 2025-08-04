import axios from "axios";
import { config } from "../config";


export type Booking = {

  bookingId: number
  source: string;
  destination: string;
  departureTime: string; // "HH:mm" format
  reachingTime: string;
  points: string[];
  date: string; // ISO or "yyyy-MM-dd"
  seatNumbers: string[];
  totaleAmount: number;
}


export async function getAllBooking(userId: number): Promise<Booking[]> {
  try {
    const url = `${config.serverUrl}/booking/user/${userId}`;
    const res = await axios.get<Booking[]>(url);


    if (res.status == 200)
      return res.data;
  } catch (e) {
    console.log(e);
  }
  return [];
}

export function getTimeDifference(start: string, end: string): string {
  const [startH, startM] = start.split(":").map(Number);
  const [endH, endM] = end.split(":").map(Number);

  const startTotal = startH * 60 + startM;
  let endTotal = endH * 60 + endM;

  // If end time is smaller (next day), add 24 hrs
  if (endTotal < startTotal) {
    endTotal += 24 * 60;
  }

  const diffMins = endTotal - startTotal;
  const hours = Math.floor(diffMins / 60);
  const minutes = diffMins % 60;

  return `${hours}h ${minutes}m`;
}
