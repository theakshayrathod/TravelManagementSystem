import { Link } from "react-router-dom";

export function ForgotPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <Link to="/" className="absolute top-7 left-5 text-lg text-blue-600 mb-4">{'< Back to Login'}</Link>
      <div className="w-[40vw] p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-6">Enter your email to reset your password</p>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-indigo-600">Reset Password</button>
        </form>
      </div>
    </div>
  );
}