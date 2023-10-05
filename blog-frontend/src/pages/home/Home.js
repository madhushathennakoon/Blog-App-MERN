import React, { useEffect } from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import UsePostsContext from "../../hooks/UsePostsContext";
import axios from "axios";

const Home = () => {
  const { dispatch } = UsePostsContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts/");
      const data = response.data;
      // console.log(response);
      // console.log("Data is: ", data);

      if ((response.status = 200)) {
        dispatch({ type: "SET_POSTS", payload: data });
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
