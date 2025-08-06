import React from "react";

export function Features() {
  const features = [
    {
      title: "Easy Bus Booking",
      description: "Book bus tickets in just a few clicks with our user-friendly interface.",
    },
    {
      title: "Real-Time Seat Availability",
      description: "Check seat availability and select your preferred seats instantly.",
    },
    {
      title: "Secure Payment",
      description: "Make secure payments using multiple trusted gateways.",
    },
    {
      title: "Schedule Management",
      description: "Operators can manage and update their schedules efficiently.",
    },
    {
      title: "User Profile & Booking History",
      description: "Easily access your profile and view past bookings.",
    },
    {
      title: "Mobile Responsive",
      description: "Enjoy a seamless experience across devices with a responsive layout.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[90%] md:w-[70%]">
        <h2 className="text-3xl font-bold text-gray-900 mt-6 text-center">
          Features of Our Travel Management System
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 px-4 pb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-md hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
