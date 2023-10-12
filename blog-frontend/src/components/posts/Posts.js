import React from "react";
import "./posts.css";
import Postinfo from "../postInfo/Postinfo";

const Posts = ({ postInfo }) => {
  // useEffect(() => {
  //   console.log("Posts are: ", posts);
  // }, [posts]);

  return (
    <div className="posts">
      {postInfo &&
        postInfo.map((post) => <Postinfo key={post._id} postDetails={post} />)}
    </div>
  );
};

export default Posts;
