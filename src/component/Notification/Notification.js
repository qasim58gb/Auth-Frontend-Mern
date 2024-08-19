import React from "react";
import { useDispatch } from "react-redux";
import { RESET, sendVerificationEmail } from "../../redux/features/AuthSlice";

const Notification = () => {
  const dispatch = useDispatch();

  const sendVerEmail = (e) => {
    e.preventDefault();

    dispatch(sendVerificationEmail());
    // dispatch(RESET());
  };

  return (
    <div className="text-center bg-red-400 text-white p-4">
      <p>
        Please verify your account for a better experience:{" "}
        <button
          className="bg-transparent text-blue-500 border-none cursor-pointer"
          onClick={sendVerEmail}
        >
          Resend Link
        </button>
      </p>
    </div>
  );
};

export default Notification;
