import React from "react";
import "./techInfo.css";
import { Link } from "react-router-dom";

const TechInfo = ({ postDetails }) => {
  return (
    <div className="post">
      {postDetails.photo && (
        <Link to={`/single/${postDetails._id}`}>
          <img
            className="postImg"
            src={postDetails.photo}
            alt="postBannerImage"
          />
        </Link>
      )}
      {postDetails.imageUrl && (
        <Link to={`/single/${postDetails._id}`}>
          <img
            className="postImg"
            src={postDetails.imageUrl}
            alt="postBannerImage"
          />
        </Link>
      )}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{postDetails.category}</span>
        </div>

        <Link to={`/single/${postDetails._id}`} className="link">
          <span className="postTitle">{postDetails.title} </span>
        </Link>

        <span className="postDate">
          {new Date(postDetails.createdAt).toDateString()}
        </span>
      </div>
      <Link to={`/single/${postDetails._id}`} className="link">
        <p className="postDesc">{postDetails.desc}</p>
      </Link>
    </div>
  );
};

export default TechInfo;
