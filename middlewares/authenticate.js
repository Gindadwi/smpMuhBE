const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("Authorization header missing");
    return res.status(401).json({ message: "Unauthorized, no token provided" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token decoded successfully:", decoded);
    req.user = decoded; // Simpan data user dari token
    req.admin = decoded; // Simpan data admin dari token
    next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return res.status(403).json({ message: "Forbidden, invalid token" });
  }
};
