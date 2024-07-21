import crypto from "crypto";
import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-models/User.js";
import sendTokenResponse from "./sendTokenResponse.js";

const ResetPassword = asyncHandler(async (req, res, next) => {
  // Get Token from URL
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorResponse(`Reset Token Not Valid`, 400, "Auth Not Valid")
    );
  }

  // Set New Password
  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  // Get Signed Token
  sendTokenResponse(user, 200, res);
});

export default ResetPassword;
