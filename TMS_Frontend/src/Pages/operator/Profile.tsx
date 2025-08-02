import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOperatorProfile } from "../../services/operator/operator";

type OperatorProfileType ={
  name: string;
  email: string;
  contactNo: string;
  companyName: string;
  licenseNumber: string;
  address: string;
}


export function OperatorProfile() {
    const [profile, setProfile] = useState<OperatorProfileType>({
    name: '',
    email: '',
    contactNo: '',
    companyName: '',
    licenseNumber: '',
    address: ''
  });

  const operatorId = 1; 

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getOperatorProfile(operatorId);
        setProfile(data);
      } catch (error) {
        console.error("Failed to load operator profile", error);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-5 mt-10 rounded-2xl shadow-lg bg-white mx-5 h-auto mb-10 w-120">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 mx-15">Bus Operator Profile</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-base text-gray-800">
          {/* Name */}
          <div className="sm:col-span-3">
            <label className="block text-sm font-bold text-gray-700">Name</label>
            <p className="mt-1">{profile.name}</p>
          </div>

          {/* Email */}
          <div className="sm:col-span-4">
            <label className="block text-sm font-bold text-gray-700">Email</label>
            <p className="mt-1">{profile.email}</p>
          </div>

          {/* Company Name */}
          <div className="col-span-full">
            <label className="block text-sm font-bold text-gray-700">Company Name</label>
            <p className="mt-1">{profile.companyName}</p>
          </div>

          {/* License Number */}
          <div className="col-span-full">
            <label className="block text-sm font-bold text-gray-700">License No</label>
            <p className="mt-1">{profile.licenseNumber}</p>
          </div>

          {/* Address */}
          <div className="col-span-full">
            <label className="block text-sm font-bold text-gray-700">Address</label>
            <p className="mt-1">{profile.address}</p>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 sm:col-start-1">
            <label className="block text-sm font-bold text-gray-700">Contact</label>
            <p className="mt-1">{profile.contactNo}</p>
          </div>

          {/* Update Profile Button */}
          <div className="col-span-full">
            <Link
              to="/operator/update-profile"
              className="flex w-30 justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
