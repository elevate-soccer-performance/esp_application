import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import sendTokenResponse from "./sendTokenResponse.js";
import User from "../../../models/user-model/User.js";

const LoginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(
      new ErrorResponse(
        `Please enter an email and password`,
        400,
        "Missing Info"
      )
    );
  }

  const user = await User.findOne({
    email: email,
  }).select("+password");

  if (!user) {
    return next(
      new ErrorResponse(`Incorrect Password or Email`, 401, "Login Fail")
    );
  }

  //   Match Password
  const matched = await user.matchPassword(password);

  if (matched) {
    // Check User is Active
    if (user.active !== true) {
      return next(
        new ErrorResponse(`Your Account is not Active`, 403, "Locked Account")
      );
    }
    // Get Signed Token
    sendTokenResponse(user, 200, res);
  } else {
    return next(new ErrorResponse(`Failed to Login`, 401, "Login Error"));
  }
});

export default LoginUser;
