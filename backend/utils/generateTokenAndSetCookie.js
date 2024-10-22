import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "1d"});

  res.cookie("authToken", token, {
    httpOnly: true, // prevents XSS attacks
    secure: process.env.NODE_ENV !== "production",
    sameSite: "strict", // prevents CSRF attacks
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
  });
}