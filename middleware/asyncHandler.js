const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch((next) => {
    console.log("next ###", next);
  });

module.exports = asyncHandler;
