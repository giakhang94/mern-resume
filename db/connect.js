import mongoose from "mongoose";
mongoose.set("strictQuery", false);
const connect = (url) => {
  return mongoose.connect(url);
};

export default connect;
