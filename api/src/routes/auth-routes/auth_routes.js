import express from "express";
// Import Routes from Controller
import {
  loginUser,
  getMe,
  forgotPassword,
  resetPassword,
  changePassword,
  oTPLogin,
  oTPCheck,
} from "./controller/auth_controller.js";

// Initialize Router
const router = express.Router();

// Import Middleware

// Public -> Login user
router.route("/").post(loginUser);

// Public -> OTP Login User

// Token -> Check OTP for User

// Public -> Forgot Password

// Public -> Reset Password

// Private -> Get Logged In User

// Private -> Change Password

export default router;
