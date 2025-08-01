import React, { useState, useEffect, type JSX } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/user/user';

export function UserProfileUpdate(): JSX.Element {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
  });

  const userId=1;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getUserProfile(userId);
        setProfile(data)
      }catch(error){
        console.error("profile not loaded");
      }
    }
    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateUserProfile(userId, profile);
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Failed to update profile');
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[40%] h-[455px]">
        <h2 className="text-3xl font-bold text-gray-900 mx-20 mt-1">Personal Information</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              id="name"
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="mt-2 block w-full rounded-md border px-3 py-1.5"
            />
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              className="mt-2 block w-full rounded-md border px-3 py-1.5"
            />
          </div>

          <div className="col-span-3">
            <label htmlFor="contact" className="block text-sm font-medium">Contact</label>
            <input
              id="contact"
              type="tel"
              value={profile.contact}
              onChange={(e) => setProfile({ ...profile, contact: e.target.value })}
              className="mt-2 block w-full rounded-md border px-3 py-1.5"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium">Gender</label>
            <div className="mt-2 flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="MALE"
                  checked={profile.gender === 'MALE'}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                />
                {' '}Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="FEMALE"
                  checked={profile.gender === 'FEMALE'}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                />
                {' '}Female
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={handleUpdate}
            className="col-span-2 h-10 w-35 text-white bg-black hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
