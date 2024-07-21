import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";

const GetMe = asyncHandler(async (req, res, next) => {
  const user = req.user;
  // Check if User is Active
  if (user.active !== true) {
    return next(
      new ErrorResponse(`Your Account is not active`, 403, "Not Authorized")
    );
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export default GetMe;
