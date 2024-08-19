import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/features/AuthSlice";
import useRedirectLogoutUser from "../../CustomHook/useRedirectLogoutUser";
import axios from "axios";
import Notification from "../../component/Notification/Notification";
import { toast } from "react-toastify";

const ProfilePage = () => {
  useRedirectLogoutUser("/login");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const initialState = {
    name: user?.name || "Your name",
    email: user?.email || "name@gmail.com",
    phone: user?.phone || "+92",
    image: user?.image || "",
    bio: user?.bio || "Tell about your self",
    role: user?.role || "",
    isVerified: user?.isVerified || "",
  };

  const [profile, setProfile] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [perviewImage, setPerviewImage] = useState(user?.image || "");

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name,
        email: user.email,
        phone: user.phone,
        image: user.image,
        bio: user.bio,
        role: user.role,
        isVerified: user.isVerified,
      });
      setPerviewImage(user.image);
    }
  }, [user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      setProfileImage(file);
      setPerviewImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    const userData = new FormData();
    userData.append("name", profile.name);
    userData.append("phone", profile.phone);
    userData.append("bio", profile.bio);
    if (profileImage) {
      userData.append("profileImage", profileImage);
    }

    console.log([...userData]);

    await dispatch(updateUser(userData));
    await dispatch(getUser());
  };

  return (
    <>
      {!profile.isVerified && <Notification />}

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={saveProfile}
          className="bg-white p-6 rounded shadow-md w-full max-w-md my-5"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            <img
              src={perviewImage}
              alt="Profile Preview"
              className="mt-4 w-32 h-32 object-cover rounded-full mx-auto"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${
                !isEditing ? "bg-gray-200" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              disabled
              value={profile.email}
              className="w-full px-3 py-2 border rounded-lg shadow-sm bg-slate-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${
                !isEditing ? "bg-gray-200" : ""
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Bio
            </label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300 ${
                !isEditing ? "bg-gray-200" : ""
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
