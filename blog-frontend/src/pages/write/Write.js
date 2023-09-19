import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />

          <input
            className="writeInput"
            type="text"
            placeholder="title"
            autoFocus={true}
          />
        </div>

        <div className="writeFormGroup">
          <input
            className="writeInput writeCategory"
            type="text"
            placeholder="category : tech or news"
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
