import JWT from "jsonwebtoken";

const decodeToken = (token: string | null) =>
  typeof token === "string" ? JWT.decode(token) : null;
export { decodeToken };
