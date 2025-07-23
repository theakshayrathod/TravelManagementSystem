import { Link } from "react-router-dom";

export function UserProfile() {
    return (
        <div className="flex justify-center items-center min-h-[100vh] bg-gray-100">
            <div className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[40%] h-[400px]">
                <h2 className="text-3xl font-bold text-gray-900 mt-4">Personal Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 text-base text-gray-800">
                    {/* Name */}
                    <div className="sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <p className="mt-1">Gaurav Sharma</p>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">Email address</label>
                        <p className="mt-1">gaurav@example.com</p>
                    </div>

                    {/* Contact */}
                    <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Contact</label>
                        <p className="mt-1">+91 9876543210</p>
                    </div>

                    {/* Gender */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Gender</label>
                        <p className="mt-1">Male</p>
                    </div>

                    {/* Button */}
                    <div className="col-span-full">
                        <Link
                            to="/home/update-user"
                            className="flex w-30 justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update Profile
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}