import asyncHandler from "../../../util/async.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const GetAthletes = asyncHandler(async (req, res, next) => {
  // Get Athletes
  const athletes = await AthleteProfile.find();

  res.status(200).json({
    success: true,
    data: athletes,
  });
});

export default GetAthletes;
