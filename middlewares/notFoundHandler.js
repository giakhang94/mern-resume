const NotFoundHandlerMiddleware = (error, req, res, next) => {
  res.status(404).send("Router does not exist");
};
export default NotFoundHandlerMiddleware;
