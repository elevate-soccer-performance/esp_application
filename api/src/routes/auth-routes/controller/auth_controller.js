import LoginUser from "../functions/login_user.js";
import GetMe from "../functions/get_me.js";
import ForgotPassword from "../functions/forgot_password.js";
import ChangePassword from "../functions/change_password.js";
import ResetPassword from "../functions/reset_password.js";

// @path -> /api/v1/auth/
// @type -> Post Request
// @dec -> Login User
export const loginUser = (req, res, next) => {
  LoginUser(req, res, next);
};

// @path -> /api/v1/auth/get_me
// @type -> GET Request
// @dec -> Get Logged In User
export const getMe = (req, res, next) => {
  GetMe(req, res, next);
};

// @path -> /api/v1/auth/forgot_password
// @type -> POST Request
// @dec -> Forgot User Password
export const forgotPassword = (req, res, next) => {
  ForgotPassword(req, res, next);
};

// @path -> /api/v1/auth/reset_password
// @type -> PUT Request
// @dec -> Reset Password
export const resetPassword = (req, res, next) => {
  ResetPassword(req, res, next);
};

// @path -> /api/v1/auth/:userId/change_password
// @type -> PUT Request
// @dec -> Change Password
export const changePassword = (req, res, next) => {
  ChangePassword(req, res, next);
};

// @path -> /api/v1/auth/otp_login
// @type -> POST Request
// @dec -> Login with OTP
export const oTPLogin = (req, res, next) => {};

// @path -> /api/v1/auth/otp_check/:token
// @type -> PUT Request
// @dec -> Check OTP
export const oTPCheck = (req, res, next) => {};
