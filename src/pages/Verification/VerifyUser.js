import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RESET, verifyUser } from "../../redux/features/AuthSlice";

const VerifyUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verifyToken } = useParams();
  const handleVerify = async () => {
    dispatch(verifyUser(verifyToken));
    dispatch(RESET());
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">User Verification</h1>
        <p className="mb-6 text-gray-700">
          Please click the button below to verify your account. This process
          will help us ensure the security of your information.
        </p>
        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyUser;
