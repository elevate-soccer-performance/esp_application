const errorHandler = (err, req, res, next) => {
  // Log to Console
  console.log(err.stack.red);
  const statusCode = err.statusCode || 500;
  res.status(statusCode);
  res.json({
    message: err.message || "Server Error",
    success: false,
    title: err.title,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
