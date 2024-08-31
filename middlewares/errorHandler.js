const notFound = (req, res, next) => {
  res.status(404);
  const err = new Error("Not Found" + req.originalUrl);
  next(err);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (process.env.NODE_ENV === "development") {
    res.status(statusCode).json({
      success: false,
      message,
      error: err,
      stackTrace: err.stack,
    });
  }

  if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") {
      statusCode = 404;
      message = `Resource not found for ${err.path} ${err.value}`;
    }
    res.status(statusCode).json({
      success: false,
      message,
    });
  }
};

module.exports = { notFound, errorHandler };
