import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser, RESET } from "../../redux/features/AuthSlice";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import {
  OnlyAdmin,
  OnlyLoginUser,
  OnlyLogoutUser,
} from "../../component/protect/HiddenLink";
import ChangeRole from "../../component/ChangeRole/ChangeRole";

const Home = () => {
  // useRedirectLogoutUser("/login");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    dispatch(RESET());
    await dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div>
      <OnlyLogoutUser>
        <button className="text-white p-3 m-3 rounded bg-red-600 ">
          <Link to={"/register"}>Register</Link>
        </button>
        <button className="text-white p-3 m-3 rounded bg-blue-600 ">
          <Link to={"/login"}>Login</Link>
        </button>
      </OnlyLogoutUser>
      <OnlyLoginUser>
        <button className="text-white p-3 m-3 rounded bg-lime-900 ">
          <Link to={"/profile"}>Profile</Link>
        </button>
        <button className="text-white p-3 m-3 rounded bg-lime-900 ">
          <Link to={"/changePassword"}>Change Password</Link>
        </button>
        <OnlyAdmin>
          <button className="text-white p-3 m-3 rounded bg-lime-900 ">
            <Link to={"/users"}>Users</Link>
          </button>
        </OnlyAdmin>
        <button
          className="text-white p-3 m-3 rounded bg-gray-600 "
          onClick={logout}
        >
          <Link>Logout</Link>
        </button>
      </OnlyLoginUser>

      {/* <ChangeRole /> */}
    </div>
  );
};

export default Home;
