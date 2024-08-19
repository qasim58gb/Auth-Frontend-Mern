import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/features/AuthSlice";

const OnlyLoginUser = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  if (isLogin) {
    return <>{children}</>;
  }
  return null;
};
const OnlyLogoutUser = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn);

  if (!isLogin) {
    return <>{children}</>;
  }
  return null;
};

const OnlyAdmin = ({ children }) => {
  const user = useSelector(selectUser);

  if (user && user.role === "admin") {
    return <>{children}</>;
  }
  return null;
};

export { OnlyLoginUser, OnlyLogoutUser, OnlyAdmin };
