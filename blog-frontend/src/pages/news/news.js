import React, { useEffect, useState } from "react";
import "./news.css";
import axios from "axios";
import NewsInfo from "../../components/newsInfo/NewsInfo";

const News = () => {
  const [newsPosts, setNewsPosts] = useState("");
  useEffect(() => {
    const getNewsPosts = async () => {
      const response = await axios.get("/api/category/news");
      const data = response.data;

      if ((response.status = 200)) {
        setNewsPosts(data);
      }
    };
    getNewsPosts();
  }, []);
  return (
    <div className="posts">
      {newsPosts &&
        newsPosts.map((post) => <NewsInfo key={post._id} postDetails={post} />)}
    </div>
  );
};

export default News;
