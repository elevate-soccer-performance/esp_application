import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-model/User.js";
import sendEmail from "../../../util/send_email.js";

const ForgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(
      new ErrorResponse(
        `There are no accounts with this email`,
        404,
        "Not Found"
      )
    );
  }

  // Get Reset Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //   Create Reset URL
  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/auth/reset_password/${resetToken}`;

  const resetLink = `${req.protocol}://127.0.0.1:3000/reest_password/${resetToken}`;

  const message = `You are receiving this email because you have requested the rest of a password. Please visit the following site: \n\n ${resetLink} \n\n Please make a PUT request to: \n\n ${resetUrl}`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Password Reset",
      message,
    });

    res.status(200).json({
      success: true,
      data: "Email Sent",
    });
  } catch (err) {
    console.log(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorResponse(`Reset Password Fail`, 500, "Server Error"));
  }
});

export default ForgotPassword;
