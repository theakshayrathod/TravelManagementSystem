import React, { useState } from "react"
import { FaTv, FaWifi, FaBolt } from "react-icons/fa";


type Bus = {
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

type Props = {
  bus: Bus
  onDelete:()=>void
}

type amenitiesList = {
  image: React.ReactNode,
  key: string
}


export function BusCard({ bus, onDelete}: Props) {
  const [amenities, setAmenities] = useState<amenitiesList[]>([]);
  React.useEffect(() => {
    const amenitiesList = [];
    if (bus.wifi) amenitiesList.push({ key: "wifi", image: <FaWifi /> });
    if (bus.tv) amenitiesList.push({ key: "tv", image: <FaTv /> });
    if (bus.powerOutlet) amenitiesList.push({ key: "powerOutlet", image: <FaBolt /> });
    setAmenities(amenitiesList);
  }, [bus]);

  return (
    <div className=" w-60 p-4 rounded-lg shadow-lg border">
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">🚌</span>
            <h4 className="font-semibold">{bus.busName}</h4>
          </div>
          <p className="text-sm text-gray-500">Registration No: {bus.registrationNumber}</p>
        </div>
      </div>

      <p className="text-sm">Type: <strong>{bus.busType}</strong></p>
      <p className="text-sm mb-2">Capacity: <strong>{bus.totalSeats} seats</strong></p>
      {/* Removed Next Maintenance */}


      <ul className="list-disc list-inside mb-2">
        <div className="flex items-center gap-5">
          {amenities.map((amenity, index) => (
            <p key={index} className="text-sm">{amenity.image}</p>
          ))}
        </div>
      </ul>
      {/* update and delete button */}
      <div className="flex justify-end gap-2">
        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">Update</button>
        <button
          onClick={onDelete}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  )
}




