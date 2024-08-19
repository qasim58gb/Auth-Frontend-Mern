import axios from "axios";

export const BACKEND_BASEURL = "http://localhost:5000/";
export const API_USERS = `${BACKEND_BASEURL}api/users/`;

// Register user function
const register = async (userData) => {
  const response = await axios.post(API_USERS + "register", userData);
  return response.data;
};
// login user function
const login = async (userData) => {
  const response = await axios.post(API_USERS + "login", userData);
  return response.data;
}; // logout user function
const logout = async () => {
  const response = await axios.get(API_USERS + "logout");
  return response.data;
};
// get login status function
const getLoginStatus = async () => {
  const response = await axios.get(API_USERS + "loginStatus");
  return response.data;
};

// get user function
const getUser = async () => {
  const response = await axios.get(API_USERS + "getUser");
  return response.data;
};

// updateUser function
const updateUser = async (userData) => {
  const response = await axios.patch(API_USERS + "updateUser", userData);
  return response.data;
};

// sendVerificationEmail function
const sendVerificationEmail = async () => {
  const response = await axios.post(API_USERS + "sendVerificationEmail");
  return response.data.message;
};

// Verify user function
const verifyUser = async (verifyToken) => {
  const response = await axios.patch(`${API_USERS}verifyUser/${verifyToken}`);
  return response.data.message;
};

// change password function
const changePassword = async (userData) => {
  const response = await axios.patch(API_USERS + "changePassword", userData);
  return response.data.message;
};
// forgot password function
const forgotPassword = async (userData) => {
  const response = await axios.post(API_USERS + "forgotPassword", userData);
  return response.data.message;
};

// resetPassword function
const resetPassword = async ({ resetToken, userData }) => {
  const response = await axios.patch(
    `${API_USERS}resetPassword/${resetToken}`,
    userData
  );
  return response.data.message;
};

// get users function
const getUsers = async () => {
  const response = await axios.get(API_USERS + "getUsers");
  return response.data;
};

// del user function
const deleteUser = async (id) => {
  const response = await axios.delete(API_USERS + id);
  return response.data.message;
};

// del user function
const upgradeRole = async (userData) => {
  const response = await axios.post(API_USERS + "upgradeRole", userData);
  return response.data.message;
};

// send login code function
const sendLoginCode = async (email) => {
  const response = await axios.post(`${API_USERS}sendLoginCode/${email}`);
  return response.data.message;
};

//  login with code function
const loginWithCode = async ({ email, code }) => {
  const response = await axios.post(`${API_USERS}loginWithCode/${email}`, code);
  return response.data;
};

//  login with Google function
const loginWithGoogle = async (userToken) => {
  const response = await axios.post(API_USERS + "google/callback", userToken);
  return response.data;
};

const authServices = {
  register,
  login,
  logout,
  deleteUser,
  getLoginStatus,
  getUser,
  updateUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  forgotPassword,
  resetPassword,
  getUsers,
  upgradeRole,
  sendLoginCode,
  loginWithCode,
  loginWithGoogle,
};
export default authServices;
