import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { RESET, resetPassword } from "../../redux/features/AuthSlice";

const PasswordResetNewPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { resetToken } = useParams();
  const dispatch = useDispatch();

  const handlePasswordReset = async () => {
    if (!newPassword || !confirmNewPassword) {
      toast.error("please fill the all password feild");
      return;
    }
    if (newPassword.length < 6) {
      toast.error("password should be 6 character");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }
    console.log(resetToken);
    const userData = {
      password: newPassword,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    await dispatch(RESET());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="new-password"
          >
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirm-new-password"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-new-password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          onClick={handlePasswordReset}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default PasswordResetNewPasswordPage;
