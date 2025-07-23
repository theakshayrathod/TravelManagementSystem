import { Link } from "react-router-dom";

export function OperatorProfile() {
    return (
      <div className="flex justify-center items-center bg-gray-100">
  <div className="p-5 mt-10 rounded-2xl shadow-lg bg-white mx-5 h-auto mb-10 w-120 ">
    <h2 className="text-3xl font-bold text-gray-900 mb-6 mx-15">Bus Operator Profile</h2>

    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-base text-gray-800">
      {/* Name */}
      <div className="sm:col-span-3">
        <label className="block text-sm font-bold text-gray-700">Name</label>
        <p className="mt-1">John Doe</p>
      </div>

      {/* Email */}
      <div className="sm:col-span-4">
        <label className="block text-sm font-bold text-gray-700">Email</label>
        <p className="mt-1">johndoe@example.com</p>
      </div>

      {/* License Number */}
      <div className="col-span-full">
        <label className="block text-sm font-bold text-gray-700">License No</label>
        <p className="mt-1">LIC1234567890</p>
      </div>

      {/* Address */}
      <div className="col-span-full">
        <label className="block text-sm font-bold text-gray-700">Address</label>
        <p className="mt-1">123 Main Street, Springfield, USA</p>
      </div>

      {/* Contact */}
      <div className="sm:col-span-2 sm:col-start-1">
        <label className="block text-sm font-bold text-gray-700">Contact</label>
        <p className="mt-1">+91 9876543210</p>
      </div>

      {/* Update Profile Button */}
      <div className="col-span-full">
        <Link
          to="/home/update-operator"
          className="flex w-30 justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update Profile
        </Link>
      </div>
    </div>
  </div>
</div>

    );
}
