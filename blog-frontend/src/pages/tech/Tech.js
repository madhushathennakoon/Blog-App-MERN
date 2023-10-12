import React, { useEffect, useState } from "react";
import "./tech.css";
import axios from "axios";
import TechInfo from "../../components/techInfo/TechInfo";

const Tech = () => {
  const [techPosts, setTechPosts] = useState("");
  useEffect(() => {
    const getTechPosts = async () => {
      const response = await axios.get("/api/category/tech");
      const data = response.data;

      if ((response.status = 200)) {
        setTechPosts(data);
      }
    };
    getTechPosts();
  }, []);
  return (
    <div className="posts">
      {techPosts &&
        techPosts.map((post) => <TechInfo key={post._id} postDetails={post} />)}
    </div>
  );
};

export default Tech;
