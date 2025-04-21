import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  }, //upload file from the local
  filename: function (req, file, cb) {
    cb(null, file.originalname); // change the file name that are store in the server a little bit of time than go to the cloudinary server  and  remove the file from server
  },
});

export const upload = multer({ storage });
