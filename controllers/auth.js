const expressJwt = require("express-jwt");

// Check if user has logged in
// : To Protect routes that can be accessed only by logged-in users
exports.requireLogin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  // if token is valid, expressJwt appends to the request object
  // the verified user's id in a key "auth" and moves on to next middleware
  userProperty: "auth",
});
