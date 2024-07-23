import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const UpdateAthlete = asyncHandler(async (req, res, next) => {
  // Update Athlete
  const athlete = await AthleteProfile.findOneAndUpdate(
    { _id: req.params.ahthleteId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!athlete) {
    return next(
      new ErrorResponse(
        `There were no found athlete profiles with the Athlete ID ${req.params.athleteId}`,
        404,
        "Not Found Athlete"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: athlete,
  });
});

export default UpdateAthlete;
