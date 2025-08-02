import React, { useEffect, useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';
// import { Link } from 'react-router';

import { getOperatorProfile, updateOperatorProfile } from '../../services/operator/operator';

export function OperatorProfileUpdate(): JSX.Element {

  const [profile, setProfile] = useState({
  name: '',
  email: '',
  contactNo: '',
  companyName: '',
  licenseNumber: '',
  address: '',
});

const operatorId = 1; // Replace with actual auth value

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getOperatorProfile(operatorId);
      setProfile(data);
    } catch (error) {
      console.error('Failed to load profile', error);
    }
  };
  fetchData();
}, []);

const handleUpdate = async () => {
  try {
    await updateOperatorProfile(operatorId, profile);
    alert('Profile updated successfully!');
  } catch (err) {
    alert('Failed to update profile');
    console.error(err);
  }
};


return (
  <div className="flex justify-center items-center bg-gray-100">
    <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[40%] h-auto pb-10">
      <h2 className="text-3xl font-bold text-gray-900 mx-20 mt-1">Personal Information</h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            type="text"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="sm:col-span-4">
          <label className="block text-sm font-medium">Email address</label>
          <input
            name="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            type="email"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium ">Contact</label>
          <input
            name="contactNo"
            value={profile.contactNo}
            onChange={(e) => setProfile({ ...profile, contactNo: e.target.value })}
            type="text"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="sm:col-span-4">
          <label className="block text-sm font-medium">Company Name</label>
          <input
            name="companyName"
            value={profile.companyName}
            onChange={(e) => setProfile({ ...profile, companyName: e.target.value })}
            type="text"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div className="sm:col-span-3">
          <label className="block text-sm font-medium">License Number</label>
          <input
            name="licenseNumber"
            value={profile.licenseNumber}
            onChange={(e) => setProfile({ ...profile, licenseNumber: e.target.value })}
            type="text"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900  outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        
        <div className="sm:col-span-6">
          <label className="block text-sm font-medium">Address</label>
          <input
            name="address"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            type="text"
            className="mt-2 block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        
        <div className="sm:col-span-6">
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full mt-6 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  </div>
);


}
