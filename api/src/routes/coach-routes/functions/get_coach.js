import asyncHandler from "../../../util/async.js";
import ErrorResponse from "../../../util/error_response.js";
import CoachProfile from "../../../models/client-models/CoachProfile.js";

const GetCoach = asyncHandler(async (req, res, next) => {
  // Get Coach
  const coach = await CoachProfile.findOne({ _id: req.params.coachId });

  if (!coach) {
    return next(
      new ErrorResponse(
        `There were no Trainers with the Coach ID ${req.params.coachId}`,
        404,
        "Coach Not Found"
      )
    );
  }

  res.status(200).json({
    success: true,
    data: coach,
  });
});

export default GetCoach;
