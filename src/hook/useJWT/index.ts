import { sign as Sign, verify as Verify } from "jsonwebtoken";
const SPK = "swz-node";
export const sign = (payload: any) =>
  Sign(payload, SPK, {
    algorithm: "HS256",
  });
export const verify = () => (req: any, res: any, next: () => void) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "string") {
    res.status(401).end("token error");
    return;
  }
  const token = bearerHeader.split(" ").at(1) || "";
  Verify(token, SPK, { algorithms: ["HS256"] }, (err: any, data: any) => {
    if (err) {
      res.status(401).end("token error");
      return;
    }
    next();
  });
};
