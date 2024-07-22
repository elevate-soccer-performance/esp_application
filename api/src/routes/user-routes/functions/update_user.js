import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-model/User.js";

const UpdateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!user) {
    return next(
      new ErrorResponse(
        `There were no Found Users with ID ${req.params.userId}`,
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

export default UpdateUser;
