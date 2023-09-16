import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Medhush</b>
          </span>
          <span className="singlePostDate">2023 June 26</span>
        </div>

        <p className="singlePostdesc">
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
          amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum
          dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
