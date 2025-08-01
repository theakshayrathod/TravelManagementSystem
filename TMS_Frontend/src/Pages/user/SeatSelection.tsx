import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type SeatStatus = 'available' | 'booked' | 'selected';

interface Seat {
    number: string;
    status: SeatStatus;
}

interface Props {
    scheduleId?: string; // Pass scheduleId via route or props
}

export function SeatSelection({ scheduleId }: Props) {
    const [seats, setSeats] = useState<Seat[]>([]);
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const navigate = useNavigate();
    // const location = useLocation();

    // Fetch seat status from backend (mocked here)
    useEffect(() => {
        // Replace with API call: `/api/schedules/${scheduleId}/seats`
        setSeats([
            { number: '1A', status: 'available' },
            { number: '1B', status: 'booked' },
            { number: '1C', status: 'available' },
            { number: '2A', status: 'available' },
            { number: '2B', status: 'booked' },
            { number: '2C', status: 'available' },
            // ...more seats
        ]);
    }, [scheduleId]);

    // Real-time update simulation (polling or websocket in production)
    useEffect(() => {
        const interval = setInterval(() => {
            // Fetch latest seat status here
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleSeatClick = (seat: Seat) => {
        if (seat.status === 'booked') return;
        if (selectedSeats.includes(seat.number)) {
            setSelectedSeats(selectedSeats.filter(s => s !== seat.number));
        } else {
            setSelectedSeats([...selectedSeats, seat.number]);
        }
    };

    const handleConfirm = () => {
        // Validate again before confirming (in case of race condition)
        const booked = seats.filter(s => s.status === 'booked').map(s => s.number);
        if (selectedSeats.some(s => booked.includes(s))) {
            alert('Some selected seats are already booked. Please reselect.');
            return;
        }
        // Proceed to booking view, pass selectedSeats
        navigate('/user/booking-view', { state: { selectedSeats, scheduleId } });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <Link to="/user/search-results" className="absolute top-20 left-5 text-base text-blue-600 mb-4">{'< Back to Search Results'}</Link>
            <h2 className="text-2xl font-semibold mb-4">Select Your Seats</h2>
            <div className="grid grid-cols-6 gap-4 mb-8">
                {seats.map(seat => (
                    <button
                        key={seat.number}
                        disabled={seat.status === 'booked'}
                        onClick={() => handleSeatClick(seat)}
                        className={`w-16 h-16 rounded border
              ${seat.status === 'booked' ? 'bg-red-300 cursor-not-allowed': selectedSeats.includes(seat.number) ? 'bg-green-400': 'bg-white hover:bg-green-100'}
            `}
                        title={seat.status === 'booked' ? 'Booked' : 'Available'}
                    >
                        {seat.number}
                    </button>
                ))}
            </div>
            <div className="mb-4">
                <span className="mr-4"><span className="inline-block w-4 h-4 bg-green-400 mr-1"></span>Selected</span>
                <span className="mr-4"><span className="inline-block w-4 h-4 bg-red-300 mr-1"></span>Booked</span>
                <span><span className="inline-block w-4 h-4 bg-white border mr-1"></span>Available</span>
            </div>
            <button
                className="bg-black text-white px-6 py-2 rounded disabled:opacity-50"
                disabled={selectedSeats.length === 0}
                onClick={handleConfirm}
            >
                Confirm Selection ({selectedSeats.length})
            </button>
        </div>
    );
}