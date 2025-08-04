import { useState } from "react";
import { toast } from 'react-toastify'
import { OperatorRegistration as operatorRegister } from "../../../services/operator/operator";
import { Link } from "react-router-dom";


export function OperatorRegistration() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNo, setContact] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [licenseNo, setLicenseNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");


  const onRegister = async () => {
    if (name.length == 0) {
      toast.warn("Name is required");
    } else if (email.length == 0) {
      toast.warn("Email is required");
    } else if (contactNo.length == 0) {
      toast.warn("Contact is required");
    } else if (password.length == 0) {
      toast.warn("Password is required");
    } else if (confirmPassword.length == 0) {
      toast.warn("Confirm Password is required");
    } else if (password != confirmPassword) {
      toast.warn("Passwords do not match");
    } else if (companyName.length == 0) {
      toast.warn("Company Name is required");
    } else if (licenseNo.length == 0) {
      toast.warn("License Number is required");
    } else if (address.length == 0) {
      toast.warn("Address is required");
    } else {
      const result = await operatorRegister(name, email, contactNo, gender, password, companyName, licenseNo, address);
      if (!result) {
        toast.error("Registration failed. Please try again.");
      } else {
        toast.success("Registration success")
      }
    }
  }



  return (
    <>
      <div className="flex justify-center items-center  bg-gray-100">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="p-10 sm:mx-auto w-[60vw] bg-white shadow-lg  rounded-2xl    ">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 col-span-1 ">
              Create a new account
            </h2>

            <div className="space-y-6">
              <div className="mt-10 sm:mx-auto sm:w-[50vw]   grid grid-cols-2 gap-5 ">

                {/* Name  */}
                <div className="col-span-1 ">
                  <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                      name="name"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="ConfirmPassword" className="block text-sm/6 font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="ConfirmPassword"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                      name="ConfirmPassword"
                      type="password"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                {/* Contact Field */}
                <div>
                  <label htmlFor="contact" className="block text-sm/6 font-medium text-gray-900">
                    Contact
                  </label>
                  <div className="mt-2">
                    <input
                      id="contact"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                      name="contact"
                      type="tel"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Gender Selection */}
                <div className="mt-4">
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Gender
                  </label>
                  <div className="mt-2">
                    <select
                      id="gender"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
                      name="gender"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="">Select gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm/6 font-medium text-gray-900">
                    Company Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="companyName"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                      name="companyName"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* License Number */}
                <div>
                  <label htmlFor="licenseNumber" className="block text-sm/6 font-medium text-gray-900">
                    License Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="licenseNumber"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLicenseNo(e.target.value)}
                      name="licenseNumber"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm/6 font-medium text-gray-900">
                    Address
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="address"
                      name="address"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAddress(e.target.value)}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* Submit */}
                <div >
                  <button
                    onClick={onRegister}
                    className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-10"
                  >
                    Sign in
                  </button>
                </div>
                <div className=" mt-2 ">
                  <p className="text-sm text-gray-700">
                    Already have an account?{"  "}
                    <Link to="/" className="text-indigo-600 hover:underline font-bold">
                      Click here
                    </Link>
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}