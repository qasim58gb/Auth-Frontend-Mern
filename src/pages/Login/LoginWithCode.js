import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  loginWithCode,
  RESET,
  sendLoginCode,
} from "../../redux/features/AuthSlice";
import { toast } from "react-toastify";
import { isEditable } from "@testing-library/user-event/dist/utils";

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoggedIn } = useSelector((state) => state.auth);

  const { email } = useParams();

  const handleVerify = async () => {
    if (loginCode === "") {
      return toast.error("Please fill in the login code");
    }
    if (loginCode.length !== 6) {
      return toast.error("Access code must be 6 characters");
    }

    const code = {
      loginCode,
    };

    await dispatch(loginWithCode({ code, email }));
  };

  const handleResend = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
    console.log("Resending code");
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/home");
    }
    dispatch(RESET());
  }, [dispatch, navigate, isSuccess, isLoggedIn]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Enter Your Login Code
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Please enter the verification code sent to your email. If you haven't
          received the code, you can request a new one.
        </p>
        <input
          type="text"
          value={loginCode}
          onChange={(e) => setLoginCode(e.target.value)}
          placeholder="Enter code"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 mb-4"
        >
          Verify Code
        </button>
        <button
          onClick={handleResend}
          className="w-full bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Resend Code
        </button>
      </div>
    </div>
  );
};

export default LoginWithCode;
