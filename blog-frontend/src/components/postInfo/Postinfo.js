import React from "react";
import "./postinfo.css";

const Postinfo = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="postBannerImage"
      />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet </span>

        <hr />
        <span className="postDate">2023 June 16</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor
        sit amet,Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,Lorem
        ipsum dolor sit amet.Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  );
};

export default Postinfo;
