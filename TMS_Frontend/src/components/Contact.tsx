import React from "react";

export function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[90%] md:w-[50%] py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Contact Us
        </h2>

        <div className="text-base text-gray-700 space-y-6 px-6">
          <p>
            We’re here to help! Whether you have questions about bookings,
            schedules, or services — feel free to reach out to us.
          </p>

          <div>
            <h3 className="text-lg font-semibold">📧 Email</h3>
            <p className="text-gray-600">support@travelbooking.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">📞 Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">🏢 Address</h3>
            <p className="text-gray-600">
              Travel Booking Headquarters, <br />
              123 Main Street, Pune, Maharashtra, India – 411001
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">🕐 Office Hours</h3>
            <p className="text-gray-600">Mon – Sat: 9:00 AM to 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
