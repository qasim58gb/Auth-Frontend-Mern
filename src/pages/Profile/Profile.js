import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, RESET } from "../../redux/features/AuthSlice";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";

const Profile = () => {
  useRedirectLogoutUser("/login");
  const { isLoading, isSuccess, isLoggedIn, message, user } = useSelector(
    (state) => state.auth
  );

  const [profile, setProfile] = useState({
    uName: user?.name || "name",
    email: user?.email || "email@gmail.com",
    isVerified: user?.isVerified || false,
    role: user?.role || "no role",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setProfile({
        uName: user.name,
        email: user.email,
        isVerified: user.isVerified,
        role: user.role,
      });
    }
  }, [user]);

  return (
    <div>
      <ul>
        <li>{profile.uName}</li>
        <li>{profile.email}</li>
        <li>{profile.isVerified ? "Verified" : "Not Verified"}</li>
        <li>{profile.role}</li>
      </ul>
    </div>
  );
};

export default Profile;
