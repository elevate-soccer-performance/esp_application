import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-models/User.js";
import bcrypt from "bcryptjs";

const ChangePassword = asyncHandler(async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = await User.findOneAndUpdate(
    { _id: req.user._id },
    {
      password: password,
    },
    {
      new: true,
    }
  );

  if (!user) {
    return next(
      new ErrorResponse(
        `There were no users found with the ID ${req.user._id}`,
        404,
        "Not Found User"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

export default ChangePassword;
