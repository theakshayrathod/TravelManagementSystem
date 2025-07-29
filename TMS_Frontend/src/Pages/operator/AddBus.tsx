import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { AddBus as addBus } from "../../services/operator/bus";


export function AddBus() {


  const [busPhotos, setBusPhotos] = useState<string[]>([]);

  const [info, setInfo] = useState({
    busName: "",
    seatingCapacity: 0,
    registrationNumber: "",
    busType: "",
    busTypeOptions: ["AC", "NONAC"],
    isWifi: false,
    isTV: false,
    isPowerOutlets: false,

  });

  const onAddBus = async () => {
    if (info.busName.length == 0) {
      toast.warn("Please enter bus name");
    } else if (info.seatingCapacity <= 0) {
      toast.warn("Please enter valid seating capacity");
    } else if (info.registrationNumber.length == 0) {
      toast.warn("Please enter registration number");
    } else if (info.busType.length == 0) {
      toast.warn("Please select bus type");
    } else {


      const result = await addBus(
        info.busName,
        info.seatingCapacity,
        info.registrationNumber,
        info.busType,
        busPhotos,
        info.isWifi,
        info.isTV,
        info.isPowerOutlets
      );
      if (!result) {
        
        toast.error("Failed to add bus. Please try again.");
      } else {
        toast.success("Bus added successfully!");
        // Reset form fields after successful addition
        setInfo({
          busName: "",
          seatingCapacity: 0,
          registrationNumber: "",
          busType: "",
          busTypeOptions: ["AC", "NONAC"],
          isWifi: false,
          isTV: false,
          isPowerOutlets: false,
        });
      }
    }
  }

  return (
    <div className=" justify-center items-center min-h-screen bg-gray-100">
      <Link to="/operator/buses" className="text-indigo-600 hover:underline p-4  ">
        {'< Back to Buses'}
      </Link>
      <div className="w-[60vw] mx-auto p-6 rounded-lg bg-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-1">Add New Bus</h2>
        <p className="text-sm text-gray-500 mb-6">Enter the details for the new bus</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Registration Number *</label>
            <input
              type="text"
              onChange={(e) => setInfo({ ...info, registrationNumber: e.target.value })}
              placeholder="e.g., MH-12-AB-1234"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bus Name *</label>
            <input
              type="text"
              onChange={(e) => setInfo({ ...info, busName: e.target.value })}
              placeholder="e.g., BUS-"
              className="w-full border px-3 py-2 rounded"
            />
          </div>



          <div>
            <label className="block text-sm font-medium mb-1">Bus Type *</label>
            <select
              onChange={(e) => setInfo({ ...info, busType: e.target.value })}
              className="w-full border px-3 py-2 rounded">
              <option value="">Select Bus Type</option>
              {info.busTypeOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
              </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Seating Capacity *</label>
            <input
              type="number"
              onChange={(e) => setInfo({ ...info, seatingCapacity: parseInt(e.target.value) })}
              
              placeholder="e.g., 40"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Amenities */}
          <div className="mb-6 ">
            <p className="text-sm font-medium mb-1">Amenities</p>
            <div className="  ">
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  checked={info.isWifi}
                  onChange={(e) => setInfo({ ...info, isWifi: e.target.checked ? true : false })}

                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm">WiFi</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  checked={info.isTV}
                  onChange={(e) => setInfo({ ...info, isTV: e.target.checked ? true : false })}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm">TV</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={info.isPowerOutlets}
                  onChange={(e) => setInfo({ ...info, isPowerOutlets: e.target.checked ? true : false })}
                  className="form-checkbox h-4 w-4 text-indigo-600"
                />
                <span className="ml-2 text-sm">Power Outlets</span>
              </label>
            </div>
          </div>
          {/* Bus Photos */}
          <div className="w-full max-w-md px-4 mb-4">
            <label className="block text-sm font-medium mb-1">Bus Photos *</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  const filesArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
                  setBusPhotos(filesArray);
                }
              }}
              multiple
              className="w-full border border-gray-300 px-3 py-2 rounded-2xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onAddBus}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
          >
            Add Bus
          </button>
          <Link to="/operator/buses" className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition duration-200">
            Cancel
          </Link>

        </div>
      </div>
    </div>

  );

}





