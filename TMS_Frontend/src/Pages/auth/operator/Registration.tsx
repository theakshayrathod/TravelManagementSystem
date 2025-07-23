export function OperatorRegistration() {


  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="p-10 sm:mx-auto w-[60vw]  bg-gray-200 shadow-lg  rounded-2xl    ">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 col-span-1 ">
              Create a new account
            </h2>

            <form action="#" method="POST" className="space-y-6">
              <div className="mt-10 sm:mx-auto sm:w-[50vw]   grid grid-cols-2 gap-5 ">

                {/* Name Field */}
                <div className="col-span-1 ">
                  <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
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
                      name="contact"
                      type="tel"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
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

                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* Submit */}
                <div >
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
                <div className=" mt-2 ">
                  <p className="text-sm text-gray-700">
                    Already have an account?{"  "}
                    <a href="/login" className="text-indigo-600 hover:underline font-bold">
                      Click here
                    </a>
                  </p>
                </div>


              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}