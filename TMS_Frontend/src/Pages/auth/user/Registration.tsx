import { useState } from "react";
import { toast } from 'react-toastify';
import { UserRegistration as userRegister } from "../../../services/user/user";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";


export function UserRegistration() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");


  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  }

  const onRegister = async () => {

    if (name.length == 0) {
      toast.warn("Name is required");
    } else if (email.length == 0) {
      toast.warn("Email is required");
    }
    else if (contact.length == 0) {
      toast.warn("Contact is required");
    }
    else if (gender.length == 0) {
      toast.warn("Gender is required");
    } else if (password.length == 0) {
      toast.warn("Password is required");
    } else if (confirmPassword.length == 0) {
      toast.warn("Confirm Password is required");
    } else if (password != confirmPassword) {
      toast.warn("Passwords do not match");
    } else {
      const result = await userRegister(name, email, contact, gender, password);
      if (!result) {
        toast.error("Registration failed. Please try again.");
      } else {
        toast.success("Registration success")
        navigate("/")
      }
    }
  }
  return (
    <>
      <div className=" flex justify-center items-center bg-gray-100 ">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8  ">
          <div className="p-5 sm:mx-auto w-[30vw]  bg-white shadow-lg  rounded-2xl ">
            <div className="mb-10">
              <p className="text-sm text-gray-700">
                SignUp as operator{" "}
                <a href="/operator-register" className="text-indigo-600 hover:underline font-bold">
                  Click here
                </a>
              </p>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
              <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              {/* <form  className="space-y-6"> */}
              <div>
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
              <div>
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
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                </div>
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
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="ConfirmPassword" className="block text-sm/6 font-medium text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2 mb-5">
                  <input
                    id="ConfirmPassword"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    name="ConfirmPassword"
                    type="Password"
                    required

                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button

                  onClick={onRegister}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div className=" mt-2 ">
                <p className="text-sm text-gray-700">
                  Already have an account?{"  "}
                  <Button onClick={onBack} className="text-indigo-600 hover:underline font-bold">
                    Click here
                  </Button>
                </p>
              </div>

              {/* </form> */}


            </div>
          </div>
        </div>
      </div>


    </>
  )
}