import { useSelector } from "react-redux";
import { userSelector } from "../Redux/reducers/user";

export const useAuth = () => {
  const { name, email, password } = useSelector(userSelector.getUser);
  return {
    isAuth: !!email,
    name,
    email,
    password,
  };
};
