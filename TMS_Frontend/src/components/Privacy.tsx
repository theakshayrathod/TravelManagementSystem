import React from "react";

export function Privacy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[90%] md:w-[60%] py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Privacy Policy
        </h2>

        <div className="text-base text-gray-700 space-y-6 px-4">
          <p>
            At Travel Management System, we are committed to protecting your
            privacy. This policy outlines how we collect, use, and protect your
            personal information when you use our services.
          </p>

          <div>
            <h3 className="text-lg font-semibold">Information We Collect</h3>
            <p>
              We may collect personal details such as your name, contact
              number, email, and booking information when you register or make a
              reservation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How We Use Your Data</h3>
            <p>
              Your data is used to manage bookings, improve customer service,
              and send notifications related to your travel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Data Security</h3>
            <p>
              We implement strict security measures to protect your data from
              unauthorized access, disclosure, or misuse.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Third-Party Sharing</h3>
            <p>
              We do not sell or share your personal information with third
              parties except as required to fulfill your bookings or by law.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Cookies</h3>
            <p>
              Our website may use cookies to enhance user experience. You can
              choose to disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Policy Changes</h3>
            <p>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with the revised date.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>
              If you have any questions about our privacy policy, please
              contact us at{" "}
              <a
                href="mailto:support@travelbooking.com"
                className="text-blue-600 underline"
              >
                support@travelbooking.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
