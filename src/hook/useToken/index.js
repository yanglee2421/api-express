const { key } = require("@/hook/useSecretKey")();
const jwt = require("jsonwebtoken");
module.exports = () => {
  return (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "string") {
      res.status(401).end("token error");
      return;
    }
    const token = bearerHeader.split(" ").at(1) || "";
    jwt.verify(token, key, { algorithm: "HS256" }, (err, data) => {
      if (err) {
        res.status(401).end("token error");
        return;
      }
      next();
    });
  };
};
