const logger = require('./logger');

exports.catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
};

// eslint-disable-next-line no-unused-vars
exports.catchErrors = (err, req, res, next) => {
  res.status(err.status || 500);
  logger.error(err, 'middleware.catchErrors');
};