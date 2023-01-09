import { RequestHandler } from "express";
import { sign, verify } from "jsonwebtoken";
const SPK = "swz-node";
export function useSign(payload: any) {
  return sign(payload, SPK, { algorithm: "HS256", expiresIn: "7d" });
}
export function useVerify(): RequestHandler {
  return (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    try {
      if (typeof bearerHeader !== "string") throw new Error("没有 token");
      const token = bearerHeader.split(" ").at(1) || "";
      verify(token, SPK, { algorithms: ["HS256"] }, (err: any, data: any) => {
        if (err) throw new Error("token 无效");
        next();
      });
    } catch {
      res.status(403).end("token error");
    }
  };
}
