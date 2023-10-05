import React from "react";
import "./posts.css";
import Postinfo from "../postInfo/Postinfo";
import UsePostsContext from "../../hooks/UsePostsContext";

const Posts = () => {
  const { posts } = UsePostsContext();
  // useEffect(() => {
  //   console.log("Posts are: ", posts);
  // }, [posts]);

  return (
    <div className="posts">
      {posts &&
        posts.map((post) => <Postinfo key={post._id} postDetails={post} />)}
    </div>
  );
};

export default Posts;
