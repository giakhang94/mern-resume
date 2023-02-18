import fs from "fs";
const ErrorHandlerMiddleware = (error, req, res, next) => {
  const defaultError = {
    statusCode: error.statusCode || 500,
    msg: error.msg || "Something went wrong from error handler",
  };
  if (req.file) {
    fs.unlink(req.file.path, (error) => {
      console.log(error);
    });
  }
  if (error.name === "ValidationError") {
    defaultError.statusCode = 400;
    defaultError.msg = Object.values(error.errors)
      .map((err) => {
        return err.msg;
      })
      .join(",");
  }
  if (error && error.code === 11000) {
    res.status(400).json({
      msg: `${error.keyValue.userName} đã được sử dụng, xin chọn tên khác`,
    });
  }
  res.status(defaultError.statusCode).json({ error, msg: defaultError.msg });
};
export default ErrorHandlerMiddleware;
