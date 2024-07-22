import asyncHandler from "../../../util/async.js";
import User from "../../../models/user-model/User.js";

const DeleteUser = asyncHandler(async (req, res, next) => {
  // Find User & Remove User
  await User.deleteOne({ _id: req.params.userId });

  res.status(200).json({
    success: true,
    data: {},
  });
});

export default DeleteUser;
