import React from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

export function AddTrip():JSX.Element {

  return (
    <div className="max-w-3xl mx-auto p-6">
      <a href="#" className="text-sm mb-4 inline-block">&larr; Back to Schedules</a>
      <h2 className="text-2xl font-semibold mb-1">Create New Schedule</h2>
      <p className="text-sm text-gray-600 mb-6">Enter the details for the new bus schedule</p>

      <div className="bg-gray-200 p-6 rounded-lg shadow border-1">
        <h3 className="text-lg font-medium mb-2">Schedule Details</h3>
        <p className="text-sm text-gray-500 mb-4">Basic information about the schedule</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Schedule ID *</label>
            <input
              type="text"
              placeholder="e.g., SCH-007"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Route *</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Select route</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bus *</label>
            <select className="w-full border px-3 py-2 rounded">
              <option>Select bus</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Departure Time *</label>
            <input type="time" className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Arrival Time *</label>
            <input type="time" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Effective Date *</label>
            <input type="date" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button className="border px-4 py-2 rounded">Cancel</button>
          <button className="bg-black text-white px-4 py-2 rounded">Create Schedule</button>
        </div>
      </div>
    </div>
  );

}
