import { useEffect, useState } from "react";
import { BookingCard } from "../../components/BookingsCard";
import { cancelBooking, getAllBooking, getBookingForUser, type Booking } from "../../services/Booking";
import { toast } from "react-toastify";




export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    
    getBookings()
   
  }, []);

  const getBookings = async()=>{

    const result = await getBookingForUser();
    setBookings(result)

  }



  const onCancel = async (id:number)=>{

    console.log(id)
    const result =  await cancelBooking(id);

    if(result){
      toast.success(result.message)
      getBookings()
    }else{
      toast.error("Something went wrong")
    }    


  }




  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold">My Bookings</h1>
      <p className="text-gray-500 mb-6">Manage your bus bookings and travel history</p>

      <div className="space-y-4">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <BookingCard key={booking.bookingId} booking={booking} onCancelButton = {()=>onCancel(booking.bookingId)} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No bookings found.</p>
        )}
      </div>
    </div>
  );
}
