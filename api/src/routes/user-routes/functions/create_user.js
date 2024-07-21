import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-models/User.js";
import sendTokenResponse from "../../auth-routes/functions/sendTokenResponse.js";

const CreateUser = asyncHandler(async (req, res, next) => {
  // Create User
  const user = await User.create(req.body);
  // Check for User
  if (user) {
    // Create Token
    sendTokenResponse(user, 201, res);
  } else {
    return next(
      new ErrorResponse(`There was an Error Creating User`, 400, "User Error")
    );
  }
});

export default CreateUser;
