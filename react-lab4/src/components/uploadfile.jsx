import React, { useState, useRef } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [upload, setUploadFile] = useState({});
  const [fileName, setFileName] = useState("Choose a file.");
  const form = useRef(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadHandler = async (e) => {
    e.preventDefault();
    console.log(file);
    
    let formData = new FormData();
    formData.append('file', file);

    // for (var key of formData.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }
    
    axios
      .post("/imageupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(
        function (response) {
          console.log(response.data);
          console.log("File get upload enuh");

          const { fileName, filePath } = response.data;
          setUploadFile({ fileName, filePath });
          console.log(upload);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <form className="myform" ref={form}> 
        <label htmlFor="Image">{fileName}</label>
        <br />
        <input
          type="file"
          name="Image"
          value=""
          onChange={onChange}
          className="ThisIsAImage"
        />
        <br />
        <button
          type="submit"
          name="upload"
          onClick={uploadHandler}
          className="btn btn-secondary btn-sm">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
