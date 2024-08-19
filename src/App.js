import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginStatus } from "./redux/features/AuthSlice";
import axios from "axios";

// import Profile from "./pages/Profile/Profile";
import ProfilePage from "./pages/Profile/ProfilePage";
import VerifyUser from "./pages/Verification/VerifyUser";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import PasswordResetEmailPage from "./pages/Forget Password/PasswordResetEmailPage";
import PasswordResetNewPasswordPage from "./pages/Forget Password/PasswordResetNewPasswordPage";
import Users from "./pages/Users/Users";
import ChangeRole from "./component/ChangeRole/ChangeRole";
import LoginWithCode from "./pages/Login/LoginWithCode";
import { GoogleOAuthProvider } from "@react-oauth/google";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <h1 className="text-center">
        <Link to={"/"}>Auth_Frontend</Link>{" "}
      </h1>
      {/* <Home /> */}
      <GoogleOAuthProvider clientId="1074868759331-8bedk29a61v9sogaf4ibmd6ga5lun1mk.apps.googleusercontent.com">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/changeRole" element={<ChangeRole />} />
          <Route path="/verify/:verifyToken" element={<VerifyUser />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="/forgotPassword" element={<PasswordResetEmailPage />} />
          <Route path="/loginWithCode/:email" element={<LoginWithCode />} />
          <Route
            path="/resetPassword/:resetToken"
            element={<PasswordResetNewPasswordPage />}
          />
        </Routes>
      </GoogleOAuthProvider>
      ;
    </BrowserRouter>
  );
}

export default App;
