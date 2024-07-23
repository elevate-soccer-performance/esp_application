import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import AthleteProfile from "../../../models/client-models/AthleteProfile.js";

const DeleteAthlete = asyncHandler(async (req, res, next) => {
  // Find Athlete & Delete
  const athlete = await AthleteProfile.findOne({ _id: req.params.athleteId });

  if (!athlete) {
    return next(
      new ErrorResponse(
        `There were no Athletes found with the ID ${req.params.athleteId}`,
        404,
        "Not Found Athlete"
      )
    );
  }

  await athlete.deleteOne();

  res.status(200).json({
    success: true,
    data: {},
  });
});

export default DeleteAthlete;
