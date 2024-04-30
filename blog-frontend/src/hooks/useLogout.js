import { UseAuthContext } from "./UseAuthContext";

const useLogout = () => {
  const { dispatch } = UseAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem("user");

    //update the auth context
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
