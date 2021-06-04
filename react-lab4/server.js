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

app.get("/", (req, res) => res.send("Yo yo yo!"));

app.get("/here", (req, res) => res.send("here too yo!"));

app.post("/imageupload", upload.single('file'), (req, res) => {
  console.log(req.file);
  res.send("File Uploaded");
});


app.listen(port, () => console.log("Here on port 5000"));
