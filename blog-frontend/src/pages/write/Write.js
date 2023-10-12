import React, { useState } from "react";
import "./write.css";
import { toast } from "react-hot-toast";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const post = { title, category, desc, photo };

      const response = await axios.post("/api/posts", post);

      if ((response.status = 200)) {
        setTitle("");
        setCategory("");
        setDesc("");
        setPhoto("");
        toast.success("post has been created.");
      }
    } catch (error) {
      // if ((error.response.status = 400)) {
      //   toast.error(error.response.data.error);
      // }
      toast.error(error.response.data.error);
    }
  };

  function convertToBase64(e) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setPhoto(fileReader.result);
    };
    fileReader.onerror = (error) => {
      console.log("Error:", error);
    };
  }

  return (
    <div className="write">
      {photo && <img className="writeImg" src={photo} alt="" />}

      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            onChange={(e) => convertToBase64(e)}
            style={{ display: "none" }}
          />

          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="writeInput"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="category : tech or news"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="writeInput writeCategory"
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Tell your story..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
