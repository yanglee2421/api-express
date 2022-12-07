const { key } = require("@/hook/useSecretKey")();
const jwt = require("jsonwebtoken");

module.exports = () => {
  return (
    (req, res, next) => {
      const bearerHeader = req.headers["authorization"];
      if (typeof bearerHeader !== "undefined") {
        req.token = bearerHeader.split(" ").at(1);
        next();
        return;
      }
      res.setHeader("status", 401).end();
    },
    (req, res, next) => {
      jwt.verify(req.token, key, { algorithm: "HS256" }, (err, data) => {
        if (err) {
          res.setHeader("status", 401).end();
          return;
        }
        next();
      });
    }
  );
};
