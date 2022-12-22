import { sign, verify } from "jsonwebtoken";
const SPK = "swz-node";
export const useSign = (payload: any) =>
  sign(payload, SPK, {
    algorithm: "HS256",
  });
export const useVerify = () => (req: any, res: any, next: () => void) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "string") {
    res.status(401).end("token error");
    return;
  }
  const token = bearerHeader.split(" ").at(1) || "";
  verify(token, SPK, { algorithms: ["HS256"] }, (err: any, data: any) => {
    if (err) {
      res.status(401).end("token error");
      return;
    }
    next();
  });
};
