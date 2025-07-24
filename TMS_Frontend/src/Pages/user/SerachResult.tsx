import React from 'react';
import type { JSX } from 'react';
import BusCard from '../../components/BusesResultCard';
import { Link } from 'react-router-dom';
export function SearchResult(): JSX.Element {

  return (
    <div className=" p-10 bg-gray-100 ">
      <Link to='/home/user' className="absolute top-20 left-5 text-sm text-blue-600 mb-4">{'< Back to Search'}</Link>
        <div className=" flex-col justify-center items-center  ml-45 p-2 w-[80%] ">
          <h2 className="text-2xl font-semibold mb-4 ">Search Results</h2>
          <p className="text-sm text-gray-600 mb-6">Here are the results for your search</p>
        </div>

        {/* Search results content goes here */}
        <BusCard />

        <BusCard />
        <BusCard />
      </div>
  );
}