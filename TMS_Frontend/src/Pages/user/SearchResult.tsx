import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';
import BusCard from '../../components/user/BusesResultCard';
import { Link, useSearchParams } from 'react-router-dom';
import { getScheduleForUser } from '../../services/user/Schedule';
import type { Schedule } from '../../services/user/Schedule';
import { toast } from 'react-toastify';

export function SearchResult() {

  const [params] = useSearchParams();

  const from: string = params.get("from") ?? "";
  const to: string = params.get("to") ?? "";
  const date: string = params.get("date") ?? "";
  const [schedules, setSchedules] = useState<Schedule[]>([]);



  useEffect(() => {

    getSearch();

  }, [from, to, date])

  const getSearch = async () => {

    const result: Schedule[] | null = await getScheduleForUser(from, to, date);

    if (result) {

      setSchedules(result)

    } else {
      toast.error("An Error Occured")


    }



  }




  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <Link to='/user/dashboard' className="absolute top-20 left-5 text-sm text-blue-600 mb-4">{'< Back to Search'}</Link>
      <div className="flex-col justify-center items-center ml-45 p-2 w-[80%]">
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
        <p className="text-sm text-gray-600 mb-6">Here are the results for your search</p>
      </div>

      {schedules.length === 0 ? <p>No Schedule Available</p> : (schedules.map((s) => (
        <BusCard key={s.scheduleId} schedule={s} />
      )))}




    </div>
  );
}