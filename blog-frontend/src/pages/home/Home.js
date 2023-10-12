import React, { useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts/");
      const data = response.data;

      if ((response.status = 200)) {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts postInfo={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
