
import { useState } from "react";
import { toast } from 'react-toastify'
import { loginUser } from "../../services/user/user";
import { Link } from "react-router-dom";



export function Login() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    if (email.length == 0) {
      toast.warn("Email require")
    } else if (password.length == 0) {
      toast.warn("Password required")
    } else {

      const result = await loginUser(email, password);

      if (!result)
        toast.error("Error while login")
      else {
        toast.success("successfully login.....")
      }
    }

  }


  return (
    <>
      <div className=" flex justify-center items-center min-h-screen  bg-gray-100">

        <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8 ">
          <div className="p-10 sm:mx-auto w-[30vw]  bg-white shadow-lg rounded-2xl  ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

              <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
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
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <div className="text-sm">
                  <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  onClick={login}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>


              <div className=" mt-2 ">
                <p className="text-sm text-gray-700">
                  Create an account?{"  "}
                  <a href="/user-register" className="text-indigo-600 hover:underline font-bold">
                    Click here
                  </a>
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>


    </>
  )
}