const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.authHeader.authorization;
  if (!authHeader) {
    console.log("Authorization header missing");
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded successfully", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Token verification failed", error.message);
    return res.status(401).json({
      status: "error",
      message: "Forbidden, invalid token",
    });
  }
};
