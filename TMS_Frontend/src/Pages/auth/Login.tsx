import { useState } from "react";
import { toast } from 'react-toastify'
import { loginUser } from "../../services/user/user";
import { Link, useNavigate } from "react-router-dom";

export type User = {

  name:string,
  email:string,
  role:string

}

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user , setUser] =  useState<User>();

  const navigate = useNavigate()

  const login = async () => {
    if (email.length == 0) {
      toast.warn("Email require")
    } else if (password.length == 0) {
      toast.warn("Password required")
    } else {
      const result:User | null= await loginUser(email, password);
      if (result){
          setUser(result)
        console.log(user)
        if(result.role === "ROLE_PASSANGER"){
          navigate("/user/dashboard")
        }else{
          navigate("/operator/dashboard")
        }
      }
      else {
        toast.error("Error while login")     

      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-2">
        <div className="flex min-h-full flex-1 flex-col justify-center w-full px-2 sm:px-8">
          <div className="p-6 sm:p-10 mx-auto w-full max-w-md bg-white shadow-lg rounded-2xl">
            <div className="mx-auto w-full max-w-sm">
              <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div className="mt-8 sm:mt-10 mx-auto w-full max-w-sm">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
                <div className="text-sm mt-2 mb-2">
                  <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  onClick={login}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-700">
                  Create an account?{" "}
                  <Link to="/user-register" className="text-indigo-600 hover:underline font-bold">
                    Click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}