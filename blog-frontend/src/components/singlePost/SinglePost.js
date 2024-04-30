import React, { useEffect, useState } from "react";
import "./singlePost.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UseAuthContext } from "../../hooks/UseAuthContext";

const SinglePost = () => {
  const [postInfo, setPostInfo] = useState("");
  const { id } = useParams();
  const { user } = UseAuthContext();
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`/api/posts/${id}`);
      const data = response.data;
      console.log(data);

      if ((response.status = 200)) {
        setPostInfo(data);
        setTitle(data.title);
        setDesc(data.desc);
      }
    };

    fetchSinglePost();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(`/api/posts/${id}`, {
        username: user.username,
        title,
        desc,
      });
      console.log(response);
      setUpdateMode(false);
    } catch (error) {}
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/posts/${id}`);
      window.location.replace("/");
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {postInfo.imageUrl && (
          <img className="singlePostImg" src={postInfo.imageUrl} alt="" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {postInfo.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>{postInfo.username}</b>
          </span>
          <span className="singlePostDate">
            {new Date(postInfo.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostdesc">{desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
