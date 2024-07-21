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
router.route("/forgot_password").post(forgotPassword);

// Public -> Reset Password
router.route("/reset_password/:resetToken").put(resetPassword);

// Private -> Get Logged In User
router.route("/get_me").get(protect, getMe);

// Private -> Change Password
router.route("/change_password").put(protect, changePassword);

export default router;
