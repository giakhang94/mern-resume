import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import connect from "./db/connect.js";
import dotenv from "dotenv";
import path from "path";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import ErrorHandlerMiddleware from "./middlewares/ErrorHandlerMiddleware.js";
import NotFoundHandlerMiddleware from "./middlewares/notFoundHandler.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.disable("etag");
dotenv.config();
const port = process.env.PORT || 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use("/uploads/images", express.static(path.join("uploads", "images")));
//fix cors error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
//error handler
app.use(ErrorHandlerMiddleware);
app.use(NotFoundHandlerMiddleware);
//start server
const start = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
