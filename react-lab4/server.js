const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// pree this https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3

app.get("/", (req, res) => res.send("Yo yo yo!"));

app.get("/here", (req, res) => res.send("here too yo!"));

app.post("/imageupload", upload.single('file'), (req, res) => {
  console.log(req.file);
  // let myupload = upload.single('file');
  res.send("File Uploaded");
  //   myupload(req, res, function (err) {
  //     if (req.fileValidationError) {
  //       return res.send(req.fileValidationError);
  //     } else if (!req.file) {
  //       //this coming back idky mi wan cuss
  //       return res.send("Please select an image to upload");
  //     } else if (err instanceof multer.MulterError) {
  //       return res.send(err);
  //     } else if (err) {
  //       return res.send(err);
  //     }
  //     res.send("File Uploaded");
  //   });
});


app.listen(port, () => console.log("Here on port 5000"));
