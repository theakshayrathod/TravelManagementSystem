import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg px-6 py-10 mt-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          About Travel Management System
        </h2>

        <p className="text-base text-gray-700 mb-4">
          The <strong>Travel Management System</strong> is a user-friendly platform built to streamline the process of booking buses for travel. It allows passengers to conveniently browse available buses, check schedules, and make secure bookings—all in one place.
        </p>

        <p className="text-base text-gray-700 mb-4">
          With this system, users can:
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Search buses by route and date with live availability</li>
          <li>View detailed schedules, pickup and drop-off points</li>
          <li>Book tickets with real-time seat availability</li>
          <li>Track bookings and receive updates</li>
          <li>Access the system from any device (desktop or mobile)</li>
        </ul>

        <p className="text-base text-gray-700">
          This full-stack application is developed using <strong>Spring Boot</strong> for the backend and <strong>React</strong> with TypeScript for the frontend, ensuring high performance, maintainability, and scalability.
        </p>
      </div>
    </div>
  );
};

export default About;
