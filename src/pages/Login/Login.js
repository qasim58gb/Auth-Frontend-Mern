import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUser,
  loginWithGoogle,
  registerUser,
  RESET,
  sendLoginCode,
} from "../../redux/features/AuthSlice";
import useRedirectLoginUser from "../../CustomHook/useRedirectLoginUser";
import { GoogleLogin } from "@react-oauth/google";

const LoginForm = () => {
  useRedirectLoginUser("/home");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isLoggedIn, isError, twoFactor } = useSelector(
    (state) => state.auth
  );

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };
    // console.log(userData);
    await dispatch(loginUser(userData));
  };

  const googleLogin = async (credentialResponse) => {
    console.log(credentialResponse);
    const userToken = credentialResponse.credential;
    await dispatch(loginWithGoogle({ userToken }));
  };

  useEffect(() => {
    if (isLoggedIn && isSuccess) {
      navigate("/home");
    }
    console.log(isError, twoFactor);

    if (isError && twoFactor) {
      const email = getValues("email");
      dispatch(sendLoginCode(email));
      navigate(`/loginWithCode/${email}`);
    }

    dispatch(RESET());
  }, [
    isLoggedIn,
    isSuccess,
    dispatch,
    navigate,
    isError,
    twoFactor,
    getValues,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <p className="text-red-500 py-4">
            <Link to={"/forgotPassword"}> Forget Password</Link>
          </p>
        </form>

        <div className="text-center text-gray-500 text-[20px]">or</div>
        <div className="flex justify-center mt-4 ">
          <GoogleLogin
            className="flex justify-center"
            onSuccess={googleLogin}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
