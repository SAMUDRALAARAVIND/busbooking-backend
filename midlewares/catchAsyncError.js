function catchAsyncError(fn) {
  // this function will replace the controller function
  return (req, res, next) => {
    // calling controller funtion inside resolve if it give error
    // then Promise object reject the promise with the eror and catch will call the next funtion with that error
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = catchAsyncError;
