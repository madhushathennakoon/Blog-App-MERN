import { useContext } from "react";
import { postContext } from "../context/PostContext";

const UsePostsContext = () => {
  const context = useContext(postContext);

  if (!context) {
    throw Error("usePostsContext must be used  inside an postContextProvider");
  }

  return context;
};

export default UsePostsContext;
