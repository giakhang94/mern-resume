import multer from "multer";
import { uuid } from "uuidv4";
import BadRequestError from "../errors/badRequest.js";
const MIME_TYPE_MAP = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};
const uploadFile = multer({
  limit: 5000000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuid() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      throw new BadRequestError("image file only");
    }
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = isValid ? null : new Error("invalid mime type");
    cb(error, isValid);
  },
});
export default uploadFile;
