import React from "react";
import "./postinfo.css";

const Postinfo = ({ postDetails }) => {
  // useEffect(() => {
  //   // console.log(postDetails.postDetails.photo);
  //   console.log(postDetails);
  // }, [postDetails]);

  return (
    <div className="post">
      {postDetails.photo && (
        <img
          className="postImg"
          src={postDetails.photo}
          alt="postBannerImage"
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">{postDetails.category}</span>
        </div>

        <span className="postTitle">{postDetails.title} </span>

        <hr />
        <span className="postDate">
          {new Date(postDetails.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{postDetails.desc}</p>
    </div>
  );
};

export default Postinfo;
