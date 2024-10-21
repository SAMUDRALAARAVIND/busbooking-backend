const CustomError = require("../utils/createCustomError");

const Error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // handling error in development
  if (process.env.NODE_ENV === "development") {
    handleDevelopmentError(err, res);
  }

  // handling error in production
  if (process.env.NODE_ENV === "production") {
    const errCopy = { ...err };
    errCopy.message = err.message;
    handleProductionError(errCopy, res);
  }
};

const handleDevelopmentError = (err, res) => {
  console.log(err);
  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stackTrace: err.stack,
  });
};

const handleProductionError = (errCopy, res) => {
  // Wrong Mongoose Object ID Error
  if (errCopy.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    errCopy = new CustomError(message, 404);
  }

  // Handling Mongoose Validation Error
  if (errCopy.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    errCopy = new CustomError(message, 400);
  }

  // Handle mongoose duplicate key errCopy
  if (errCopy.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered.`;
    errCopy = new ErrorHandler(message, 400);
  }
  console.log(errCopy);
  res.status(errCopy.statusCode).json({
    success: false,
    message: errCopy.message,
  });
};

module.exports = Error;
