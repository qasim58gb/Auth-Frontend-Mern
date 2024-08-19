import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../redux/features/AuthServices";
import { toast } from "react-toastify";

const useRedirectLogoutUser = (path) => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectLogoutUser = async () => {
      let isLoggedIn;
      try {
        isLoggedIn = await authServices.getLoginStatus();
        // console.log(isLoggedIn);
      } catch (error) {
        console.log(error);
      }

      if (!isLoggedIn) {
        navigate(path);
        toast.info("Session expired, please login to continue");
      }
    };

    redirectLogoutUser();
  }, [path, navigate]);
};

export default useRedirectLogoutUser;
