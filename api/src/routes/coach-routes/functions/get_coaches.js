import asyncHandler from "../../../util/async.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const GetCoaches = asyncHandler(async (req, res, next) => {
  // Get Coaches
  const coaches = await CoachProfile.find();

  res.status(200).json({
    success: true,
    data: coaches,
  });
});

export default GetCoaches;
