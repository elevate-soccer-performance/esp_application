import asyncHandler from "../../../util/async.js";
import User from "../../../models/user-models/User.js";

const GetUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    data: users,
  });
});

export default GetUsers;
