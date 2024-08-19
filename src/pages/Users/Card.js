import React, { useEffect } from "react";
import { FaUsers, FaUserShield, FaUserSlash } from "react-icons/fa";
import { FaUserXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  CALA_SUSPENDED_USER,
  CALA_VERIFIED_USER,
} from "../../redux/features/AuthSlice";

const Card = () => {
  const { users, suspendedUsers, verifiedUsers } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const unVerifiedUsers = users.length - verifiedUsers;

  useEffect(() => {
    dispatch(CALA_SUSPENDED_USER());
    dispatch(CALA_VERIFIED_USER());
  }, [dispatch, users]);
  return (
    <>
      <div>
        <h1 className=" text-2xl font-bold py-4">User Stats</h1>
      </div>
      <div className="flex flex-row mx-auto justify-center gap-4 flex-wrap">
        <div className="cursor-pointer">
          <div className="flex items-center  bg-violet-700 text-white py-2 px-4 w-[16rem] space-x-6 h-[6rem]">
            <div>
              <FaUsers className="size-10" />
            </div>
            <div className=" flex flex-col ">
              <span className="text-xl font-semibold">Total Users</span>
              <span className="text-xl ">{users.length}</span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="flex items-center  bg-green-700 text-white py-2 px-4 w-[16rem] space-x-6 h-[6rem]">
            <div>
              <FaUserShield className="size-10" />
            </div>
            <div className=" flex flex-col ">
              <span className="text-xl font-semibold">Verified</span>
              <span className="text-xl ">{verifiedUsers}</span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="flex items-center  bg-sky-500 text-white py-2 px-4 w-[16rem] space-x-6 h-[6rem]">
            <div>
              <FaUserSlash className="size-10" />
            </div>
            <div className=" flex flex-col ">
              <span className="text-xl font-semibold">Unverified</span>
              <span className="text-xl ">{unVerifiedUsers}</span>
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <div className="flex items-center  bg-red-700 text-white py-2 px-4 w-[16rem] space-x-6 h-[6rem]">
            <div>
              <FaUserXmark className="size-10" />
            </div>
            <div className=" flex flex-col ">
              <span className="text-xl font-semibold">Suspended Users</span>
              <span className="text-xl ">{suspendedUsers}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
