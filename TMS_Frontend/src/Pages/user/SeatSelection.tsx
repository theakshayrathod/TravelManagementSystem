import React, { useEffect, useState } from "react";
import { getSeatsByScheduleId, type Seat, type SeatResponse } from "../../services/user/seats";
import { useLocation } from "react-router-dom";

type MyState = {
    id: number,
    date: string
}


export function SeatSelection() {


    const location = useLocation();
    const { id, date } = location.state as MyState



    //   const initialSeats: Seat[] = [
    //     { number: 1, status: "available" },
    //     { number: 2, status: "available" },
    //     { number: 3, status: "occupied" },
    //     { number: 4, status: "available" },
    //     { number: 5, status: "occupied" },
    //     { number: 6, status: "available" },
    //     { number: 7, status: "available" },
    //     { number: 8, status: "occupied" },
    //     { number: 9, status: "occupied" },
    //     { number: 10, status: "occupied" },
    //     { number: 11, status: "occupied" },
    //     { number: 12, status: "occupied" },
    //     { number: 13, status: "occupied" },
    //     { number: 14, status: "occupied" },
    //     { number: 15, status: "occupied" },
    //     { number: 16, status: "occupied" },
    //     { number: 17, status: "occupied" },
    //   ];

    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [seats, setSeats] = useState<Seat[]>([])
    const [schedule, setSchedules] = useState<SeatResponse>()


    const getSeats = async (id: number) => {

        const result: SeatResponse | null = await getSeatsByScheduleId(id)
        if (result) {
            setSchedules(result)
            setSeats(result.seats)
        } else {
            setSeats([])
        }

    }

    useEffect(() => {
        getSeats(id)

    }, [])


    const handleSeatClick = (seat: Seat) => {
        if (seat.status === "BOOKED") return;

        setSelectedSeats((prev) => prev.includes(seat.seatNumber) ? prev.filter((s) => s !== seat.seatNumber) : [...prev, seat.seatNumber]);
    };

    const getSeatClass = (seat: Seat) => {
        if (seat.status === "BOOKED") return "bg-red-500 text-white";
        if (selectedSeats.includes(seat.seatNumber)) return "bg-blue-500 text-white";
        return "bg-gray-200";
    };

    const baseFare: number | undefined = schedule?.fare ?? 0;
    const totalFare: number = baseFare * selectedSeats.length;

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-8">
            {/* Seat Selection */}
            <div className="flex-1 bg-white rounded shadow p-6">
                <h1 className="text-xl font-bold mb-1">Select Your Seats</h1>
                <p className="text-sm text-gray-500 mb-4">
                    • {schedule?.source} • {date} · {schedule?.departureTime}
                </p>

                <div className="ml-39 text-sm mb-2 text-gray-700">Driver</div>
                <div className="grid grid-cols-4 gap-2 w-fit">
                    {seats.map((seat) => (
                        <button
                            key={seat.seatNumber}
                            onClick={() => handleSeatClick(seat)}
                            className={`p-2 text-center rounded ${getSeatClass(seat)} cursor-pointer`}
                        >
                            {seat.seatNumber}
                        </button>
                    ))}
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center">
                        <span className="w-4 h-4 mr-2 rounded bg-gray-200"></span>Available
                    </span>
                    <span className="flex items-center">
                        <span className="w-4 h-4 mr-2 rounded bg-blue-500"></span>Selected
                    </span>
                    <span className="flex items-center">
                        <span className="w-4 h-4 mr-2 rounded bg-red-500"></span>Occupied
                    </span>
                </div>
            </div>



            <div className="bg-white rounded-lg shadow-sm border p-6 w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Trip Details</h2>

                <div className="mb-4">
                    <p className="text-sm text-gray-500">Route</p>
                    <p className="text-md font-semibold">{schedule?.source} → {schedule?.destination}</p>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-500">Operator</p>
                    <p className="text-md font-semibold">{schedule?.companyName}</p>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-500">Bus Number</p>
                    <p className="text-md font-semibold">{schedule?.registrationNumber}</p>
                </div>

                <div className="mb-4">
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="text-md font-semibold">{schedule?.departureTime.substring(0,5)}</p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">Scheduled Arrival</p>
                    <p className="text-md font-semibold">{schedule?.reachingTime.substring(0,5)}</p>
                </div>


               <div className="text-sm">
          <div className="mt-2.5 flex justify-between">
            <span>Base fare ({selectedSeats.length} × ₹{baseFare})</span>
            <span>₹{totalFare}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes & fees</span>
            <span>₹0</span>
          </div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{totalFare}</span>
          </div>
        </div>



                <button     
                    disabled={selectedSeats.length === 0}
                    className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
                >
                    Continue to Checkout
                </button>
            </div>







        </div>
    );
}








