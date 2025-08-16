import { useState } from "react";
import { toast } from "react-toastify";
import { changePassword } from "../../services/user/user";


export function UpdateOpPassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      toast.error("New Password and Confirm Password must match.");
      return;
    }

    try {

      await changePassword( form.currentPassword, form.newPassword);
      toast.success("Password updated successfully.");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Error updating password."
      );
    }
  };

 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="px-5 mt-10 rounded-2xl shadow-lg bg-white mx-1 mb-10 w-[40%] h-[450px]"
      >
        <h2 className="text-3xl font-bold text-gray-900 mt-4 text-center">
          Change Password
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 text-base text-gray-800">
          {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
            <div className="sm:col-span-6" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 capitalize"
              >
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="password"
                id={field}
                name={field}
                required
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          ))}

          <div className="sm:col-span-6 mt-4">
            <button
              type="submit"
              className="w-full rounded-md bg-black px-4 py-2 text-white font-semibold hover:bg-green-600"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
