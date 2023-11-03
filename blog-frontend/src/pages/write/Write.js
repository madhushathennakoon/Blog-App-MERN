import React, { useState } from "react";
import "./write.css";
import { toast } from "react-hot-toast";
import axios from "axios";
import app from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);

  const uploadFile = async () => {
    const storage = getStorage(app);
    const imageRef = ref(storage, "image/" + photo.name);
    // uploadBytes(imageRef, photo).then((snap) => {
    //   getDownloadURL(snap.ref).then((url) => {
    //     console.log(`url: ${url}`);
    //     return url;
    //   });
    // });
    const res = await uploadBytes(imageRef, photo);
    const url = await getDownloadURL(res.ref);
    return url;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const imageUrl = await uploadFile();
      console.log(`path: ${imageUrl}`);

      const post = { title, category, desc, imageUrl };

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
            onChange={(e) => setPhoto(e.target.files[0])}
            // onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
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
