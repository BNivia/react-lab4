// import logo from './logo.svg';
import React from "react";
import NavBar from "./components/header";
import FileUpload from "./components/uploadfile";
import "./App.css";
// import "./components/routes";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <NavBar></NavBar>
        <FileUpload />
      </React.StrictMode>
    </div>
  );
}

export default App;
