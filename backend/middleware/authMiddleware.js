const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  // Implement token validation here
  next();
};

module.exports = { protect };
