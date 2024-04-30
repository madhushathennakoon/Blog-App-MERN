import axios from "axios";
import toast from "react-hot-toast";
import { UseAuthContext } from "./UseAuthContext";

const useSignup = () => {
  const { dispatch } = UseAuthContext();

  const signup = async (name, email, password) => {
    try {
      const user = { name, email, password };
      const response = await axios.post("/api/user/signup", user, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);

      if (response.status === 200) {
        //save the user to local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        //update the auth context
        dispatch({ type: "LOGIN", payload: response.data });

        toast.success("registration succesfull");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return { signup };
};

export default useSignup;
