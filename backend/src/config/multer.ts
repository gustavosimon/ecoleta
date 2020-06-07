import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "assets"),
    filename(request, file, callback) {
      const hase = crypto.randomBytes(6).toString("hex");
      const fileName = `${hase}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
};
