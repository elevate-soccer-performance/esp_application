import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import User from "../../../models/user-model/User.js";

const GetUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    return next(
      new ErrorResponse(
        `There were no Found Users with the ID ${req.params.userId}`,
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

export default GetUser;
