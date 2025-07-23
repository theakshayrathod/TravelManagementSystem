import React from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

export function OperatorProfileUpdate():JSX.Element{

  return (
    <div className='flex justify-center items-center '>
       {/* <div className=" h-[350px] w-[70%] flex bg-gray-200 border-gray-500 rounded-md shadow-lg  "></div> */}
    <div className=" p-5 mt-10 rounded-md shadow-lg bg-gray-200 mx-5 h-[98vh] mb-10 w-120 ">
          <h2 className="text-3xl font-bold  text-gray-900 mx-15 ">Bus Operator Profile</h2>    
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm/2 font-medium">
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
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/2 font-medium ">
                Email
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

            <div className="col-span-full">
              <label htmlFor="licens" className="block text-sm/2 font-medium text-gray-900">
                Licens No
              </label>
              <div className="mt-2">
                <input
                  id="licens"
                  name="licens"
                  type="text"
                  // autoComplete="street-address"
                  className="block w-100 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="licens" className="block text-sm/2 font-medium text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="licens"
                  name="licens"
                  type="text"
                  // autoComplete="street-address"
                  className="block w-100 h-20 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="contact" className="block text-sm/2 font-medium text-gray-900">
               Contact
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  // autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
           
            
          <button type="button" className="  mt-3 w-35 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update Profile</button>
          </div>
        </div>
        </div>
  )

}
