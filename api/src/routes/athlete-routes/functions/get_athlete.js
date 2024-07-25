import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const GetAthlete = asyncHandler(async (req, res, next) => {
  // Get Athlete
  const athlete = await AthleteProfile.findOne({ _id: req.params.athleteId });
  // Add Virtual Models Here

  if (!athlete) {
    return next(
      new ErrorResponse(
        `There were no Athletes with the Athlete ID ${req.params.athleteId}`,
        404,
        "Athlete Not Found"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: athlete,
  });
});

export default GetAthlete;
