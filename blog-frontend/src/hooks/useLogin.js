import toast from "react-hot-toast";
import { UseAuthContext } from "./UseAuthContext";
import axios from "axios";

const useLogin = () => {
  const { dispatch } = UseAuthContext();

  const login = async (email, password) => {
    try {
      const user = { email, password };
      const response = await axios.post("/api/user/login", user, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);

      if (response.status === 200) {
        //save the user to local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        //update the auth context
        dispatch({ type: "LOGIN", payload: response.data });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return { login };
};

export default useLogin;
