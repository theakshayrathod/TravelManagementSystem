import React from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

export function UserProfileUpdate():JSX.Element{

  return (
    <div className='flex justify-center items-center '>
       {/* <div className=" h-[350px] w-[70%] flex bg-gray-200 border-gray-500 rounded-md shadow-lg  "></div> */}
    <div className=" px-5 mt-10 rounded-md shadow-lg bg-gray-100 mx-1 mb-10 w-[40%] h-[455px]">
          <h2 className="text-3xl font-bold  text-gray-900 mx-25 mt-1 ">Personal Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm/6 font-medium ">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="-name"
                  name="name"
                  type="text"
                  // autoComplete="given-name"
                  className="block w-100 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

           
            <div className="sm:col-span-4 " >

              <label htmlFor="email" className="block text-sm/5 font-medium ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  // autoComplete="email"
                  className="block w-100 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-3 ">
              <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900">
                Contact
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  
                  type="tel"
                  // autoComplete="street-address"
                  className="block w-50  rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            

            <div className="sm:col-span-2 ">
              <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                Gender
              </label>
              <div className="mt-2">
               <input type='radio'
               name='gender'
               
               />  Male
      {' '}
               <input
               type='radio'
               name='gender'/> Female
              </div>
            </div>
           <button type="button" className=" col-span-2 h-10 w-35 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Profile</button>
          </div>
          </div>
        </div>
        // </div>
  )

}
