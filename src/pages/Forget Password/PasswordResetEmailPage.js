import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword, RESET } from "../../redux/features/AuthSlice";

const PasswordResetEmailPage = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleEmailSubmit = async () => {
    if (!email) {
      toast.error("please fill the email first");
    }

    const userData = {
      email: email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handleEmailSubmit}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default PasswordResetEmailPage;
