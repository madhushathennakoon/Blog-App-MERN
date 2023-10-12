import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const [postInfo, setPostInfo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      const data = response.data;

      if ((response.status = 200)) {
        setPostInfo(data);
      }
    };

    fetchSinglePost();
  }, []);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postInfo.photo && (
          <img className="singlePostImg" src={postInfo.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {postInfo.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Medhush</b>
          </span>
          <span className="singlePostDate">
            {new Date(postInfo.createdAt).toDateString()}
          </span>
        </div>

        <p className="singlePostdesc">{postInfo.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
