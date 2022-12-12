const jwt = require("jsonwebtoken");
const SPK = "swz-node";
const sign = (payload) =>
  jwt.sign(payload, SPK, {
    algorithm: "HS256",
  });
const verify = () => (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "string") {
    res.status(401).end("token error");
    return;
  }
  const token = bearerHeader.split(" ").at(1) || "";
  jwt.verify(token, SPK, { algorithm: "HS256" }, (err, data) => {
    if (err) {
      res.status(401).end("token error");
      return;
    }
    next();
  });
};
module.exports = { sign, verify };
