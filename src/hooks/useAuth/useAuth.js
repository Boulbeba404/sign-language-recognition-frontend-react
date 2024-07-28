import { useDispatch, useSelector } from "react-redux";
import { resetCredentials, setCredentials } from "../../redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);

  const setAuthStore = (accessToken, refreshToken, userId) => {
    dispatch(setCredentials({ accessToken, refreshToken, userId }));
  };
  const logout = () => {
    dispatch(resetCredentials());
  };
  return { ...auth, setAuthStore, logout };
};
export default useAuth;
